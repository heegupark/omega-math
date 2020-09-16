webpackHotUpdate_N_E("pages/index",{

/***/ "./components/play.tsx":
/*!*****************************!*\
  !*** ./components/play.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Play; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/play.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Play(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      number1 = _useState[0],\n      setNumber1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2),\n      number2 = _useState2[0],\n      setNumber2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      level = _useState3[0],\n      setLevel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState4[0],\n      setInput = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      answer = _useState5[0],\n      setAnswer = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      score = _useState6[0],\n      setScore = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      highscore = _useState7[0],\n      setHighscore = _useState7[1];\n\n  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"])();\n\n  var generateNumbers = function generateNumbers() {\n    var num1 = Math.floor(Math.random() * level * 2 + 1);\n    var num2 = Math.floor(Math.random() * (level + 1) * 2 + 1);\n    setNumber1(num1);\n    setNumber2(num2);\n    setAnswer(num1 + num2);\n  };\n\n  var handleKeyDown = function handleKeyDown(e) {\n    if (Number(e.key) >= 0 && Number(e.key) <= 9) {\n      console.log(e.key);\n      handleChange(e);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    generateNumbers();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n    };\n  });\n\n  var handleChange = function handleChange(e) {\n    var tempInput = Number(input.concat(e.key));\n\n    if (tempInput.toString().length < answer.toString().length) {\n      setInput(tempInput.toString());\n    } else if (tempInput !== answer) {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"red.500\",\n            p: 3 // border=\"1px solid red\"\n            ,\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 11\n            }\n          }, \"wrong\");\n        }\n      });\n      setInput('');\n    } else {\n      toast({\n        position: 'top',\n        duration: 500,\n        render: function render() {\n          return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            m: 3,\n            color: \"green.500\",\n            p: 3 // border=\"1px solid gold\"\n            ,\n            borderRadius: \"5px\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 11\n            }\n          }, \"correct\");\n        }\n      });\n      var newScore = score + 10;\n      setScore(newScore);\n      if (newScore > highscore) setHighscore(newScore);\n      setLevel(level + 1);\n      setInput('');\n      generateNumbers();\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    align: \"center\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"gold\",\n    fontSize: \"32px\",\n    variant: \"ghost\",\n    _hover: {\n      color: 'white'\n    },\n    _active: {\n      bg: 'none'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      return props.setView('start');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiHomeAlt\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, highscore))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100%'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 20,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: \"2\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 15\n    }\n  }, \"Score\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    fontSize: \"22px\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 15\n    }\n  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    start: score > 0 ? score - 10 : 0,\n    end: score,\n    duration: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 17\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    isInline: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 17\n    }\n  }, number1), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 17\n    }\n  }, \"+\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 17\n    }\n  }, number2), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    textAlign: \"center\",\n    fontSize: \"40px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 17\n    }\n  }, \"=\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    fontSize: \"32px\",\n    type: \"number\",\n    value: input,\n    onChange: function onChange(e) {},\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_s(Play, \"adWd6nWdg8bLbqOQW0QVCe9I87c=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"]];\n});\n\n_c = Play;\n\nvar _c;\n\n$RefreshReg$(_c, \"Play\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5LnRzeD9mNWM5Il0sIm5hbWVzIjpbIlBsYXkiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtYmVyMSIsInNldE51bWJlcjEiLCJudW1iZXIyIiwic2V0TnVtYmVyMiIsImxldmVsIiwic2V0TGV2ZWwiLCJpbnB1dCIsInNldElucHV0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwic2NvcmUiLCJzZXRTY29yZSIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInRvYXN0IiwidXNlVG9hc3QiLCJnZW5lcmF0ZU51bWJlcnMiLCJudW0xIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibnVtMiIsImhhbmRsZUtleURvd24iLCJlIiwiTnVtYmVyIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGVtcElucHV0IiwiY29uY2F0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwicmVuZGVyIiwibmV3U2NvcmUiLCJjb2xvciIsImJnIiwib3V0bGluZSIsInNldFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxDQUFELENBREM7QUFBQSxNQUNoQ0MsT0FEZ0M7QUFBQSxNQUN2QkMsVUFEdUI7O0FBQUEsbUJBRVRGLHNEQUFRLENBQUMsQ0FBRCxDQUZDO0FBQUEsTUFFaENHLE9BRmdDO0FBQUEsTUFFdkJDLFVBRnVCOztBQUFBLG1CQUdiSixzREFBUSxDQUFDLENBQUQsQ0FISztBQUFBLE1BR2hDSyxLQUhnQztBQUFBLE1BR3pCQyxRQUh5Qjs7QUFBQSxtQkFJYk4sc0RBQVEsQ0FBQyxFQUFELENBSks7QUFBQSxNQUloQ08sS0FKZ0M7QUFBQSxNQUl6QkMsUUFKeUI7O0FBQUEsbUJBS1hSLHNEQUFRLENBQUMsQ0FBRCxDQUxHO0FBQUEsTUFLaENTLE1BTGdDO0FBQUEsTUFLeEJDLFNBTHdCOztBQUFBLG1CQU1iVixzREFBUSxDQUFDLENBQUQsQ0FOSztBQUFBLE1BTWhDVyxLQU5nQztBQUFBLE1BTXpCQyxRQU55Qjs7QUFBQSxtQkFPTFosc0RBQVEsQ0FBQyxDQUFELENBUEg7QUFBQSxNQU9oQ2EsU0FQZ0M7QUFBQSxNQU9yQkMsWUFQcUI7O0FBUXZDLE1BQU1DLEtBQUssR0FBR0MsZ0VBQVEsRUFBdEI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQmhCLEtBQWhCLEdBQXdCLENBQXhCLEdBQTRCLENBQXZDLENBQWI7QUFDQSxRQUFNaUIsSUFBSSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCaEIsS0FBSyxHQUFHLENBQXpCLElBQThCLENBQTlCLEdBQWtDLENBQTdDLENBQWI7QUFDQUgsY0FBVSxDQUFDZ0IsSUFBRCxDQUFWO0FBQ0FkLGNBQVUsQ0FBQ2tCLElBQUQsQ0FBVjtBQUNBWixhQUFTLENBQUNRLElBQUksR0FBR0ksSUFBUixDQUFUO0FBQ0QsR0FORDs7QUFRQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBWTtBQUNoQyxRQUFJQyxNQUFNLENBQUNELENBQUMsQ0FBQ0UsR0FBSCxDQUFOLElBQWlCLENBQWpCLElBQXNCRCxNQUFNLENBQUNELENBQUMsQ0FBQ0UsR0FBSCxDQUFOLElBQWlCLENBQTNDLEVBQThDO0FBQzVDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBQyxDQUFDRSxHQUFkO0FBQ0FHLGtCQUFZLENBQUNMLENBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FMRDs7QUFPQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2RiLG1CQUFlO0FBQ2hCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQWEseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNULGFBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1hRLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NWLGFBQXRDO0FBQ0QsS0FGRDtBQUdELEdBTlEsQ0FBVDs7QUFPQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxDQUFELEVBQVk7QUFDL0IsUUFBTVUsU0FBUyxHQUFHVCxNQUFNLENBQUNsQixLQUFLLENBQUM0QixNQUFOLENBQWFYLENBQUMsQ0FBQ0UsR0FBZixDQUFELENBQXhCOztBQUNBLFFBQUlRLFNBQVMsQ0FBQ0UsUUFBVixHQUFxQkMsTUFBckIsR0FBOEI1QixNQUFNLENBQUMyQixRQUFQLEdBQWtCQyxNQUFwRCxFQUE0RDtBQUMxRDdCLGNBQVEsQ0FBQzBCLFNBQVMsQ0FBQ0UsUUFBVixFQUFELENBQVI7QUFDRCxLQUZELE1BRU8sSUFBSUYsU0FBUyxLQUFLekIsTUFBbEIsRUFBMEI7QUFDL0JNLFdBQUssQ0FBQztBQUNKdUIsZ0JBQVEsRUFBRSxLQUROO0FBRUpDLGdCQUFRLEVBQUUsR0FGTjtBQUdKQyxjQUFNLEVBQUU7QUFBQSxpQkFDTixNQUFDLG1EQUFEO0FBQ0UsYUFBQyxFQUFFLENBREw7QUFFRSxpQkFBSyxFQUFDLFNBRlI7QUFHRSxhQUFDLEVBQUUsQ0FITCxDQUlFO0FBSkY7QUFLRSx3QkFBWSxFQUFDLEtBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETTtBQUFBO0FBSEosT0FBRCxDQUFMO0FBZUFoQyxjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsS0FqQk0sTUFpQkE7QUFDTE8sV0FBSyxDQUFDO0FBQ0p1QixnQkFBUSxFQUFFLEtBRE47QUFFSkMsZ0JBQVEsRUFBRSxHQUZOO0FBR0pDLGNBQU0sRUFBRTtBQUFBLGlCQUNOLE1BQUMsbURBQUQ7QUFDRSxhQUFDLEVBQUUsQ0FETDtBQUVFLGlCQUFLLEVBQUMsV0FGUjtBQUdFLGFBQUMsRUFBRSxDQUhMLENBSUU7QUFKRjtBQUtFLHdCQUFZLEVBQUMsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURNO0FBQUE7QUFISixPQUFELENBQUw7QUFlQSxVQUFNQyxRQUFRLEdBQUc5QixLQUFLLEdBQUcsRUFBekI7QUFDQUMsY0FBUSxDQUFDNkIsUUFBRCxDQUFSO0FBQ0EsVUFBSUEsUUFBUSxHQUFHNUIsU0FBZixFQUEwQkMsWUFBWSxDQUFDMkIsUUFBRCxDQUFaO0FBQzFCbkMsY0FBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0FHLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQVMscUJBQWU7QUFDaEI7QUFDRixHQTVDRDs7QUE4Q0EsU0FDRSxtRUFDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFLENBQUMsTUFBRCxDQUFiO0FBQXVCLFNBQUssRUFBQyxRQUE3QjtBQUFzQyxXQUFPLEVBQUMsZUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsYUFBUyxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFDLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFlBQVEsRUFBQyxNQUZYO0FBR0UsV0FBTyxFQUFDLE9BSFY7QUFJRSxVQUFNLEVBQUU7QUFBRXlCLFdBQUssRUFBRTtBQUFULEtBSlY7QUFLRSxXQUFPLEVBQUU7QUFBRUMsUUFBRSxFQUFFO0FBQU4sS0FMWDtBQU1FLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQU5WO0FBT0UsV0FBTyxFQUFFO0FBQUEsYUFBTTdDLEtBQUssQ0FBQzhDLE9BQU4sQ0FBYyxPQUFkLENBQU47QUFBQSxLQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBREYsQ0FERixFQXdCRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLGFBQVMsRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBQyxHQUFQO0FBQVcsYUFBUyxFQUFDLFFBQXJCO0FBQThCLFlBQVEsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUUsTUFBQyxtREFBRDtBQUFLLFlBQVEsRUFBQyxNQUFkO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQyxTQURILENBSkYsQ0F4QkYsQ0FERixFQWtDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFLENBQUMsTUFBRCxDQUFiO0FBQXVCLFVBQU0sRUFBRSxDQUFDLE1BQUQsQ0FBL0I7QUFBeUMsU0FBSyxFQUFDLFFBQS9DO0FBQXdELFdBQU8sRUFBQyxRQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFPLFdBQU8sRUFBRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxhQUFTLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxLQUFDLEVBQUMsR0FBUDtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUE4QixZQUFRLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUUsTUFBQyxtREFBRDtBQUFLLFlBQVEsRUFBQyxNQUFkO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBRUYsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBSyxHQUFHLEVBQXBCLEdBQXlCLENBRGxDO0FBRUUsT0FBRyxFQUFFQSxLQUZQO0FBR0UsWUFBUSxFQUFFLENBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FURixFQXFCRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLGFBQVMsRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFPLFlBQVEsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLGFBQVMsRUFBQyxRQUE3QjtBQUFzQyxZQUFRLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixPQURILENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLFFBQTdCO0FBQXNDLFlBQVEsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkYsRUFPRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLFFBQTdCO0FBQXNDLFlBQVEsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLE9BREgsQ0FQRixFQVVFLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFtQixhQUFTLEVBQUMsUUFBN0I7QUFBc0MsWUFBUSxFQUFDLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FWRixDQURGLENBckJGLEVBcUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsYUFBUyxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxhQUFTLEVBQUMsUUFIWjtBQUlFLFlBQVEsRUFBQyxNQUpYO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFNRSxTQUFLLEVBQUVJLEtBTlQ7QUFPRSxZQUFRLEVBQUUsa0JBQUNpQixDQUFELEVBQVksQ0FBRSxDQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FyQ0YsQ0FERixDQURGLENBbENGLENBREY7QUEwRkQ7O0dBNUt1QjFCLEk7VUFRUmtCLHdEOzs7S0FSUWxCLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BsYXkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIEJveCwgVGV4dCwgU3RhY2ssIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IEJpSG9tZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5KHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW251bWJlcjEsIHNldE51bWJlcjFdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtudW1iZXIyLCBzZXROdW1iZXIyXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGlnaHNjb3JlLCBzZXRIaWdoc2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICBjb25zdCBnZW5lcmF0ZU51bWJlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldmVsICogMiArIDEpO1xuICAgIGNvbnN0IG51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGV2ZWwgKyAxKSAqIDIgKyAxKTtcbiAgICBzZXROdW1iZXIxKG51bTEpO1xuICAgIHNldE51bWJlcjIobnVtMik7XG4gICAgc2V0QW5zd2VyKG51bTEgKyBudW0yKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChOdW1iZXIoZS5rZXkpID49IDAgJiYgTnVtYmVyKGUua2V5KSA8PSA5KSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmtleSk7XG4gICAgICBoYW5kbGVDaGFuZ2UoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2VuZXJhdGVOdW1iZXJzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRlbXBJbnB1dCA9IE51bWJlcihpbnB1dC5jb25jYXQoZS5rZXkpKTtcbiAgICBpZiAodGVtcElucHV0LnRvU3RyaW5nKCkubGVuZ3RoIDwgYW5zd2VyLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICBzZXRJbnB1dCh0ZW1wSW5wdXQudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmICh0ZW1wSW5wdXQgIT09IGFuc3dlcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIG09ezN9XG4gICAgICAgICAgICBjb2xvcj1cInJlZC41MDBcIlxuICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgIC8vIGJvcmRlcj1cIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB3cm9uZ1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBtPXszfVxuICAgICAgICAgICAgY29sb3I9XCJncmVlbi41MDBcIlxuICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgIC8vIGJvcmRlcj1cIjFweCBzb2xpZCBnb2xkXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgY29ycmVjdFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdTY29yZSA9IHNjb3JlICsgMTA7XG4gICAgICBzZXRTY29yZShuZXdTY29yZSk7XG4gICAgICBpZiAobmV3U2NvcmUgPiBoaWdoc2NvcmUpIHNldEhpZ2hzY29yZShuZXdTY29yZSk7XG4gICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgICAgc2V0SW5wdXQoJycpO1xuICAgICAgZ2VuZXJhdGVOdW1iZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHdpZHRoPXtbJzEwMCUnXX0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Qm94IG09XCIyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzJweFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICBfYWN0aXZlPXt7IGJnOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRWaWV3KCdzdGFydCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QmlIb21lQWx0IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICB7LyogPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEJveCBtPVwiMlwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgU2NvcmVcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGZvbnRTaXplPVwiMjJweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge3Njb3JlfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+ICovfVxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Qm94IG09XCIyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICBIaWdoc2NvcmVcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGZvbnRTaXplPVwiMjJweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge2hpZ2hzY29yZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggd2lkdGg9e1snMTAwJSddfSBoZWlnaHQ9e1snMTAwJSddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIwfT5cbiAgICAgICAgICAgIHsvKiA8RmxleCBtPXsxMH0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIxMnB4XCIgY29sb3I9XCJ5ZWxsb3dcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBsZXZlbFxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBmb250U2l6ZT1cIjIycHhcIiBjb2xvcj1cInllbGxvd1wiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtsZXZlbH1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+ICovfVxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxCb3ggbT1cIjJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgICAgICBTY29yZVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBmb250U2l6ZT1cIjIycHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Q291bnRVcFxuICAgICAgICAgICAgICAgICAgc3RhcnQ9e3Njb3JlID4gMCA/IHNjb3JlIC0gMTAgOiAwfVxuICAgICAgICAgICAgICAgICAgZW5kPXtzY29yZX1cbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxTdGFjayBpc0lubGluZT5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgIHtudW1iZXIxfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiNDBweFwiPlxuICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiNDBweFwiPlxuICAgICAgICAgICAgICAgICAge251bWJlcjJ9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgICA9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMzJweFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7fX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/play.tsx\n");

/***/ })

})