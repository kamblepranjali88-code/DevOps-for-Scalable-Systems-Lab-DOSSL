# Assignment 3: Jenkins-Based Build Automation

## Aim
To automate the build process of the Student Task Manager Web Application using Jenkins and a GitHub-hosted source code repository.

## Objectives
- Understand the role of Jenkins in continuous integration.
- Connect a Jenkins job to a GitHub repository.
- Configure the application build process.
- Install project dependencies using npm.
- Execute build commands through Jenkins.
- Inspect build logs and verify the execution result.

## Tools and Technologies
- **Jenkins** – Automates the build workflow.
- **Git and GitHub** – Manage and host the project source code.
- **Node.js** – Provides the JavaScript runtime environment.
- **npm** – Manages project dependencies and scripts.
- **Visual Studio Code** – Used to edit and organize project files.

## Project Overview
The Student Task Manager is a web application developed using HTML, CSS, and JavaScript. In this assignment, Jenkins is used to automate the configured build process by retrieving the project source code and executing the required build commands.

## Implementation Procedure
1. Prepare the application files and build configuration.
2. Create or configure the `build.js` script for the project.
3. Define the required build script in `package.json`.
4. Commit and push the relevant project files to GitHub.
5. Create a Jenkins Freestyle project for the application.
6. Configure the source repository and the appropriate branch.
7. Add build steps to install dependencies and execute the build script.
8. Run the Jenkins job and inspect its console output.
9. Check the final build status to determine whether the configured process completed successfully.

## Commands Used

### Install Dependencies
```bash
npm install
```

### Run the Build
```bash
npm run build
```

### Save and Publish Configuration Changes
```bash
git add .
git commit -m "Configure automated application build"
git push origin main
```

## Expected Outcome
The project build commands should execute through Jenkins, with the job status and console logs providing evidence of the build result.

## Project Files
- `README.md` – Documents the assignment and its procedure.
- `build.js` – Contains the project's build script.
- `Freestyle project.png` – Evidence of Jenkins Freestyle project configuration.
- `Manual build.png` – Evidence of manually triggering the build.
- `Successful build.png` – Evidence of a successful build, if achieved.

## Evidence
Include screenshots of the Jenkins job configuration, source repository settings, build execution, console output, and final build status. Use screenshots from your own Jenkins environment.

## Conclusion
This assignment demonstrates how Jenkins can automate a project's configured build steps. Integrating Jenkins with GitHub helps establish a repeatable build workflow and makes it easier to identify build errors through console logs.

**Note:** Record only the steps you actually completed. A successful build should be reported only when confirmed by the Jenkins job result.