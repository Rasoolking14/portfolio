@echo off
setlocal
title Rasool Fredericks Portfolio - Dev Server
cd /d "%~dp0app"

where node >nul 2>nul
if errorlevel 1 (
    echo Node.js was not found. Please install it from https://nodejs.org/ and try again.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing dependencies. This may take a moment...
    call npm install
    if errorlevel 1 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

echo Starting the portfolio dev server...
echo The site will open automatically at http://localhost:5173
echo Press Ctrl+C in this window to stop the server.
echo.
call npm start
pause
