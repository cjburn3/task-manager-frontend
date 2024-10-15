const API_URL = 'http://localhost:5000/api/tasks'; // Adjust this for production

async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.addEventListener('click', () => toggleTaskCompletion(task.id, task.completed));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}

async function addTask() {
    const taskInput = document.getElementById('task-input');
    const title = taskInput.value.trim();
    if (title) {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });
        taskInput.value = '';
        fetchTasks();
    }
}

async function toggleTaskCompletion(id, completed) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
    });
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTasks();
}

document.getElementById('add-task').addEventListener('click', addTask);

fetchTasks();

