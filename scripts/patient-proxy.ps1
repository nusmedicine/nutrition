#requires -version 5.1
<#
  Run the simulated-patient proxy locally (NO Docker needed for dev).

  Self-locates node the same way preview.ps1 does, so it works even in a terminal
  where `node` isn't on PATH (the portable install lives under %LOCALAPPDATA%\node).

  First time:  copy patient-proxy\.env.example -> patient-proxy\.env and fill in
               QWEN_BASE_URL / QWEN_API_KEY / QWEN_MODEL. For local dev leave
               ALLOW_ORIGIN blank (= allow any origin).

  Usage:       .\scripts\patient-proxy.ps1
#>

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot   # scripts\ lives under the repo root
$proxyDir = Join-Path $repo 'patient-proxy'

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
) 'node.exe'
if (-not $nodeDir) { throw "Could not find node (looked under $local\node\current and the Claude package cache)." }
$node = Join-Path $nodeDir 'node.exe'

$envFile = Join-Path $proxyDir '.env'
if (-not (Test-Path $envFile)) {
  throw "Missing patient-proxy\.env. Copy patient-proxy\.env.example to patient-proxy\.env and fill in QWEN_BASE_URL / QWEN_API_KEY / QWEN_MODEL (leave ALLOW_ORIGIN blank for local)."
}

Write-Host "node:  $node" -ForegroundColor DarkGray
Write-Host "proxy: $proxyDir (env: .env)" -ForegroundColor DarkGray
Write-Host "Tip: open a Cases page with  ?patient-llm=http://localhost:8787  to enable the chat." -ForegroundColor DarkGray

Push-Location $proxyDir
try {
  & $node --env-file=.env server.mjs
} finally {
  Pop-Location
}
