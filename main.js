/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let projects = ['in box', 'office', 'home'];\n\nfunction saveTodos() {\n    localStorage.setItem('todos', JSON.stringify(projects));\n}\n\nfunction renderTodos() {\n    projects = JSON.parse(localStorage.getItem('todos'));\n    \n    const projectsUL = document.querySelector('.projects');\n    for (let i = 0; i < projects.length; i++) {\n        const li = document.createElement('li');\n        li.dataset.projectId = i;\n        li.textContent = projects[i];\n        projectsUL.appendChild(li);\n    }\n}\n\nsaveTodos();\nrenderTodos();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;