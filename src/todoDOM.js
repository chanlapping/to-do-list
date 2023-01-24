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
    currentProject.textContent = document.querySelector('.project.active').textContent;
    message.textContent = 'fill in the form to create a new task';
});

// form controls
const taskForm = document.querySelector('#task-form');
const currentProject = document.querySelector('#current-project');
const message = document.querySelector('#message');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDay = document.querySelector('#due-day');
const priority =document.querySelector('#priority');

export function renderProjects() {
    const projects = todoData.getProjects();
    
    projectsUL.innerHTML = '';
    
    for (let i = 0; i < projects.length; i++) {

        const li = document.createElement('li');
        li.dataset.project = i;
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

        // li.addEventListener('click', function() {
        //     renderTodos(this.dataset.projectId);
        //     taskForm.reset();
        //     message.textContent = 'select a todo item, or fill in the form to create a new todo.';

        //     const projectsLi = document.querySelectorAll('[data-project-id]');
        //     for (let i = 0; i < projectsLi.length; i++) {
        //         projectsLi[i].classList.remove('active');
        //     }
        //     projectsLi[this.dataset.projectId].classList.add('active');
        // });
    }
}



export function renderTodos(projectId) {
    const projects = JSON.parse(localStorage.getItem('projects'));
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
    const projects = JSON.parse(localStorage.getItem('projects'));
    const todo = projects[projectId].todos[todoId];
    message.textContent = `project: ${projects[projectId].name}`;
    title.value = todo.title;
    description.value = todo.description;
    dueDay.value = todo.dueDay;
    priority.value = todo.priority;
}

