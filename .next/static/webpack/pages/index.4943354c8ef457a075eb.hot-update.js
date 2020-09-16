webpackHotUpdate_N_E("pages/index",{

/***/ "./components/play.tsx":
/*!*****************************!*\
  !*** ./components/play.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Play; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/play.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Play(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      number1 = _useState[0],\n      setNumber1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2),\n      number2 = _useState2[0],\n      setNumber2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      level = _useState3[0],\n      setLevel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState4[0],\n      setInput = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      answer = _useState5[0],\n      setAnswer = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      score = _useState6[0],\n      setScore = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(100),\n      highscore = _useState7[0],\n      setHighscore = _useState7[1];\n\n  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"])();\n\n  var generateNumbers = function generateNumbers() {\n    var num1 = Math.floor(Math.random() * level * 2 + 1);\n    var num2 = Math.floor(Math.random() * (level + 1) * 2 + 1);\n    setNumber1(num1);\n    setNumber2(num2);\n    setAnswer(num1 + num2);\n  };\n\n  var handleKeyDown = function handleKeyDown(e) {\n    if (Number(e.key) >= 0 && Number(e.key) <= 9) {\n      console.log(e.key);\n      handleChange(e);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    generateNumbers();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n    };\n  });\n\n  var handleChange = function handleChange(e) {\n    var tempInput = Number(input.concat(e.key));\n\n    if (tempInput.toString().length < answer.toString().length) {\n      setInput(tempInput.toString());\n    } else if (tempInput !== answer) {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"blue\",\n            p: 3,\n            border: \"1px solid red\",\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 11\n            }\n          }, \"wrong\");\n        }\n      });\n      setInput('');\n    } else {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"white\",\n            p: 3,\n            border: \"1px solid gold\",\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 11\n            }\n          }, \"correct\");\n        }\n      });\n      setScore(score + 10);\n      setLevel(level + 1);\n      setInput('');\n      generateNumbers();\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    align: \"center\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"gold\",\n    fontSize: \"32px\",\n    variant: \"ghost\",\n    _hover: {\n      color: 'white'\n    },\n    _active: {\n      bg: 'none'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      return props.setView('start');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiHomeAlt\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, highscore))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100%'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 20,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 15\n    }\n  }, \"Score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    start: score > 0 ? score - 10 : 0,\n    end: score,\n    duration: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 17\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    isInline: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 17\n    }\n  }, number1), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }\n  }, \"+\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 17\n    }\n  }, number2), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 17\n    }\n  }, \"=\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    fontSize: \"32px\",\n    type: \"number\",\n    value: input,\n    onChange: function onChange(e) {},\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_s(Play, \"UbE+QdNyjDVdW0zXi1QLmNTJuNs=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"]];\n});\n\n_c = Play;\n\nvar _c;\n\n$RefreshReg$(_c, \"Play\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5LnRzeD9mNWM5Il0sIm5hbWVzIjpbIlBsYXkiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtYmVyMSIsInNldE51bWJlcjEiLCJudW1iZXIyIiwic2V0TnVtYmVyMiIsImxldmVsIiwic2V0TGV2ZWwiLCJpbnB1dCIsInNldElucHV0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwic2NvcmUiLCJzZXRTY29yZSIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInRvYXN0IiwidXNlVG9hc3QiLCJnZW5lcmF0ZU51bWJlcnMiLCJudW0xIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibnVtMiIsImhhbmRsZUtleURvd24iLCJlIiwiTnVtYmVyIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGVtcElucHV0IiwiY29uY2F0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwicmVuZGVyIiwiY29sb3IiLCJiZyIsIm91dGxpbmUiLCJzZXRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFVBRHVCOztBQUFBLG1CQUVURixzREFBUSxDQUFDLENBQUQsQ0FGQztBQUFBLE1BRWhDRyxPQUZnQztBQUFBLE1BRXZCQyxVQUZ1Qjs7QUFBQSxtQkFHYkosc0RBQVEsQ0FBQyxDQUFELENBSEs7QUFBQSxNQUdoQ0ssS0FIZ0M7QUFBQSxNQUd6QkMsUUFIeUI7O0FBQUEsbUJBSWJOLHNEQUFRLENBQUMsRUFBRCxDQUpL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c0MsWUFBUSxFQUFDLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsT0FESCxDQVBGLEVBVUUsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLGFBQVMsRUFBQyxRQUE3QjtBQUFzQyxZQUFRLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGLENBREYsQ0FyQkYsRUFxQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxhQUFTLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLGFBQVMsRUFBQyxRQUhaO0FBSUUsWUFBUSxFQUFDLE1BSlg7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQU1FLFNBQUssRUFBRUksS0FOVDtBQU9FLFlBQVEsRUFBRSxrQkFBQ2lCLENBQUQsRUFBWSxDQUFFLENBUDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJDRixDQURGLENBREYsQ0FsQ0YsQ0FERjtBQTBGRDs7R0ExS3VCMUIsSTtVQVFSa0Isd0Q7OztLQVJRbEIsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGxheS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIEJ1dHRvbiwgQm94LCBUZXh0LCBTdGFjaywgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgQmlIb21lQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXkocHJvcHM6IGFueSkge1xuICBjb25zdCBbbnVtYmVyMSwgc2V0TnVtYmVyMV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW251bWJlcjIsIHNldE51bWJlcjJdID0gdXNlU3RhdGUoMik7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtoaWdoc2NvcmUsIHNldEhpZ2hzY29yZV0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVOdW1iZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXZlbCAqIDIgKyAxKTtcbiAgICBjb25zdCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxldmVsICsgMSkgKiAyICsgMSk7XG4gICAgc2V0TnVtYmVyMShudW0xKTtcbiAgICBzZXROdW1iZXIyKG51bTIpO1xuICAgIHNldEFuc3dlcihudW0xICsgbnVtMik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoTnVtYmVyKGUua2V5KSA+PSAwICYmIE51bWJlcihlLmtleSkgPD0gOSkge1xuICAgICAgY29uc29sZS5sb2coZS5rZXkpO1xuICAgICAgaGFuZGxlQ2hhbmdlKGUpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdlbmVyYXRlTnVtYmVycygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0ZW1wSW5wdXQgPSBOdW1iZXIoaW5wdXQuY29uY2F0KGUua2V5KSk7XG4gICAgaWYgKHRlbXBJbnB1dC50b1N0cmluZygpLmxlbmd0aCA8IGFuc3dlci50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgc2V0SW5wdXQodGVtcElucHV0LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodGVtcElucHV0ICE9PSBhbnN3ZXIpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBtPXszfVxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgd3JvbmdcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgc2V0SW5wdXQoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbT17M31cbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgY29ycmVjdFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBzZXRTY29yZShzY29yZSArIDEwKTtcbiAgICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgICBnZW5lcmF0ZU51bWJlcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxCb3ggbT1cIjJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIzMnB4XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgIF9hY3RpdmU9e3sgYmc6ICdub25lJyB9fVxuICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFZpZXcoJ3N0YXJ0Jyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCaUhvbWVBbHQgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIHsvKiA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Qm94IG09XCIyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICBTY29yZVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIyMnB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7c2NvcmV9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD4gKi99XG4gICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxCb3ggbT1cIjJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgIEhpZ2hzY29yZVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIyMnB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7aGlnaHNjb3JlfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDAlJ119IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MjB9PlxuICAgICAgICAgICAgey8qIDxGbGV4IG09ezEwfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPEJveCBmb250U2l6ZT1cIjEycHhcIiBjb2xvcj1cInllbGxvd1wiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIGxldmVsXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGZvbnRTaXplPVwiMjJweFwiIGNvbG9yPVwieWVsbG93XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2xldmVsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD4gKi99XG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPEJveCBtPVwiMlwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIFNjb3JlXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGZvbnRTaXplPVwiMjJweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgICBzdGFydD17c2NvcmUgPiAwID8gc2NvcmUgLSAxMCA6IDB9XG4gICAgICAgICAgICAgICAgICBlbmQ9e3Njb3JlfVxuICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPFN0YWNrIGlzSW5saW5lPlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiNDBweFwiPlxuICAgICAgICAgICAgICAgICAge251bWJlcjF9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyMn1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIzMnB4XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHt9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/play.tsx\n");

/***/ })

})