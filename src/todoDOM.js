import * as todoData from './todoData.js';
import { format } from 'date-fns';

export function renderProjectList(activeProject) {
    const projects = todoData.getProjectsList();
    const ul = document.querySelector('#projects');
    ul.innerHTML = '';
    for (let item of projects) {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('item');
        if (item == activeProject) {
            li.classList.add('active');
        }
        ul.appendChild(li);

        li.addEventListener('click', function() {
            const projectLis = document.querySelectorAll('#projects li');
            for (let li of projectLis) {
                li.classList.remove('active');
            }
            this.classList.add('active');
            renderProject(item);
            showProjectForm(this.textContent);
        });
    }
}

export function renderProject(projectName, activeTodo) {
    const project = todoData.getProject(projectName);
    const todos = todoData.getProjectKeys(projectName);
    const ul = document.querySelector('#todos');
    ul.innerHTML = '';
    for (let item of todos) {
        const li = document.createElement('li');
        let dueDay = new Date(project[item].dueDay);
        // li.textContent = item + format(dueDay, "dd-MMM-yy");
        li.innerHTML = `
        <span>${item}</span>
        <span>${format(dueDay, "dd-MMM-yy")}</span>
        `;
        li.classList.add('item');
        li.classList.add(project[item].priority);
        if (project[item].done) {
            li.classList.add('done');
        }
        if (item === activeTodo) {
            li.classList.add('active');
        }
        ul.appendChild(li);

        li.addEventListener('click', function() {
            const todoLis = document.querySelectorAll('#todos li');
            for (let li of todoLis) {
                li.classList.remove('active');
            }
            this.classList.add('active');
            showTodoForm(projectName, item);
        });
    }
}

const projectForm = document.querySelector('#project-form');
projectForm.addEventListener('submit', (e) => e.preventDefault());

const todoForm = document.querySelector('#todo-form');
todoForm.addEventListener('submit', (e) => e.preventDefault());

function resetForm() {
    const form = document.querySelector('#todo-form');
    form.reset();
    document.querySelector('#formTitle').textContent = 'fill in the form to create a new todo';
}

export function showProjectForm(projectName) {
    document.querySelector('#formTitle').textContent = projectName;
    document.querySelector('#project-form').style.display = 'block';
    document.querySelector('#todo-form').style.display = 'none';

    editProjectBtn.disabled = (projectName == 'in box');
    delProjectBtn.disabled = (projectName == 'in box');

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    if (projectName == 'in box') {
        document.querySelector('#info-tab').classList.add('active');
    }
}

function showTodoForm(projectName, todoName) {
    document.querySelector('#project-form').style.display = 'none';
    document.querySelector('#todo-form').style.display = 'flex';

    document.querySelector('#formTitle').textContent = projectName;

    if (todoName == '') {
        todoForm.reset();
        saveTodoBtn.disabled = true;
        addTodoBtn.disabled = false;
        delTodoBtn.disabled = true;
        return;
    }

    const todo = todoData.getTodo(projectName, todoName);
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDay = document.querySelector('#due-day');
    const priority = document.querySelector('#priority');
    const done = document.querySelector('#done');

    title.value = todo.title;
    description.value = todo.description;
    dueDay.value = todo.dueDay;
    priority.value = todo.priority;
    done.checked = todo.done;

    saveTodoBtn.disabled = false;
    addTodoBtn.disabled = true;
    delTodoBtn.disabled = false;
}

// UI
// project

const editProjectBtn = document.querySelector('#edit-project-btn');
editProjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#edit-tab').classList.add('active');
    document.querySelector('#del-tab').classList.remove('active');
    const title = document.querySelector('#formTitle').textContent;
    const input = document.querySelector('#project-name-input');
    input.focus();
    input.value = title;
    saveProjectBtn.disabled = false;
    addProjectBtn.disabled = true;
    
});

const delProjectBtn = document.querySelector('#del-project-btn');
delProjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#edit-tab').classList.remove('active');
    document.querySelector('#del-tab').classList.add('active');
});

const confirmDelBtn = document.querySelector('#confirm-del-btn');
confirmDelBtn.addEventListener('click', function() {
    const projectName = document.querySelector('#formTitle').textContent;
    todoData.deleteProject(projectName);
    renderProjectList('in box');
    renderProject('in box');
    showProjectForm('in box');
});

const saveProjectBtn = document.querySelector('#save-project-btn');
saveProjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const oldName = document.querySelector('#formTitle').textContent;
    const newName = document.querySelector('#project-name-input').value;
    todoData.setProjectName(oldName, newName);
    renderProjectList(newName);
    renderProject(newName);
    showProjectForm(newName);
});

const newProjectBtn = document.querySelector('#new-project-btn');
newProjectBtn.addEventListener('click', function() {
    showProjectForm('create new project');
    editProjectBtn.disabled = true;
    delProjectBtn.disabled = true;
    saveProjectBtn.disabled = true;
    addProjectBtn.disabled = false;
    document.querySelector('#edit-tab').classList.add('active');
    document.querySelector('#del-tab').classList.remove('active');
    const input = document.querySelector('#project-name-input');
    input.value = '';
});

const addProjectBtn = document.querySelector('#add-project-btn');
addProjectBtn.addEventListener('click', function() {
    const input = document.querySelector('#project-name-input');
    const projectName = input.value;
    if (projectName === '' || todoData.getProjectsList().indexOf(projectName) >= 0) {
        input.value = 'error';
        return;
    }
    todoData.addProject(projectName);
    renderProjectList(projectName);
    renderProject(projectName);
    showProjectForm(projectName);
});

// todo section

const newTodoBtn = document.querySelector('#new-todo-btn');
newTodoBtn.addEventListener('click', () => {
    const projectName = document.querySelector('#projects li.active').textContent;
    showTodoForm(projectName, '');
});

const saveTodoBtn = document.querySelector('#save-todo-btn');
saveTodoBtn.addEventListener('click', function() {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDay = document.querySelector('#due-day');
    const priority = document.querySelector('#priority');
    const done = document.querySelector('#done');

    const todo = {};
    todo.title = title.value;
    todo.description = description.value;
    todo.dueDay = dueDay.value;
    todo.priority = priority.value;
    todo.done = done.checked;

    const projectName = document.querySelector('#formTitle').textContent;
    const li = document.querySelector('#todos li.active');
    const todoName = li.textContent;

    todoData.setTodo(projectName, todoName, todo);
    renderProject(projectName, todo.title);
    showTodoForm(projectName, todo.title);

});

const addTodoBtn = document.querySelector('#add-todo-btn');
addTodoBtn.addEventListener('click', function() {
    
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDay = document.querySelector('#due-day');
    const priority = document.querySelector('#priority');
    const done = document.querySelector('#done');

    const todo = {};
    todo.title = title.value;
    todo.description = description.value;
    todo.dueDay = dueDay.value;
    todo.priority = priority.value;
    todo.done = done.checked;

    const projectName = document.querySelector('#formTitle').textContent;

    todoData.addTodo(projectName, todo);
    renderProject(projectName, todo.title);
    showTodoForm(projectName, todo.title);
});

const delTodoBtn = document.querySelector('#del-todo-btn');
delTodoBtn.addEventListener('click', function() {
    const projectName = document.querySelector('#formTitle').textContent;
    const li = document.querySelector('#todos li.active');
    const todoName = li.textContent;
    todoData.deleteTodo(projectName, todoName);
    renderProject(projectName);
    showProjectForm(projectName);
});