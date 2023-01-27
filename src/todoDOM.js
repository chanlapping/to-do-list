import * as todoData from './todoData.js';

export function renderProjectList() {
    const projects = todoData.getProjectsList();
    const ul = document.querySelector('#projects');
    ul.innerHTML = '';
    for (let item of projects) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);

        li.addEventListener('click', function() {
            const projectLis = document.querySelectorAll('#projects li');
            for (let li of projectLis) {
                li.classList.remove('active');
            }
            this.classList.add('active');
            renderProject(item);
            // resetForm();
            showProjectForm(this.textContent);
        });
    }
}

function renderProject(projectName) {
    const project = todoData.getProject(projectName);
    const ul = document.querySelector('#todos');
    ul.innerHTML = '';
    for (let item in project) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);

        li.addEventListener('click', function() {
            const todoLis = document.querySelectorAll('#todos li');
            for (let li of todoLis) {
                li.classList.remove('active');
            }
            this.classList.add('active');
            renderTodo(projectName, item);
        });
    }
}

function renderTodo(projectName, todoName) {
    const todo = todoData.getTodo(projectName, todoName);

    document.querySelector('#formTitle').textContent = `project: ${projectName}`;

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

    showTodoForm();
}

function resetForm() {
    const form = document.querySelector('#todo-form');
    form.reset();
    document.querySelector('#formTitle').textContent = 'fill in the form to create a new todo';
}

function showProjectForm(projectName) {
    document.querySelector('#formTitle').textContent = `project: ${projectName}`;
    document.querySelector('#project-form').style.display = 'block';
    document.querySelector('#todo-form').style.display = 'none';
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
}

function showTodoForm(projectName, todoName) {
    document.querySelector('#project-form').style.display = 'none';
    document.querySelector('#todo-form').style.display = 'flex';
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
    input.value = title.split(': ')[1];
});

const delProjectBtn = document.querySelector('#del-project-btn');
delProjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#edit-tab').classList.remove('active');
    document.querySelector('#del-tab').classList.add('active');
});

const projectCancelBtns = document.querySelectorAll('.project-cancel-btn');
projectCancelBtns.forEach(btn => btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#edit-tab').classList.remove('active');
    document.querySelector('#del-tab').classList.remove('active');
}))

/* const newProjectBtn = document.querySelector('#new-project-btn');
newProjectBtn.addEventListener('click', function() {
    const input = document.querySelector('#new-project-input');
    input.style.display = 'inline';
    input.focus();
    document.querySelector('#add-project-btn').style.display = 'inline';
    this.style.display = 'none';
});

const addNewProjectBtn = document.querySelector('#add-project-btn');
addNewProjectBtn.addEventListener('click', function() {
    const input = document.querySelector('#new-project-input');
    const projectName = input.value;
    if (projectName === '' || todoData.getProjectsList().indexOf(projectName) >= 0) {
        input.value = 'error';
        return;
    }
    todoData.addProject(projectName);
    renderProjectList();
    input.value = '';
    input.style.display = 'none';
    this.style.display = 'none';
    newProjectBtn.style.display = 'inline';
}) */

const todo1 = {
    title: "in box task",
    description: "hkbn",
    dueDay: "2023-01-25",
    priority: "high",
    done: true
};

const todo2 = {
    title: "office task",
    description: "sun mobile",
    dueDay: "2023-01-30",
    priority: "normal",
    done: false
};

const todo3 = {
    title: "cable",
    description: "now tv",
    dueDay: "2023-01-26",
    priority: "high",
    done: false
};


// renderProjectList();
// document.querySelector('#projects li').click();