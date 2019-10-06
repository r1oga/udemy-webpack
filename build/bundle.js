/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/big.jpeg":
/*!*************************!*\
  !*** ./assets/big.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ebe971d864d92a29ef9a8e554163a269.jpeg\";\n\n//# sourceURL=webpack:///./assets/big.jpeg?");

/***/ }),

/***/ "./assets/small.jpeg":
/*!***************************!*\
  !*** ./assets/small.jpeg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/jpeg;base64,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\"\n\n//# sourceURL=webpack:///./assets/small.jpeg?");

/***/ }),

/***/ "./src/image_viewer.js":
/*!*****************************!*\
  !*** ./src/image_viewer.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_image_viewer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/image_viewer.css */ \"./styles/image_viewer.css\");\n/* harmony import */ var _styles_image_viewer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_image_viewer_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_big_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/big.jpeg */ \"./assets/big.jpeg\");\n/* harmony import */ var _assets_big_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_big_jpeg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_small_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/small.jpeg */ \"./assets/small.jpeg\");\n/* harmony import */ var _assets_small_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_small_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n\n // needs to resolve right path\n\n // base64 string\n\nvar image = document.createElement('img');\nimage.src = _assets_small_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a;\ndocument.body.appendChild(image);\nvar bigImage = document.createElement('img');\nbigImage.src = _assets_big_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a;\ndocument.body.appendChild(bigImage);\n\n//# sourceURL=webpack:///./src/image_viewer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n/* harmony import */ var _image_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_viewer */ \"./src/image_viewer.js\");\n\n\nvar total = Object(_sum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10, 2);\nconsole.log(total);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sum = function sum(a, b) {\n  return a + b;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sum);\n\n//# sourceURL=webpack:///./src/sum.js?");

/***/ }),

/***/ "./styles/image_viewer.css":
/*!*********************************!*\
  !*** ./styles/image_viewer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/image_viewer.css?");

/***/ })

/******/ });