"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _construct(Parent, args, Class) {\n    if (isNativeReflectConstruct()) {\n        _construct = Reflect.construct;\n    } else {\n        _construct = function _construct(Parent, args, Class) {\n            var a = [\n                null\n            ];\n            a.push.apply(a, args);\n            var Constructor = Function.bind.apply(Parent, a);\n            var instance = new Constructor();\n            if (Class) _setPrototypeOf(instance, Class.prototype);\n            return instance;\n        };\n    }\n    return _construct.apply(null, arguments);\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _isNativeFunction(fn) {\n    return Function.toString.call(fn).indexOf(\"[native code]\") !== -1;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _wrapNativeSuper(Class) {\n    var _cache = typeof Map === \"function\" ? new Map() : undefined;\n    _wrapNativeSuper = function _wrapNativeSuper(Class) {\n        if (Class === null || !_isNativeFunction(Class)) return Class;\n        if (typeof Class !== \"function\") {\n            throw new TypeError(\"Super expression must either be null or a function\");\n        }\n        if (typeof _cache !== \"undefined\") {\n            if (_cache.has(Class)) return _cache.get(Class);\n            _cache.set(Class, Wrapper);\n        }\n        function Wrapper() {\n            return _construct(Class, arguments, _getPrototypeOf(this).constructor);\n        }\n        Wrapper.prototype = Object.create(Class.prototype, {\n            constructor: {\n                value: Wrapper,\n                enumerable: false,\n                writable: true,\n                configurable: true\n            }\n        });\n        return _setPrototypeOf(Wrapper, Class);\n    };\n    return _wrapNativeSuper(Class);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar IndexPage = /*#__PURE__*/ function(Comment) {\n    \"use strict\";\n    _inherits(IndexPage, Comment);\n    var _super = _createSuper(IndexPage);\n    function IndexPage() {\n        _classCallCheck(this, IndexPage);\n        return _super.apply(this, arguments);\n    }\n    _createClass(IndexPage, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"The Main Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Go to \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/auth\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Auth\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/auth');\n                            },\n                            children: \"Go to Auth\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\My Exercise on React\\\\Maximilian-Schwarzmuller-React\\\\Practice\\\\nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(context) {\n                var promise = new Promise(function(resolve, reject) {\n                    setTimeout(function() {\n                        resolve({\n                            appName: \"Super App\"\n                        });\n                    }, 1000);\n                });\n                return promisel;\n            }\n        }\n    ]);\n    return IndexPage;\n}(_wrapNativeSuper(Comment));\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNJO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCSSxTQUFTLGlCQUFmLFFBQVE7Ozs7YUFBRkEsU0FBUzs7Ozs7O1lBU1hELEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUUsQ0FBQztnQkFDTCxNQUFNLDZFQUNERSxDQUFHOztvR0FDQ0MsQ0FBRTtzQ0FBQyxDQUFhOzs7Ozs7b0dBQ2hCQyxDQUFDOztnQ0FBQyxDQUFNO2dDQUFDLENBQUc7NEdBQ1JOLGtEQUFJO29DQUFDTyxJQUFJLEVBQUMsQ0FBTzswSEFDYkMsQ0FBQztrREFBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztvR0FHZEMsQ0FBTTs0QkFBQ0MsT0FBTyxFQUFFLFFBQVE7Z0NBQUZULE1BQU0sQ0FBTkEsdURBQVcsQ0FBQyxDQUFPOztzQ0FBRyxDQUFVOzs7Ozs7Ozs7Ozs7WUFHbkUsQ0FBQzs7OztZQXBCTVcsR0FBZSxFQUFmQSxDQUFlO21CQUF0QixRQUFRLENBQURBLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFFQyxNQUFNLEVBQUssQ0FBQztvQkFDOUNDLFVBQVUsQ0FBQyxRQUFRLEdBQUYsQ0FBQzt3QkFDZEYsT0FBTyxDQUFDLENBQUM7NEJBQUNHLE9BQU8sRUFBRSxDQUFXO3dCQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBRSxJQUFJO2dCQUNYLENBQUM7Z0JBQ0wsTUFBTSxDQUFDQyxRQUFRO1lBQ2YsQ0FBQzs7OzttQkFSbUJDLE9BQU87QUF3Qi9CLCtEQUFlbEIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbW1lbnQge1xyXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgYXBwTmFtZTogXCJTdXBlciBBcHBcIiB9KTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZWxcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlRoZSBNYWluIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+R28gdG8ge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5BdXRoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9hdXRoJyl9PkdvIHRvIEF1dGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJvdXRlciIsInJlbmRlciIsIkluZGV4UGFnZSIsImRpdiIsImgxIiwicCIsImhyZWYiLCJhIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImFwcE5hbWUiLCJwcm9taXNlbCIsIkNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});