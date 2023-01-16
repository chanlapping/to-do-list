let projects = [];

export function addProject(name) {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (projects === null) {
        projects = [];
    }
    const project = {
        name: name,
        todos: []
    }
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function deleteProject(id) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(id, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function editProject(project, id) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects[id] = project;
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function addTodo(projectId, title, description, dueDay, priority) {
    const todo = {title, description, dueDay, priority};
    projects = JSON.parse(localStorage.getItem('projects'));
    projects[projectId].todos.push(todo);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function deleteTodo(projectId, todoId) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects[projectId].todos.splice(todoId, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function editTodo(projectId, todoId, title, description, dueDay, priority) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects[projectId].todos[todoId] = {title, description, dueDay, priority};
    localStorage.setItem('projects', JSON.stringify(projects));
}