import * as todoData from './projects';
import * as todoDOM from './todoDOM';
import './style.css';



localStorage.clear();

todoData.addProject('in box');
todoData.addProject('home');

todoData.addTodo(0, 'phone bill', 'hkbn', '2023-01-23', 'normal');
todoData.addTodo(0, 'cable tv', 'now tv', '2023-01-26', 'normal');

todoData.editTodo(0, 0, 'phone and internet bills', 'hkbn', '2023-01-23', 'normal');

todoDOM.renderProjects();
todoDOM.renderTodos(0);