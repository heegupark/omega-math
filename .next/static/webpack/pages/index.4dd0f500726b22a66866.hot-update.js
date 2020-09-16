webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home.tsx":
/*!*****************************!*\
  !*** ./components/home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/home.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home(props) {\n  _s();\n\n  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var play = function play(mode) {\n    props.setMode(mode);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Try to beat the high score!\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return onOpen();\n    },\n    variantColor: \"blue\",\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Start\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('highscore');\n    },\n    color: \"gold\",\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid yellow'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Highscore\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isCentered: true,\n    isOpen: isOpen,\n    onClose: onClose,\n    closeOnEsc: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    backgroundColor: \"black\",\n    borderRadius: \"10px\",\n    height: \"600px\",\n    opacity: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 19\n    }\n  }, \"Select Mode\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 2,\n    spacing: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"PseudoBox\"], {\n    ml: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    height: \"100%\",\n    width: \"100%\",\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 25\n    }\n  }, \"Add\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"PseudoBox\"], {\n    mr: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    onClick: function onClick() {\n      return play('substract');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    height: \"100%\",\n    width: \"100%\",\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 25\n    }\n  }, \"Subtract\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"PseudoBox\"], {\n    ml: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    height: \"100%\",\n    width: \"100%\",\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 25\n    }\n  }, \"Multiply\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"PseudoBox\"], {\n    mr: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 23\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    height: \"100%\",\n    width: \"100%\",\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 25\n    }\n  }, \"Divide\")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 21\n    }\n  }, \"Cancel\")))))))));\n}\n\n_s(Home, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLnRzeD9kZDg3Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwicGxheSIsIm1vZGUiLCJzZXRNb2RlIiwiYm9yZGVyIiwib3V0bGluZSIsInNldFZpZXciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUEwQjtBQUFBOztBQUFBLHVCQUNIQyxxRUFBYSxFQURWO0FBQUEsTUFDL0JDLE1BRCtCLGtCQUMvQkEsTUFEK0I7QUFBQSxNQUN2QkMsTUFEdUIsa0JBQ3ZCQSxNQUR1QjtBQUFBLE1BQ2ZDLE9BRGUsa0JBQ2ZBLE9BRGU7O0FBR3ZDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBa0I7QUFDN0JOLFNBQUssQ0FBQ08sT0FBTixDQUFjRCxJQUFkO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLG1FQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUUsQ0FBQyxNQUFELENBQWI7QUFBdUIsVUFBTSxFQUFFLENBQUMsT0FBRCxDQUEvQjtBQUEwQyxTQUFLLEVBQUMsUUFBaEQ7QUFBeUQsV0FBTyxFQUFDLFFBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFFRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixDQWxERixDQURGLENBVEYsRUE4RUUsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsV0FBTyxFQUFDLGNBRlY7QUFHRSxhQUFTLEVBQUMsS0FIWjtBQUlFLG1CQUFlLEVBQUMsTUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYlIsV0FBSyxDQUFDVSxPQUFOLENBQWMsTUFBZDtBQUNELEtBSEg7QUFJRSxXQUFPLEVBQUMsT0FKVjtBQUtFLFNBQUssRUFBQyxPQUxSO0FBTUUsVUFBTSxFQUFFO0FBQUVGLFlBQU0sRUFBRSxNQUFWO0FBQWtCRyxXQUFLLEVBQUU7QUFBekIsS0FOVjtBQU9FLFVBQU0sRUFBRTtBQUFFRixhQUFPLEVBQUU7QUFBWCxLQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixDQTlFRixDQU5GLENBTkYsQ0FORixDQURGLENBeEJGLENBREYsQ0FERjtBQXFKRDs7R0E1SnVCVixJO1VBQ2NFLDZEOzs7S0FEZEYsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQnV0dG9uLFxuICBTdGFjayxcbiAgU2ltcGxlR3JpZCxcbiAgTW9kYWwsXG4gIE1vZGFsQ29udGVudCxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgQm94LFxuICBQc2V1ZG9Cb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgUGxheSBmcm9tICcuL3BsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIGNvbnN0IHBsYXkgPSAobW9kZTogc3RyaW5nKSA9PiB7XG4gICAgcHJvcHMuc2V0TW9kZShtb2RlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDB2aCddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPEJveD5UcnkgdG8gYmVhdCB0aGUgaGlnaCBzY29yZSE8L0JveD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25PcGVuKCl9XG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgYmx1ZScgfX1cbiAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFZpZXcoJ2hpZ2hzY29yZScpfVxuICAgICAgICAgICAgICBjb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgeWVsbG93JyB9fVxuICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhpZ2hzY29yZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8TW9kYWwgaXNDZW50ZXJlZCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gY2xvc2VPbkVzYz5cbiAgICAgICAgICA8TW9kYWxDb250ZW50XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYwMHB4XCJcbiAgICAgICAgICAgIG9wYWNpdHk9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgd2lkdGg9e1snMTAwJSddfVxuICAgICAgICAgICAgICBoZWlnaHQ9e1snMTAwdmgnXX1cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiNXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9IGhlaWdodD1cIjYwMHB4XCIgd2lkdGg9XCI0MDBweFwiPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZWxlY3QgTW9kZVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjQ4NXB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQc2V1ZG9Cb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgYmx1ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Qc2V1ZG9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPFBzZXVkb0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGxheSgnc3Vic3RyYWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnRyYWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Qc2V1ZG9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPFBzZXVkb0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBseVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUHNldWRvQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxQc2V1ZG9Cb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgYmx1ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Qc2V1ZG9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWaWV3KCdob21lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICdub25lJywgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home.tsx\n");

/***/ })

})