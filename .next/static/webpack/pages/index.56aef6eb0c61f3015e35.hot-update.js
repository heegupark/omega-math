webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var handleSave = function handleSave() {\n    props.setView('home');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores('add');\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        console.log(data.data);\n        setHighscores(data.data);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 3,\n    height: \"600px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    height: \"30px\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    px: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, props.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"150px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    fontSize: \"32px\",\n    type: \"number\",\n    mx: 5,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onChange: function onChange(e) {\n      return setUsername(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }, convertDate(new Date()))), highscores.map(function (highscore) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      px: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"100px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 19\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 19\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 19\n      }\n    }, convertDate(highscore.createdAt)));\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    pos: \"fixed\",\n    bottom: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('home');\n    },\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"1elOYpVD9nLZ5s7I87WoJ8zq67s=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJoaWdoc2NvcmVzIiwic2V0SGlnaHNjb3JlcyIsImhhbmRsZVNhdmUiLCJzZXRWaWV3IiwidXNlRWZmZWN0IiwiZ2V0SGlnaHNjb3JlcyIsIm1vZGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29udmVydERhdGUiLCJkYXRlIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwic2NvcmUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJoaWdoc2NvcmUiLCJfaWQiLCJjcmVhdGVkQXQiLCJib3JkZXIiLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUNyQ0MsUUFEcUM7QUFBQSxNQUMzQkMsV0FEMkI7O0FBQUEsbUJBRVJGLHNEQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFckNHLFVBRnFDO0FBQUEsTUFFekJDLGFBRnlCOztBQUk1QyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixTQUFLLENBQUNPLE9BQU4sQ0FBYyxNQUFkO0FBQ0QsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxhQUFhLEdBQUcs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RSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTWxDLFVBQVUsRUFBaEI7QUFBQSxLQURYO0FBRUUsV0FBTyxFQUFDLFNBRlY7QUFHRSxVQUFNLEVBQUU7QUFBRW1DLFlBQU0sRUFBRTtBQUFWLEtBSFY7QUFJRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFlRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTTFDLEtBQUssQ0FBQ08sT0FBTixDQUFjLE1BQWQsQ0FBTjtBQUFBLEtBRFg7QUFFRSxXQUFPLEVBQUMsU0FGVjtBQUdFLFVBQU0sRUFBRTtBQUFFa0MsWUFBTSxFQUFFO0FBQVYsS0FIVjtBQUlFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixDQTVDRixDQVBGLENBREYsQ0FERixDQURGO0FBbUZEOztHQTdIdUIzQyxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIFN0YWNrLCBCb3gsIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlnaHNjb3JlKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtoaWdoc2NvcmVzLCBzZXRIaWdoc2NvcmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldFZpZXcoJ2hvbWUnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEhpZ2hzY29yZXMoJ2FkZCcpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SGlnaHNjb3JlcyA9IChtb2RlOiBzdHJpbmcpID0+IHtcbiAgICBmZXRjaChgL2FwaS9nZXRoaWdoc2NvcmVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtb2RlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xuICAgICAgICAgIHNldEhpZ2hzY29yZXMoZGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIG1lc3NhZ2VzOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udmVydERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIHJldHVybiBgJHtuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMX0vJHtuZXcgRGF0ZShcbiAgICAgIGRhdGVcbiAgICApLmdldERhdGUoKX0vJHtuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBoZWlnaHQ9e1snMTAwdmgnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgLy8gcD17MTB9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvcmRlcj1cIjVweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBoZWlnaHQ9XCI2MDBweFwiPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIaWdoc2NvcmVcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCIgZGlyZWN0aW9uPVwicm93XCIgcHg9ezN9PlxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIj57cHJvcHMuc2NvcmV9PC9Cb3g+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjMycHhcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG14PXs1fVxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCb3g+e2NvbnZlcnREYXRlKG5ldyBEYXRlKCkpfTwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAge2hpZ2hzY29yZXMubWFwKChoaWdoc2NvcmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICBrZXk9e2hpZ2hzY29yZS5faWR9XG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBweD17M31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2hpZ2hzY29yZS5zY29yZX1cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJveCBteD17NX0gd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8Qm94Pntjb252ZXJ0RGF0ZShoaWdoc2NvcmUuY3JlYXRlZEF0KX08L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIHBvcz1cImZpeGVkXCJcbiAgICAgICAgICAgICAgYm90dG9tPVwiMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgYmx1ZScgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VmlldygnaG9tZScpfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyZXknIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})