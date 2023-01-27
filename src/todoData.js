let data = {};

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
        data = JSON.parse(localStorage.getItem('data')) || {};
    }
}

function save() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('data', JSON.stringify(data));
    }
}

// crud

export function addProject(projectName) {
    load();
    data[projectName] = {};
    save();
}

export function getProject(projectName) {
    load();
    return data[projectName];
}

export function getProjectsList() {
    load();
    return Object.keys(data);
}

export function setProjectName(oldName, newName) {
    load();
    data[newName] = data[oldName];
    delete data[oldName];
    save();
}

export function deleteProject(projectName) {
    load();
    delete data[projectName];
    save();
}

export function addTodo(projectName, todo) {
    load();
    data[projectName][todo.title] = todo;
    save();
}

export function getTodo(projectName, todoName) {
    load();
    return data[projectName][todoName];
}

export function setTodo(projectName, todoName, todo) {
    load();
    if (todoName !== todo.title) {
        delete data[projectName][todoName];
    } 
    data[projectName][todo.title] = todo;
    save();
}

export function deleteTodo(projectName, todoName) {
    load();
    delete data[projectName][todoName];
    save();
}



