webpackHotUpdate_N_E("pages/index",{

/***/ "./components/play.tsx":
/*!*****************************!*\
  !*** ./components/play.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Play; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/play.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Play(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      number1 = _useState[0],\n      setNumber1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2),\n      number2 = _useState2[0],\n      setNumber2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      level = _useState3[0],\n      setLevel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState4[0],\n      setInput = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      answer = _useState5[0],\n      setAnswer = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      score = _useState6[0],\n      setScore = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(100),\n      highscore = _useState7[0],\n      setHighscore = _useState7[1];\n\n  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"])();\n\n  var generateNumbers = function generateNumbers() {\n    var num1 = Math.floor(Math.random() * level * 2 + 1);\n    var num2 = Math.floor(Math.random() * (level + 1) * 2 + 1);\n    setNumber1(num1);\n    setNumber2(num2);\n    setAnswer(num1 + num2);\n  };\n\n  var handleKeyDown = function handleKeyDown(e) {\n    if (Number(e.key) >= 0 && Number(e.key) <= 9) {\n      console.log(e.key);\n      handleChange(e);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    generateNumbers();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n    };\n  });\n\n  var handleChange = function handleChange(e) {\n    var tempInput = Number(input.concat(e.key));\n\n    if (tempInput.toString().length < answer.toString().length) {\n      setInput(tempInput.toString());\n    } else if (tempInput !== answer) {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"blue\",\n            p: 3,\n            border: \"1px solid red\",\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 11\n            }\n          }, \"wrong\");\n        }\n      });\n      setInput('');\n    } else {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"white\",\n            p: 3,\n            border: \"1px solid gold\",\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 11\n            }\n          }, \"correct\");\n        }\n      });\n      setScore(score + 10);\n      if (score > highscore) setHighscore(score);\n      setLevel(level + 1);\n      setInput('');\n      generateNumbers();\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    align: \"center\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"gold\",\n    fontSize: \"32px\",\n    variant: \"ghost\",\n    _hover: {\n      color: 'white'\n    },\n    _active: {\n      bg: 'none'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      return props.setView('start');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiHomeAlt\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 15\n    }\n  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, highscore))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100%'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 20,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 15\n    }\n  }, \"Score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    start: score > 0 ? score - 10 : 0,\n    end: score,\n    duration: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 17\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    isInline: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 17\n    }\n  }, number1), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 17\n    }\n  }, \"+\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 17\n    }\n  }, number2), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 17\n    }\n  }, \"=\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    fontSize: \"32px\",\n    type: \"number\",\n    value: input,\n    onChange: function onChange(e) {},\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_s(Play, \"UbE+QdNyjDVdW0zXi1QLmNTJuNs=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"]];\n});\n\n_c = Play;\n\nvar _c;\n\n$RefreshReg$(_c, \"Play\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5LnRzeD9mNWM5Il0sIm5hbWVzIjpbIlBsYXkiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtYmVyMSIsInNldE51bWJlcjEiLCJudW1iZXIyIiwic2V0TnVtYmVyMiIsImxldmVsIiwic2V0TGV2ZWwiLCJpbnB1dCIsInNldElucHV0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwic2NvcmUiLCJzZXRTY29yZSIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInRvYXN0IiwidXNlVG9hc3QiLCJnZW5lcmF0ZU51bWJlcnMiLCJudW0xIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibnVtMiIsImhhbmRsZUtleURvd24iLCJlIiwiTnVtYmVyIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGVtcElucHV0IiwiY29uY2F0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwicmVuZGVyIiwiY29sb3IiLCJiZyIsIm91dGxpbmUiLCJzZXRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFVBRHVCOztBQUFBLG1CQUVURixzREFBUSxDQUFDLENBQUQsQ0FGQztBQUFBLE1BRWhDRyxPQUZnQztBQUFBLE1BRXZCQyxVQUZ1Qjs7QUFBQSxtQkFHYkosc0RBQVEsQ0FBQyxDQUFELENBSEs7QUFBQSxNQUdoQ0ssS0FIZ0M7QUFBQSxNQUd6QkMsUUFIeUI7O0FBQUEsbUJBSWJOLHNEQUFRLENBQUMsRUFBRCxDQUpL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TUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLGFBQVMsRUFBQyxRQUE3QjtBQUFzQyxZQUFRLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxPQURILENBUEYsRUFVRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLFFBQTdCO0FBQXNDLFlBQVEsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVkYsQ0FERixDQXJCRixFQXFDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLGFBQVMsRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFdBQU8sRUFBQyxVQUZWO0FBR0UsYUFBUyxFQUFDLFFBSFo7QUFJRSxZQUFRLEVBQUMsTUFKWDtBQUtFLFFBQUksRUFBQyxRQUxQO0FBTUUsU0FBSyxFQUFFSSxLQU5UO0FBT0UsWUFBUSxFQUFFLGtCQUFDaUIsQ0FBRCxFQUFZLENBQUUsQ0FQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckNGLENBREYsQ0FERixDQWxDRixDQURGO0FBMEZEOztHQTNLdUIxQixJO1VBUVJrQix3RDs7O0tBUlFsQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbGF5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgQnV0dG9uLCBCb3gsIFRleHQsIFN0YWNrLCBJbnB1dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBCaUhvbWVBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgQ291bnRVcCBmcm9tICdyZWFjdC1jb3VudHVwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheShwcm9wczogYW55KSB7XG4gIGNvbnN0IFtudW1iZXIxLCBzZXROdW1iZXIxXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbbnVtYmVyMiwgc2V0TnVtYmVyMl0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hpZ2hzY29yZSwgc2V0SGlnaHNjb3JlXSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICBjb25zdCBnZW5lcmF0ZU51bWJlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldmVsICogMiArIDEpO1xuICAgIGNvbnN0IG51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGV2ZWwgKyAxKSAqIDIgKyAxKTtcbiAgICBzZXROdW1iZXIxKG51bTEpO1xuICAgIHNldE51bWJlcjIobnVtMik7XG4gICAgc2V0QW5zd2VyKG51bTEgKyBudW0yKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChOdW1iZXIoZS5rZXkpID49IDAgJiYgTnVtYmVyKGUua2V5KSA8PSA5KSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmtleSk7XG4gICAgICBoYW5kbGVDaGFuZ2UoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2VuZXJhdGVOdW1iZXJzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRlbXBJbnB1dCA9IE51bWJlcihpbnB1dC5jb25jYXQoZS5rZXkpKTtcbiAgICBpZiAodGVtcElucHV0LnRvU3RyaW5nKCkubGVuZ3RoIDwgYW5zd2VyLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICBzZXRJbnB1dCh0ZW1wSW5wdXQudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmICh0ZW1wSW5wdXQgIT09IGFuc3dlcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIG09ezN9XG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB3cm9uZ1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBtPXszfVxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBwPXszfVxuICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBjb3JyZWN0XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMTApO1xuICAgICAgaWYgKHNjb3JlID4gaGlnaHNjb3JlKSBzZXRIaWdoc2NvcmUoc2NvcmUpO1xuICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgICAgIHNldElucHV0KCcnKTtcbiAgICAgIGdlbmVyYXRlTnVtYmVycygpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEJveCBtPVwiMlwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjMycHhcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgX2FjdGl2ZT17eyBiZzogJ25vbmUnIH19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0Vmlldygnc3RhcnQnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJpSG9tZUFsdCAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgey8qIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxCb3ggbT1cIjJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgIFNjb3JlXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBmb250U2l6ZT1cIjIycHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtzY29yZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PiAqL31cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEJveCBtPVwiMlwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgSGlnaHNjb3JlXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBmb250U2l6ZT1cIjIycHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtoaWdoc2NvcmV9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IHdpZHRoPXtbJzEwMCUnXX0gaGVpZ2h0PXtbJzEwMCUnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyMH0+XG4gICAgICAgICAgICB7LyogPEZsZXggbT17MTB9IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8Qm94IGZvbnRTaXplPVwiMTJweFwiIGNvbG9yPVwieWVsbG93XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgbGV2ZWxcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIyMnB4XCIgY29sb3I9XCJ5ZWxsb3dcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PiAqL31cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8Qm94IG09XCIyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICAgICAgU2NvcmVcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIyMnB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPENvdW50VXBcbiAgICAgICAgICAgICAgICAgIHN0YXJ0PXtzY29yZSA+IDAgPyBzY29yZSAtIDEwIDogMH1cbiAgICAgICAgICAgICAgICAgIGVuZD17c2NvcmV9XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbj17MX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8U3RhY2sgaXNJbmxpbmU+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyMX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgIHtudW1iZXIyfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiNDBweFwiPlxuICAgICAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjMycHhcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4ge319XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/play.tsx\n");

/***/ })

})