# Assignment 4: Dockerization of the Student Task Manager

## Aim
To package the Student Task Manager Web Application into a Docker container to support consistent execution across different environments.

## Objectives
- Understand the concepts of Docker images and containers.
- Define the application environment using a Dockerfile.
- Build a Docker image for the project.
- Launch the application inside a container.
- Practice common container management operations.
- Confirm that the application is accessible through a web browser.

## Tools and Technologies
- **Docker** – Builds and runs application containers.
- **Docker Desktop** – Provides a local Docker environment.
- **Node.js** – JavaScript runtime for the application.
- **npm** – Manages project dependencies and scripts.
- **Visual Studio Code** – Used to edit project files.

## Project Overview
The Student Task Manager is a web application for organizing student tasks. Docker is used to package the application and its runtime requirements into an image that can be used to create containers.

## Implementation Procedure
1. Check that Docker is installed and available.
2. Prepare a Dockerfile using an appropriate Node.js base image.
3. Set the working directory and copy the application files.
4. Configure dependency installation and the application startup command.
5. Specify the application port and create a `.dockerignore` file.
6. Build the image with the tag `task-manager:1.0`.
7. Start a container and map host port `3000` to container port `3000`.
8. Inspect the running container and its logs.
9. Practice stopping, restarting, and removing the container.
10. Open the application in a browser and verify its accessibility.

## Docker Configuration

### Dockerfile
The Dockerfile defines the environment and instructions needed to build the application image.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

**Note:** This configuration assumes the project contains a suitable `package.json` with a `start` script and an application that listens on port `3000`. Confirm these details before building the image.

### .dockerignore
The `.dockerignore` file prevents unnecessary files from being included in the Docker build context.

```text
node_modules
.git
.gitignore
README.md
```

## Docker Commands

### 1. Verify Docker
```bash
docker --version
docker info
```

### 2. Build the Image
```bash
docker build -t task-manager:1.0 .
```

### 3. List Available Images
```bash
docker images
```

### 4. Start the Container
```bash
docker run -d -p 3000:3000 --name task-manager-container task-manager:1.0
```

### 5. Inspect the Container
```bash
docker ps
docker logs task-manager-container
```

### 6. Stop and Restart the Container
```bash
docker stop task-manager-container
docker start task-manager-container
```

### 7. Remove the Container
```bash
docker stop task-manager-container
docker rm task-manager-container
```

### 8. Check All Containers
```bash
docker ps -a
```

## Application Verification
After starting the container, open the following address in a browser:

`http://localhost:3000`

Confirm that the application loads correctly and that its main features are accessible.

## Expected Outcome
The application should be packaged into a Docker image and run in a container. Image details, container status, logs, and browser output can be used to verify the result.

## Evidence
Keep screenshots of the Docker installation, configuration files, image build, image listing, container status, application interface, logs, and lifecycle operations in the `Assignment 4` folder.

## Conclusion
This assignment demonstrates how Docker can package an application and its runtime requirements into an image, run it in a container, and support basic container lifecycle management.

*Document the operations you actually performed and retain screenshots of your own results.*