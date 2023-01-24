let projects = [];

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function load() {
    if (storageAvailable('localStorage')) {
        projects = JSON.parse(localStorage.getItem('projects'));
    }
}

function save() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}


export function addProject(name) {
    load();
    if (projects === null) {
        projects = [];
    }
    const project = {
        name: name,
        todos: []
    }
    projects.push(project);
    save();
}

export function getProjects() {
    load();
    return projects;
}

export function deleteProject(id) {
    load();
    projects.splice(id, 1);
    save();
}

export function setProject(name, id) {
    load();
    projects[id].name = name;
    save();
}

export function addTodo(projectId, title, description, dueDay, priority) {
    const todo = {title, description, dueDay, priority, done: false};
    load();
    projects[projectId].todos.push(todo);
    save();
}

export function deleteTodo(projectId, todoId) {
    load();
    projects[projectId].todos.splice(todoId, 1);
    save();
}

export function setTodo(projectId, todoId, title, description, dueDay, priority, done) {
    load();
    projects[projectId].todos[todoId] = {title, description, dueDay, priority, done};
    save();
}