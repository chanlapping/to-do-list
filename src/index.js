import * as todoData from './projects';

function renderTodos() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    
    const projectsUL = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.dataset.projectId = i;
        li.textContent = projects[i].name;
        projectsUL.appendChild(li);
    }
}

todoData.addProject('in box');
todoData.addProject('home');

todoData.addTodo(0, 'phone bill', 'hkbn', '2023-01-23', 'normal');
todoData.addTodo(0, 'cable tv', 'now tv', '2023-01-26', 'normal');

renderTodos();