# Assignment 7: Monitoring with Prometheus

## Aim

To configure Prometheus to collect and monitor the Student Task Manager application's performance metrics in real time.

## Objectives

- Configure application metrics using Prometheus.
- Expose application metrics through the `/metrics` endpoint.
- Deploy Prometheus on Kubernetes using Minikube.
- Configure Prometheus to scrape application metrics.
- Verify application availability through Prometheus Targets.
- Execute PromQL queries to monitor HTTP requests and memory usage.

## Tools Used

- Node.js and npm
- Prometheus
- prom-client
- Docker
- Kubernetes
- Minikube
- kubectl
- Git and GitHub

## Procedure

1. Installed the Prometheus client library using `npm install prom-client`.
2. Modified `app.js` to enable default Node.js metrics and create an HTTP request counter.
3. Added middleware to count HTTP requests and exposed metrics through the `/metrics` endpoint.
4. Started the application and verified metrics at `http://localhost:3000/metrics`.
5. Built a new Docker image containing the updated application.
6. Loaded the image into Minikube and updated the Kubernetes Deployment.
7. Created `prometheus.yml` with a scrape interval of five seconds and the application Service as the target.
8. Created a Kubernetes ConfigMap from the Prometheus configuration.
9. Created and deployed the Prometheus Deployment and Service.
10. Accessed Prometheus using `minikube service prometheus-service`.
11. Opened **Status → Targets** and verified that the `task-manager` target was `UP`.
12. Executed PromQL queries to inspect application availability, HTTP requests, request rate, and memory usage.
13. Generated application traffic and observed changes in the collected metrics.

## Commands Used

### 1. Install Dependencies

Install the Prometheus client library and project dependencies:

```bash
npm install prom-client
npm install
```

Start the application:

```bash
npm start
```

### 2. Build and Load the Docker Image

Build the updated application image:

```bash
docker build -t task-manager:2.0 .
```

Load the image into Minikube:

```bash
minikube image load task-manager:2.0
```

Apply the Kubernetes Deployment and verify the Pods:

```bash
kubectl apply -f deployment.yaml
kubectl get pods
```

### 3. Configure and Deploy Prometheus

Create a ConfigMap from the Prometheus configuration:

```bash
kubectl create configmap prometheus-config --from-file=prometheus.yml
```

If the ConfigMap already exists, update it instead:

```bash
kubectl create configmap prometheus-config --from-file=prometheus.yml --dry-run=client -o yaml | kubectl apply -f -
```

Deploy Prometheus:

```bash
kubectl apply -f prometheus-deployment.yaml
kubectl apply -f prometheus-service.yaml
```

Verify the Pods and Services:

```bash
kubectl get pods
kubectl get services
```

Access the Prometheus interface:

```bash
minikube service prometheus-service
```

## PromQL Queries

### 1. Check Application Availability

```promql
up{job="task-manager"}
```

Returns the scrape status of the application target. A value of `1` indicates success.

### 2. View Total HTTP Requests

```promql
task_manager_http_requests_total
```

Displays the total number of HTTP requests recorded by the application counter.

### 3. Calculate HTTP Request Rate

```promql
rate(task_manager_http_requests_total[1m])
```

Calculates the average per-second increase in HTTP requests over the previous minute.

### 4. Monitor Process Memory

```promql
process_resident_memory_bytes
```

Displays the resident memory used by the monitored process.

### 5. Monitor Node.js Heap Memory

```promql
nodejs_heap_size_used_bytes
```

Displays the amount of Node.js heap memory currently in use.

## Expected Outcome

- Application metrics are available through the `/metrics` endpoint.
- Prometheus successfully collects application metrics.
- The `task-manager` target appears as `UP` in Prometheus Targets.
- PromQL queries display HTTP request and memory metrics.
- Changes in application traffic are reflected in the HTTP request counter.

## Screenshots

Include your own screenshots demonstrating the following:

1. **Metrics Endpoint:** Application metrics displayed at `/metrics`.
2. **Docker Image and Kubernetes Pods:** Updated Docker image and running application Pods.
3. **Prometheus Deployment:** Prometheus Pods and Service running in Kubernetes.
4. **Prometheus Targets:** The `task-manager` target showing an `UP` status.
5. **PromQL Results:** Query results for application availability, HTTP requests, request rate, and memory usage.
6. **Request Counter:** HTTP request counter changes after generating application traffic.

## Conclusion

Prometheus is configured to monitor the Student Task Manager application by collecting HTTP request and memory metrics. The `/metrics` endpoint exposes application metrics, while Prometheus Targets and PromQL queries help verify monitoring status and observe application performance.