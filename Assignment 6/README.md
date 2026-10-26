# Assignment 6: Jenkins Pipeline with Automated Testing

## Aim

To integrate automated testing into a Jenkins pipeline so that the Student Task Manager application is built and tested automatically, with failed tests causing the pipeline to fail.

## Objectives

- Configure a Jenkins Pipeline using a `Jenkinsfile`.
- Retrieve application source code from GitHub.
- Install application dependencies using npm.
- Automate the application build process.
- Execute automated tests through Jenkins.
- Verify successful and failed pipeline executions.

## Tools Used

- Jenkins
- Git and GitHub
- Node.js
- npm
- Visual Studio Code

## Procedure

1. Prepared the Student Task Manager application for automated testing.
2. Created a `test.js` file to validate the required application files.
3. Configured `package.json` scripts for starting, building, and testing the application.
4. Created a `Jenkinsfile` defining the pipeline stages.
5. Configured a Jenkins Pipeline job to retrieve the project from GitHub.
6. Added stages for source code checkout, dependency installation, build, and automated testing.
7. Committed and pushed the pipeline configuration and test files to GitHub.
8. Executed the Jenkins pipeline and inspected the console output.
9. Verified the successful build and automated test results.
10. Tested failure handling by temporarily removing a required file.
11. Restored the missing file and reran the pipeline to verify successful execution.

## Commands Used

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Application

```bash
npm run build
```

### 3. Run Automated Tests

```bash
npm test
```

### 4. Commit and Push Changes to GitHub

```bash
git add .
git commit -m "Add Jenkins pipeline and automated tests"
git push origin main
```

## Pipeline Stages

### 1. Checkout

Retrieves the application source code from the configured GitHub repository.

### 2. Install Dependencies

Executes `npm install` to install the required project dependencies.

### 3. Build

Executes `npm run build` to perform the configured build process.

### 4. Automated Testing

Executes `npm test` to validate the required application files and test conditions. If the tests fail, the pipeline should report a failure.

## Project Files

- **`Jenkinsfile`** — Defines the Jenkins pipeline stages and commands.
- **`package.json`** — Contains project metadata and npm scripts.
- **`test.js`** — Contains automated tests for required application files.
- **Application files** — Include the HTML, CSS, and JavaScript files for the Student Task Manager.

## Expected Outcome

The Jenkins pipeline automatically retrieves the application source code, installs dependencies, executes the configured build process, and runs automated tests.

The pipeline reports a successful result when all stages pass. If a required file is missing or a test fails, the pipeline reports a failure. After correcting the issue, the pipeline should execute successfully again.

## Screenshots

Add your own screenshots demonstrating the following:

1. **Jenkins Pipeline Configuration** — Pipeline job and GitHub repository configuration.
2. **Pipeline Files** — `Jenkinsfile` and automated test script in Visual Studio Code.
3. **Pipeline Stage Execution** — Checkout, dependency installation, build, and test stages.
4. **Successful Pipeline Build** — Jenkins showing a successful build.
5. **Failed Pipeline Build** — Jenkins showing a failed build during failure testing.
6. **Successful Build After Fix** — Jenkins showing a successful rerun after the issue is corrected.

## Conclusion

The Jenkins Pipeline automates the build and testing process for the Student Task Manager application. Automated testing helps detect missing files and invalid conditions, while Jenkins provides clear feedback about successful and failed executions.