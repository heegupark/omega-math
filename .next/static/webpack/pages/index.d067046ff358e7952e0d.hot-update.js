webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var handleSave = function handleSave() {\n    // props.setView('home');\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores('add');\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 19\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"150px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onChange: function onChange(e) {\n      return setUsername(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 19\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }, convertDate(new Date()))), highscores.map(function (highscore) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"100px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 21\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 21\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 21\n      }\n    }, convertDate(highscore.createdAt)));\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"P07OzdEc90OCrwjsEImj3UeLamc=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwiaGFuZGxlU2F2ZSIsImFkZEhpZ2hzY29yZSIsIm5ld1Njb3JlIiwibW9kZSIsInVzZUVmZmVjdCIsImdldEhpZ2hzY29yZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwic2NvcmUiLCJzZXRJc05ld0hpZ2hzY29yZSIsImNvbnZlcnREYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImlzTmV3SGlnaHNjb3JlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaGlnaHNjb3JlIiwiX2lkIiwiY3JlYXRlZEF0IiwiYm9yZGVyIiwiY29sb3IiLCJvdXRsaW5lIiwic2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLElBQUlHLEtBQUosQ0FBVSxFQUFWLENBQUQsQ0FGQTtBQUFBLE1BRXJDQyxVQUZxQztBQUFBLE1BRXpCQyxhQUZ5Qjs7QUFJNUMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjtBQUNBQyxnQkFBWSxDQUFDUixLQUFLLENBQUNTLFFBQVAsRUFBaUJQ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QUdFLFNBQUssRUFBQyxPQUhSO0FBSUUsVUFBTSxFQUFFO0FBQUVxQyxZQUFNLEVBQUUsTUFBVjtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBSlY7QUFLRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFpQkUsTUFBQyxzREFBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU05QyxLQUFLLENBQUMrQyxPQUFOLENBQWMsTUFBZCxDQUFOO0FBQUEsS0FEWDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsU0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFNLEVBQUU7QUFBRUgsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUpWO0FBS0UsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixDQXRERixDQVBGLENBREYsQ0FERixDQURGO0FBZ0dEOztHQXBLdUIvQyxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIFN0YWNrLCBCb3gsIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlnaHNjb3JlKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtoaWdoc2NvcmVzLCBzZXRIaWdoc2NvcmVzXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgxMCkpO1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgLy8gcHJvcHMuc2V0VmlldygnaG9tZScpO1xuICAgIGFkZEhpZ2hzY29yZShwcm9wcy5uZXdTY29yZSwgdXNlcm5hbWUsIHByb3BzLm1vZGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SGlnaHNjb3JlcygnYWRkJyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRIaWdoc2NvcmVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2dldGhpZ2hzY29yZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldEhpZ2hzY29yZXMoZGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSGlnaHNjb3JlID0gKHNjb3JlOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIG1vZGU6IHN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2FkZGhpZ2hzY29yZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgcHJvcHMuc2V0SXNOZXdIaWdoc2NvcmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxfS8ke25ldyBEYXRlKFxuICAgICAgZGF0ZVxuICAgICkuZ2V0RGF0ZSgpfS8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDB2aCddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAvLyBwPXsxMH1cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgYm9yZGVyPVwiNXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9IGhlaWdodD1cIjYwMHB4XCI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGhlaWdodD1cIjM1cHhcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhpZ2hzY29yZVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGhlaWdodD1cIjQ4NXB4XCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5pc05ld0hpZ2hzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5uZXdTY29yZX1cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgbXg9ezV9XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17OH1cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tPVwiMXB4IHNvbGlkIHdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCb3g+e2NvbnZlcnREYXRlKG5ldyBEYXRlKCkpfTwvQm94PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2hpZ2hzY29yZXMubWFwKChoaWdoc2NvcmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2hpZ2hzY29yZS5faWR9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtoaWdoc2NvcmUuc2NvcmV9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IG14PXs1fSB3aWR0aD1cIjE1MHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2hpZ2hzY29yZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+e2NvbnZlcnREYXRlKGhpZ2hzY29yZS5jcmVhdGVkQXQpfTwvQm94PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmlzTmV3SGlnaHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRWaWV3KCdob21lJyl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})