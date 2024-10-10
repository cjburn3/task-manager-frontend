document.addEventListener('DOMContentLoaded', async () => {
    const tasksList = document.getElementById('tasks-list');
  
    // Fetch tasks from backend
    const res = await fetch('https://<your-backend-deployed-url>/api/tasks');
    const tasks = await res.json();
  
    // Display tasks
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      tasksList.appendChild(li);
    });
  });
  