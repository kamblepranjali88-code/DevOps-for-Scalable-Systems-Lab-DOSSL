# Assignment 8: Visualization of Real-Time Application Metrics Using Grafana

## Aim

To configure Grafana dashboards for visualizing and analyzing real-time application performance metrics collected by Prometheus.

## Objectives

- Deploy Grafana on Kubernetes using Minikube.
- Access the Grafana web interface.
- Configure Prometheus as a Grafana data source.
- Create a monitoring dashboard for the Student Task Manager.
- Visualize application availability, HTTP request metrics, and memory usage.
- Use PromQL queries to analyze application performance.
- Generate application traffic and observe dashboard updates.

## Tools Used

- Grafana
- Prometheus
- Docker
- Kubernetes
- Minikube
- kubectl
- Web Browser
- Student Task Manager Application

## Procedure

1. Verified that the Student Task Manager application and Prometheus were running from Assignment 7.
2. Deployed Grafana on Kubernetes.
3. Verified that the Grafana Pod was running.
4. Exposed Grafana through a Kubernetes Service.
5. Accessed the Grafana web interface.
6. Configured Prometheus as the data source using the appropriate Service URL.
7. Created a dashboard named **Student Task Manager Monitoring Dashboard**.
8. Created an application availability panel using `up{job="task-manager"}`.
9. Created an HTTP request rate panel using `sum(rate(task_manager_http_requests_total[1m]))`.
10. Created a process memory usage panel using `process_resident_memory_bytes`.
11. Created a Node.js heap memory panel using `nodejs_heap_size_used_bytes`.
12. Saved the dashboard and generated application traffic.
13. Observed changes in the dashboard panels as new metrics were collected.

## Commands Used

### 1. Verify Grafana Deployment

Check the Grafana Pods and Services in the `monitoring` namespace:

```bash
kubectl get pods -n monitoring
kubectl get services -n monitoring
```

### 2. Access Grafana

If Grafana is deployed in the `monitoring` namespace and its Service is named `grafana`, run:

```bash
kubectl port-forward -n monitoring service/grafana 3000:80
```

Keep the terminal running and open the following address in your browser:

`http://localhost:3000`

**Note:** If the Service has a different name or port, use the values displayed by `kubectl get services -n monitoring`.

### 3. Verify Prometheus and the Application

```bash
kubectl get pods
kubectl get services
```

Ensure that Prometheus and the Student Task Manager application are running.

## Grafana Configuration

### 1. Configure Prometheus as a Data Source

In the Grafana web interface:

1. Navigate to **Connections → Data sources**.
2. Select **Add data source**.
3. Choose **Prometheus**.
4. Enter the Prometheus Service URL accessible from Grafana.
5. Click **Save & test**.
6. Verify that the connection is successful.

### 2. Create the Monitoring Dashboard

Create a new dashboard with the following name:

**Student Task Manager Monitoring Dashboard**

Add the following panels to visualize application performance.

### Panel 1: Application Status

**PromQL Query:**

```promql
up{job="task-manager"}
```

- **Visualization:** Stat
- **Panel Title:** Application Status
- **Interpretation:** A value of `1` indicates that Prometheus successfully scraped the application target.

### Panel 2: HTTP Request Rate

**PromQL Query:**

```promql
sum(rate(task_manager_http_requests_total[1m]))
```

- **Visualization:** Time series
- **Panel Title:** HTTP Request Rate
- **Interpretation:** Displays the average HTTP request rate per second over the previous minute.

### Panel 3: Process Memory Usage

**PromQL Query:**

```promql
process_resident_memory_bytes
```

- **Visualization:** Time series
- **Panel Title:** Process Memory Usage
- **Unit:** Bytes
- **Interpretation:** Displays the resident memory used by the monitored process.

### Panel 4: Node.js Heap Memory

**PromQL Query:**

```promql
nodejs_heap_size_used_bytes
```

- **Visualization:** Time series
- **Panel Title:** Node.js Heap Memory
- **Unit:** Bytes
- **Interpretation:** Displays the amount of Node.js heap memory currently in use.

## Generate Application Traffic

1. Open the Student Task Manager application in a browser.
2. Refresh the page several times.
3. Perform application operations to generate HTTP requests.
4. Return to the Grafana dashboard.
5. Observe changes in the HTTP request rate and memory usage panels.

## Expected Outcome

- Grafana is deployed and accessible through its web interface.
- Prometheus is configured successfully as a data source.
- The **Student Task Manager Monitoring Dashboard** is created.
- Application availability is displayed through a Stat panel.
- HTTP request rate is visualized using a time-series panel.
- Process memory and Node.js heap memory metrics are displayed.
- Dashboard panels update as new metrics are collected.

## Screenshots

Include your own screenshots demonstrating the following:

1. **Grafana Deployment:** Grafana Pod and Service running in Kubernetes.
2. **Prometheus Data Source:** Successful connection between Grafana and Prometheus.
3. **Monitoring Dashboard:** The Student Task Manager Monitoring Dashboard.
4. **Application Status:** The Application Status panel displaying the target status.
5. **HTTP Request Rate:** The HTTP Request Rate time-series panel.
6. **Process Memory Usage:** The Process Memory Usage panel.
7. **Node.js Heap Memory:** The Node.js Heap Memory panel.
8. **Real-Time Updates:** Dashboard changes after generating application traffic.

## Conclusion

Grafana is used to visualize application performance metrics collected by Prometheus. The monitoring dashboard displays application availability, HTTP request rate, process memory usage, and Node.js heap memory, providing a visual overview of the Student Task Manager application's performance.