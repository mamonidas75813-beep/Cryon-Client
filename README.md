CRYON CLIENT
CRYON CLIENT is a Windows-focused Minecraft: Java Edition launcher built with Electron. The project source is maintained in this repository under `CRYON-CLIENT/`.
> **Current source version:** 0.10.5 (see `CRYON-CLIENT/package.json`). This is source code, not a prebuilt installer. Releases and build outputs should be published separately after verification.
Features
Minecraft Java launcher with version and mod-loader profiles
Profile-specific game folders and settings
Modrinth content management
Microsoft account integration through EML Lib
Local Minecraft server management
Java runtime selection and compatibility checks
Windows installer and portable build scripts
Feature availability and platform support should be checked against the current source and release notes. Not every feature has been independently verified in a production environment.
Requirements
Windows 10 or Windows 11, 64-bit
Node.js 22 or newer, 64-bit
npm (included with Node.js)
Run from source
Open a terminal in the `CRYON-CLIENT/` directory and run:
```bash
npm install
npm start
```
Build for Windows
On a Windows 10/11 x64 machine, open a terminal in `CRYON-CLIENT/` and run:
```bat
build.bat
```
The build script runs the project's preflight checks, source checks and tests before packaging. Consult the build log and the project's build documentation if a step fails. Do not treat an unsigned local build as a signed public release.
Tests and verification
From `CRYON-CLIENT/`, run:
```bash
npm run check
npm test
```
Passing automated checks does not by itself verify live Microsoft sign-in, online downloads, gameplay, or all Windows runtime behaviour. Those need separate testing on a supported Windows machine.
License
CRYON CLIENT is licensed under the MIT License. See `LICENSE`.
Third-party components
CRYON CLIENT uses third-party software and services, including Electron, electron-builder, EML Lib, and external Minecraft/Modrinth services. Their names and trademarks belong to their respective owners. Third-party components remain subject to their own licenses and terms; the repository's MIT License does not replace those terms.
