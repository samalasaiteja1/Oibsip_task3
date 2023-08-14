const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="markCompleted(this)">Done</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskElement);
        taskInput.value = "";
    }
}

function markCompleted(button) {
    const taskElement = button.parentElement;
    taskElement.classList.toggle("completed");
}

function removeTask(button) {
    const taskElement = button.parentElement;
    taskList.removeChild(taskElement);
}
