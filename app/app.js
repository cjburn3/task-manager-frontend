const API_URL = 'http://localhost:3000/api/tasks';

async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}
