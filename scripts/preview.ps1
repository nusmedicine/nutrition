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
# The script LOCATES node/quarto itself (searching the portable-toolchain locations, incl.
# the Claude packaged-app cache) and invokes them by full path, so it works even from a
# terminal whose environment or %LOCALAPPDATA% redirection hides them from PATH.

param(
  [switch]$Live,
  [switch]$SkipBuild,
  [int]$Port = 8877
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot   # scripts\ lives under the repo root

function Resolve-ToolDir([string[]]$patterns, [string]$exe) {
  foreach ($pat in $patterns) {
    foreach ($hit in @(Get-Item -Path $pat -ErrorAction SilentlyContinue)) {
      if (Test-Path (Join-Path $hit.FullName $exe)) { return $hit.FullName }
    }
  }
  return $null
}

$local = Join-Path $env:USERPROFILE 'AppData\Local'   # real user LocalAppData (not redirected)

$nodeDir = Resolve-ToolDir @(
  (Join-Path $local 'node\current'),
  (Join-Path $local 'Packages\Claude_*\LocalCache\Local\node\current'),
  "$env:LOCALAPPDATA\node\current"
) 'npm.cmd'

$quartoDir = Resolve-ToolDir @(
  (Join-Path $local 'quarto\current\bin'),
  (Join-Path $local 'Programs\Quarto\bin'),
  (Join-Path $local 'Packages\Claude_*\LocalCache\Local\quarto\current\bin'),
  "$env:LOCALAPPDATA\quarto\current\bin"
) 'quarto.exe'

if (-not $nodeDir)   { throw "Could not find node/npm (looked under $local\node\current and the Claude package cache)." }
if (-not $quartoDir) { throw "Could not find quarto (looked under $local\quarto\current\bin and Programs\Quarto\bin)." }

$env:PATH = "$nodeDir;$quartoDir;" + $env:PATH
$npm    = Join-Path $nodeDir 'npm.cmd'
$quarto = Join-Path $quartoDir 'quarto.exe'
Write-Host "node/npm: $nodeDir" -ForegroundColor DarkGray
Write-Host "quarto:   $quartoDir" -ForegroundColor DarkGray

if (-not $SkipBuild) {
  Write-Host '==> Building interactive components bundle...' -ForegroundColor Cyan
  & $npm --prefix "$repo\components" run build
}

if ($Live) {
  Write-Host '==> Live preview (in place). Ctrl+C to stop.' -ForegroundColor Cyan
  Write-Host "    If this hits 'os error 32', exclude the repo from Defender real-time scan (see HANDOVER)." -ForegroundColor DarkYellow
  Push-Location $repo
  try { & $quarto preview book } finally { Pop-Location }
  return
}

# Lock-proof path: render a copy outside the synced/scanned tree, then serve it.
$work = Join-Path $env:TEMP 'book-health-preview'
if (Test-Path $work) { Remove-Item -Recurse -Force $work }
Write-Host '==> Copying book out of the synced/scanned tree...' -ForegroundColor Cyan
robocopy "$repo\book" $work /E /XD '.quarto' '_book' /NFL /NDL /NJH /NJS /NC /NS | Out-Null

Write-Host '==> Rendering...' -ForegroundColor Cyan
Push-Location $work
try { & $quarto render . } finally { Pop-Location }

$site = Join-Path $work '_book'
$url = "http://localhost:$Port/"
Write-Host ''
Write-Host "==> Serving $site" -ForegroundColor Green
Write-Host "    $url  (Ctrl+C to stop)" -ForegroundColor Green
Write-Host ''
Start-Process $url

# Prefer Python's static server; fall back to a tiny Node one if Python is absent.
$py = Get-Command python -ErrorAction SilentlyContinue
if (-not $py) { $py = Get-Command py -ErrorAction SilentlyContinue }
if ($py) {
  & $py.Source -m http.server $Port --directory $site
} else {
  Write-Host 'python not found; serving with Node instead.' -ForegroundColor DarkYellow
  $node = Join-Path $nodeDir 'node.exe'
  $server = "const http=require('http'),fs=require('fs'),p=require('path'),root=process.argv[1],port=+process.argv[2];" +
    "const T={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.yml':'text/yaml','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.sdf':'text/plain','.woff2':'font/woff2'};" +
    "http.createServer((q,s)=>{let f=p.join(root,decodeURIComponent(q.url.split('?')[0]));if(f.endsWith(p.sep))f=p.join(f,'index.html');try{if(fs.statSync(f).isDirectory())f=p.join(f,'index.html')}catch(e){}" +
    "fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end('not found')}else{s.writeHead(200,{'Content-Type':T[p.extname(f).toLowerCase()]||'application/octet-stream'});s.end(d)}})}).listen(port,()=>console.log('serving on '+port));"
  & $node -e $server $site $Port
}
