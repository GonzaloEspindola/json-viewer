/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsonViewer"] = factory();
	else
		root["JsonViewer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.json-viewer-empty-header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-height {\r\n  height: auto !important;\r\n}\r\n\r\n.rotate90 {\r\n  transform: rotate(0deg) !important;\r\n}\r\n\r\n.jv-wrap {\r\n  display: flex;\r\n}\r\n\r\n.jv-folder {\r\n  cursor: pointer;\r\n}\r\n\r\n/* for light theme */\r\n\r\n.jv-light-con {\r\n  background: #ffffff;\r\n  color: #000000;\r\n  font-family: 'Space Mono';\r\n  overflow: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.jv-light-symbol {\r\n  color: #0000ff;\r\n  font-weight: bold;\r\n}\r\n\r\n.jv-light-current {\r\n  line-height: 30px;\r\n  padding-left: 40px;\r\n  position: relative;\r\n}\r\n\r\n.jv-light-left {\r\n  display: inline-block;\r\n}\r\n\r\n.jv-light-left-text {\r\n  color: #00008b; /* Dark blue for keys */\r\n}\r\n\r\n.jv-light-left-array-item {\r\n  color: #008000; /* Green for array items */\r\n}\r\n\r\n.jv-light-rightString {\r\n  display: inline-block;\r\n  color: #d2691e; /* Chocolate color for strings */\r\n}\r\n\r\n.jv-light-rightBoolean {\r\n  display: inline-block;\r\n  color: #008000; /* Green for booleans */\r\n}\r\n\r\n.jv-light-rightNumber {\r\n  display: inline-block;\r\n  color: #ff4500; /* Orange red for numbers */\r\n}\r\n\r\n.jv-light-rightNull {\r\n  display: inline-block;\r\n  color: #808080; /* Gray for null */\r\n}\r\n\r\n.jv-light-rightObj {\r\n  display: block !important;\r\n  overflow: hidden;\r\n  height: 0;\r\n}\r\n\r\n.jv-light-rightArr {\r\n  display: block !important;\r\n  overflow: hidden;\r\n  height: 0;\r\n}\r\n\r\n.jv-light-folder {\r\n  width: 0px;\r\n  display: inline-block;\r\n  margin-left: -15px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  height: 0px;\r\n  border: 4px solid transparent;\r\n  border-top: 8px solid #0000ff; /* Blue for the folder arrow */\r\n  position: absolute;\r\n  top: 11px;\r\n  transform: rotate(-90deg);\r\n  transform-origin: 50% 25%;\r\n}\r\n\r\n.jv-light-len {\r\n  color: #000000; /* Black for the length */\r\n}\r\n\r\n\r\n/* for dark theme */\r\n\r\n.json-viewer-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #1d293b;\r\n}\r\n\r\n.json-viewer-header {\r\n  display: flex;\r\n  align-items: center;\r\n  border: 2px solid #1d293b;\r\n  padding: 10px;\r\n}\r\n\r\n.json-viewer-header span:nth-child(1) {\r\n  font-weight: bold;\r\n}\r\n\r\n.json-viewer-header span:nth-child(2) {\r\n  font-weight: 100;\r\n}\r\n\r\n.json-viewer-header span:nth-child(3) {\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n}\r\n\r\n.method {\r\n  color: #b5cea8;\r\n  padding-right: 20px;\r\n}\r\n\r\n.baseUrl {\r\n  color: white;\r\n}\r\n\r\n.url {\r\n  color: #b5cea8;\r\n}\r\n\r\n.jv-dark-con {\r\n  color: #000;\r\n  font-family: 'Space Mono';\r\n  overflow: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #202020;\r\n}\r\n\r\n.jv-dark-symbol {\r\n  color: #da70d6;\r\n  font-weight: bold;\r\n}\r\n\r\n.jv-dark-current {\r\n  line-height: 30px;\r\n  padding-left: 40px;\r\n  position: relative;\r\n}\r\n\r\n.jv-dark-left {\r\n  display: inline-block;\r\n}\r\n\r\n.jv-dark-left-text {\r\n  color: #9cdcfe;\r\n}\r\n\r\n.jv-dark-left-array-item {\r\n  color: #b5cea8;\r\n}\r\n\r\n.jv-dark-rightString {\r\n  display: inline-block;\r\n  color: #ce9178;\r\n}\r\n\r\n.jv-dark-rightBoolean {\r\n  display: inline-block;\r\n  color: #569cd6;\r\n}\r\n\r\n.jv-dark-rightNumber {\r\n  display: inline-block;\r\n  color: #b5cea8;\r\n}\r\n\r\n.jv-dark-rightNull {\r\n  display: inline-block;\r\n  color: #569cd6;\r\n}\r\n\r\n.jv-dark-rightObj {\r\n  display: block !important;\r\n  overflow: hidden;\r\n  height: 0;\r\n}\r\n\r\n.jv-dark-rightArr {\r\n  display: block !important;\r\n  overflow: hidden;\r\n  height: 0;\r\n}\r\n\r\n.jv-dark-folder {\r\n  width: 0px;\r\n  display: inline-block;\r\n  margin-left: -15px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  height: 0px;\r\n  border: 4px solid transparent;\r\n  border-top: 8px solid #da70d6;\r\n  position: absolute;\r\n  top: 11px;\r\n  transform: rotate(-90deg);\r\n  transform-origin: 50% 25%;\r\n}\r\n\r\n.jv-dark-len {\r\n  color: white;\r\n}\r\n\r\n.obj-color {\r\n  color: #9cdcfe;\r\n}\r\n\r\n.arr-color {\r\n  color: #b5cea8;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JsonViewer/./src/styles.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JsonViewer/./src/styles.css?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JsonViewer/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JsonViewer: () => (/* binding */ JsonViewer)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nclass JsonViewer {\n    constructor(options) {\n        const defaults = {\n            container: null,\n            method: '',\n            baseUrl: '',\n            url: '',\n            showHeader: true,\n            data: JSON.stringify({}),\n            theme: 'dark',\n            expand: false,\n        };\n        this.options = Object.assign(Object.assign({}, defaults), options);\n        this.options.data = JSON.stringify(this.options.data);\n        if (this.isNull(this.options.container)) {\n            throw new Error('Container: DOM element is required');\n        }\n        if (this.options.showHeader) {\n            this.createHeader();\n        }\n        else {\n            this.createEmptyHeader();\n        }\n        const parsedData = this.parseData();\n        this.render(parsedData);\n    }\n    parseData() {\n        const data = this.options.data;\n        let dataObj;\n        try {\n            dataObj = JSON.parse(data);\n        }\n        catch (error) {\n            throw new Error('It is not a valid JSON format');\n        }\n        return dataObj; // Return parsed data to be rendered\n    }\n    createHeader() {\n        var _a;\n        const headerContainer = this.createElement('div');\n        headerContainer.className = 'json-viewer-header'; // Estilos opcionales\n        // Genera el contenido del encabezado\n        const headerContent = `\r\n              <span class=\"method\">${this.options.method}</span>\r\n              <span class=\"baseUrl\">${this.options.baseUrl}</span>\r\n              <span class=\"url\">/${this.options.url}</span>\r\n      `;\n        headerContainer.innerHTML = headerContent;\n        // Añade el encabezado al contenedor principal\n        (_a = this.options.container) === null || _a === void 0 ? void 0 : _a.appendChild(headerContainer);\n    }\n    createEmptyHeader() {\n        var _a;\n        const headerContainer = this.createElement('div');\n        headerContainer.className = 'json-viewer-empty-header';\n        // Añade el encabezado al contenedor principal\n        (_a = this.options.container) === null || _a === void 0 ? void 0 : _a.appendChild(headerContainer);\n    }\n    render(dataObj) {\n        const theme = 'jv-' + this.options.theme + '-';\n        const indent = 0;\n        const parent = this.options.container;\n        const key = '';\n        parent === null || parent === void 0 ? void 0 : parent.setAttribute('class', theme + 'con');\n        const { left, right } = this.createItem(indent, theme, parent, key);\n        this.renderChildren(theme, key, dataObj, right, indent, left);\n    }\n    renderRight(theme, right, val) {\n        if (this.isNumber(val)) {\n            right.setAttribute('class', theme + 'rightNumber');\n        }\n        else if (this.isBoolean(val)) {\n            right.setAttribute('class', theme + 'rightBoolean');\n        }\n        else if (val === 'null') {\n            right.setAttribute('class', theme + 'rightNull');\n        }\n        else {\n            right.setAttribute('class', theme + 'rightString');\n        }\n        right.innerText = this.isString(val) && val !== 'null' ? `\"${val}\"` : val;\n    }\n    renderChildren(theme, key, val, right, indent, left) {\n        const folder = this.createElement('span');\n        const rotate90 = this.options.expand ? 'rotate90' : '';\n        const addHeight = this.options.expand ? 'add-height' : '';\n        folder.setAttribute('class', `${theme}folder ${rotate90}`);\n        folder.onclick = (e) => {\n            const nextSibling = e.target.parentNode.nextSibling;\n            this.toggleItem(nextSibling, e.target);\n        };\n        const len = this.isObject(val) ? Object.keys(val).length : val.length;\n        const isObj = !this.isArray(val);\n        left.innerHTML = isObj\n            ? `<span class=\"${theme}left-text\">${key}</span><span class=\"${theme}symbol\">:</span> <span class=\"${theme}symbol\">{</span><span class=\"${theme}len\">&nbsp;${len}&nbsp;</span><span class=\"${theme}symbol\">}</span>`\n            : `<span class=\"${theme}left-text\">${key}</span><span class=\"${theme}symbol\">:</span> <span class=\"${theme}symbol\">[</span><span class=\"${theme}len\">&nbsp;${len}&nbsp;</span><span class=\"${theme}symbol\">]</span>`;\n        left.prepend(folder);\n        const rightIs = isObj ? 'rightObj ' : 'rightArr ';\n        right.setAttribute('class', theme + rightIs + addHeight);\n        this.parse(val, right, indent + 0, theme, isObj ? 'obj' : 'arr');\n    }\n    parse(dataObj, parent, indent, theme, thisIs) {\n        this.forEach(dataObj, (val, key) => {\n            const { left, right } = this.createItem(indent, theme, parent, key, typeof val !== 'object', thisIs);\n            if (typeof val !== 'object') {\n                this.renderRight(theme, right, val);\n            }\n            else {\n                this.renderChildren(theme, key, val, right, indent, left);\n            }\n        });\n    }\n    createItem(indent, theme, parent, key, basicType = false, thisIs = '') {\n        const currentContainer = this.createElement('div'); // Contenedor para el elemento actual\n        currentContainer.classList.add('code-snippet');\n        const current = this.createElement('div');\n        const left = this.createElement('div');\n        const right = this.createElement('div');\n        const wrap = this.createElement('div');\n        current.style.marginLeft = `${indent * 2}px`;\n        left.innerHTML = `<span class=\"${theme}left-text ${thisIs}-color\">${key}</span><span class=\"${theme}symbol\">${key === '' ? '' : ':&nbsp;'}</span>`;\n        if (basicType) {\n            current.appendChild(wrap);\n            wrap.appendChild(left);\n            wrap.appendChild(right);\n            currentContainer.appendChild(current); // Añadir el elemento actual al contenedor\n            parent === null || parent === void 0 ? void 0 : parent.appendChild(currentContainer); // Añadir el contenedor al padre\n            current.setAttribute('class', theme + 'current');\n            wrap.setAttribute('class', 'jv-wrap');\n            left.setAttribute('class', theme + 'left');\n        }\n        else {\n            current.appendChild(left);\n            current.appendChild(right);\n            currentContainer.appendChild(current); // Añadir el elemento actual al contenedor\n            parent === null || parent === void 0 ? void 0 : parent.appendChild(currentContainer); // Añadir el contenedor al padre\n            current.setAttribute('class', theme + 'current');\n            left.setAttribute('class', theme + 'left jv-folder');\n            left.onclick = (e) => {\n                const firstSpan = e.currentTarget.querySelector(`span.${theme}folder`);\n                const nextDiv = e.currentTarget.nextElementSibling;\n                this.toggleItem(nextDiv, firstSpan);\n            };\n        }\n        return { left, right, current };\n    }\n    toggleItem(ele, target) {\n        ele.classList.toggle('add-height');\n        target.classList.toggle('rotate90');\n    }\n    createElement(type) {\n        return document.createElement(type);\n    }\n    forEach(obj, fn) {\n        var _a;\n        if (this.isUndefined(obj) || this.isNull(obj)) {\n            return;\n        }\n        if (this.isArray(obj)) {\n            for (let i = 0; i < obj.length; i++) {\n                fn.call(null, obj[i], i, obj);\n            }\n        }\n        else {\n            for (let key in obj) {\n                if (obj.hasOwnProperty(key)) {\n                    fn.call(null, (_a = obj[key]) !== null && _a !== void 0 ? _a : 'null', key, obj);\n                }\n            }\n        }\n    }\n    // Type checking functions\n    isString(val) { return typeof val === 'string'; }\n    isNumber(val) { return typeof val === 'number'; }\n    isBoolean(val) { return typeof val === 'boolean'; }\n    isUndefined(val) { return typeof val === 'undefined'; }\n    isArray(val) { return Array.isArray(val); }\n    isObject(val) { return val !== null && typeof val === 'object'; }\n    isNull(val) { return val === null; }\n}\n\n\n//# sourceURL=webpack://JsonViewer/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});