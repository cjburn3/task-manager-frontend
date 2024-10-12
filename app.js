document.addEventListener('DOMContentLoaded', async () => {
    const tasksList = document.getElementById('tasks-list');
  
    const res = await fetch('https://fijrfbjygsslprfibdzc.supabase.co/api/tasks');
    const tasks = await res.json();
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      tasksList.appendChild(li);
    });
  });
  