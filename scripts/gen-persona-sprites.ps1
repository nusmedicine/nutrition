<#
Regenerate patient-portrait sprite sets for the case player (visual-novel mode).

Source : DiceBear "Avataaars" (CC BY 4.0 - a remix of Avataaars by Pablo Stanley).
Emotions: the case player's standard set - neutral, concerned, relieved, skeptical, surprised.
Model  : each patient is a FIXED appearance (seed + look params); only the expression
         (eyes / eyebrows / mouth) changes per emotion, so all five are the same person.

Run:  powershell -ExecutionPolicy Bypass -File scripts\gen-persona-sprites.ps1
Writes: book/figures/personas/<id>/<emotion>.svg

To add or retune a patient, edit $personas below and re-run. The engine is asset-agnostic,
so nothing in the case YAML needs to change.
#>
$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$root = Join-Path $repo 'book\figures\personas'
$api  = 'https://api.dicebear.com/9.x/avataaars/svg'
$ua   = 'HealthInMedicine-textbook/1.0 (educational)'

# Standard emotion set -> Avataaars expression (eyes / eyebrows / mouth).
$emotions = [ordered]@{
  neutral   = 'eyes=default&eyebrows=default&mouth=serious'
  concerned = 'eyes=default&eyebrows=sadConcerned&mouth=concerned'
  relieved  = 'eyes=happy&eyebrows=default&mouth=smile'
  skeptical = 'eyes=squint&eyebrows=upDown&mouth=serious'
  surprised = 'eyes=surprised&eyebrows=raisedExcited&mouth=screamOpen'
}

# Per-patient fixed appearance (everything except the expression). Tune here.
$personas = @(
  @{ id = 'mr-lim';  look = 'seed=lim&top=shortFlat&facialHair=beardMedium&facialHairProbability=100&skinColor=d08b5b&hairColor=4a312c' }                                                         # 41, male, taxi driver
  @{ id = 'mr-tan';  look = 'seed=tan-swe&top=shortRound&facialHair=beardLight&facialHairProbability=100&accessories=prescription02&accessoriesProbability=100&skinColor=edb98a&hairColor=2c1b18' } # 38, male, software engineer
  @{ id = 'aisha';   look = 'seed=aisha-poly&top=straight02&facialHairProbability=0&accessoriesProbability=0&skinColor=d08b5b&hairColor=2c1b18' }                                                   # 24, female, new office job
  @{ id = 'mdm-tan'; look = 'seed=mdm-tan-teacher&top=bob&facialHairProbability=0&accessories=prescription01&accessoriesProbability=100&skinColor=edb98a&hairColor=4a312c' }                        # 52, female, teacher
)

foreach ($p in $personas) {
  $dir = Join-Path $root $p.id
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  Get-ChildItem $dir -Filter *.svg -ErrorAction SilentlyContinue | Remove-Item -Force
  foreach ($e in $emotions.Keys) {
    $url = "$api" + "?" + $p.look + "&" + $emotions[$e]
    Invoke-WebRequest -Uri $url -OutFile (Join-Path $dir "$e.svg") -UseBasicParsing -TimeoutSec 40 -UserAgent $ua
  }
  Write-Host ("{0}: {1} sprites" -f $p.id, $emotions.Count)
}
Write-Host "done."
