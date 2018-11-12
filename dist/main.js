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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n\n\nObject(_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/hello.js":
/*!*****************************!*\
  !*** ./src/routes/hello.js ***!
  \*****************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\nconst hello = (req, res) => {\n  res.json(\"Hello world\")\n}\n\n//# sourceURL=webpack:///./src/routes/hello.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello */ \"./src/routes/hello.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./src/routes/users.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()\n\nrouter.route('/').get(_hello__WEBPACK_IMPORTED_MODULE_1__[\"hello\"])\nrouter.route('/users').get(_users__WEBPACK_IMPORTED_MODULE_2__[\"users\"])\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/users.js":
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\n/* harmony import */ var _utils_postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/postgres */ \"./src/utils/postgres.js\");\n/* harmony import */ var _utils_recover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/recover */ \"./src/utils/recover.js\");\n\n\n\nconst users = (req, res) => {\n\n  const reply = Object(_utils_recover__WEBPACK_IMPORTED_MODULE_1__[\"recover\"])(\n    Object(_utils_postgres__WEBPACK_IMPORTED_MODULE_0__[\"executeSql\"])(_utils_postgres__WEBPACK_IMPORTED_MODULE_0__[\"database\"], 'SELECT * FROM users', []),\n    rep => {\n      res.json(rep)\n    },\n    err => {\n      return err\n    }\n  )\n}\n\n//# sourceURL=webpack:///./src/routes/users.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return start; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/config */ \"./src/utils/config.js\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\n\n\n// const {\n//   Pool,\n//   Client\n// } = require('pg')\n\n// const connectionString = process.env.URI_PG\n\n\n// const pool = new Pool({\n//   connectionString: connectionString,\n// })\n\nfunction start() {\n  const server = express__WEBPACK_IMPORTED_MODULE_0___default()()\n\n  server.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  server.listen(_utils_config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].express.port, () => {\n    console.log('Listening')\n  })\n\n  return server\n}\n\n// app.get('/', (req, res) => {\n//   res.json('Hello World!')\n// })\n\n\n// app.get('/users', (req, res) => {\n//   pool.query('SELECT * FROM users')\n//     .then(rep => {\n//       res.send(rep)\n//     })\n//     .catch(e => console.error(e.stack))\n// })\n\n// app.listen(process.env.PORT || 3000, () => {\n\n// })\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var common_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-env */ \"common-env\");\n/* harmony import */ var common_env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(common_env__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst config = common_env__WEBPACK_IMPORTED_MODULE_0___default()().getOrElseAll({\n  node: {\n    env: 'development'\n  },\n  express: {\n    port: 3001\n  },\n  postgres: {\n    user: 'postgres',\n    host: 'localhost',\n    database: 'postgres',\n    password: 'boston',\n    port: 5432\n  }\n})\n\n//# sourceURL=webpack:///./src/utils/config.js?");

/***/ }),

/***/ "./src/utils/postgres.js":
/*!*******************************!*\
  !*** ./src/utils/postgres.js ***!
  \*******************************/
/*! exports provided: database, executeSql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"database\", function() { return database; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"executeSql\", function() { return executeSql; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/utils/config.js\");\n\n\n\nconst initDb = () => {\n  const db = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"]({\n    user: _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].postgres.user,\n    host: _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].postgres.host,\n    database: _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].postgres.database,\n    password: _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].postgres.password,\n    port: _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].postgres.port\n  })\n\n  return db\n}\nconst database = initDb()\n\nconst executeSql = (db, query, params) => {\n  return new Promise((resolve, reject) => {\n    db.query(query, params, (error, results) => {\n      if (error) reject(error)\n      resolve(results)\n    })\n  })\n}\n\n//# sourceURL=webpack:///./src/utils/postgres.js?");

/***/ }),

/***/ "./src/utils/recover.js":
/*!******************************!*\
  !*** ./src/utils/recover.js ***!
  \******************************/
/*! exports provided: recover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recover\", function() { return recover; });\nconst recover = (prms, onSuccess = res => res, onCatch = res => res) => {\n  return new Promise(resolve => {\n    prms\n      .then(successValue => resolve(onSuccess(successValue)))\n      .catch(catchValue => resolve(onCatch(catchValue)))\n  })\n}\n\n//# sourceURL=webpack:///./src/utils/recover.js?");

/***/ }),

/***/ "common-env":
/*!*****************************!*\
  !*** external "common-env" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"common-env\");\n\n//# sourceURL=webpack:///external_%22common-env%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ })

/******/ });