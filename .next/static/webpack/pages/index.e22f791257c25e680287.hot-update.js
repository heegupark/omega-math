webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      show = _React$useState2[0],\n      setShow = _React$useState2[1];\n\n  var handleSave = function handleSave() {\n    // props.setView('home');\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getHighscores('add');\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  var handleToggle = function handleToggle() {\n    return setShow(!show);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-between\",\n    direction: \"row\",\n    p: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    onClick: handleToggle('add'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 15\n    }\n  }, \"add\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 15\n    }\n  }, \"subtract\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }, \"multiply\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }, \"divide\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, \"score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"120px\",\n    textAlign: \"center\",\n    mx: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, \"username\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, \"date\")), props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"75px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 19\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    autoFocus: true,\n    width: \"120px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onKeyDown: function onKeyDown(e) {\n      if (e.key === 'Enter' && e.target.value.trim().length > 0) {\n        handleSave();\n      }\n    },\n    onChange: function onChange(e) {\n      return setUsername(e.target.value.trim());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 19\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"150px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 19\n    }\n  }, convertDate(new Date()))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"], {\n    mt: 4,\n    isOpen: show,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 15\n    }\n  }, highscores.map(function (highscore) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 21\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      width: \"75px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 23\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      mx: 5,\n      width: \"120px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 23\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 23\n      }\n    }, convertDate(highscore.createdAt)));\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      props.setIsNewHighscore(false);\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"Hgeshl0AW1+g7ep9e04Ty8v15rA=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwiUmVhY3QiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNhdmUiLCJhZGRIaWdoc2NvcmUiLCJuZXdTY29yZSIsIm1vZGUiLCJ1c2VFZmZlY3QiLCJnZXRIaWdoc2NvcmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInNjb3JlIiwic2V0SXNOZXdIaWdoc2NvcmUiLCJjb252ZXJ0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJoYW5kbGVUb2dnbGUiLCJpc05ld0hpZ2hzY29yZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJtYXAiLCJoaWdoc2NvcmUiLCJfaWQiLCJjcmVhdGVkQXQiLCJib3JkZXIiLCJjb2xvciIsIm91dGxpbmUiLCJzZXRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUNyQ0MsUUFEcUM7QUFBQSxNQUMzQkMsV0FEMkI7O0FBQUEsbUJBRVJGLHNEQUFRLENBQUMsSUFBSUcsS0FBSixDQUFVLEVBQVYsQ0FBRCxDQUZBO0FBQUEsTUFFckNDLFVBRnFDO0FBQUEsTUFFekJDLGFBRnlCOztBQUFBLHdCQUdwQkMsNENBQUss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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFpQkUsTUFBQyxzREFBRDtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNickQsV0FBSyxDQUFDZ0MsaUJBQU4sQ0FBd0IsS0FBeEI7QUFDQWhDLFdBQUssQ0FBQ3NELE9BQU4sQ0FBYyxNQUFkO0FBQ0QsS0FKSDtBQUtFLFdBQU8sRUFBQyxPQUxWO0FBTUUsU0FBSyxFQUFDLE9BTlI7QUFPRSxVQUFNLEVBQUU7QUFBRUgsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQVBWO0FBUUUsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixDQWpHRixDQVBGLENBREYsQ0FERixDQURGO0FBOElEOztHQXJOdUJ0RCxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIFN0YWNrLCBCb3gsIElucHV0LCBDb2xsYXBzZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZ2hzY29yZShwcm9wczogYW55KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGlnaHNjb3Jlcywgc2V0SGlnaHNjb3Jlc10gPSB1c2VTdGF0ZShuZXcgQXJyYXkoMTApKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgLy8gcHJvcHMuc2V0VmlldygnaG9tZScpO1xuICAgIGFkZEhpZ2hzY29yZShwcm9wcy5uZXdTY29yZSwgdXNlcm5hbWUsIHByb3BzLm1vZGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SGlnaHNjb3JlcygnYWRkJyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRIaWdoc2NvcmVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2dldGhpZ2hzY29yZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldEhpZ2hzY29yZXMoZGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSGlnaHNjb3JlID0gKHNjb3JlOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIG1vZGU6IHN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2FkZGhpZ2hzY29yZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgcHJvcHMuc2V0SXNOZXdIaWdoc2NvcmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxfS8ke25ldyBEYXRlKFxuICAgICAgZGF0ZVxuICAgICkuZ2V0RGF0ZSgpfS8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiBzZXRTaG93KCFzaG93KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDB2aCddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAvLyBwPXsxMH1cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgYm9yZGVyPVwiNXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9IGhlaWdodD1cIjYwMHB4XCIgd2lkdGg9XCI0MDBweFwiPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIaWdoc2NvcmVcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGRpcmVjdGlvbj1cInJvd1wiIHA9ezF9PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3NXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSgnYWRkJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgc3VidHJhY3RcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgbXVsdGlwbHlcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI3NXB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgZGl2aWRlXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCI0ODVweFwiPlxuICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIiBkaXJlY3Rpb249XCJyb3dcIiBwPXsyfT5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiNzVweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgc2NvcmVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTIwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBteD17NX0+XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIHtwcm9wcy5pc05ld0hpZ2hzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc1cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5ld1Njb3JlfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTIwcHhcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBteD17NX1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4fVxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCIxcHggc29saWQgd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpKX1cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPENvbGxhcHNlIG10PXs0fSBpc09wZW49e3Nob3d9PlxuICAgICAgICAgICAgICAgIHtoaWdoc2NvcmVzLm1hcCgoaGlnaHNjb3JlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtoaWdoc2NvcmUuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiNzVweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hzY29yZS5zY29yZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IG14PXs1fSB3aWR0aD1cIjEyMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREYXRlKGhpZ2hzY29yZS5jcmVhdGVkQXQpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRJc05ld0hpZ2hzY29yZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWaWV3KCdob21lJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})