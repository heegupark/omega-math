webpackHotUpdate_N_E("pages/index",{

/***/ "./components/highscore.tsx":
/*!**********************************!*\
  !*** ./components/highscore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highscore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-math/components/highscore.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Highscore(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Array(10)),\n      highscores = _useState2[0],\n      setHighscores = _useState2[1];\n\n  var handleSave = function handleSave() {\n    props.setView('home');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighscores('add');\n  }, []);\n\n  var getHighscores = function getHighscores(mode) {\n    fetch(\"/api/gethighscores\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        mode: mode\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setHighscores(data.data);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting messages:\".concat(err.message));\n    });\n  };\n\n  var convertDate = function convertDate(date) {\n    return \"\".concat(new Date(date).getMonth() + 1, \"/\").concat(new Date(date).getDate(), \"/\").concat(new Date(date).getFullYear());\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: ['100%'],\n    height: ['100vh'],\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // p={10}\n  , {\n    align: \"center\",\n    justify: \"center\",\n    border: \"5px solid gold\",\n    borderRadius: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 3,\n    height: \"600px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    backgroundColor: \"gold\",\n    height: \"30px\",\n    color: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Highscore\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    height: \"500px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    px: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: \"100px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, props.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    autoFocus: true,\n    width: \"150px\",\n    variant: \"unstyled\",\n    textAlign: \"center\",\n    fontSize: \"32px\",\n    type: \"number\",\n    mx: 5,\n    borderBottom: \"1px solid white\",\n    value: username,\n    onChange: function onChange(e) {\n      return setUsername(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, convertDate(new Date()))), highscores.map(function (highscore) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      key: highscore._id,\n      align: \"center\",\n      justify: \"space-evenly\",\n      direction: \"row\",\n      px: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      width: \"100px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 21\n      }\n    }, highscore.score), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      mx: 5,\n      width: \"150px\",\n      textAlign: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, highscore.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 21\n      }\n    }, convertDate(highscore.createdAt)));\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    align: \"center\",\n    justify: \"space-evenly\",\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return handleSave();\n    },\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid blue'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, \"Save\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return props.setView('home');\n    },\n    variant: \"outline\",\n    _hover: {\n      border: '1px solid grey'\n    },\n    _focus: {\n      outline: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, \"Cancel\"))))));\n}\n\n_s(Highscore, \"P07OzdEc90OCrwjsEImj3UeLamc=\");\n\n_c = Highscore;\n\nvar _c;\n\n$RefreshReg$(_c, \"Highscore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oaWdoc2NvcmUudHN4PzA1NmQiXSwibmFtZXMiOlsiSGlnaHNjb3JlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJBcnJheSIsImhpZ2hzY29yZXMiLCJzZXRIaWdoc2NvcmVzIiwiaGFuZGxlU2F2ZSIsInNldFZpZXciLCJ1c2VFZmZlY3QiLCJnZXRIaWdoc2NvcmVzIiwibW9kZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb252ZXJ0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJzY29yZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImhpZ2hzY29yZSIsIl9pZCIsImNyZWF0ZWRBdCIsImJvcmRlciIsIm91dGxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQ3JDQyxRQURxQztBQUFBLE1BQzNCQyxXQUQyQjs7QUFBQSxtQkFFUkYsc0RBQVEsQ0FBQyxJQUFJRyxLQUFKLENBQVUsRUFBVixDQUFELENBRkE7QUFBQSxNQUVyQ0MsVUFGcUM7QUFBQSxNQUV6QkMsYUFGeUI7O0FBSTVDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJQLFNBQUssQ0FBQ1EsT0FBTixDQUFjLE1BQWQ7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFrQjtBQUN0Q0MsU0FBSyx1QkFBdUI7QUFDMUJDLFlBQU0sRUFBRSxNQURrQjtBQUUxQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGaUI7QUFLMUJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJOLFlBQUksRUFBSkE7QUFEbUIsT0FBZjtBQUxvQixLQUF2QixDQUFMLENBU0dPLElBVEgsQ0FTUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQVRSLEVBVUdGLElBVkgsQ0FVUSxVQUFDRyxJQUFELEVBQWU7QUFDbkIsVUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCaEIscUJBQWEsQ0FBQ2UsSUFBSSxDQUFDQSxJQUFOLENBQWI7QUFDRDtBQUNGLEtBZEgsV0FlUyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLDJEQUNxREYsR0FBRyxDQUFDRyxPQUR6RDtBQUdELEtBbkJIO0FBb0JELEdBckJEOztBQXVCQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQWdCO0FBQ2xDLHFCQUFVLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRSxRQUFmLEtBQTRCLENBQXRDLGNBQTJDLElBQUlELElBQUosQ0FDekNELElBRHlDLEVBRXpDRyxPQUZ5QyxFQUEzQyxjQUVlLElBQUlGLElBQUosQ0FBU0QsSUFBVCxFQUFlSSxXQUFmLEVBRmY7QUFHRCxHQUpEOztBQU1BLFNBQ0UsbUVBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRSxDQUFDLE1BQUQsQ0FBYjtBQUF1QixVQUFNLEVBQUUsQ0FBQyxPQUFELENBQS9CO0FBQTBDLFNBQUssRUFBQyxRQUFoRDtBQUF5RCxXQUFPLEVBQUMsUUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FDRTtBQURGO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLFVBQU0sRUFBQyxnQkFKVDtBQUtFLGdCQUFZLEVBQUMsTUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxxREFBRDtBQUFPLFdBQU8sRUFBRSxDQUFoQjtBQUFtQixVQUFNLEVBQUMsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxhQUFTLEVBQUMsUUFEWjtBQUVFLG1CQUFlLEVBQUMsTUFGbEI7QUFHRSxVQUFNLEVBQUMsTUFIVDtBQUlFLFNBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFTRSxNQUFDLG1EQUFEO0FBQUssVUFBTSxFQUFDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFdBQU8sRUFBQyxjQUZWO0FBR0UsYUFBUyxFQUFDLEtBSFo7QUFJRSxNQUFFLEVBQUUsQ0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0JoQyxLQUFLLENBQUNpQyxLQUExQixDQU5GLEVBT0UsTUFBQyxxREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsV0FBTyxFQUFDLFVBSFY7QUFJRSxhQUFTLEVBQUMsUUFKWjtBQUtFLFlBQVEsRUFBQyxNQUxYO0FBTUUsUUFBSSxFQUFDLFFBTlA7QUFPRSxNQUFFLEVBQUUsQ0FQTjtBQVFFLGdCQUFZLEVBQUMsaUJBUmY7QUFTRSxTQUFLLEVBQUUvQixRQVRUO0FBVUUsWUFBUSxFQUFFLGtCQUFDZ0MsQ0FBRDtBQUFBLGFBQVkvQixXQUFXLENBQUMrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF2QjtBQUFBLEtBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBbUJFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNVCxXQUFXLENBQUMsSUFBSUUsSUFBSixFQUFELENBQWpCLENBbkJGLENBREYsRUFzQkd4QixVQUFVLENBQUNnQyxHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFvQjtBQUNsQyxXQUNFLE1BQUMsb0RBQUQ7QUFDRSxTQUFHLEVBQUVBLFNBQVMsQ0FBQ0MsR0FEakI7QUFFRSxXQUFLLEVBQUMsUUFGUjtBQUdFLGFBQU8sRUFBQyxjQUhWO0FBSUUsZUFBUyxFQUFDLEtBSlo7QUFLRSxRQUFFLEVBQUUsQ0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsTUFBQyxtREFBRDtBQUFLLFdBQUssRUFBQyxPQUFYO0FBQW1CLGVBQVMsRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELFNBQVMsQ0FBQ0wsS0FEYixDQVBGLEVBVUUsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQVksV0FBSyxFQUFDLE9BQWxCO0FBQTBCLGVBQVMsRUFBQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dLLFNBQVMsQ0FBQ3BDLFFBRGIsQ0FWRixFQWFFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNeUIsV0FBVyxDQUFDVyxTQUFTLENBQUNFLFNBQVgsQ0FBakIsQ0FiRixDQURGO0FBaUJELEdBbEJBLENBdEJILENBVEYsRUFtREUsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxjQUE3QjtBQUE0QyxhQUFTLEVBQUMsS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNakMsVUFBVSxFQUFoQjtBQUFBLEtBRFg7QUFFRSxXQUFPLEVBQUMsU0FGVjtBQUdFLFVBQU0sRUFBRTtBQUFFa0MsWUFBTSxFQUFFO0FBQVYsS0FIVjtBQUlFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQVNFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNMUMsS0FBSyxDQUFDUSxPQUFOLENBQWMsTUFBZCxDQUFOO0FBQUEsS0FEWDtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsVUFBTSxFQUFFO0FBQUVpQyxZQUFNLEVBQUU7QUFBVixLQUhWO0FBSUUsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLENBbkRGLENBUEYsQ0FERixDQURGLENBREY7QUFvRkQ7O0dBN0h1QjNDLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hpZ2hzY29yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIEJ1dHRvbiwgU3RhY2ssIEJveCwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWdoc2NvcmUocHJvcHM6IGFueSkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hpZ2hzY29yZXMsIHNldEhpZ2hzY29yZXNdID0gdXNlU3RhdGUobmV3IEFycmF5KDEwKSk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRWaWV3KCdob21lJyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRIaWdoc2NvcmVzKCdhZGQnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEhpZ2hzY29yZXMgPSAobW9kZTogc3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvZ2V0aGlnaHNjb3Jlc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbW9kZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0SGlnaHNjb3JlcyhkYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgbWVzc2FnZXM6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxfS8ke25ldyBEYXRlKFxuICAgICAgZGF0ZVxuICAgICkuZ2V0RGF0ZSgpfS8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3aWR0aD17WycxMDAlJ119IGhlaWdodD17WycxMDB2aCddfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAvLyBwPXsxMH1cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgYm9yZGVyPVwiNXB4IHNvbGlkIGdvbGRcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGhlaWdodD1cIjYwMHB4XCI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdvbGRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhpZ2hzY29yZVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGhlaWdodD1cIjUwMHB4XCI+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgcHg9ezN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIj57cHJvcHMuc2NvcmV9PC9Cb3g+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjMycHhcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBteD17NX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZCB3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJveD57Y29udmVydERhdGUobmV3IERhdGUoKSl9PC9Cb3g+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAge2hpZ2hzY29yZXMubWFwKChoaWdoc2NvcmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2hpZ2hzY29yZS5faWR9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIHB4PXszfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aGlnaHNjb3JlLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBteD17NX0gd2lkdGg9XCIxNTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtoaWdoc2NvcmUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94Pntjb252ZXJ0RGF0ZShoaWdoc2NvcmUuY3JlYXRlZEF0KX08L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBib3JkZXI6ICcxcHggc29saWQgYmx1ZScgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VmlldygnaG9tZScpfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyZXknIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/highscore.tsx\n");

/***/ })

})