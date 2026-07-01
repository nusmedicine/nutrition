# Preview the "Health in Medicine" book locally (with working interactive islands).
#
# Default: render a copy OUTSIDE the Dropbox / antivirus-scanned tree, then serve it over
# HTTP. This avoids the intermittent "os error 32 (file in use)" that Windows Defender
# real-time scanning, the Dropbox watcher, and Windows Search cause during an in-place
# render. Serving over HTTP (not file://) is required for the interactive islands to load.
#
# -Live      : run Quarto's own live-reloading preview IN PLACE (auto-reloads on save).
#              Reliable once the repo is excluded from Defender real-time scanning:
#                  Add-MpPreference -ExclusionPath "<this repo>"   (admin PowerShell, once)
# -SkipBuild : skip rebuilding the Svelte components bundle.
# -Port      : HTTP port for the static server (default 8877).
#
# Usage:
#   .\scripts\preview.ps1
#   .\scripts\preview.ps1 -Live
#   .\scripts\preview.ps1 -SkipBuild -Port 9000
#
# The script sets the portable node/quarto PATH itself, so it works even from a terminal
# whose environment predates the toolchain install (e.g. spawned by an older app process).

param(
  [switch]$Live,
  [switch]$SkipBuild,
  [int]$Port = 8877
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot   # scripts\ lives under the repo root

# Portable toolchain: set PATH ourselves so this works regardless of the terminal env.
$env:PATH = "$env:LOCALAPPDATA\node\current;$env:LOCALAPPDATA\quarto\current\bin;" + $env:PATH

if (-not (Get-Command quarto -ErrorAction SilentlyContinue)) {
  throw "quarto not found. Expected at $env:LOCALAPPDATA\quarto\current\bin (check the portable install)."
}

if (-not $SkipBuild) {
  Write-Host '==> Building interactive components bundle...' -ForegroundColor Cyan
  npm --prefix "$repo\components" run build
}

if ($Live) {
  Write-Host '==> Live preview (in place). Ctrl+C to stop.' -ForegroundColor Cyan
  Write-Host "    If this hits 'os error 32', exclude the repo from Defender real-time scan (see HANDOVER)." -ForegroundColor DarkYellow
  Push-Location $repo
  try { quarto preview book } finally { Pop-Location }
  return
}

# Lock-proof path: render a copy outside the synced/scanned tree, then serve it.
$work = Join-Path $env:TEMP 'book-health-preview'
if (Test-Path $work) { Remove-Item -Recurse -Force $work }
Write-Host '==> Copying book out of the synced/scanned tree...' -ForegroundColor Cyan
robocopy "$repo\book" $work /E /XD '.quarto' '_book' /NFL /NDL /NJH /NJS /NC /NS | Out-Null

Write-Host '==> Rendering...' -ForegroundColor Cyan
Push-Location $work
try { quarto render . } finally { Pop-Location }

$site = Join-Path $work '_book'
$url = "http://localhost:$Port/"
Write-Host ''
Write-Host "==> Serving $site" -ForegroundColor Green
Write-Host "    $url  (Ctrl+C to stop)" -ForegroundColor Green
Write-Host ''
Start-Process $url
python -m http.server $Port --directory $site
