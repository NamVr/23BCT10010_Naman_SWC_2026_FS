let todos = [];

const todoInput = document.getElementById("todo-text");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((task) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.isComplete;
        const span = document.createElement("span");
        span.className = "todo-text";
        span.innerText = task.text;
        if (task.isComplete) {
            span.classList.add("completed");
        }
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.className = "edit-btn";
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });
        editBtn.addEventListener("click", () => {
            editTask(task.id);
        });
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
function addTask() {
    const text = todoInput.value.trim();
    if (!text) return;
    todos.push({
        id: Date.now(),
        text: text,
        isComplete: false
    });
    todoInput.value = "";
    renderTodos();
}
function toggleTask(id) {
    todos = todos.map((task) => {
        if (task.id === id) {
            return {
                ...task,
                isComplete: !task.isComplete
            };
        }
        return task;
    });
    renderTodos();
}
function editTask(id) {
    const task = todos.find(
        task => task.id === id
    );
    const newText = prompt(
        "Edit Task",
        task.text
    );
    if (
        newText === null ||
        newText.trim() === ""
    ) {
        return;
    }
    task.text = newText.trim();
    renderTodos();
}
function deleteTask(id) {
    todos = todos.filter(
        task => task.id !== id
    );
    renderTodos();
}
addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});