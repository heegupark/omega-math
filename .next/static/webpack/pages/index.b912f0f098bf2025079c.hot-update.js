webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      show = _useState3[0],\n      setShow = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var handleSave = function handleSave() {\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores(props.mode);\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        if (data.data.length > 0) {\n          setMessage('');\n          setHighscores(data.data);\n        } else {\n          setMessage('no data found');\n        }\n\n        setShow(true);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  var handleView = function handleView(mode) {\n    setShow(false);\n    setHighscores([]);\n    getHighscores(mode); // setShow(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-between\",\n    direction: \"row\",\n    pb: 3,\n    borderBottom: \"3px solid gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    variant: \"ghost\",\n    size: \"sm\",\n    m: 1,\n    onClick: function onClick() {\n      return handleView('add');\n    },\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none',\n      backgroundColor: 'gold',\n      color: 'black'\n    },\n    _active: {\n      outline: 'none',\n      color: 'gold'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, \"add\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('subtract');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, \"subtract\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('multiply');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"multiply\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: function onClick() {\n      return handleView('divide');\n    },\n    cursor: \"pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 15\n    }\n  }, \"divide\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 17\n    }\n  }, \"score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"120px\",\n    textAlign: \"center\",\n    mx: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 17\n    }\n  }, \"username\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 17\n    }\n  }, \"date\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    mt: 4,\n    isOpen: show,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 15\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 21\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"120px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onKeyDown: function onKeyDown(e) {\n      if (e.key === 'Enter' && e.target.value.trim().length > 0) {\n        handleSave();\n      }\n    },\n    onChange: function onChange(e) {\n      return setUsername(e.target.value.trim());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 21\n    }\n  }, convertDate(new Date()))), highscores.length > 0 ? highscores.map(function (highscore, index) {\n    if (props.isNewHighScore && index > 9) return;\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 213,\n        columnNumber: 25\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"75px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 220,\n        columnNumber: 27\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"120px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 223,\n        columnNumber: 27\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 226,\n        columnNumber: 27\n      }\n    }, convertDate(highscore.createdAt)));\n  }) : !props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 239,\n      columnNumber: 25\n    }\n  }, message)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 244,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 251,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      props.setIsNewHighscore(false);\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 261,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"hOWrUVqOBt9TCqVGGbCikFbMOS0=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwic2hvdyIsInNldFNob3ciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNhdmUiLCJhZGRIaWdoc2NvcmUiLCJuZXdTY29yZSIsIm1vZGUiLCJ1c2VFZmZlY3QiLCJnZXRIaWdoc2NvcmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibGVuZ3RoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2NvcmUiLCJzZXRJc05ld0hpZ2hzY29yZSIsImNvbnZlcnREYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImhhbmRsZVZpZXciLCJib3JkZXIiLCJjb2xvciIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc05ld0hpZ2hzY29yZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJtYXAiLCJoaWdoc2NvcmUiLCJpbmRleCIsImlzTmV3SGlnaFNjb3JlIiwiX2lkIiwiY3JlYXRlZEF0Iiwic2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLElBQUlHLEtBQUosQ0FBVSxFQUFWLENBQUQsQ0FGQTtBQUFBLE1BRXJDQyxVQUZxQztBQUFBLE1BRXpCQyxhQUZ5Qjs7QUFBQSxtQkFHcEJMLHNEQUFRLENBQUMsSUFBRCxDQUhZO0FBQUEsTUFHckNNLElBSHFDO0FBQUEsTUFHL0JDLE9BSCtCOztBQUFBLG1CQUlkUCxzREFBUSxDQUFDLEVBQUQsQ0FKTTtBQUFBLE1BSXJDUSxPQUpxQztBQUFBLE1BSTVCQyxVQUo0Qjs7QUFNNUMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkMsZ0JBQVksQ0FBQ1osS0FBSyxDQUFDYSxRQUFQLEVBQWlCWCxRQUFqQixFQUEyQkYsS0FBSyxDQUFDYyxJQUFqQyxDQUFaO0FBQ0QsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGlCQUFhLENBQUNoQixLQUFLLENBQUNjLElBQVAsQ0FBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQWtCO0FBQ3RDRyxTQUFLLHVCQUF1QjtBQUMxQkMsWUFBTSxFQUFFLE1BRGtCO0FBRTFCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZpQjtBQUsxQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlIsWUFBSSxFQUFKQTtBQURtQixPQUFmO0FBTG9CLEtBQXZCLENBQUwsQ0FTR1MsSUFUSCxDQVNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBVFIsRUFVR0YsSUFWSCxDQVVRLFVBQUNHLElBQUQsRUFBZTtBQUNuQixVQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEIsWUFBSUQsSUFBSSxDQUFDQSxJQUFMLENBQVVFLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJsQixvQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBSix1QkFBYSxDQUFDb0IsSUFBSSxDQUFDQSxJQUFOLENBQWI7QUFDRCxTQUhELE1BR087QUFDTGhCLG9CQUFVLENBQUMsZUFBRCxDQUFWO0FBQ0Q7O0FBQ0RGLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEtBcEJILFdBcUJTLFVBQUNxQixHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLDJEQUNxREYsR0FBRyxDQUFDcEIsT0FEekQ7QUFHRCxLQXpCSDtBQTBCRCxHQTNCRDs7QUE2QkEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ29CLEtBQUQsRUFBZ0I5QixRQUFoQixFQUFrQ1ksSUFBbEMsRUFBbUQ7QUFDdEVHLFNBQUssc0JBQXNCO0FBQ3pCQyxZQUFNLEVBQUUsTUFEaUI7QUFFekJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmdCO0FBS3pCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CVSxhQUFLLEVBQUxBLEtBRG1CO0FBRW5COUIsZ0JBQVEsRUFBUkEsUUFGbUI7QUFHbkJZLFlBQUksRUFBSkE7QUFIbUIsT0FBZjtBQUxtQixLQUF0QixDQUFMLENBV0dTLElBWEgsQ0FXUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQVhSLEVBWUdGLElBWkgsQ0FZUSxVQUFDRyxJQUFELEVBQWU7QUFDbkIsVUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCckIscUJBQWEsQ0FBQ29CLElBQUksQ0FBQ0EsSUFBTixDQUFiO0FBQ0ExQixhQUFLLENBQUNpQyxpQkFBTixDQUF3QixLQUF4QjtBQUNEO0FBQ0YsS0FqQkgsV0FrQlMsVUFBQ0osR0FBRCxFQUFTO0FBQ2RDLGFBQU8sQ0FBQ0MsS0FBUiwyREFDcURGLEdBQUcsQ0FBQ3BCLE9BRHpEO0FBR0QsS0F0Qkg7QUF1QkQsR0F4QkQ7O0FBMEJBLE1BQU15QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQWdCO0FBQ2xDLHFCQUFVLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRSxRQUFmLEtBQTRCLENBQXRDLGNBQTJDLElBQUlELElBQUosQ0FDekNELElBRHlDLEVBRXpDRyxPQUZ5QyxFQUEzQyxjQUVlLElBQUlGLElBQUosQ0FBU0QsSUFBVCxFQUFlSSxXQUFmLEVBRmY7QUFHRCxHQUpEOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUMxQixJQUFELEVBQWtCO0FBQ25DTixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FGLGlCQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FVLGlCQUFhLENBQUNGLElBQUQsQ0FBYixDQUhtQyxDQUluQztBQUNELEdBTEQ7O0FBT0EsU0FDRSxtRUFDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFLENBQUMsTUFBRCxDQUFiO0FBQXVCLFVBQU0sRUFBRSxDQUFDLE9BQUQsQ0FBL0I7QUFBMEMsU0FBSyxFQUFDLFFBQWhEO0FBQXlELFdBQU8sRUFBQyxRQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsVUFBTSxFQUFDLGdCQUpUO0FBS0UsZ0JBQVksRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFLENBQWhCO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFrQyxTQUFLLEVBQUMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxVQUFNLEVBQUMsTUFEVDtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0UsbUJBQWUsRUFBQyxNQUhsQjtBQUlFLFNBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFTRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxXQUFPLEVBQUMsZUFGVjtBQUdFLGFBQVMsRUFBQyxLQUhaO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxnQkFBWSxFQUFDLGdCQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLFdBQU8sRUFBQyxPQUhWO0FBSUUsUUFBSSxFQUFDLElBSlA7QUFLRSxLQUFDLEVBQUUsQ0FMTDtBQU1FLFdBQU8sRUFBRTtBQUFBLGFBQU0wQixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLEtBTlg7QUFPRSxVQUFNLEVBQUU7QUFBRUMsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQVBWO0FBUUUsVUFBTSxFQUFFO0FBQ05DLGFBQU8sRUFBRSxNQURIO0FBRU5DLHFCQUFlLEVBQUUsTUFGWDtBQUdORixXQUFLLEVBQUU7QUFIRCxLQVJWO0FBYUUsV0FBTyxFQUFFO0FBQUVDLGFBQU8sRUFBRSxNQUFYO0FBQW1CRCxXQUFLLEVBQUU7QUFBMUIsS0FiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEYsRUF3QkUsTUFBQyxtREFBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNRixVQUFVLENBQUMsVUFBRCxDQUFoQjtBQUFBLEtBSFg7QUFJRSxVQUFNLEVBQUMsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhCRixFQWdDRSxNQUFDLG1EQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFVBQVUsQ0FBQyxVQUFELENBQWhCO0FBQUEsS0FIWDtBQUlFLFVBQU0sRUFBQyxTQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGLEVBd0NFLE1BQUMsbURBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDLFFBQUQsQ0FBaEI7QUFBQSxLQUhYO0FBSUUsVUFBTSxFQUFDLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRixDQVRGLEVBMERFLE1BQUMsbURBQUQ7QUFBSyxVQUFNLEVBQUMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxjQUE3QjtBQUE0QyxhQUFTLEVBQUMsS0FBdEQ7QUFBNEQsS0FBQyxFQUFFLENBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFDLE1BQVg7QUFBa0IsYUFBUyxFQUFDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlFLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFtQixhQUFTLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFPRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixDQURGLEVBWUUsTUFBQyx3REFBRDtBQUFVLE1BQUUsRUFBRSxDQUFkO0FBQWlCLFVBQU0sRUFBRWpDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsS0FBSyxDQUFDNkMsY0FBTixJQUNDLE1BQUMsb0RBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFdBQU8sRUFBQyxjQUZWO0FBR0UsYUFBUyxFQUFDLEtBSFo7QUFJRSxLQUFDLEVBQUUsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxNQUFYO0FBQWtCLGFBQVMsRUFBQyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c3QyxLQUFLLENBQUNhLFFBRFQsQ0FORixFQVNFLE1BQUMscURBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFdBQU8sRUFBQyxVQUhWO0FBSUUsYUFBUyxFQUFDLFFBSlo7QUFLRSxNQUFFLEVBQUUsQ0FMTjtBQU1FLGFBQVMsRUFBRSxDQU5iO0FBT0UsZ0JBQVksRUFBQyxpQkFQZjtBQVFFLFNBQUssRUFBRVgsUUFSVDtBQVNFLGFBQVMsRUFBRSxtQkFBQzRDLENBQUQsRUFBWTtBQUNyQixVQUNFQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFWLElBQ0FELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWVDLElBQWYsR0FBc0J0QixNQUF0QixHQUErQixDQUZqQyxFQUdFO0FBQ0FqQixrQkFBVTtBQUNYO0FBQ0YsS0FoQkg7QUFpQkUsWUFBUSxFQUFFLGtCQUFDbUMsQ0FBRDtBQUFBLGFBQVkzQyxXQUFXLENBQUMyQyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQUQsQ0FBdkI7QUFBQSxLQWpCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUE0QkUsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLGFBQVMsRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixXQUFXLENBQUMsSUFBSUUsSUFBSixFQUFELENBRGQsQ0E1QkYsQ0FGSixFQW1DRy9CLFVBQVUsQ0FBQ3VCLE1BQVgsR0FBb0IsQ0FBcEIsR0FDR3ZCLFVBQVUsQ0FBQzhDLEdBQVgsQ0FBZSxVQUFDQyxTQUFELEVBQWlCQyxLQUFqQixFQUFtQztBQUNoRCxRQUFJckQsS0FBSyxDQUFDc0QsY0FBTixJQUF3QkQsS0FBSyxHQUFHLENBQXBDLEVBQXVDO0FBQ3ZDLFdBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUcsRUFBRUQsU0FBUyxDQUFDRyxHQURqQjtBQUVFLFdBQUssRUFBQyxRQUZSO0FBR0UsYUFBTyxFQUFDLGNBSFY7QUFJRSxlQUFTLEVBQUMsS0FKWjtBQUtFLE9BQUMsRUFBRSxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRSxNQUFDLG1EQUFEO0FBQUssV0FBSyxFQUFDLE1BQVg7QUFBa0IsZUFBUyxFQUFDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0gsU0FBUyxDQUFDcEIsS0FEYixDQVBGLEVBVUUsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQVksV0FBSyxFQUFDLE9BQWxCO0FBQTBCLGVBQVMsRUFBQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dvQixTQUFTLENBQUNsRCxRQURiLENBVkYsRUFhRSxNQUFDLG1EQUFEO0FBQUssV0FBSyxFQUFDLE9BQVg7QUFBbUIsZUFBUyxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2dDLFdBQVcsQ0FBQ2tCLFNBQVMsQ0FBQ0ksU0FBWCxDQURkLENBYkYsQ0FERjtBQW1CRCxHQXJCRCxDQURILEdBdUJHLENBQUN4RCxLQUFLLENBQUM2QyxjQUFQLElBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxhQUFTLEVBQUMsUUFIWjtBQUlFLEtBQUMsRUFBRSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QnBDLE9BQXpCLENBTkYsQ0EzRFIsQ0FaRixDQTFERixFQTRJRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxXQUFPLEVBQUMsY0FGVjtBQUdFLGFBQVMsRUFBQyxLQUhaO0FBSUUsbUJBQWUsRUFBQyxNQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdULEtBQUssQ0FBQzZDLGNBQU4sSUFDQyxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTWxDLFVBQVUsRUFBaEI7QUFBQSxLQURYO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFVBQU0sRUFBRTtBQUFFOEIsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUpWO0FBS0UsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBaUJFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYjNDLFdBQUssQ0FBQ2lDLGlCQUFOLENBQXdCLEtBQXhCO0FBQ0FqQyxXQUFLLENBQUN5RCxPQUFOLENBQWMsTUFBZDtBQUNELEtBSkg7QUFLRSxXQUFPLEVBQUMsT0FMVjtBQU1FLFNBQUssRUFBQyxPQU5SO0FBT0UsVUFBTSxFQUFFO0FBQUVoQixZQUFNLEVBQUUsTUFBVjtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBUFY7QUFRRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLENBNUlGLENBUEYsQ0FERixDQURGLENBREY7QUF5TEQ7O0dBM1F1QjVDLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hpZ2hzY29yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEJ1dHRvbixcbiAgU3RhY2ssXG4gIEJveCxcbiAgSW5wdXQsXG4gIENvbGxhcHNlLFxuICBEaXZpZGVyLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWdoc2NvcmUocHJvcHM6IGFueSkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hpZ2hzY29yZXMsIHNldEhpZ2hzY29yZXNdID0gdXNlU3RhdGUobmV3IEFycmF5KDEwKSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBhZGRIaWdoc2NvcmUocHJvcHMubmV3U2NvcmUsIHVzZXJuYW1lLCBwcm9wcy5tb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEhpZ2hzY29yZXMocHJvcHMubW9kZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRIaWdoc2NvcmVzID0gKG1vZGU6IFN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2dldGhpZ2hzY29yZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ25vIGRhdGEgZm91bmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSGlnaHNjb3JlID0gKHNjb3JlOiBOdW1iZXIsIHVzZXJuYW1lOiBTdHJpbmcsIG1vZGU6IFN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2FkZGhpZ2hzY29yZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgcHJvcHMuc2V0SXNOZXdIaWdoc2NvcmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxfS8ke25ldyBEYXRlKFxuICAgICAgZGF0ZVxuICAgICkuZ2V0RGF0ZSgpfS8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWV3ID0gKG1vZGU6IFN0cmluZykgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICAgIHNldEhpZ2hzY29yZXMoW10pO1xuICAgIGdldEhpZ2hzY29yZXMobW9kZSk7XG4gICAgLy8gc2V0U2hvdyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBoZWlnaHQ9e1snMTAwdmgnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgLy8gcD17MTB9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvcmRlcj1cIjVweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fSBoZWlnaHQ9XCI2MDBweFwiIHdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzVweFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSGlnaHNjb3JlXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBwYj17M31cbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tPVwiM3B4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBtPXsxfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXcoJ2FkZCcpfVxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17e1xuICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ29sZCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIF9hY3RpdmU9e3sgb3V0bGluZTogJ25vbmUnLCBjb2xvcjogJ2dvbGQnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjc1cHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlldygnc3VidHJhY3QnKX1cbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHN1YnRyYWN0XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXcoJ211bHRpcGx5Jyl9XG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBtdWx0aXBseVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzVweFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3KCdkaXZpZGUnKX1cbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGRpdmlkZVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiNDg1cHhcIj5cbiAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCIgZGlyZWN0aW9uPVwicm93XCIgcD17Mn0+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc1cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHNjb3JlXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEyMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9ezV9PlxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTUwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8Q29sbGFwc2UgbXQ9ezR9IGlzT3Blbj17c2hvd30+XG4gICAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5ld1Njb3JlfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG14PXs1fVxuICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCIxcHggc29saWQgd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREYXRlKG5ldyBEYXRlKCkpfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtoaWdoc2NvcmVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgID8gaGlnaHNjb3Jlcy5tYXAoKGhpZ2hzY29yZTogYW55LCBpbmRleDogTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmlzTmV3SGlnaFNjb3JlICYmIGluZGV4ID4gOSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hpZ2hzY29yZS5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hzY29yZS5zY29yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXg9ezV9IHdpZHRoPVwiMTIwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREYXRlKGhpZ2hzY29yZS5jcmVhdGVkQXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiAhcHJvcHMuaXNOZXdIaWdoc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+e21lc3NhZ2V9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRJc05ld0hpZ2hzY29yZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWaWV3KCdob21lJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})