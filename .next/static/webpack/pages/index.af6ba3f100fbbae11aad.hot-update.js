webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home.tsx":
/*!*****************************!*\
  !*** ./components/home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/home.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home(props) {\n  _s();\n\n  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"Try to beat the high score!\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return onOpen();\n    },\n    variantColor: \"blue\",\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Start\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('highscore');\n    },\n    color: \"gold\",\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid yellow'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Highscore\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isCentered: true,\n    isOpen: isOpen,\n    onClose: onClose,\n    closeOnEsc: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    backgroundColor: \"black\",\n    borderRadius: \"10px\",\n    height: \"600px\",\n    opacity: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5,\n    height: \"600px\",\n    width: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"35px\",\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 19\n    }\n  }, \"Select Mode\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"485px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 2,\n    spacing: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    ml: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 23\n    }\n  }, \"Add\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mr: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 23\n    }\n  }, \"Subtract\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    ml: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 23\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mr: 3,\n    border: \"1px solid gold\",\n    borderRadius: \"5px\",\n    height: \"230px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 23\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    backgroundColor: \"gold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 19\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      props.setView('home');\n    },\n    variant: \"ghost\",\n    color: \"black\",\n    _hover: {\n      border: 'none',\n      color: 'grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 21\n    }\n  }, \"Cancel\")))))))));\n}\n\n_s(Home, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLnRzeD9kZDg3Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiYm9yZGVyIiwib3V0bGluZSIsInNldFZpZXciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUEwQjtBQUFBOztBQUFBLHVCQUNIQyxxRUFBYSxFQURWO0FBQUEsTUFDL0JDLE1BRCtCLGtCQUMvQkEsTUFEK0I7QUFBQSxNQUN2QkMsTUFEdUIsa0JBQ3ZCQSxNQUR1QjtBQUFBLE1BQ2ZDLE9BRGUsa0JBQ2ZBLE9BRGU7O0FBR3ZDLFNBQ0UsbUVBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRSxDQUFDLE1BQUQsQ0FBYjtBQUF1QixVQUFNLEVBQUUsQ0FBQyxPQUFELENBQS9CO0FBQTBDLFNBQUssRUFBQyxRQUFoRDtBQUF5RCxXQUFPLEVBQUMsUUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTyxXQUFPLEVBQUUsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxNQUFNLEVBQVo7QUFBQSxLQURYO0FBRUUsZ0JBQVksRUFBQyxNQUZmO0FBR0UsV0FBTyxFQUFDLFNBSFY7QUFJRSxVQUFNLEVBQUU7QUFBRUUsWUFBTSxFQUFFO0FBQVYsS0FKVjtBQUtF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SUUsVUFBTSxFQUFDLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixDQURGLENBVEYsRUF5Q0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsV0FBTyxFQUFDLGNBRlY7QUFHRSxhQUFTLEVBQUMsS0FIWjtBQUlFLG1CQUFlLEVBQUMsTUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkosV0FBSyxDQUFDTyxPQUFOLENBQWMsTUFBZDtBQUNELEtBSEg7QUFJRSxXQUFPLEVBQUMsT0FKVjtBQUtFLFNBQUssRUFBQyxPQUxSO0FBTUUsVUFBTSxFQUFFO0FBQUVGLFlBQU0sRUFBRSxNQUFWO0FBQWtCRyxXQUFLLEVBQUU7QUFBekIsS0FOVjtBQU9FLFVBQU0sRUFBRTtBQUFFRixhQUFPLEVBQUU7QUFBWCxLQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixDQXpDRixDQU5GLENBTkYsQ0FORixDQURGLENBeEJGLENBREYsQ0FERjtBQWdIRDs7R0FuSHVCUCxJO1VBQ2NFLDZEOzs7S0FEZEYsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQnV0dG9uLFxuICBTdGFjayxcbiAgU2ltcGxlR3JpZCxcbiAgTW9kYWwsXG4gIE1vZGFsQ29udGVudCxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgQm94LFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHdpZHRoPXtbJzEwMCUnXX0gaGVpZ2h0PXtbJzEwMHZoJ119IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8Qm94PlRyeSB0byBiZWF0IHRoZSBoaWdoIHNjb3JlITwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk9wZW4oKX1cbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyB9fVxuICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VmlldygnaGlnaHNjb3JlJyl9XG4gICAgICAgICAgICAgIGNvbG9yPVwiZ29sZFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJzFweCBzb2xpZCB5ZWxsb3cnIH19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSGlnaHNjb3JlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxNb2RhbCBpc0NlbnRlcmVkIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBjbG9zZU9uRXNjPlxuICAgICAgICAgIDxNb2RhbENvbnRlbnRcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICAgICAgb3BhY2l0eT17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICB3aWR0aD17WycxMDAlJ119XG4gICAgICAgICAgICAgIGhlaWdodD17WycxMDB2aCddfVxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBib3JkZXI9XCI1cHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0gaGVpZ2h0PVwiNjAwcHhcIiB3aWR0aD1cIjQwMHB4XCI+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1cHhcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNb2RlXG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiNDg1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJ0cmFjdFxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgID48L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJnb2xkXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFZpZXcoJ2hvbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home.tsx\n");

/***/ })

})