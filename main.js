/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nfunction renderTodos() {\n    const projects = JSON.parse(localStorage.getItem('projects'));\n    \n    const projectsUL = document.querySelector('.projects');\n    for (let i = 0; i < projects.length; i++) {\n        const li = document.createElement('li');\n        li.dataset.projectId = i;\n        li.textContent = projects[i].name;\n        projectsUL.appendChild(li);\n    }\n}\n\n_projects__WEBPACK_IMPORTED_MODULE_0__.addProject('in box');\n_projects__WEBPACK_IMPORTED_MODULE_0__.addProject('home');\n\n_projects__WEBPACK_IMPORTED_MODULE_0__.addTodo(0, 'phone bill', 'hkbn', '2023-01-23', 'normal');\n_projects__WEBPACK_IMPORTED_MODULE_0__.addTodo(0, 'cable tv', 'now tv', '2023-01-26', 'normal');\n\nrenderTodos();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"editProject\": () => (/* binding */ editProject)\n/* harmony export */ });\nfunction addProject(name) {\n    let projects = JSON.parse(localStorage.getItem('projects'));\n    if (projects === null) {\n        projects = [];\n    }\n    const project = {\n        name: name,\n        todos: []\n    }\n    projects.push(project);\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction deleteProject(id) {\n    let projects = JSON.parse(localStorage.getItem('projects'));\n    projects.splice(id, 1);\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction editProject(project, id) {\n    let projects = JSON.parse(localStorage.getItem('projects'));\n    projects[id] = project;\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction addTodo(projectId, title, description, dueDay, priority) {\n    const todo = {title, description, dueDay, priority};\n    let projects = JSON.parse(localStorage.getItem('projects'));\n    projects[projectId].todos.push(todo);\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;