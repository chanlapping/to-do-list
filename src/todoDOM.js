import * as todoData from './projects';

// project list
const projectsUL = document.querySelector('#projects');
const projectForm = document.querySelector('#project-form');
const projectInput = document.querySelector('#new-project');

projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    todoData.addProject(projectInput.value);
    projectInput.value = '';
    renderProjects();
});

// to do list
const todoUL = document.querySelector('#todos');
const newTaskBtn = document.querySelector('#new-task');

newTaskBtn.addEventListener('click', function() {
    taskForm.reset();
    formTodo.value = -1;
    formDelBtn.disabled = true;
    currentProject.textContent = 'project: ' + document.querySelector('.project.active input').value;
    message.textContent = 'fill in the form to create a new task';
});

// form controls
const taskForm = document.querySelector('#task-form');
const currentProject = document.querySelector('#current-project');
const message = document.querySelector('#message');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDay = document.querySelector('#due-day');
const priority = document.querySelector('#priority');
const formProject = document.querySelector('#form-project');
const formTodo = document.querySelector('#form-todo');
const formSaveBtn = document.querySelector('#form-save-btn');
const formDelBtn = document.querySelector('#form-delete-btn');

formDelBtn.addEventListener('click', function(e) {
    e.preventDefault();
    todoData.deleteTodo(formProject.value, formTodo.value);
    renderTodos(formProject.value);
    taskForm.reset();
    formTodo.value = -1;
    this.disabled = true;
});

formSaveBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (formTodo.value == -1) {
        todoData.addTodo(formProject.value, title.value, description.value, dueDay.value, priority.value, false);
        formTodo.value = todoData.getProjects()[formProject.value].todos.length - 1;
    } else {
        todoData.setTodo(formProject.value, formTodo.value, title.value, description.value, dueDay.value, priority.value, false);
    }
    renderTodos(formProject.value);
})


export function renderProjects() {
    const projects = todoData.getProjects();
    
    projectsUL.innerHTML = '';
    
    for (let i = 0; i < projects.length; i++) {

        const li = document.createElement('li');
        li.dataset.projectId = i;
        li.classList.add('project');

        const projectName = document.createElement('input');
        projectName.value = projects[i].name;
        projectName.disabled = true;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', function() {
            projectName.disabled = false;
            projectName.focus();
            const controls = this.parentElement.children;
            controls[1].style.display = 'none';
            controls[2].style.display = 'none';
            controls[3].style.display = 'inline';
            controls[4].style.display = 'inline';
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = 'delete';
        delBtn.addEventListener('click', () => {
            todoData.deleteProject(i);
            renderProjects();
        });

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'cancel';
        cancelBtn.style.display = 'none';
        cancelBtn.addEventListener('click', function() {
            projectName.disabled = true;
            projectName.value = projects[i].name;
            const controls = this.parentElement.children;
            controls[1].style.display = 'inline';
            controls[2].style.display = 'inline';
            controls[3].style.display = 'none';
            controls[4].style.display = 'none';
        });

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'save';
        saveBtn.style.display = 'none';
        saveBtn.addEventListener('click', function() {
            projectName.disabled = true;
            const controls = this.parentElement.children;
            controls[1].style.display = 'inline';
            controls[2].style.display = 'inline';
            controls[3].style.display = 'none';
            controls[4].style.display = 'none';
            todoData.setProject(projectName.value, i);
        });

        li.appendChild(projectName);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        li.appendChild(cancelBtn);
        li.appendChild(saveBtn);

        projectsUL.appendChild(li);

        li.addEventListener('click', function() {
            renderTodos(this.dataset.projectId);
            taskForm.reset();
            formProject.value = i;
            formTodo.value = -1;
            formDelBtn.disabled = true;
            
            const projectsLi = document.querySelectorAll('[data-project-id]');
            for (let i = 0; i < projectsLi.length; i++) {
                projectsLi[i].classList.remove('active');
            }
            projectsLi[this.dataset.projectId].classList.add('active');
            currentProject.textContent = `project: ${document.querySelector('.project.active input').value}`;
            message.textContent = 'select a todo item, or fill in the form to create a new todo.';
        });
    }
}



export function renderTodos(projectId) {
    const projects = todoData.getProjects();
    const todos = projects[projectId].todos;
    
    todoUL.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.dataset.projectId = projectId;
        li.dataset.todoId = i;
        li.textContent = todos[i].title;
        todoUL.appendChild(li);

        li.addEventListener('click', function() {
            renderTask(this.dataset.projectId, this.dataset.todoId);

            const todosLi = document.querySelectorAll('[data-todo-id]');
            for (let i = 0; i < todosLi.length; i++) {
                todosLi[i].classList.remove('active');
            }
            todosLi[this.dataset.todoId].classList.add('active');
        });
    }
}

export function renderTask(projectId, todoId) {
    const projects = todoData.getProjects();
    const todo = projects[projectId].todos[todoId];
    currentProject.textContent = `project: ${projects[projectId].name}`;
    message.textContent = 'fill in the form and press save to edit';
    title.value = todo.title;
    description.value = todo.description;
    dueDay.value = todo.dueDay;
    priority.value = todo.priority;
    formProject.value = projectId;
    formTodo.value = todoId;
    formDelBtn.disabled = false;
}

