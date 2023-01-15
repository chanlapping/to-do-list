let projects = ['in box', 'office', 'home'];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(projects));
}

function renderTodos() {
    projects = JSON.parse(localStorage.getItem('todos'));
    
    const projectsUL = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.dataset.projectId = i;
        li.textContent = projects[i];
        projectsUL.appendChild(li);
    }
}

saveTodos();
renderTodos();