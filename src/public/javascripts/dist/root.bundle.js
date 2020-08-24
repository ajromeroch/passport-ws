/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"root": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/javascripts/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/views/Root.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,700|Raleway:300,400,700);"]);
// Module
exports.push([module.i, "* {\n  font-family: 'Raleway', 'M PLUS 1p', sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background: #e6e6e6;\n  margin: 0;\n  padding: 0; }\n\n.home {\n  font-weight: 300;\n  color: #fff;\n  background: #000;\n  text-align: center;\n  display: block;\n  width: 500px;\n  margin: 50px auto;\n  padding: 50px 50px;\n  border-radius: 5px;\n  letter-spacing: 0.05em;\n  word-wrap: break-word; }\n\n.navbarContainer {\n  background: #0e0c33;\n  height: 60px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between; }\n\n.button:hover {\n  transition: 0.3s;\n  background: #e6e6e6; }\n\n.button {\n  width: 60px;\n  height: 60px; }\n\n.buttonClick {\n  width: 60px;\n  background: #e6e6e6;\n  height: 60px; }\n\n.buttonsConts {\n  display: flex;\n  justify-content: space-between;\n  width: 12%; }\n\n.personName {\n  color: white; }\n\n.registerForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  margin-left: 30vw;\n  height: 80vh; }\n\n.input {\n  height: 40px;\n  margin-top: -30px;\n  font-size: 20px;\n  text-align: center; }\n\n.warningInput {\n  height: 40px;\n  margin-top: -30px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid red; }\n\n.submitButton {\n  height: 40px;\n  width: 90px;\n  background: #0e0c33;\n  color: white;\n  font-size: 20px;\n  align-self: center; }\n\n.formSubtitles {\n  align-self: center; }\n\n.formTitle {\n  font-size: 40px;\n  align-self: center; }\n\n.welcomeTitle {\n  text-align: center; }\n\n.welcomeGif {\n  margin-left: 34%;\n  height: 70vh; }\n\n.secretContainer {\n  background-image: url(\"https://media2.giphy.com/media/uBYtzxxLHhxPq/source.gif\");\n  background-repeat: no-repeat;\n  height: 90.4vh;\n  width: 100vw;\n  background-size: cover; }\n\n.secretTitle {\n  color: white;\n  font-size: 30px;\n  margin-left: 20%;\n  padding-top: 8%; }\n\n.footer {\n  background: #0e0c33;\n  height: 50px;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  color: white;\n  text-align: center;\n  display: flex;\n  justify-content: center; }\n\n.footerContent {\n  display: inline;\n  margin-left: 20px; }\n\n.logo {\n  margin-left: 20px; }\n\n.forbidden {\n  font-size: 40px;\n  text-align: center;\n  margin-top: 20vh; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/public/stylesheets/scss/main.scss":
/*!***********************************************!*\
  !*** ./src/public/stylesheets/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: registerUser, logIn, logOut, me */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "me", function() { return me; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const addUser = user => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_USER"],
  payload: user
});


const registerUser = newUser => dispatch =>
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/register", newUser)
    .then(res => res.data)
    .then(user => dispatch(addUser(user)));

const logIn = user => dispatch =>
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/login", user)
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))

const logOut = () => dispatch =>
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/logout").then(() => dispatch(addUser(null)))

const me = () => dispatch =>
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/me")
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))
    .catch(() => dispatch(addUser(null)));



/***/ }),

/***/ "./src/store/constants/index.js":
/*!**************************************!*\
  !*** ./src/store/constants/index.js ***!
  \**************************************/
/*! exports provided: ADD_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
const ADD_USER = "ADD_USER";

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer/index.js");






const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(
  _reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(
    redux_thunk__WEBPACK_IMPORTED_MODULE_0__["default"], // nos permite despachar funciones
    redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a // buen middleware que registra las acciones
  )
);

/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/store/reducer/index.js":
/*!************************************!*\
  !*** ./src/store/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants/index.js");


const initialState = {
  user: null,
};

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_USER"]:
      return { ...state, user: action.payload };
    default:
      return state;
  }
});


/***/ }),

/***/ "./src/views/Index/Footer/index.jsx":
/*!******************************************!*\
  !*** ./src/views/Index/Footer/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.jpg */ "./src/views/Index/Footer/logo.jpg");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "",
    height: "100%"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footerContent"
  }, "This page belongs to Plataforma 5 Coding Bootcamp all rights reserved, January 2020."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "",
    height: "100%",
    className: "logo"
  }));
});

/***/ }),

/***/ "./src/views/Index/Footer/logo.jpg":
/*!*****************************************!*\
  !*** ./src/views/Index/Footer/logo.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../src/views/Index/Footer/logo.jpg");

/***/ }),

/***/ "./src/views/Index/LogIn/index.jsx":
/*!*****************************************!*\
  !*** ./src/views/Index/LogIn/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: "",
    password: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      formChange = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      validPass = _useState4[0],
      isValidPass = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      validName = _useState6[0],
      isValidName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var onChange = function onChange(e) {
    formChange(_objectSpread({}, form, _defineProperty({}, e.target.name, e.target.value)));
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    form.password ? isValidPass(true) : (isValidPass(false), setMessage("Fill the blank"));
    form.username ? isValidName(true) : (isValidName(false), setMessage("Fill the blank"));
    form.username && form.password && (dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__["logIn"])(form)).then(function () {
      return props.history.push("/secret");
    })["catch"](function () {
      setMessage("Invalid username or password");
      isValidName(false);
      isValidPass(false);
    }), setMessage(""));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "registerContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "registerForm",
    onChange: onChange,
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formTitle"
  }, "LOG IN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "formSubtitles"
  }, "USERNAME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    className: validName ? "input" : "warningInput"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "formSubtitles"
  }, "PASSWORD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    className: validPass ? "input" : "warningInput"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: "red"
    }
  }, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "submitButton"
  }, "SUBMIT")));
});

/***/ }),

/***/ "./src/views/Index/NavBar/index.jsx":
/*!******************************************!*\
  !*** ./src/views/Index/NavBar/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var styles = {
  active: {
    color: "black",
    fontSize: "43px",
    marginLeft: "8px",
    marginTop: "8px"
  },
  notActive: {
    color: "white",
    fontSize: "40px",
    marginLeft: "8px",
    marginTop: "8px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  });
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useRouteMatch"])({
    path: "/secret"
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    home: false,
    homeClick: false,
    register: false,
    registerClick: false,
    logIn: false,
    logInClick: false,
    logOut: false,
    logOutClick: false,
    secret: false,
    secretClick: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      activeChange = _useState2[1];

  var allFalse = function allFalse(onlytrue) {
    var obj = JSON.parse(JSON.stringify(active));

    for (var key in obj) {
      key !== onlytrue ? obj[key] = false : obj[key] = true;
    }

    activeChange(obj);
  };

  if (match && !active.secretClick) {
    allFalse("secretClick");
  }

  var location = window.location.pathname.slice(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (location) allFalse(location + "Click");else allFalse("homeClick");
  }, [location]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbarContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonsConts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active.homeClick ? "buttonClick" : "button",
    onMouseEnter: function onMouseEnter() {
      return activeChange(_objectSpread({}, active, {
        home: true
      }));
    },
    onMouseLeave: function onMouseLeave() {
      return activeChange(_objectSpread({}, active, {
        home: false
      }));
    },
    onClick: function onClick() {
      return allFalse("homeClick");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaHome"], {
    style: active.home || active.homeClick ? styles.active : styles.notActive
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/secret"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active.secretClick ? "buttonClick" : "button",
    onMouseEnter: function onMouseEnter() {
      return activeChange(_objectSpread({}, active, {
        secret: true
      }));
    },
    onMouseLeave: function onMouseLeave() {
      return activeChange(_objectSpread({}, active, {
        secret: false
      }));
    },
    onClick: function onClick() {
      return allFalse("secretClick");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__["GiKey"], {
    style: active.secret || active.secretClick ? styles.active : styles.notActive
  })))), !user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonsConts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/register"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active.registerClick ? "buttonClick" : "button",
    onMouseEnter: function onMouseEnter() {
      return activeChange(_objectSpread({}, active, {
        register: true
      }));
    },
    onMouseLeave: function onMouseLeave() {
      return activeChange(_objectSpread({}, active, {
        register: false
      }));
    },
    onClick: function onClick() {
      return allFalse("registerClick");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFileSignature"], {
    style: active.register || active.registerClick ? styles.active : styles.notActive
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/logIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active.logInClick ? "buttonClick" : "button",
    onMouseEnter: function onMouseEnter() {
      return activeChange(_objectSpread({}, active, {
        logIn: true
      }));
    },
    onMouseLeave: function onMouseLeave() {
      return activeChange(_objectSpread({}, active, {
        logIn: false
      }));
    },
    onClick: function onClick() {
      return allFalse("logInClick");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaSignInAlt"], {
    style: active.logIn || active.logInClick ? styles.active : styles.notActive
  })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonsConts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "personName"
  }, "Hi ", user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button",
    onMouseEnter: function onMouseEnter() {
      return activeChange(_objectSpread({}, active, {
        logOut: true
      }));
    },
    onMouseLeave: function onMouseLeave() {
      return activeChange(_objectSpread({}, active, {
        logOut: false
      }));
    },
    onClick: function onClick() {
      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_5__["logOut"])());
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaSignOutAlt"], {
    style: active.logOut ? styles.active : styles.notActive
  }))));
});

/***/ }),

/***/ "./src/views/Index/Register/index.jsx":
/*!********************************************!*\
  !*** ./src/views/Index/Register/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: "",
    password: "",
    validatePassword: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      formChange = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      valid = _useState4[0],
      areValid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      validName = _useState6[0],
      isValidName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var onChange = function onChange(e) {
    formChange(_objectSpread({}, form, _defineProperty({}, e.target.name, e.target.value)));
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    form.password ? form.password === form.validatePassword ? areValid(true) : (areValid(false), setMessage("Passwords do not match")) : (areValid(false), setMessage("Fill the blank"));
    form.username ? isValidName(true) : (isValidName(false), setMessage("Fill the blank"));
    form.username && form.password && form.password === form.validatePassword && (dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__["registerUser"])({
      username: form.username,
      password: form.password
    })).then(function () {
      return props.history.push("/secret");
    })["catch"](function () {
      setMessage("Something went wrong!");
      isValidName(false);
      areValid(false);
    }), setMessage(""));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "registerContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "registerForm",
    onChange: onChange,
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formTitle"
  }, "REGISTER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "formSubtitles"
  }, "USERNAME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    className: validName ? "input" : "warningInput"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "formSubtitles"
  }, "PASSWORD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    className: valid ? "input" : "warningInput"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "formSubtitles"
  }, "VALIDATE PASSWORD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "validatePassword",
    className: valid ? "input" : "warningInput"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: "red"
    }
  }, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "submitButton"
  }, "SUBMIT")));
});

/***/ }),

/***/ "./src/views/Index/Secret/index.jsx":
/*!******************************************!*\
  !*** ./src/views/Index/Secret/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  });
  return user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "secretContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "secretTitle"
  }, "CONGRATULATIONS YOU REACHED THE SECRET VIEW!!")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "forbidden"
  }, "ERROR 401 UNAUTHORIZED", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You must be logged in order to reach the secret view."));
});

/***/ }),

/***/ "./src/views/Index/Welcome.jsx":
/*!*************************************!*\
  !*** ./src/views/Index/Welcome.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Welcome = function Welcome() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "welcomeTitle"
  }, "WELCOME TO THE PASSPORT WORKSHOP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://media.giphy.com/media/xT9IgjtcwezrAM39WE/giphy.gif",
    alt: "",
    className: "welcomeGif"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./src/views/Root.jsx":
/*!****************************!*\
  !*** ./src/views/Root.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/stylesheets/scss/main.scss */ "./src/public/stylesheets/scss/main.scss");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.jsx */ "./src/views/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");








var Root = function Root() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null), document.getElementById("root"));

/***/ }),

/***/ "./src/views/index.jsx":
/*!*****************************!*\
  !*** ./src/views/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/stylesheets/scss/main.scss */ "./src/public/stylesheets/scss/main.scss");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Index_Welcome_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index/Welcome.jsx */ "./src/views/Index/Welcome.jsx");
/* harmony import */ var _Index_NavBar_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Index/NavBar/index.jsx */ "./src/views/Index/NavBar/index.jsx");
/* harmony import */ var _Index_Register_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Index/Register/index.jsx */ "./src/views/Index/Register/index.jsx");
/* harmony import */ var _Index_LogIn_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Index/LogIn/index.jsx */ "./src/views/Index/LogIn/index.jsx");
/* harmony import */ var _Index_Secret_index_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Index/Secret/index.jsx */ "./src/views/Index/Secret/index.jsx");
/* harmony import */ var _Index_Footer_index_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Index/Footer/index.jsx */ "./src/views/Index/Footer/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");












/* harmony default export */ __webpack_exports__["default"] = (function () {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_11__["me"])());
  }, []);
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.user;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Index_NavBar_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _Index_Welcome_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), !user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/register",
    component: _Index_Register_index_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), !user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/logIn",
    component: _Index_LogIn_index_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/secret",
    component: _Index_Secret_index_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Index_Footer_index_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null));
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzPzZhYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L0Zvb3Rlci9sb2dvLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSW5kZXgvTG9nSW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9SZWdpc3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L1NlY3JldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L1dlbGNvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ28iLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmb3JtIiwiZm9ybUNoYW5nZSIsInZhbGlkUGFzcyIsImlzVmFsaWRQYXNzIiwidmFsaWROYW1lIiwiaXNWYWxpZE5hbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dJbiIsInRoZW4iLCJoaXN0b3J5IiwicHVzaCIsImNvbG9yIiwic3R5bGVzIiwiYWN0aXZlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibm90QWN0aXZlIiwidXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYXRjaCIsInVzZVJvdXRlTWF0Y2giLCJwYXRoIiwiaG9tZSIsImhvbWVDbGljayIsInJlZ2lzdGVyIiwicmVnaXN0ZXJDbGljayIsImxvZ0luQ2xpY2siLCJsb2dPdXQiLCJsb2dPdXRDbGljayIsInNlY3JldCIsInNlY3JldENsaWNrIiwiYWN0aXZlQ2hhbmdlIiwiYWxsRmFsc2UiLCJvbmx5dHJ1ZSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImtleSIsImxvY2F0aW9uIiwid2luZG93IiwicGF0aG5hbWUiLCJzbGljZSIsInVzZUVmZmVjdCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2YWxpZCIsImFyZVZhbGlkIiwicmVnaXN0ZXJVc2VyIiwiV2VsY29tZSIsIlJvb3QiLCJzdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZSIsIkluZGV4V2VsY29tZSIsIlJlZ2lzdGVyIiwiTG9nSW4iLCJTZWNyZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQSxjQUFjLFFBQVMsa0dBQWtHO0FBQ3pIO0FBQ0EsY0FBYyxRQUFTLE1BQU0sb0RBQW9ELEVBQUUsT0FBTywyQkFBMkIsRUFBRSxVQUFVLHdCQUF3QixjQUFjLGVBQWUsRUFBRSxXQUFXLHFCQUFxQixnQkFBZ0IscUJBQXFCLHVCQUF1QixtQkFBbUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLDJCQUEyQiwwQkFBMEIsRUFBRSxzQkFBc0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsa0JBQWtCLG1DQUFtQyxFQUFFLG1CQUFtQixxQkFBcUIsd0JBQXdCLEVBQUUsYUFBYSxnQkFBZ0IsaUJBQWlCLEVBQUUsa0JBQWtCLGdCQUFnQix3QkFBd0IsaUJBQWlCLEVBQUUsbUJBQW1CLGtCQUFrQixtQ0FBbUMsZUFBZSxFQUFFLGlCQUFpQixpQkFBaUIsRUFBRSxtQkFBbUIsa0JBQWtCLDJCQUEyQixrQ0FBa0MsZUFBZSxzQkFBc0IsaUJBQWlCLEVBQUUsWUFBWSxpQkFBaUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsRUFBRSxtQkFBbUIsaUJBQWlCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDBCQUEwQixFQUFFLG1CQUFtQixpQkFBaUIsZ0JBQWdCLHdCQUF3QixpQkFBaUIsb0JBQW9CLHVCQUF1QixFQUFFLG9CQUFvQix1QkFBdUIsRUFBRSxnQkFBZ0Isb0JBQW9CLHVCQUF1QixFQUFFLG1CQUFtQix1QkFBdUIsRUFBRSxpQkFBaUIscUJBQXFCLGlCQUFpQixFQUFFLHNCQUFzQix1RkFBdUYsaUNBQWlDLG1CQUFtQixpQkFBaUIsMkJBQTJCLEVBQUUsa0JBQWtCLGlCQUFpQixvQkFBb0IscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsd0JBQXdCLGlCQUFpQixpQkFBaUIsdUJBQXVCLGNBQWMsaUJBQWlCLHVCQUF1QixrQkFBa0IsNEJBQTRCLEVBQUUsb0JBQW9CLG9CQUFvQixzQkFBc0IsRUFBRSxXQUFXLHNCQUFzQixFQUFFLGdCQUFnQixvQkFBb0IsdUJBQXVCLHFCQUFxQixFQUFFO0FBQ3B2RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxVQUFVLG1CQUFPLENBQUMsNEpBQWlGO0FBQ25HLDBCQUEwQixtQkFBTyxDQUFDLDJPQUFnSDs7QUFFbEo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNkOztBQUUxQjtBQUNBLFFBQVEsbURBQVE7QUFDaEI7QUFDQSxDQUFDOzs7QUFHTTtBQUNQLEVBQUUsNENBQUs7QUFDUDtBQUNBOztBQUVPO0FBQ1AsRUFBRSw0Q0FBSztBQUNQO0FBQ0E7O0FBRU87QUFDUCxFQUFFLDRDQUFLOztBQUVBO0FBQ1AsRUFBRSw0Q0FBSztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFPLDRCOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRTtBQUNTO0FBQ2pCOzs7QUFHcEMsY0FBYyx5REFBVztBQUN6QixFQUFFLGdEQUFXO0FBQ2IsRUFBRSw2REFBZTtBQUNqQixJQUFJLG1EQUFlO0FBQ25CLElBQUksbURBQWdCO0FBQ3BCO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLFNBQVMsbURBQVE7QUFDakIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLDJFQUFNO0FBQ25CLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssT0FBRyxFQUFFQSxpREFBVjtBQUFnQixPQUFHLEVBQUMsRUFBcEI7QUFBdUIsVUFBTSxFQUFDO0FBQTlCLElBREYsRUFFRTtBQUFHLGFBQVMsRUFBQztBQUFiLDRGQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUVBLGlEQUFWO0FBQWdCLE9BQUcsRUFBQyxFQUFwQjtBQUF1QixVQUFNLEVBQUMsTUFBOUI7QUFBcUMsYUFBUyxFQUFDO0FBQS9DLElBSEYsQ0FERjtBQU9ELENBUkQsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBZSxvRkFBdUIsdUNBQXVDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0U7QUFDQTtBQUNBO0FBRWUseUVBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUR3QixrQkFFR0Msc0RBQVEsQ0FBQztBQUNsQ0MsWUFBUSxFQUFFLEVBRHdCO0FBRWxDQyxZQUFRLEVBQUU7QUFGd0IsR0FBRCxDQUZYO0FBQUE7QUFBQSxNQUVqQkMsSUFGaUI7QUFBQSxNQUVYQyxVQUZXOztBQUFBLG1CQU1TSixzREFBUSxDQUFDLElBQUQsQ0FOakI7QUFBQTtBQUFBLE1BTWpCSyxTQU5pQjtBQUFBLE1BTU5DLFdBTk07O0FBQUEsbUJBT1NOLHNEQUFRLENBQUMsSUFBRCxDQVBqQjtBQUFBO0FBQUEsTUFPakJPLFNBUGlCO0FBQUEsTUFPTkMsV0FQTTs7QUFBQSxtQkFRTVIsc0RBQVEsQ0FBQyxFQUFELENBUmQ7QUFBQTtBQUFBLE1BUWpCUyxPQVJpQjtBQUFBLE1BUVJDLFVBUlE7O0FBU3hCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLENBQUMsRUFBSTtBQUNwQlIsY0FBVSxtQkFBTUQsSUFBTixzQkFBYVMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQXRCLEVBQTZCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBdEMsR0FBVjtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosQ0FBQyxFQUFJO0FBQ3BCQSxLQUFDLENBQUNLLGNBQUY7QUFDQWQsUUFBSSxDQUFDRCxRQUFMLEdBQ0lJLFdBQVcsQ0FBQyxJQUFELENBRGYsSUFFS0EsV0FBVyxDQUFDLEtBQUQsQ0FBWCxFQUFvQkksVUFBVSxDQUFDLGdCQUFELENBRm5DO0FBR0FQLFFBQUksQ0FBQ0YsUUFBTCxHQUNJTyxXQUFXLENBQUMsSUFBRCxDQURmLElBRUtBLFdBQVcsQ0FBQyxLQUFELENBQVgsRUFBb0JFLFVBQVUsQ0FBQyxnQkFBRCxDQUZuQztBQUdBUCxRQUFJLENBQUNGLFFBQUwsSUFDRUUsSUFBSSxDQUFDRCxRQURQLEtBRUdKLFFBQVEsQ0FBQ29CLDREQUFLLENBQUNmLElBQUQsQ0FBTixDQUFSLENBQXNCZ0IsSUFBdEIsQ0FBMkI7QUFBQSxhQUFJdEIsS0FBSyxDQUFDdUIsT0FBTixDQUFjQyxJQUFkLENBQW1CLFNBQW5CLENBQUo7QUFBQSxLQUEzQixXQUFvRSxZQUFNO0FBQ3pFWCxnQkFBVSxDQUFDLDhCQUFELENBQVY7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxLQUpBLEdBS0RJLFVBQVUsQ0FBQyxFQUFELENBUFo7QUFRRCxHQWhCRDs7QUFrQkEsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBK0IsWUFBUSxFQUFFQyxRQUF6QztBQUFtRCxZQUFRLEVBQUVLO0FBQTdELEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixjQURGLEVBRUU7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQkFGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLGFBQVMsRUFBRVQsU0FBUyxHQUFHLE9BQUgsR0FBYTtBQUhuQyxJQUhGLEVBUUU7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQkFSRixFQVNFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLGFBQVMsRUFBRUYsU0FBUyxHQUFHLE9BQUgsR0FBYTtBQUhuQyxJQVRGLEVBY0U7QUFBSyxTQUFLLEVBQUU7QUFBRWlCLFdBQUssRUFBRTtBQUFUO0FBQVosS0FBK0JiLE9BQS9CLENBZEYsRUFlRTtBQUFRLGFBQVMsRUFBQztBQUFsQixjQWZGLENBREYsQ0FERjtBQXFCRCxDQW5ERCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTWMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNORixTQUFLLEVBQUUsT0FERDtBQUVORyxZQUFRLEVBQUUsTUFGSjtBQUdOQyxjQUFVLEVBQUUsS0FITjtBQUlOQyxhQUFTLEVBQUU7QUFKTCxHQURLO0FBT2JDLFdBQVMsRUFBRTtBQUNUTixTQUFLLEVBQUUsT0FERTtBQUVURyxZQUFRLEVBQUUsTUFGRDtBQUdUQyxjQUFVLEVBQUUsS0FISDtBQUlUQyxhQUFTLEVBQUU7QUFKRjtBQVBFLENBQWY7QUFlZSwyRUFBTTtBQUNuQixNQUFNRSxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsSUFBVjtBQUFBLEdBQU4sQ0FBeEI7QUFDQSxNQUFJRyxLQUFLLEdBQUdDLHNFQUFhLENBQUM7QUFDeEJDLFFBQUksRUFBRTtBQURrQixHQUFELENBQXpCO0FBR0EsTUFBTXBDLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBTG1CLGtCQU1ZQyxzREFBUSxDQUFDO0FBQ3RDbUMsUUFBSSxFQUFFLEtBRGdDO0FBRXRDQyxhQUFTLEVBQUUsS0FGMkI7QUFHdENDLFlBQVEsRUFBRSxLQUg0QjtBQUl0Q0MsaUJBQWEsRUFBRSxLQUp1QjtBQUt0Q3BCLFNBQUssRUFBRSxLQUwrQjtBQU10Q3FCLGNBQVUsRUFBRSxLQU4wQjtBQU90Q0MsVUFBTSxFQUFFLEtBUDhCO0FBUXRDQyxlQUFXLEVBQUUsS0FSeUI7QUFTdENDLFVBQU0sRUFBRSxLQVQ4QjtBQVV0Q0MsZUFBVyxFQUFFO0FBVnlCLEdBQUQsQ0FOcEI7QUFBQTtBQUFBLE1BTVpuQixNQU5ZO0FBQUEsTUFNSm9CLFlBTkk7O0FBa0JuQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxRQUFRLEVBQUk7QUFDM0IsUUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUxQixNQUFmLENBQVgsQ0FBWjs7QUFDQSxTQUFLLElBQU0yQixHQUFYLElBQWtCSixHQUFsQixFQUF1QjtBQUNyQkksU0FBRyxLQUFLTCxRQUFSLEdBQW9CQyxHQUFHLENBQUNJLEdBQUQsQ0FBSCxHQUFXLEtBQS9CLEdBQXlDSixHQUFHLENBQUNJLEdBQUQsQ0FBSCxHQUFXLElBQXBEO0FBQ0Q7O0FBQ0RQLGdCQUFZLENBQUNHLEdBQUQsQ0FBWjtBQUNELEdBTkQ7O0FBT0EsTUFBSWYsS0FBSyxJQUFJLENBQUNSLE1BQU0sQ0FBQ21CLFdBQXJCLEVBQWtDO0FBQ2hDRSxZQUFRLENBQUMsYUFBRCxDQUFSO0FBQ0Q7O0FBQ0QsTUFBTU8sUUFBUSxHQUFHQyxNQUFNLENBQUNELFFBQVAsQ0FBZ0JFLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixDQUEvQixDQUFqQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixRQUFKLEVBQWNQLFFBQVEsQ0FBQ08sUUFBUSxHQUFHLE9BQVosQ0FBUixDQUFkLEtBQ0tQLFFBQVEsQ0FBQyxXQUFELENBQVI7QUFDTixHQUhRLEVBR04sQ0FBQ08sUUFBRCxDQUhNLENBQVQ7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQUNFO0FBQ0UsYUFBUyxFQUFFNUIsTUFBTSxDQUFDWSxTQUFQLEdBQW1CLGFBQW5CLEdBQW1DLFFBRGhEO0FBRUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1RLFlBQVksbUJBQU1wQixNQUFOO0FBQWNXLFlBQUksRUFBRTtBQUFwQixTQUFsQjtBQUFBLEtBRmhCO0FBR0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1TLFlBQVksbUJBQU1wQixNQUFOO0FBQWNXLFlBQUksRUFBRTtBQUFwQixTQUFsQjtBQUFBLEtBSGhCO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTVUsUUFBUSxDQUFDLFdBQUQsQ0FBZDtBQUFBO0FBSlgsS0FNRSwyREFBQyxxREFBRDtBQUNFLFNBQUssRUFDSHJCLE1BQU0sQ0FBQ1csSUFBUCxJQUFlWCxNQUFNLENBQUNZLFNBQXRCLEdBQ0liLE1BQU0sQ0FBQ0MsTUFEWCxHQUVJRCxNQUFNLENBQUNLO0FBSmYsSUFORixDQURGLENBREYsRUFpQkUsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQUNFO0FBQ0UsYUFBUyxFQUFFSixNQUFNLENBQUNtQixXQUFQLEdBQXFCLGFBQXJCLEdBQXFDLFFBRGxEO0FBRUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1DLFlBQVksbUJBQU1wQixNQUFOO0FBQWNrQixjQUFNLEVBQUU7QUFBdEIsU0FBbEI7QUFBQSxLQUZoQjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNRSxZQUFZLG1CQUFNcEIsTUFBTjtBQUFja0IsY0FBTSxFQUFFO0FBQXRCLFNBQWxCO0FBQUEsS0FIaEI7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNRyxRQUFRLENBQUMsYUFBRCxDQUFkO0FBQUE7QUFKWCxLQU1FLDJEQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUNIckIsTUFBTSxDQUFDa0IsTUFBUCxJQUFpQmxCLE1BQU0sQ0FBQ21CLFdBQXhCLEdBQ0lwQixNQUFNLENBQUNDLE1BRFgsR0FFSUQsTUFBTSxDQUFDSztBQUpmLElBTkYsQ0FERixDQWpCRixDQURGLEVBb0NHLENBQUNDLElBQUQsR0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQUNFO0FBQ0UsYUFBUyxFQUFFTCxNQUFNLENBQUNjLGFBQVAsR0FBdUIsYUFBdkIsR0FBdUMsUUFEcEQ7QUFFRSxnQkFBWSxFQUFFO0FBQUEsYUFBTU0sWUFBWSxtQkFBTXBCLE1BQU47QUFBY2EsZ0JBQVEsRUFBRTtBQUF4QixTQUFsQjtBQUFBLEtBRmhCO0FBR0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1PLFlBQVksbUJBQU1wQixNQUFOO0FBQWNhLGdCQUFRLEVBQUU7QUFBeEIsU0FBbEI7QUFBQSxLQUhoQjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1RLFFBQVEsQ0FBQyxlQUFELENBQWQ7QUFBQTtBQUpYLEtBTUUsMkRBQUMsOERBQUQ7QUFDRSxTQUFLLEVBQ0hyQixNQUFNLENBQUNhLFFBQVAsSUFBbUJiLE1BQU0sQ0FBQ2MsYUFBMUIsR0FDSWYsTUFBTSxDQUFDQyxNQURYLEdBRUlELE1BQU0sQ0FBQ0s7QUFKZixJQU5GLENBREYsQ0FERixFQWlCRSwyREFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULEtBQ0U7QUFDRSxhQUFTLEVBQUVKLE1BQU0sQ0FBQ2UsVUFBUCxHQUFvQixhQUFwQixHQUFvQyxRQURqRDtBQUVFLGdCQUFZLEVBQUU7QUFBQSxhQUFNSyxZQUFZLG1CQUFNcEIsTUFBTjtBQUFjTixhQUFLLEVBQUU7QUFBckIsU0FBbEI7QUFBQSxLQUZoQjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNMEIsWUFBWSxtQkFBTXBCLE1BQU47QUFBY04sYUFBSyxFQUFFO0FBQXJCLFNBQWxCO0FBQUEsS0FIaEI7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNMkIsUUFBUSxDQUFDLFlBQUQsQ0FBZDtBQUFBO0FBSlgsS0FNRSwyREFBQywwREFBRDtBQUNFLFNBQUssRUFDSHJCLE1BQU0sQ0FBQ04sS0FBUCxJQUFnQk0sTUFBTSxDQUFDZSxVQUF2QixHQUNJaEIsTUFBTSxDQUFDQyxNQURYLEdBRUlELE1BQU0sQ0FBQ0s7QUFKZixJQU5GLENBREYsQ0FqQkYsQ0FERCxHQW9DQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixZQUE4QkMsSUFBSSxDQUFDNUIsUUFBbkMsQ0FERixFQUVFO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxnQkFBWSxFQUFFO0FBQUEsYUFBTTJDLFlBQVksbUJBQU1wQixNQUFOO0FBQWNnQixjQUFNLEVBQUU7QUFBdEIsU0FBbEI7QUFBQSxLQUZoQjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNSSxZQUFZLG1CQUFNcEIsTUFBTjtBQUFjZ0IsY0FBTSxFQUFFO0FBQXRCLFNBQWxCO0FBQUEsS0FIaEI7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNMUMsUUFBUSxDQUFDMEMsNkRBQU0sRUFBUCxDQUFkO0FBQUE7QUFKWCxLQU1FLDJEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFFaEIsTUFBTSxDQUFDZ0IsTUFBUCxHQUFnQmpCLE1BQU0sQ0FBQ0MsTUFBdkIsR0FBZ0NELE1BQU0sQ0FBQ0s7QUFEaEQsSUFORixDQUZGLENBeEVKLENBREY7QUF5RkQsQ0E1SEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFFZSx5RUFBQy9CLEtBQUQsRUFBVztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUR3QixrQkFFR0Msc0RBQVEsQ0FBQztBQUNsQ0MsWUFBUSxFQUFFLEVBRHdCO0FBRWxDQyxZQUFRLEVBQUUsRUFGd0I7QUFHbEN1RCxvQkFBZ0IsRUFBRTtBQUhnQixHQUFELENBRlg7QUFBQTtBQUFBLE1BRWpCdEQsSUFGaUI7QUFBQSxNQUVYQyxVQUZXOztBQUFBLG1CQU9FSixzREFBUSxDQUFDLElBQUQsQ0FQVjtBQUFBO0FBQUEsTUFPakIwRCxLQVBpQjtBQUFBLE1BT1ZDLFFBUFU7O0FBQUEsbUJBUVMzRCxzREFBUSxDQUFDLElBQUQsQ0FSakI7QUFBQTtBQUFBLE1BUWpCTyxTQVJpQjtBQUFBLE1BUU5DLFdBUk07O0FBQUEsbUJBU01SLHNEQUFRLENBQUMsRUFBRCxDQVRkO0FBQUE7QUFBQSxNQVNqQlMsT0FUaUI7QUFBQSxNQVNSQyxVQVRROztBQVd4QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxDQUFDLEVBQUk7QUFDcEJSLGNBQVUsbUJBQ0xELElBREssc0JBRVBTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUZGLEVBRVNGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUZsQixHQUFWO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixDQUFDLEVBQUk7QUFDcEJBLEtBQUMsQ0FBQ0ssY0FBRjtBQUNBZCxRQUFJLENBQUNELFFBQUwsR0FDSUMsSUFBSSxDQUFDRCxRQUFMLEtBQWtCQyxJQUFJLENBQUNzRCxnQkFBdkIsR0FDRUUsUUFBUSxDQUFDLElBQUQsQ0FEVixJQUVHQSxRQUFRLENBQUMsS0FBRCxDQUFSLEVBQWlCakQsVUFBVSxDQUFDLHdCQUFELENBRjlCLENBREosSUFJS2lELFFBQVEsQ0FBQyxLQUFELENBQVIsRUFBaUJqRCxVQUFVLENBQUMsZ0JBQUQsQ0FKaEM7QUFLQVAsUUFBSSxDQUFDRixRQUFMLEdBQ0lPLFdBQVcsQ0FBQyxJQUFELENBRGYsSUFFS0EsV0FBVyxDQUFDLEtBQUQsQ0FBWCxFQUFvQkUsVUFBVSxDQUFDLGdCQUFELENBRm5DO0FBR0FQLFFBQUksQ0FBQ0YsUUFBTCxJQUNFRSxJQUFJLENBQUNELFFBRFAsSUFFRUMsSUFBSSxDQUFDRCxRQUFMLEtBQWtCQyxJQUFJLENBQUNzRCxnQkFGekIsS0FHRzNELFFBQVEsQ0FDUDhELG1FQUFZLENBQUM7QUFBRTNELGNBQVEsRUFBRUUsSUFBSSxDQUFDRixRQUFqQjtBQUEyQkMsY0FBUSxFQUFFQyxJQUFJLENBQUNEO0FBQTFDLEtBQUQsQ0FETCxDQUFSLENBR0VpQixJQUhGLENBR087QUFBQSxhQUFNdEIsS0FBSyxDQUFDdUIsT0FBTixDQUFjQyxJQUFkLENBQW1CLFNBQW5CLENBQU47QUFBQSxLQUhQLFdBSVEsWUFBTTtBQUNYWCxnQkFBVSxDQUFDLHVCQUFELENBQVY7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQW1ELGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxLQVJGLEdBU0RqRCxVQUFVLENBQUMsRUFBRCxDQVpaO0FBYUQsR0F2QkQ7O0FBd0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQStCLFlBQVEsRUFBRUMsUUFBekM7QUFBbUQsWUFBUSxFQUFFSztBQUE3RCxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsZ0JBREYsRUFFRTtBQUFJLGFBQVMsRUFBQztBQUFkLGdCQUZGLEVBR0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsYUFBUyxFQUFFVCxTQUFTLEdBQUcsT0FBSCxHQUFhO0FBSG5DLElBSEYsRUFRRTtBQUFJLGFBQVMsRUFBQztBQUFkLGdCQVJGLEVBU0U7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsYUFBUyxFQUFFbUQsS0FBSyxHQUFHLE9BQUgsR0FBYTtBQUgvQixJQVRGLEVBY0U7QUFBSSxhQUFTLEVBQUM7QUFBZCx5QkFkRixFQWVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsa0JBRlA7QUFHRSxhQUFTLEVBQUVBLEtBQUssR0FBRyxPQUFILEdBQWE7QUFIL0IsSUFmRixFQW9CRTtBQUFLLFNBQUssRUFBRTtBQUFFcEMsV0FBSyxFQUFFO0FBQVQ7QUFBWixLQUErQmIsT0FBL0IsQ0FwQkYsRUFxQkU7QUFBUSxhQUFTLEVBQUM7QUFBbEIsY0FyQkYsQ0FERixDQURGO0FBMkJELENBckVELEU7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLDJFQUFNO0FBQ25CLE1BQU1vQixJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsSUFBVjtBQUFBLEdBQU4sQ0FBeEI7QUFDQSxTQUFPQSxJQUFJLEdBQ1Q7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYscURBREYsQ0FEUyxHQU9UO0FBQUssYUFBUyxFQUFDO0FBQWYsK0JBRUUsOEhBRkYsQ0FQRjtBQWNELENBaEJELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU9nQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFLO0FBRWxCLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsd0NBREYsRUFFRTtBQUNFLE9BQUcsRUFBQyw0REFETjtBQUVFLE9BQUcsRUFBQyxFQUZOO0FBR0UsYUFBUyxFQUFDO0FBSFosSUFGRixDQURGO0FBVUQsQ0FaSDs7QUFjZUEsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFNBQ0UsMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLDhDQUFLQTtBQUF0QixLQUNFLDJEQUFDLDhEQUFELFFBQ0UsMkRBQUMsa0RBQUQsT0FERixDQURGLENBREY7QUFPRCxDQVJEOztBQVVBQyx3REFBTSxDQUFDLDJEQUFDLElBQUQsT0FBRCxFQUFXQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWCxDQUFOLEM7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLDJFQUFNO0FBQ25CLE1BQU1wRSxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCO0FBQ0F5RCx5REFBUyxDQUFDLFlBQU07QUFDZDFELFlBQVEsQ0FBQ3FFLDBEQUFFLEVBQUgsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxNQUFNdEMsSUFBSSxHQUFHQyxnRUFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLElBQVY7QUFBQSxHQUFOLENBQXhCO0FBQ0EsU0FDRSx3RUFDRSwyREFBQywrREFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFzQixhQUFTLEVBQUV1QywwREFBWUE7QUFBN0MsSUFERixFQUVHLENBQUN2QyxJQUFELElBQVMsMkRBQUMsc0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsV0FBbEI7QUFBOEIsYUFBUyxFQUFFd0MsaUVBQVFBO0FBQWpELElBRlosRUFHRyxDQUFDeEMsSUFBRCxJQUFTLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLGFBQVMsRUFBRXlDLDhEQUFLQTtBQUEzQyxJQUhaLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsU0FBbEI7QUFBNEIsYUFBUyxFQUFFQywrREFBTUE7QUFBN0MsSUFKRixFQUtFLDJEQUFDLHlEQUFEO0FBQVUsTUFBRSxFQUFDO0FBQWIsSUFMRixDQUZGLEVBU0UsMkRBQUMsK0RBQUQsT0FURixDQURGO0FBYUQsQ0FuQkQsRSIsImZpbGUiOiJyb290LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJyb290XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvamF2YXNjcmlwdHMvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvdmlld3MvUm9vdC5qc3hcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NK1BMVVMrMXA6MzAwLDQwMCw3MDB8UmFsZXdheTozMDAsNDAwLDcwMCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCAnTSBQTFVTIDFwJywgc2Fucy1zZXJpZjsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uaG9tZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHBhZGRpbmc6IDUwcHggNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4ubmF2YmFyQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwZTBjMzM7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcblxcbi5idXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7IH1cXG5cXG4uYnV0dG9uQ2xpY2sge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmJ1dHRvbnNDb250cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEyJTsgfVxcblxcbi5wZXJzb25OYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5yZWdpc3RlckZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW4tbGVmdDogMzB2dztcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbi5pbnB1dCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi53YXJuaW5nSW5wdXQge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IH1cXG5cXG4uc3VibWl0QnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgYmFja2dyb3VuZDogIzBlMGMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5mb3JtU3VidGl0bGVzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5mb3JtVGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuLndlbGNvbWVUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud2VsY29tZUdpZiB7XFxuICBtYXJnaW4tbGVmdDogMzQlO1xcbiAgaGVpZ2h0OiA3MHZoOyB9XFxuXFxuLnNlY3JldENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWVkaWEyLmdpcGh5LmNvbS9tZWRpYS91Qll0enh4TEhoeFBxL3NvdXJjZS5naWZcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDkwLjR2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4uc2VjcmV0VGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXG4gIHBhZGRpbmctdG9wOiA4JTsgfVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogIzBlMGMzMztcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5mb290ZXJDb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cXG5cXG4uZm9yYmlkZGVuIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwdmg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgeyBBRERfVVNFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYWRkVXNlciA9IHVzZXIgPT4gKHtcbiAgdHlwZTogQUREX1VTRVIsXG4gIHBheWxvYWQ6IHVzZXJcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBuZXdVc2VyID0+IGRpc3BhdGNoID0+XG4gIEF4aW9zLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIG5ld1VzZXIpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxuICAgIC50aGVuKHVzZXIgPT4gZGlzcGF0Y2goYWRkVXNlcih1c2VyKSkpO1xuXG5leHBvcnQgY29uc3QgbG9nSW4gPSB1c2VyID0+IGRpc3BhdGNoID0+XG4gIEF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIHVzZXIpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxuICAgIC50aGVuKHVzZXIgPT4gZGlzcGF0Y2goYWRkVXNlcih1c2VyKSkpXG5cbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiBkaXNwYXRjaCA9PlxuICBBeGlvcy5nZXQoXCIvYXBpL2xvZ291dFwiKS50aGVuKCgpID0+IGRpc3BhdGNoKGFkZFVzZXIobnVsbCkpKVxuXG5leHBvcnQgY29uc3QgbWUgPSAoKSA9PiBkaXNwYXRjaCA9PlxuICBBeGlvcy5nZXQoXCIvYXBpL21lXCIpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxuICAgIC50aGVuKHVzZXIgPT4gZGlzcGF0Y2goYWRkVXNlcih1c2VyKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGFkZFVzZXIobnVsbCkpKTtcblxuIiwiZXhwb3J0IGNvbnN0IEFERF9VU0VSID0gXCJBRERfVVNFUlwiOyIsImltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgbG9nZ2VyTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBhcHBseU1pZGRsZXdhcmUoXG4gICAgdGh1bmtNaWRkbGV3YXJlLCAvLyBub3MgcGVybWl0ZSBkZXNwYWNoYXIgZnVuY2lvbmVzXG4gICAgbG9nZ2VyTWlkZGxld2FyZSAvLyBidWVuIG1pZGRsZXdhcmUgcXVlIHJlZ2lzdHJhIGxhcyBhY2Npb25lc1xuICApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCB7IEFERF9VU0VSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfVVNFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvLmpwZ1wiO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJDb250ZW50XCI+VGhpcyBwYWdlIGJlbG9uZ3MgdG8gUGxhdGFmb3JtYSA1IENvZGluZyBCb290Y2FtcCBhbGwgcmlnaHRzIHJlc2VydmVkLCBKYW51YXJ5IDIwMjAuPC9wPlxuICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cIlwiIGhlaWdodD1cIjEwMCVcIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vc3JjL3ZpZXdzL0luZGV4L0Zvb3Rlci9sb2dvLmpwZ1wiOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9nSW4gfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2Zvcm0sIGZvcm1DaGFuZ2VdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbdmFsaWRQYXNzLCBpc1ZhbGlkUGFzc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbGlkTmFtZSwgaXNWYWxpZE5hbWVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGZvcm1DaGFuZ2UoeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmb3JtLnBhc3N3b3JkXG4gICAgICA/IGlzVmFsaWRQYXNzKHRydWUpXG4gICAgICA6IChpc1ZhbGlkUGFzcyhmYWxzZSksIHNldE1lc3NhZ2UoXCJGaWxsIHRoZSBibGFua1wiKSk7XG4gICAgZm9ybS51c2VybmFtZVxuICAgICAgPyBpc1ZhbGlkTmFtZSh0cnVlKVxuICAgICAgOiAoaXNWYWxpZE5hbWUoZmFsc2UpLCBzZXRNZXNzYWdlKFwiRmlsbCB0aGUgYmxhbmtcIikpO1xuICAgIGZvcm0udXNlcm5hbWUgJiZcbiAgICAgIGZvcm0ucGFzc3dvcmQgJiZcbiAgICAgIChkaXNwYXRjaChsb2dJbihmb3JtKSkudGhlbigoKT0+cHJvcHMuaGlzdG9yeS5wdXNoKFwiL3NlY3JldFwiKSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRNZXNzYWdlKFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiKTtcbiAgICAgICAgaXNWYWxpZE5hbWUoZmFsc2UpO1xuICAgICAgICBpc1ZhbGlkUGFzcyhmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIHNldE1lc3NhZ2UoXCJcIikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RlckNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVnaXN0ZXJGb3JtXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1UaXRsZVwiPkxPRyBJTjwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybVN1YnRpdGxlc1wiPlVTRVJOQU1FPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt2YWxpZE5hbWUgPyBcImlucHV0XCIgOiBcIndhcm5pbmdJbnB1dFwifVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybVN1YnRpdGxlc1wiPlBBU1NXT1JEPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWRQYXNzID8gXCJpbnB1dFwiIDogXCJ3YXJuaW5nSW5wdXRcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIj5TVUJNSVQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRmFIb21lLFxuICBGYVNpZ25JbkFsdCxcbiAgRmFTaWduT3V0QWx0LFxuICBGYUZpbGVTaWduYXR1cmVcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBHaUtleSB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHsgTGluaywgdXNlUm91dGVNYXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ091dCB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hY3Rpb25zXCI7XG5jb25zdCBzdHlsZXMgPSB7XG4gIGFjdGl2ZToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgZm9udFNpemU6IFwiNDNweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiOHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjhweFwiXG4gIH0sXG4gIG5vdEFjdGl2ZToge1xuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgZm9udFNpemU6IFwiNDBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiOHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjhweFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xuICBsZXQgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoKHtcbiAgICBwYXRoOiBcIi9zZWNyZXRcIlxuICB9KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbYWN0aXZlLCBhY3RpdmVDaGFuZ2VdID0gdXNlU3RhdGUoe1xuICAgIGhvbWU6IGZhbHNlLFxuICAgIGhvbWVDbGljazogZmFsc2UsXG4gICAgcmVnaXN0ZXI6IGZhbHNlLFxuICAgIHJlZ2lzdGVyQ2xpY2s6IGZhbHNlLFxuICAgIGxvZ0luOiBmYWxzZSxcbiAgICBsb2dJbkNsaWNrOiBmYWxzZSxcbiAgICBsb2dPdXQ6IGZhbHNlLFxuICAgIGxvZ091dENsaWNrOiBmYWxzZSxcbiAgICBzZWNyZXQ6IGZhbHNlLFxuICAgIHNlY3JldENsaWNrOiBmYWxzZVxuICB9KTtcbiAgY29uc3QgYWxsRmFsc2UgPSBvbmx5dHJ1ZSA9PiB7XG4gICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhY3RpdmUpKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGtleSAhPT0gb25seXRydWUgPyAob2JqW2tleV0gPSBmYWxzZSkgOiAob2JqW2tleV0gPSB0cnVlKTtcbiAgICB9XG4gICAgYWN0aXZlQ2hhbmdlKG9iaik7XG4gIH07XG4gIGlmIChtYXRjaCAmJiAhYWN0aXZlLnNlY3JldENsaWNrKSB7XG4gICAgYWxsRmFsc2UoXCJzZWNyZXRDbGlja1wiKTtcbiAgfVxuICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYXRpb24pIGFsbEZhbHNlKGxvY2F0aW9uICsgXCJDbGlja1wiKTtcbiAgICBlbHNlIGFsbEZhbHNlKFwiaG9tZUNsaWNrXCIpO1xuICB9LCBbbG9jYXRpb25dKTtcbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNDb250c1wiPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZS5ob21lQ2xpY2sgPyBcImJ1dHRvbkNsaWNrXCIgOiBcImJ1dHRvblwifVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhY3RpdmVDaGFuZ2UoeyAuLi5hY3RpdmUsIGhvbWU6IHRydWUgfSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGFjdGl2ZUNoYW5nZSh7IC4uLmFjdGl2ZSwgaG9tZTogZmFsc2UgfSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGxGYWxzZShcImhvbWVDbGlja1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFIb21lXG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBhY3RpdmUuaG9tZSB8fCBhY3RpdmUuaG9tZUNsaWNrXG4gICAgICAgICAgICAgICAgICA/IHN0eWxlcy5hY3RpdmVcbiAgICAgICAgICAgICAgICAgIDogc3R5bGVzLm5vdEFjdGl2ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL3NlY3JldFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlLnNlY3JldENsaWNrID8gXCJidXR0b25DbGlja1wiIDogXCJidXR0b25cIn1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gYWN0aXZlQ2hhbmdlKHsgLi4uYWN0aXZlLCBzZWNyZXQ6IHRydWUgfSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGFjdGl2ZUNoYW5nZSh7IC4uLmFjdGl2ZSwgc2VjcmV0OiBmYWxzZSB9KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsbEZhbHNlKFwic2VjcmV0Q2xpY2tcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpS2V5XG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBhY3RpdmUuc2VjcmV0IHx8IGFjdGl2ZS5zZWNyZXRDbGlja1xuICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICA6IHN0eWxlcy5ub3RBY3RpdmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshdXNlciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zQ29udHNcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZS5yZWdpc3RlckNsaWNrID8gXCJidXR0b25DbGlja1wiIDogXCJidXR0b25cIn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhY3RpdmVDaGFuZ2UoeyAuLi5hY3RpdmUsIHJlZ2lzdGVyOiB0cnVlIH0pfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGFjdGl2ZUNoYW5nZSh7IC4uLmFjdGl2ZSwgcmVnaXN0ZXI6IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGxGYWxzZShcInJlZ2lzdGVyQ2xpY2tcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUZpbGVTaWduYXR1cmVcbiAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICBhY3RpdmUucmVnaXN0ZXIgfHwgYWN0aXZlLnJlZ2lzdGVyQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLm5vdEFjdGl2ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dJblwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZS5sb2dJbkNsaWNrID8gXCJidXR0b25DbGlja1wiIDogXCJidXR0b25cIn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhY3RpdmVDaGFuZ2UoeyAuLi5hY3RpdmUsIGxvZ0luOiB0cnVlIH0pfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGFjdGl2ZUNoYW5nZSh7IC4uLmFjdGl2ZSwgbG9nSW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGxGYWxzZShcImxvZ0luQ2xpY2tcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYVNpZ25JbkFsdFxuICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZS5sb2dJbiB8fCBhY3RpdmUubG9nSW5DbGlja1xuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMubm90QWN0aXZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc0NvbnRzXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGVyc29uTmFtZVwiPkhpIHt1c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhY3RpdmVDaGFuZ2UoeyAuLi5hY3RpdmUsIGxvZ091dDogdHJ1ZSB9KX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gYWN0aXZlQ2hhbmdlKHsgLi4uYWN0aXZlLCBsb2dPdXQ6IGZhbHNlIH0pfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gobG9nT3V0KCkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYVNpZ25PdXRBbHRcbiAgICAgICAgICAgICAgc3R5bGU9e2FjdGl2ZS5sb2dPdXQgPyBzdHlsZXMuYWN0aXZlIDogc3R5bGVzLm5vdEFjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbZm9ybSwgZm9ybUNoYW5nZV0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgdmFsaWRhdGVQYXNzd29yZDogXCJcIlxuICB9KTtcbiAgY29uc3QgW3ZhbGlkLCBhcmVWYWxpZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbGlkTmFtZSwgaXNWYWxpZE5hbWVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgZm9ybUNoYW5nZSh7XG4gICAgICAuLi5mb3JtLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcm0ucGFzc3dvcmRcbiAgICAgID8gZm9ybS5wYXNzd29yZCA9PT0gZm9ybS52YWxpZGF0ZVBhc3N3b3JkXG4gICAgICAgID8gYXJlVmFsaWQodHJ1ZSlcbiAgICAgICAgOiAoYXJlVmFsaWQoZmFsc2UpLCBzZXRNZXNzYWdlKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKSlcbiAgICAgIDogKGFyZVZhbGlkKGZhbHNlKSwgc2V0TWVzc2FnZShcIkZpbGwgdGhlIGJsYW5rXCIpKTtcbiAgICBmb3JtLnVzZXJuYW1lXG4gICAgICA/IGlzVmFsaWROYW1lKHRydWUpXG4gICAgICA6IChpc1ZhbGlkTmFtZShmYWxzZSksIHNldE1lc3NhZ2UoXCJGaWxsIHRoZSBibGFua1wiKSk7XG4gICAgZm9ybS51c2VybmFtZSAmJlxuICAgICAgZm9ybS5wYXNzd29yZCAmJlxuICAgICAgZm9ybS5wYXNzd29yZCA9PT0gZm9ybS52YWxpZGF0ZVBhc3N3b3JkICYmXG4gICAgICAoZGlzcGF0Y2goXG4gICAgICAgIHJlZ2lzdGVyVXNlcih7IHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLCBwYXNzd29yZDogZm9ybS5wYXNzd29yZCB9KVxuICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiBwcm9wcy5oaXN0b3J5LnB1c2goXCIvc2VjcmV0XCIpKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHNldE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgICAgICAgaXNWYWxpZE5hbWUoZmFsc2UpO1xuICAgICAgICAgIGFyZVZhbGlkKGZhbHNlKVxuICAgICAgICB9KSxcbiAgICAgIHNldE1lc3NhZ2UoXCJcIikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJDb250YWluZXJcIj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlZ2lzdGVyRm9ybVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtVGl0bGVcIj5SRUdJU1RFUjwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybVN1YnRpdGxlc1wiPlVTRVJOQU1FPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt2YWxpZE5hbWUgPyBcImlucHV0XCIgOiBcIndhcm5pbmdJbnB1dFwifVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybVN1YnRpdGxlc1wiPlBBU1NXT1JEPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWQgPyBcImlucHV0XCIgOiBcIndhcm5pbmdJbnB1dFwifVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybVN1YnRpdGxlc1wiPlZBTElEQVRFIFBBU1NXT1JEPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwidmFsaWRhdGVQYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt2YWxpZCA/IFwiaW5wdXRcIiA6IFwid2FybmluZ0lucHV0XCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCI+U1VCTUlUPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XG4gIHJldHVybiB1c2VyID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjcmV0Q29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldFRpdGxlXCI+XG4gICAgICAgIENPTkdSQVRVTEFUSU9OUyBZT1UgUkVBQ0hFRCBUSEUgU0VDUkVUIFZJRVchIVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JiaWRkZW5cIj5cbiAgICAgIEVSUk9SIDQwMSBVTkFVVEhPUklaRUQgXG4gICAgICA8cD5cbiAgICAgICAgWW91IG11c3QgYmUgbG9nZ2VkIGluIG9yZGVyIHRvIHJlYWNoIHRoZSBzZWNyZXQgdmlldy5cbiAgICAgICAgPC9wPiBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0ICBXZWxjb21lID0gKCk9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lVGl0bGVcIj5XRUxDT01FIFRPIFRIRSBQQVNTUE9SVCBXT1JLU0hPUDwvaDE+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS94VDlJZ2p0Y3dlenJBTTM5V0UvZ2lwaHkuZ2lmXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIndlbGNvbWVHaWZcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iLCJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vaW5kZXguanN4XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuY29uc3QgUm9vdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgUm91dGUsXG4gIFN3aXRjaCxcbiAgUmVkaXJlY3Rcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2Nzc1wiO1xuXG5pbXBvcnQgSW5kZXhXZWxjb21lIGZyb20gXCIuL0luZGV4L1dlbGNvbWUuanN4XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL0luZGV4L05hdkJhci9pbmRleC5qc3hcIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9JbmRleC9SZWdpc3Rlci9pbmRleC5qc3hcIjtcbmltcG9ydCBMb2dJbiBmcm9tIFwiLi9JbmRleC9Mb2dJbi9pbmRleC5qc3hcIjtcbmltcG9ydCBTZWNyZXQgZnJvbSBcIi4vSW5kZXgvU2VjcmV0L2luZGV4LmpzeFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9JbmRleC9Gb290ZXIvaW5kZXguanN4XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IG1lLCBjaGFuZ2VMb2NhdGlvbiB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKG1lKCkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtJbmRleFdlbGNvbWV9IC8+XG4gICAgICAgIHshdXNlciAmJiA8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+fVxuICAgICAgICB7IXVzZXIgJiYgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9nSW5cIiBjb21wb25lbnQ9e0xvZ0lufSAvPn1cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VjcmV0XCIgY29tcG9uZW50PXtTZWNyZXR9IC8+XG4gICAgICAgIDxSZWRpcmVjdCB0bz1cIi9cIiAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==