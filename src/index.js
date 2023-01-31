import * as todoData from './todoData';
import * as todoDOM from './todoDOM';
import './style.css';

let projects = todoData.getProjectsList();
if (projects.length === 0) {
    todoData.addProject('in box');
    const todo = {
        title: 'instrcutions',
        description: `
- click on items in the left column to select project.
- click on items in the middle column to select todo.
- options and item details will be shown in the right column.
- 'in box' is the default project. It cannot be deleted and will be automatically selected every time you open the app.
        `,
        priority: 'normal'
    }
    todoData.addTodo('in box', todo);
}



todoDOM.renderProjectList('in box');
todoDOM.renderProject('in box');