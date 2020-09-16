webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      show = _useState3[0],\n      setShow = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var handleSave = function handleSave() {\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores(props.mode);\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        if (data.data.length > 0) {\n          setMessage('');\n          setHighscores(data.data);\n        } else {\n          setMessage('no data found');\n        }\n\n        setShow(true);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  var handleView = function handleView(mode) {\n    setShow(false);\n    setHighscores([]);\n    getHighscores(mode); // setShow(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-between\",\n    direction: \"row\",\n    p: 0,\n    mb: 2,\n    borderBottom: \"3px solid gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('add');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  }, \"add\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('subtract');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 15\n    }\n  }, \"subtract\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('multiply');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, \"multiply\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('divide');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"divide\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 17\n    }\n  }, \"score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"120px\",\n    textAlign: \"center\",\n    mx: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 17\n    }\n  }, \"username\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 17\n    }\n  }, \"date\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    mt: 4,\n    isOpen: show,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 15\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 21\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"120px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onKeyDown: function onKeyDown(e) {\n      if (e.key === 'Enter' && e.target.value.trim().length > 0) {\n        handleSave();\n      }\n    },\n    onChange: function onChange(e) {\n      return setUsername(e.target.value.trim());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 21\n    }\n  }, convertDate(new Date()))), highscores.length > 0 ? highscores.map(function (highscore, index) {\n    if (props.isNewHighScore && index > 9) return;\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 205,\n        columnNumber: 25\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"75px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 212,\n        columnNumber: 27\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"120px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 215,\n        columnNumber: 27\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 218,\n        columnNumber: 27\n      }\n    }, convertDate(highscore.createdAt)));\n  }) : !props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 25\n    }\n  }, message)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      props.setIsNewHighscore(false);\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 253,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"hOWrUVqOBt9TCqVGGbCikFbMOS0=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwic2hvdyIsInNldFNob3ciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNhdmUiLCJhZGRIaWdoc2NvcmUiLCJuZXdTY29yZSIsIm1vZGUiLCJ1c2VFZmZlY3QiLCJnZXRIaWdoc2NvcmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibGVuZ3RoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2NvcmUiLCJzZXRJc05ld0hpZ2hzY29yZSIsImNvbnZlcnREYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImhhbmRsZVZpZXciLCJpc05ld0hpZ2hzY29yZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJtYXAiLCJoaWdoc2NvcmUiLCJpbmRleCIsImlzTmV3SGlnaFNjb3JlIiwiX2lkIiwiY3JlYXRlZEF0IiwiYm9yZGVyIiwiY29sb3IiLCJvdXRsaW5lIiwic2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLElBQUlHLEtBQUosQ0FBVSxFQUFWLENBQUQsQ0FGQTtBQUFBLE1BRXJDQyxVQUZxQztBQUFBLE1BRXpCQyxh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WUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUpWO0FBS0UsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBaUJFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYnZELFdBQUssQ0FBQ2lDLGlCQUFOLENBQXdCLEtBQXhCO0FBQ0FqQyxXQUFLLENBQUN3RCxPQUFOLENBQWMsTUFBZDtBQUNELEtBSkg7QUFLRSxXQUFPLEVBQUMsT0FMVjtBQU1FLFNBQUssRUFBQyxPQU5SO0FBT0UsVUFBTSxFQUFFO0FBQUVILFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FQVjtBQVFFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsQ0FwSUYsQ0FQRixDQURGLENBREYsQ0FERjtBQWlMRDs7R0FuUXVCeEQsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGlnaHNjb3JlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQnV0dG9uLFxuICBTdGFjayxcbiAgQm94LFxuICBJbnB1dCxcbiAgQ29sbGFwc2UsXG4gIERpdmlkZXIsXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZ2hzY29yZShwcm9wczogYW55KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGlnaHNjb3Jlcywgc2V0SGlnaHNjb3Jlc10gPSB1c2VTdGF0ZShuZXcgQXJyYXkoMTApKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGFkZEhpZ2hzY29yZShwcm9wcy5uZXdTY29yZSwgdXNlcm5hbWUsIHByb3BzLm1vZGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SGlnaHNjb3Jlcyhwcm9wcy5tb2RlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEhpZ2hzY29yZXMgPSAobW9kZTogU3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvZ2V0aGlnaHNjb3Jlc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbW9kZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIHNldEhpZ2hzY29yZXMoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnbm8gZGF0YSBmb3VuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRIaWdoc2NvcmUgPSAoc2NvcmU6IE51bWJlciwgdXNlcm5hbWU6IFN0cmluZywgbW9kZTogU3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvYWRkaGlnaHNjb3JlYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzY29yZSxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIG1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldEhpZ2hzY29yZXMoZGF0YS5kYXRhKTtcbiAgICAgICAgICBwcm9wcy5zZXRJc05ld0hpZ2hzY29yZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgd2hpbGUgZ2V0dGluZyBtZXNzYWdlczoke2Vyci5tZXNzYWdlfWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICByZXR1cm4gYCR7bmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDF9LyR7bmV3IERhdGUoXG4gICAgICBkYXRlXG4gICAgKS5nZXREYXRlKCl9LyR7bmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKX1gO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZpZXcgPSAobW9kZTogU3RyaW5nKSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgc2V0SGlnaHNjb3JlcyhbXSk7XG4gICAgZ2V0SGlnaHNjb3Jlcyhtb2RlKTtcbiAgICAvLyBzZXRTaG93KGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDB2aCddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAvLyBwPXsxMH1cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgYm9yZGVyPVwiNXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9IGhlaWdodD1cIjYwMHB4XCIgd2lkdGg9XCI0MDBweFwiPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIaWdoc2NvcmVcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIHA9ezB9XG4gICAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCIzcHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjc1cHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlldygnYWRkJyl9XG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjc1cHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlldygnc3VidHJhY3QnKX1cbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHN1YnRyYWN0XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXcoJ211bHRpcGx5Jyl9XG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBtdWx0aXBseVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzVweFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3KCdkaXZpZGUnKX1cbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGRpdmlkZVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiNDg1cHhcIj5cbiAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCIgZGlyZWN0aW9uPVwicm93XCIgcD17Mn0+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc1cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHNjb3JlXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEyMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9ezV9PlxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTUwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8Q29sbGFwc2UgbXQ9ezR9IGlzT3Blbj17c2hvd30+XG4gICAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5ld1Njb3JlfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG14PXs1fVxuICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCIxcHggc29saWQgd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREYXRlKG5ldyBEYXRlKCkpfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtoaWdoc2NvcmVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgID8gaGlnaHNjb3Jlcy5tYXAoKGhpZ2hzY29yZTogYW55LCBpbmRleDogTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmlzTmV3SGlnaFNjb3JlICYmIGluZGV4ID4gOSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hpZ2hzY29yZS5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hzY29yZS5zY29yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXg9ezV9IHdpZHRoPVwiMTIwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREYXRlKGhpZ2hzY29yZS5jcmVhdGVkQXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiAhcHJvcHMuaXNOZXdIaWdoc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+e21lc3NhZ2V9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRJc05ld0hpZ2hzY29yZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWaWV3KCdob21lJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})