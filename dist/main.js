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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --red: #ff6600;\\n    --green: #99ff99;\\n    --yellow: #ffff99;\\n    --white: #f8f2f2;\\n    --dark: #7e5d5d;\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\\n    margin: 0;\\n    padding: 0;\\n    min-height: 100vh;\\n}\\n\\nheader {\\n    height: 150px;\\n    margin: 0;\\n    padding: 1rem;\\n    background-color: var(--dark);\\n}\\n\\nh1 {\\n    text-align: center;\\n    color: var(--white);\\n    font-size: 4rem;\\n}\\n\\ninput,\\nselect,\\nbutton,\\ntextarea {\\n    font: inherit;\\n}\\n\\ntextarea {\\n    resize: vertical;\\n}\\n\\ninput,\\ntextarea,\\nselect\\n{\\n    padding: 0.5rem;\\n    border-radius: 0.5rem;\\n}\\n\\nul {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbutton {\\n    padding: 1rem;\\n    border: none;\\n    background-color: var(--dark);\\n    color: var(--white);\\n    margin: 0.5rem 0;\\n    cursor: pointer;\\n    display: inline;\\n    border-radius: 8px;\\n}\\n\\nbutton.red {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\\n\\nbutton.small {\\n    width: 100px;\\n}\\n\\nbutton:disabled {\\n    display: none;\\n}\\n\\nmain {\\n    flex: 1;\\n    display: flex;\\n    gap: 20px;\\n    align-items: stretch;\\n    background-color: var(--white);\\n}\\n\\n.col {\\n    flex: 1;\\n    padding: 2rem;\\n    margin: 1rem;\\n    color: var(--dark);\\n    border-radius: 1rem;\\n    background-color: #fff;\\n}\\n\\n.col-header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin-bottom: 2rem;\\n}\\n\\n.todo-form {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nlabel {\\n    margin-top: 1rem;\\n}\\n\\n.item {\\n    margin: 8px 0;\\n    padding: 1rem;\\n    border-radius: 8px;\\n}\\n.item.active,\\n.item:hover {\\n    box-shadow: 0 0 3px 3px var(--dark);\\n}\\n.item.high {\\n    background-color: var(--red);\\n}\\n.item.normal {\\n    background-color: var(--yellow);\\n}\\n.item.low {\\n    background-color: var(--green);\\n}\\n.item.done {\\n    text-decoration: line-through;\\n    opacity: 0.5;\\n}\\n\\n.form-title {\\n    width: 100%;\\n    height: 3rem;\\n    font-size: 1.5em;\\n    font-weight: bold;\\n}\\n\\n.tab {\\n    display: none;\\n}\\n\\n.tab.active {\\n    display: flex;\\n    flex-direction: column;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoData */ \"./src/todoData.js\");\n/* harmony import */ var _todoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDOM */ \"./src/todoDOM.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet projects = _todoData__WEBPACK_IMPORTED_MODULE_0__.getProjectsList();\nif (projects.length === 0) {\n    _todoData__WEBPACK_IMPORTED_MODULE_0__.addProject('in box');\n    const todo = {\n        title: 'instrcutions',\n        description: `\n- click on items in the left column to select project.\n- click on items in the middle column to select todo.\n- options and item details will be shown in the right column.\n- 'in box' is the default project. It cannot be deleted and will be automatically selected every time you open the app.\n        `,\n        priority: 'normal'\n    }\n    _todoData__WEBPACK_IMPORTED_MODULE_0__.addTodo('in box', todo);\n}\n\n\n\n_todoDOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectList('in box');\n_todoDOM__WEBPACK_IMPORTED_MODULE_1__.renderProject('in box');\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todoDOM.js":
/*!************************!*\
  !*** ./src/todoDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderProjectList\": () => (/* binding */ renderProjectList)\n/* harmony export */ });\n/* harmony import */ var _todoData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoData.js */ \"./src/todoData.js\");\n\n\nfunction renderProjectList(activeProject) {\n    const projects = _todoData_js__WEBPACK_IMPORTED_MODULE_0__.getProjectsList();\n    const ul = document.querySelector('#projects');\n    ul.innerHTML = '';\n    for (let item of projects) {\n        const li = document.createElement('li');\n        li.textContent = item;\n        li.classList.add('item');\n        if (item == activeProject) {\n            li.classList.add('active');\n        }\n        ul.appendChild(li);\n\n        li.addEventListener('click', function() {\n            const projectLis = document.querySelectorAll('#projects li');\n            for (let li of projectLis) {\n                li.classList.remove('active');\n            }\n            this.classList.add('active');\n            renderProject(item);\n            showProjectForm(this.textContent);\n        });\n    }\n}\n\nfunction renderProject(projectName, activeTodo) {\n    const project = _todoData_js__WEBPACK_IMPORTED_MODULE_0__.getProject(projectName);\n    const ul = document.querySelector('#todos');\n    ul.innerHTML = '';\n    for (let item in project) {\n        const li = document.createElement('li');\n        li.textContent = item;\n        li.classList.add('item');\n        li.classList.add(project[item].priority);\n        if (project[item].done) {\n            li.classList.add('done');\n        }\n        if (item === activeTodo) {\n            li.classList.add('active');\n        }\n        ul.appendChild(li);\n\n        li.addEventListener('click', function() {\n            const todoLis = document.querySelectorAll('#todos li');\n            for (let li of todoLis) {\n                li.classList.remove('active');\n            }\n            this.classList.add('active');\n            showTodoForm(projectName, item);\n        });\n    }\n}\n\nconst projectForm = document.querySelector('#project-form');\nprojectForm.addEventListener('submit', (e) => e.preventDefault());\n\nconst todoForm = document.querySelector('#todo-form');\ntodoForm.addEventListener('submit', (e) => e.preventDefault());\n\nfunction resetForm() {\n    const form = document.querySelector('#todo-form');\n    form.reset();\n    document.querySelector('#formTitle').textContent = 'fill in the form to create a new todo';\n}\n\nfunction showProjectForm(projectName) {\n    document.querySelector('#formTitle').textContent = projectName;\n    document.querySelector('#project-form').style.display = 'block';\n    document.querySelector('#todo-form').style.display = 'none';\n\n    editProjectBtn.disabled = (projectName == 'in box');\n    delProjectBtn.disabled = (projectName == 'in box');\n\n    const tabs = document.querySelectorAll('.tab');\n    tabs.forEach(tab => tab.classList.remove('active'));\n}\n\nfunction showTodoForm(projectName, todoName) {\n    document.querySelector('#project-form').style.display = 'none';\n    document.querySelector('#todo-form').style.display = 'flex';\n\n    document.querySelector('#formTitle').textContent = projectName;\n\n    if (todoName == '') {\n        todoForm.reset();\n        saveTodoBtn.disabled = true;\n        addTodoBtn.disabled = false;\n        delTodoBtn.disabled = true;\n        return;\n    }\n\n    const todo = _todoData_js__WEBPACK_IMPORTED_MODULE_0__.getTodo(projectName, todoName);\n    const title = document.querySelector('#title');\n    const description = document.querySelector('#description');\n    const dueDay = document.querySelector('#due-day');\n    const priority = document.querySelector('#priority');\n    const done = document.querySelector('#done');\n\n    title.value = todo.title;\n    description.value = todo.description;\n    dueDay.value = todo.dueDay;\n    priority.value = todo.priority;\n    done.checked = todo.done;\n\n    saveTodoBtn.disabled = false;\n    addTodoBtn.disabled = true;\n    delTodoBtn.disabled = false;\n}\n\n// UI\n// project\n\nconst editProjectBtn = document.querySelector('#edit-project-btn');\neditProjectBtn.addEventListener('click', function(e) {\n    e.preventDefault();\n    document.querySelector('#edit-tab').classList.add('active');\n    document.querySelector('#del-tab').classList.remove('active');\n    const title = document.querySelector('#formTitle').textContent;\n    const input = document.querySelector('#project-name-input');\n    input.focus();\n    input.value = title;\n    saveProjectBtn.disabled = false;\n    addProjectBtn.disabled = true;\n    \n});\n\nconst delProjectBtn = document.querySelector('#del-project-btn');\ndelProjectBtn.addEventListener('click', function(e) {\n    e.preventDefault();\n    document.querySelector('#edit-tab').classList.remove('active');\n    document.querySelector('#del-tab').classList.add('active');\n});\n\nconst confirmDelBtn = document.querySelector('#confirm-del-btn');\nconfirmDelBtn.addEventListener('click', function() {\n    const projectName = document.querySelector('#formTitle').textContent;\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject(projectName);\n    renderProjectList('in box');\n    renderProject('in box');\n    showProjectForm('in box');\n});\n\nconst saveProjectBtn = document.querySelector('#save-project-btn');\nsaveProjectBtn.addEventListener('click', function(e) {\n    e.preventDefault();\n    const oldName = document.querySelector('#formTitle').textContent;\n    const newName = document.querySelector('#project-name-input').value;\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.setProjectName(oldName, newName);\n    renderProjectList(newName);\n    renderProject(newName);\n    showProjectForm(newName);\n});\n\nconst newProjectBtn = document.querySelector('#new-project-btn');\nnewProjectBtn.addEventListener('click', function() {\n    showProjectForm('create new project');\n    editProjectBtn.disabled = true;\n    delProjectBtn.disabled = true;\n    saveProjectBtn.disabled = true;\n    addProjectBtn.disabled = false;\n    document.querySelector('#edit-tab').classList.add('active');\n    document.querySelector('#del-tab').classList.remove('active');\n    const input = document.querySelector('#project-name-input');\n    input.value = '';\n});\n\nconst addProjectBtn = document.querySelector('#add-project-btn');\naddProjectBtn.addEventListener('click', function() {\n    const input = document.querySelector('#project-name-input');\n    const projectName = input.value;\n    if (projectName === '' || _todoData_js__WEBPACK_IMPORTED_MODULE_0__.getProjectsList().indexOf(projectName) >= 0) {\n        input.value = 'error';\n        return;\n    }\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.addProject(projectName);\n    renderProjectList(projectName);\n    renderProject(projectName);\n    showProjectForm(projectName);\n});\n\n// todo section\n\nconst newTodoBtn = document.querySelector('#new-todo-btn');\nnewTodoBtn.addEventListener('click', () => {\n    const projectName = document.querySelector('#projects li.active').textContent;\n    showTodoForm(projectName, '');\n});\n\nconst saveTodoBtn = document.querySelector('#save-todo-btn');\nsaveTodoBtn.addEventListener('click', function() {\n    const title = document.querySelector('#title');\n    const description = document.querySelector('#description');\n    const dueDay = document.querySelector('#due-day');\n    const priority = document.querySelector('#priority');\n    const done = document.querySelector('#done');\n\n    const todo = {};\n    todo.title = title.value;\n    todo.description = description.value;\n    todo.dueDay = dueDay.value;\n    todo.priority = priority.value;\n    todo.done = done.checked;\n\n    const projectName = document.querySelector('#formTitle').textContent;\n    const li = document.querySelector('#todos li.active');\n    const todoName = li.textContent;\n\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.setTodo(projectName, todoName, todo);\n    renderProject(projectName, todo.title);\n    showTodoForm(projectName, todo.title);\n\n});\n\nconst addTodoBtn = document.querySelector('#add-todo-btn');\naddTodoBtn.addEventListener('click', function() {\n    \n    const title = document.querySelector('#title');\n    const description = document.querySelector('#description');\n    const dueDay = document.querySelector('#due-day');\n    const priority = document.querySelector('#priority');\n    const done = document.querySelector('#done');\n\n    const todo = {};\n    todo.title = title.value;\n    todo.description = description.value;\n    todo.dueDay = dueDay.value;\n    todo.priority = priority.value;\n    todo.done = done.checked;\n\n    const projectName = document.querySelector('#formTitle').textContent;\n\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.addTodo(projectName, todo);\n    renderProject(projectName, todo.title);\n    showTodoForm(projectName, todo.title);\n});\n\nconst delTodoBtn = document.querySelector('#del-todo-btn');\ndelTodoBtn.addEventListener('click', function() {\n    const projectName = document.querySelector('#formTitle').textContent;\n    const li = document.querySelector('#todos li.active');\n    const todoName = li.textContent;\n    _todoData_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo(projectName, todoName);\n    renderProject(projectName);\n    showProjectForm(projectName);\n});\n\n//# sourceURL=webpack://to-do-list/./src/todoDOM.js?");

/***/ }),

/***/ "./src/todoData.js":
/*!*************************!*\
  !*** ./src/todoData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject),\n/* harmony export */   \"getProjectsList\": () => (/* binding */ getProjectsList),\n/* harmony export */   \"getTodo\": () => (/* binding */ getTodo),\n/* harmony export */   \"setProjectName\": () => (/* binding */ setProjectName),\n/* harmony export */   \"setTodo\": () => (/* binding */ setTodo)\n/* harmony export */ });\nlet data = {};\n\nfunction storageAvailable(type) {\n    let storage;\n    try {\n        storage = window[type];\n        const x = '__storage_test__';\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    }\n    catch (e) {\n        return e instanceof DOMException && (\n            // everything except Firefox\n            e.code === 22 ||\n            // Firefox\n            e.code === 1014 ||\n            // test name field too, because code might not be present\n            // everything except Firefox\n            e.name === 'QuotaExceededError' ||\n            // Firefox\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n            // acknowledge QuotaExceededError only if there's something already stored\n            (storage && storage.length !== 0);\n    }\n}\n\nfunction load() {\n    if (storageAvailable('localStorage')) {\n        data = JSON.parse(localStorage.getItem('data')) || {};\n    }\n}\n\nfunction save() {\n    if (storageAvailable('localStorage')) {\n        localStorage.setItem('data', JSON.stringify(data));\n    }\n}\n\n// crud\n\nfunction addProject(projectName) {\n    load();\n    data[projectName] = {};\n    save();\n}\n\nfunction getProject(projectName) {\n    load();\n    return data[projectName];\n}\n\nfunction getProjectsList() {\n    load();\n    return Object.keys(data);\n}\n\nfunction setProjectName(oldName, newName) {\n    load();\n    data[newName] = data[oldName];\n    delete data[oldName];\n    save();\n}\n\nfunction deleteProject(projectName) {\n    load();\n    delete data[projectName];\n    save();\n}\n\nfunction addTodo(projectName, todo) {\n    load();\n    data[projectName][todo.title] = todo;\n    save();\n}\n\nfunction getTodo(projectName, todoName) {\n    load();\n    return data[projectName][todoName];\n}\n\nfunction setTodo(projectName, todoName, todo) {\n    load();\n    if (todoName !== todo.title) {\n        delete data[projectName][todoName];\n    } \n    data[projectName][todo.title] = todo;\n    save();\n}\n\nfunction deleteTodo(projectName, todoName) {\n    load();\n    delete data[projectName][todoName];\n    save();\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/todoData.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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