/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => { // webpackBootstrap
	"use strict";
	var __webpack_modules__ = ({

"./src/about.md":
/*!**********************!*\
  !*** ./src/about.md ***!
  \**********************/
((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<h2 id=\\\"about\\\">about</h2>\\n<ul>\\n<li>mick</li>\\n<li>randy</li>\\n</ul>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-demo/./src/about.md?");

}),

"./src/heading.js":
/*!************************!*\
  !*** ./src/heading.js ***!
  \************************/
((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ./src/heading.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n\n  const element = document.createElement('h2')\n\n  element.textContent = 'Hello webpack'\n\n  element.addEventListener('click', () => alert('Hello webpack'))\n\n  return element\n\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/heading.js?");

}),

"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.js */ \"./src/heading.js\");\n/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.md */ \"./src/about.md\");\n\n\n\nlet div = document.createElement(\"div\")\ndiv.innerHTML = _about_md__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\ndocument.body.append(div)\n\nconst heading = (0,_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\ndocument.body.append(heading)\n\n\n//# sourceURL=webpack://webpack-demo/./src/main.js?");

})

	});
	// The module cache
	var __webpack_module_cache__ = {};
	
	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = __webpack_module_cache__[moduleId] = {
			// no module.id needed
			// no module.loaded needed
			exports: {}
		};
	
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
	
	/* webpack/runtime/define property getters */
	(() => {
		// define getter functions for harmony exports
		__webpack_require__.d = (exports, definition) => {
			for(var key in definition) {
				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();
	
	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
	})();
	
	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();
	
	
	// startup
	// Load entry module and return exports
	// This entry module can't be inlined because the eval devtool is used.
	var __webpack_exports__ = __webpack_require__("./src/main.js");
	
})()
;