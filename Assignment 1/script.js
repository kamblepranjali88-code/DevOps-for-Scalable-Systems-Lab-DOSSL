function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    const priority = document.getElementById("priorityInput").value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    // Display task with its priority
    span.textContent = taskText + " - Priority: " + priority;

    // Mark task as completed/uncompleted
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Delete task
    deleteButton.onclick = function () {
        li.remove();
        updateTaskCount();
    };

    // Add task elements to list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add list item to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    input.value = "";

    // Update total task count
    updateTaskCount();
}


// Function to update total number of tasks
function updateTaskCount() {
    const count = document.getElementById("taskList").children.length;

    document.getElementById("taskCount").textContent =
        "Total Tasks: " + count;
}