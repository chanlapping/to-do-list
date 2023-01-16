export function renderProjects() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    
    const projectsUL = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.dataset.projectId = i;
        li.textContent = projects[i].name;
        projectsUL.appendChild(li);
    }
}

export function renderTodos(projectId) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const todos = projects[projectId].todos;
    const todoUL = document.querySelector('.todos');

    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.dataset.projectId = projectId;
        li.dataset.todoId = i;
        li.textContent = todos[i].title;
        todoUL.appendChild(li);
    }
}