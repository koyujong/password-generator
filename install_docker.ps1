# [Docker 및 WSL 자동 설치 스크립트]
# 작성자: AI 어시스턴트

# 1. 관리자 권한 확인 (설치에는 관리자 권한이 필수입니다)
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Warning "⚠️ 관리자 권한이 없습니다!"
    Write-Host "Docker와 WSL을 설치하려면 관리자 권한이 필요합니다." -ForegroundColor Yellow
    Write-Host "이 스크립트를 우클릭하여 'PowerShell에서 실행' 하거나," -ForegroundColor Yellow
    Write-Host "PowerShell을 '관리자 권한으로 실행' 후 스크립트를 실행해주세요." -ForegroundColor Yellow
    Pause
    exit
}

Write-Host "`n🚀 Docker Desktop 설치 프로세스를 시작합니다!`n" -ForegroundColor Green

# 2. WSL(Windows Subsystem for Linux) 설치
# Docker Desktop은 Windows 10/11에서 WSL 2 기반으로 가장 최적화되어 동작합니다.
Write-Host "[1/2] WSL(Windows Subsystem for Linux)을 설치 및 업데이트합니다..." -ForegroundColor Cyan
try {
    # 기본 설치 진행 (이미 설치되어 있다면 업데이트 또는 무시됨)
    wsl --install
    Write-Host "✅ WSL 설치 명령이 성공적으로 전송되었습니다." -ForegroundColor Green
} catch {
    Write-Warning "WSL 설치 중 문제가 발생했습니다: $_"
}

# 3. Docker Desktop 설치 (winget 사용)
# winget은 Windows의 공식 패키지 매니저로 간편하게 소프트웨어를 설치할 수 있습니다.
Write-Host "`n[2/2] Winget을 사용하여 Docker Desktop을 다운로드하고 설치합니다..." -ForegroundColor Cyan
try {
    # 약관에 자동 동의(--accept-package-agreements) 및 조용히 설치(--silent) 옵션 추가
    winget install Docker.DockerDesktop --accept-package-agreements --accept-source-agreements
    Write-Host "✅ Docker Desktop 설치가 완료되었습니다." -ForegroundColor Green
} catch {
    Write-Warning "Docker Desktop 설치 중 문제가 발생했습니다: $_"
}

Write-Host "`n🎉 [모든 설치 과정 완료] 🎉" -ForegroundColor Green
Write-Host "Docker가 완벽하게 적용되도록 컴퓨터를 **[재부팅]** 해주세요." -ForegroundColor Yellow
Write-Host "재부팅 후 'Docker Desktop' 프로그램을 실행하여 초기 설정 및 약관에 동의하시면 바로 사용하실 수 있습니다." -ForegroundColor White
Pause
