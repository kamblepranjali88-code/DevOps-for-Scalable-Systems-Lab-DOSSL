const STORAGE_KEY = "student-task-manager-v1";
const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#task-title");
const taskDue = document.querySelector("#task-due");
const taskList = document.querySelector("#task-list");
const statusFilter = document.querySelector("#status-filter");
const emptyState = document.querySelector("#empty-state");
const totalCount = document.querySelector("#total-count");
const progressCount = document.querySelector("#progress-count");
const completedCount = document.querySelector("#completed-count");
const taskMessage = document.querySelector("#task-message");

let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function formatDate(dateString) {
  if (!dateString) return "No due date";
  const date = new Date(`${dateString}T00:00:00`);
  return `Due ${date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
}

function getStatus(task) {
  if (task.completed) return "completed";
  return task.inProgress ? "progress" : "pending";
}

function renderTasks() {
  const filter = statusFilter.value;
  const visibleTasks = tasks.filter(task => filter === "all" || getStatus(task) === filter);
  taskList.replaceChildren();
  emptyState.hidden = visibleTasks.length > 0;
  emptyState.textContent = tasks.length === 0
    ? "No tasks yet. Add your first task above."
    : "No tasks match this filter.";

  visibleTasks.forEach(task => {
    const status = getStatus(task);
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " is-completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} completed`);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      if (task.completed) task.inProgress = false;
      saveTasks();
      renderTasks();
    });

    const main = document.createElement("div");
    main.className = "task-main";
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;
    const meta = document.createElement("span");
    meta.className = "task-meta";
    meta.textContent = formatDate(task.due);
    main.append(title, meta);

    const badge = document.createElement("span");
    badge.className = `badge ${status}`;
    badge.textContent = status === "completed" ? "Completed" : status === "progress" ? "In progress" : "To do";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      saveTasks();
      renderTasks();
      taskMessage.textContent = "Task deleted.";
    });

    item.append(checkbox, main, badge, deleteButton);
    if (!task.completed) {
      badge.title = "Click to toggle task progress";
      badge.tabIndex = 0;
      badge.setAttribute("role", "button");
      badge.addEventListener("click", () => {
        task.inProgress = !task.inProgress;
        saveTasks();
        renderTasks();
      });
      badge.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          badge.click();
        }
      });
    }
    taskList.append(item);
  });

  totalCount.textContent = tasks.length;
  progressCount.textContent = tasks.filter(task => !task.completed && task.inProgress).length;
  completedCount.textContent = tasks.filter(task => task.completed).length;
}

taskForm.addEventListener("submit", event => {
  event.preventDefault();
  const title = taskTitle.value.trim();
  if (!title) {
    taskTitle.focus();
    return;
  }
  tasks.unshift({
    id: (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    title,
    due: taskDue.value,
    completed: false,
    inProgress: false
  });
  saveTasks();
  renderTasks();
  taskForm.reset();
  taskTitle.focus();
  taskMessage.textContent = "Task added and saved in this browser.";
});

statusFilter.addEventListener("change", renderTasks);
document.querySelector("#clear-completed").addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
  taskMessage.textContent = "Completed tasks cleared.";
});

document.querySelector("#today-date").textContent = new Date().toLocaleDateString(undefined, {
  weekday: "short", month: "short", day: "numeric"
});
renderTasks();
