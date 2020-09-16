webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var handleSave = function handleSave() {\n    // props.setView('home');\n    addHighscore(props.newScore, username, props.mode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores('add');\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var addHighscore = function addHighscore(score, username, mode) {\n    fetch(\"/api/addhighscore\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        score: score,\n        username: username,\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n        props.setIsNewHighscore(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    p: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 19\n    }\n  }, props.newScore), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"150px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    mx: 5,\n    maxLength: 8,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onKeyDown: function onKeyDown(e) {},\n    onChange: function onChange(e) {\n      return setUsername(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 19\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, convertDate(new Date()))), highscores.map(function (highscore) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      p: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"100px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 21\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 21\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 21\n      }\n    }, convertDate(highscore.createdAt)));\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, props.isNewHighscore && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 17\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"P07OzdEc90OCrwjsEImj3UeLamc=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwiaGFuZGxlU2F2ZSIsImFkZEhpZ2hzY29yZSIsIm5ld1Njb3JlIiwibW9kZSIsInVzZUVmZmVjdCIsImdldEhpZ2hzY29yZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwic2NvcmUiLCJzZXRJc05ld0hpZ2hzY29yZSIsImNvbnZlcnREYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImlzTmV3SGlnaHNjb3JlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaGlnaHNjb3JlIiwiX2lkIiwiY3JlYXRlZEF0IiwiYm9yZGVyIiwiY29sb3IiLCJvdXRsaW5lIiwic2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLElBQUlHLEtBQUosQ0FBVSxFQUFWLENBQUQsQ0FGQTtBQUFBLE1BRXJDQyxVQUZxQztBQUFBLE1BRXpCQyxhQUZ5Qjs7QUFJNUMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjtBQUNBQyxnQkFBWSxDQUFDUixLQUFLLENBQUNTLFFBQVAsRUFBaUJQ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LFVBQVUsRUFBaEI7QUFBQSxLQURYO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFVBQU0sRUFBRTtBQUFFcUMsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUpWO0FBS0UsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBaUJFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNOUMsS0FBSyxDQUFDK0MsT0FBTixDQUFjLE1BQWQsQ0FBTjtBQUFBLEtBRFg7QUFFRSxXQUFPLEVBQUMsT0FGVjtBQUdFLFNBQUssRUFBQyxPQUhSO0FBSUUsVUFBTSxFQUFFO0FBQUVILFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FKVjtBQUtFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsQ0F2REYsQ0FQRixDQURGLENBREYsQ0FERjtBQWlHRDs7R0FyS3VCL0MsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGlnaHNjb3JlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgQnV0dG9uLCBTdGFjaywgQm94LCBJbnB1dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZ2hzY29yZShwcm9wczogYW55KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGlnaHNjb3Jlcywgc2V0SGlnaHNjb3Jlc10gPSB1c2VTdGF0ZShuZXcgQXJyYXkoMTApKTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIC8vIHByb3BzLnNldFZpZXcoJ2hvbWUnKTtcbiAgICBhZGRIaWdoc2NvcmUocHJvcHMubmV3U2NvcmUsIHVzZXJuYW1lLCBwcm9wcy5tb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEhpZ2hzY29yZXMoJ2FkZCcpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SGlnaHNjb3JlcyA9IChtb2RlOiBzdHJpbmcpID0+IHtcbiAgICBmZXRjaChgL2FwaS9nZXRoaWdoc2NvcmVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRIaWdoc2NvcmVzKGRhdGEuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgd2hpbGUgZ2V0dGluZyBtZXNzYWdlczoke2Vyci5tZXNzYWdlfWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZEhpZ2hzY29yZSA9IChzY29yZTogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBtb2RlOiBzdHJpbmcpID0+IHtcbiAgICBmZXRjaChgL2FwaS9hZGRoaWdoc2NvcmVgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNjb3JlLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgbW9kZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0SGlnaHNjb3JlcyhkYXRhLmRhdGEpO1xuICAgICAgICAgIHByb3BzLnNldElzTmV3SGlnaHNjb3JlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udmVydERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIHJldHVybiBgJHtuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMX0vJHtuZXcgRGF0ZShcbiAgICAgIGRhdGVcbiAgICApLmdldERhdGUoKX0vJHtuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBoZWlnaHQ9e1snMTAwdmgnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgLy8gcD17MTB9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvcmRlcj1cIjVweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fSBoZWlnaHQ9XCI2MDBweFwiPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIaWdoc2NvcmVcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCI0ODVweFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuaXNOZXdIaWdoc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmV3U2NvcmV9XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG14PXs1fVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezh9XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogYW55KSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Qm94Pntjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpKX08L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtoaWdoc2NvcmVzLm1hcCgoaGlnaHNjb3JlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAga2V5PXtoaWdoc2NvcmUuX2lkfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBteD17NX0gd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtoaWdoc2NvcmUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94Pntjb252ZXJ0RGF0ZShoaWdoc2NvcmUuY3JlYXRlZEF0KX08L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9wcy5pc05ld0hpZ2hzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZSgpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VmlldygnaG9tZScpfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})