webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      show = _useState3[0],\n      setShow = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var handleSave = function handleSave() {\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores(props.mode);\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        if (data.data.length > 0) {\n          setMessage('');\n          setHighscores(data.data);\n        } else {\n          setMessage('no data found');\n        }\n\n        setShow(true);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  var handleView = function handleView(mode) {\n    setShow(false);\n    setHighscores([]);\n    getHighscores(mode); // setShow(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-between\",\n    direction: \"row\",\n    pb: 3,\n    borderBottom: \"3px solid gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    variant: \"ghost\",\n    size: \"md\",\n    onClick: function onClick() {\n      return handleView('add');\n    },\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none',\n      color: 'gold'\n    },\n    _active: {\n      outline: 'none',\n      color: 'gold'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, \"add\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('subtract');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }, \"subtract\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('multiply');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }, \"multiply\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('divide');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 15\n    }\n  }, \"divide\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 17\n    }\n  }, \"score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"120px\",\n    textAlign: \"center\",\n    mx: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 17\n    }\n  }, \"username\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 17\n    }\n  }, \"date\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    mt: 4,\n    isOpen: show,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 15\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 21\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"120px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onKeyDown: function onKeyDown(e) {\n      if (e.key === 'Enter' && e.target.value.trim().length > 0) {\n        handleSave();\n      }\n    },\n    onChange: function onChange(e) {\n      return setUsername(e.target.value.trim());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 21\n    }\n  }, convertDate(new Date()))), highscores.length > 0 ? highscores.map(function (highscore, index) {\n    if (props.isNewHighScore && index > 9) return;\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 208,\n        columnNumber: 25\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"75px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 215,\n        columnNumber: 27\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"120px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 218,\n        columnNumber: 27\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 221,\n        columnNumber: 27\n      }\n    }, convertDate(highscore.createdAt)));\n  }) : !props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 234,\n      columnNumber: 25\n    }\n  }, message)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 239,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 246,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      props.setIsNewHighscore(false);\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"hOWrUVqOBt9TCqVGGbCikFbMOS0=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwic2hvdyIsInNldFNob3ciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNhdmUiLCJhZGRIaWdoc2NvcmUiLCJuZXdTY29yZSIsIm1vZGUiLCJ1c2VFZmZlY3QiLCJnZXRIaWdoc2NvcmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibGVuZ3RoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2NvcmUiLCJzZXRJc05ld0hpZ2hzY29yZSIsImNvbnZlcnREYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImhhbmRsZVZpZXciLCJib3JkZXIiLCJjb2xvciIsIm91dGxpbmUiLCJpc05ld0hpZ2hzY29yZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJtYXAiLCJoaWdoc2NvcmUiLCJpbmRleCIsImlzTmV3SGlnaFNjb3JlIiwiX2lkIiwiY3JlYXRlZEF0Iiwic2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLElBQUlHLEtBQUosQ0FBVSxFQUFWLENBQUQsQ0FGQTtBQUFBLE1BRXJDQyxVQUZxQztBQUFBLE1BRXpCQyxh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QUMsTUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HVCxLQUFLLENBQUM0QyxjQUFOLElBQ0MsTUFBQyxzREFBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1qQyxVQUFVLEVBQWhCO0FBQUEsS0FEWDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsU0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFNLEVBQUU7QUFBRThCLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FKVjtBQUtFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixFQWlCRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IzQyxXQUFLLENBQUNpQyxpQkFBTixDQUF3QixLQUF4QjtBQUNBakMsV0FBSyxDQUFDd0QsT0FBTixDQUFjLE1BQWQ7QUFDRCxLQUpIO0FBS0UsV0FBTyxFQUFDLE9BTFY7QUFNRSxTQUFLLEVBQUMsT0FOUjtBQU9FLFVBQU0sRUFBRTtBQUFFZixZQUFNLEVBQUUsTUFBVjtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBUFY7QUFRRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLENBdklGLENBUEYsQ0FERixDQURGLENBREY7QUFvTEQ7O0dBdFF1QjVDLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hpZ2hzY29yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEJ1dHRvbixcbiAgU3RhY2ssXG4gIEJveCxcbiAgSW5wdXQsXG4gIENvbGxhcHNlLFxuICBEaXZpZGVyLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWdoc2NvcmUocHJvcHM6IGFueSkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hpZ2hzY29yZXMsIHNldEhpZ2hzY29yZXNdID0gdXNlU3RhdGUobmV3IEFycmF5KDEwKSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBhZGRIaWdoc2NvcmUocHJvcHMubmV3U2NvcmUsIHVzZXJuYW1lLCBwcm9wcy5tb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEhpZ2hzY29yZXMocHJvcHMubW9kZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRIaWdoc2NvcmVzID0gKG1vZGU6IFN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2dldGhpZ2hzY29yZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ25vIGRhdGEgZm91bmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSGlnaHNjb3JlID0gKHNjb3JlOiBOdW1iZXIsIHVzZXJuYW1lOiBTdHJpbmcsIG1vZGU6IFN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2FkZGhpZ2hzY29yZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgcHJvcHMuc2V0SXNOZXdIaWdoc2NvcmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxfS8ke25ldyBEYXRlKFxuICAgICAgZGF0ZVxuICAgICkuZ2V0RGF0ZSgpfS8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWV3ID0gKG1vZGU6IFN0cmluZykgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICAgIHNldEhpZ2hzY29yZXMoW10pO1xuICAgIGdldEhpZ2hzY29yZXMobW9kZSk7XG4gICAgLy8gc2V0U2hvdyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBoZWlnaHQ9e1snMTAwdmgnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgLy8gcD17MTB9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvcmRlcj1cIjVweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fSBoZWlnaHQ9XCI2MDBweFwiIHdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzVweFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSGlnaHNjb3JlXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBwYj17M31cbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tPVwiM3B4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3KCdhZGQnKX1cbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnLCBjb2xvcjogJ2dvbGQnIH19XG4gICAgICAgICAgICAgICAgX2FjdGl2ZT17eyBvdXRsaW5lOiAnbm9uZScsIGNvbG9yOiAnZ29sZCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGFkZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzVweFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3KCdzdWJ0cmFjdCcpfVxuICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc3VidHJhY3RcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjc1cHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlldygnbXVsdGlwbHknKX1cbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIG11bHRpcGx5XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXcoJ2RpdmlkZScpfVxuICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgZGl2aWRlXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCI0ODVweFwiPlxuICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIiBkaXJlY3Rpb249XCJyb3dcIiBwPXsyfT5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiNzVweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgc2NvcmVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTIwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBteD17NX0+XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxDb2xsYXBzZSBtdD17NH0gaXNPcGVuPXtzaG93fT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXNOZXdIaWdoc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc1cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmV3U2NvcmV9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbXg9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4fVxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLmtleSA9PT0gJ0VudGVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTUwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydERhdGUobmV3IERhdGUoKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2hpZ2hzY29yZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBoaWdoc2NvcmVzLm1hcCgoaGlnaHNjb3JlOiBhbnksIGluZGV4OiBOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuaXNOZXdIaWdoU2NvcmUgJiYgaW5kZXggPiA5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGlnaHNjb3JlLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc1cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBteD17NX0gd2lkdGg9XCIxMjBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaWdoc2NvcmUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTUwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydERhdGUoaGlnaHNjb3JlLmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6ICFwcm9wcy5pc05ld0hpZ2hzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57bWVzc2FnZX08L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvcHMuaXNOZXdIaWdoc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmUoKX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLnNldElzTmV3SGlnaHNjb3JlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHByb3BzLnNldFZpZXcoJ2hvbWUnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})