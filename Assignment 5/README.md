# Assignment 5: Deployment and Scaling Using Kubernetes

## Aim

To deploy the containerized Student Task Manager web application on Kubernetes using Minikube, configure a NodePort Service, scale application replicas, and verify application availability.

## Objectives

- Understand Kubernetes Deployments, Pods, and Services.
- Start and verify a local Kubernetes cluster using Minikube.
- Load and deploy a Dockerized application to Kubernetes.
- Expose the application using a NodePort Service.
- Scale application replicas and verify the changes.
- Demonstrate Kubernetes self-healing by deleting a Pod.
- Verify application status and inspect Pod logs.

## Tools and Technologies

- Docker Desktop
- Docker
- Kubernetes
- Minikube
- kubectl
- Visual Studio Code
- Web Browser

## Procedure

1. Verified the Docker image of the Student Task Manager application.
2. Started Minikube and verified the cluster status.
3. Loaded the Docker image into the Minikube cluster.
4. Created a Kubernetes Deployment with two initial replicas.
5. Applied the Deployment configuration and verified the running Pods.
6. Created a NodePort Service to expose the application.
7. Accessed the application through the Minikube Service.
8. Scaled the Deployment from two to four replicas.
9. Deleted a Pod to demonstrate Kubernetes self-healing.
10. Verified that the deleted Pod was recreated.
11. Inspected application Pod logs.
12. Stopped Minikube after completing the deployment and verification.

## Commands Used

### 1. Verify Docker Images

```bash
docker images
```

### 2. Start and Verify Minikube

```bash
minikube start
minikube status
```

### 3. Verify the Kubernetes Cluster

```bash
kubectl cluster-info
kubectl get nodes
```

### 4. Load the Docker Image into Minikube

```bash
minikube image load task-manager:1.0
minikube image ls
```

### 5. Deploy the Application

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
```

### 6. Expose the Application

```bash
kubectl apply -f service.yaml
kubectl get services
```

### 7. Access the Application

```bash
minikube service task-manager-service
```

To retrieve the Service URL:

```bash
minikube service task-manager-service --url
```

### 8. Scale the Deployment to Four Replicas

```bash
kubectl scale deployment task-manager-deployment --replicas=4
kubectl get pods
```

### 9. Demonstrate Kubernetes Self-Healing

First, list the Pods:

```bash
kubectl get pods
```

Delete one Pod by replacing `<pod-name>` with an actual Pod name:

```bash
kubectl delete pod <pod-name>
```

Verify that Kubernetes creates a replacement Pod:

```bash
kubectl get pods
```

### 10. Inspect Application Logs

Replace `<pod-name>` with the name of an available application Pod:

```bash
kubectl logs <pod-name>
```

### 11. Stop Minikube

```bash
minikube stop
```

## Kubernetes Configuration Files

### `deployment.yaml`

Defines the Kubernetes Deployment, including the application image, replica count, container port, and Pod configuration.

### `service.yaml`

Defines the NodePort Service that exposes the application and routes traffic to the application Pods.

## Expected Outcome

The Student Task Manager application is successfully deployed on Kubernetes using Minikube. The application is exposed through a NodePort Service, the Deployment is scaled to four replicas, and Kubernetes self-healing is demonstrated by deleting a Pod and verifying its automatic recreation.

## Screenshots

Add your own screenshots as evidence of the following operations:

1. **Minikube Cluster Status:** Minikube status and Kubernetes nodes.
2. **Kubernetes Configuration Files:** Contents of `deployment.yaml` and `service.yaml`.
3. **Running Application Pods:** Deployment details and running Pods.
4. **NodePort Service:** Service details and the application running in a browser.
5. **Scaling:** Four application replicas running successfully.
6. **Self-Healing:** Pod deletion followed by automatic Pod recreation.
7. **Application Logs:** Output of the `kubectl logs` command.

## Conclusion

The Student Task Manager application is deployed and exposed using Kubernetes and Minikube. Deployment scaling, Service access, Pod management, and Kubernetes self-healing are verified through the specified commands and screenshots.