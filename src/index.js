import * as todoData from './todoData';
import * as todoDOM from './todoDOM';
import './style.css';

let projects = todoData.getProjectsList();
if (projects.length === 0) {
    todoData.addProject('in box');
}

todoDOM.renderProjectList('in box');
todoDOM.renderProject('in box');
todoDOM.showProjectForm('in box');