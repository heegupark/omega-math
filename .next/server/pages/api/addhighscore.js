module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/addhighscore.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/db/mongoose.tsx":
/*!************************************!*\
  !*** ./middleware/db/mongoose.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeD81MDM2Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQ3hDQyxpQkFBZSxFQUFFLElBRHVCO0FBRXhDQyxvQkFBa0IsRUFBRSxJQUZvQjtBQUd4Q0MsZ0JBQWMsRUFBRSxJQUh3QjtBQUl4Q0Msa0JBQWdCLEVBQUU7QUFKc0IsQ0FBMUMiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgTU9OR09EQl9VUkw6IHN0cmluZztcbiAgfTtcbn07XG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/db/mongoose.tsx\n");

/***/ }),

/***/ "./middleware/models/scoreboard.tsx":
/*!******************************************!*\
  !*** ./middleware/models/scoreboard.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scoreboardSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  score: {\n    type: Number,\n    required: true,\n    trim: true\n  },\n  mode: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  username: {\n    type: String,\n    required: true,\n    trim: true\n  }\n}, {\n  timestamps: true\n});\nconst Scoreboard = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Scoreboard || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Scoreboard', scoreboardSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scoreboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9zY29yZWJvYXJkLnRzeD8zODQyIl0sIm5hbWVzIjpbInNjb3JlYm9hcmRTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInNjb3JlIiwidHlwZSIsIk51bWJlciIsInJlcXVpcmVkIiwidHJpbSIsIm1vZGUiLCJTdHJpbmciLCJ1c2VybmFtZSIsInRpbWVzdGFtcHMiLCJTY29yZWJvYXJkIiwibW9kZWxzIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsTUFBTUEsZ0JBQXdCLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUMvQjtBQUNFQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFQyxNQUREO0FBRUxDLFlBQVEsRUFBRSxJQUZMO0FBR0xDLFFBQUksRUFBRTtBQUhELEdBRFQ7QUFNRUMsTUFBSSxFQUFFO0FBQ0pKLFFBQUksRUFBRUssTUFERjtBQUVKSCxZQUFRLEVBQUUsSUFGTjtBQUdKQyxRQUFJLEVBQUU7QUFIRixHQU5SO0FBV0VHLFVBQVEsRUFBRTtBQUNSTixRQUFJLEVBQUVLLE1BREU7QUFFUkgsWUFBUSxFQUFFLElBRkY7QUFHUkMsUUFBSSxFQUFFO0FBSEU7QUFYWixDQUQrQixFQWtCL0I7QUFDRUksWUFBVSxFQUFFO0FBRGQsQ0FsQitCLENBQWpDO0FBdUJBLE1BQU1DLFVBQVUsR0FDZFgsK0NBQVEsQ0FBQ1ksTUFBVCxDQUFnQkQsVUFBaEIsSUFDQVgsK0NBQVEsQ0FBQ2EsS0FBVCxDQUE0QixZQUE1QixFQUEwQ2QsZ0JBQTFDLENBRkY7QUFHZVkseUVBQWYiLCJmaWxlIjoiLi9taWRkbGV3YXJlL21vZGVscy9zY29yZWJvYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTY29yZWJvYXJkIGV4dGVuZHMgRG9jdW1lbnQge1xuICBzY29yZTogc3RyaW5nO1xufVxuXG5jb25zdCBzY29yZWJvYXJkU2NoZW1hOiBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgc2NvcmU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIG1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFNjb3JlYm9hcmQgPVxuICBtb25nb29zZS5tb2RlbHMuU2NvcmVib2FyZCB8fFxuICBtb25nb29zZS5tb2RlbDxJU2NvcmVib2FyZD4oJ1Njb3JlYm9hcmQnLCBzY29yZWJvYXJkU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFNjb3JlYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/models/scoreboard.tsx\n");

/***/ }),

/***/ "./pages/api/addhighscore.tsx":
/*!************************************!*\
  !*** ./pages/api/addhighscore.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_scoreboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/scoreboard */ \"./middleware/models/scoreboard.tsx\");\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    score,\n    mode,\n    username\n  } = request.body;\n\n  try {\n    const newScore = new _middleware_models_scoreboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      score,\n      mode,\n      username\n    });\n    await newScore.save();\n\n    try {\n      const scoreboard = await _middleware_models_scoreboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n        mode\n      }).sort({\n        score: -1\n      }).limit(10);\n\n      if (!scoreboard) {\n        return response.status(404).json({\n          success: false,\n          message: 'no scoreboard data after adding a highscore'\n        });\n      }\n\n      return response.status(200).json({\n        success: true,\n        data: scoreboard\n      });\n    } catch (e) {\n      return response.status(500).json({\n        success: false,\n        message: 'failed to get scoreboard data after adding a highscore'\n      });\n    }\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add new highscore'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkaGlnaHNjb3JlLnRzeD83MDg2Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzY29yZSIsIm1vZGUiLCJ1c2VybmFtZSIsImJvZHkiLCJuZXdTY29yZSIsIlNjb3JlYm9hcmQiLCJzYXZlIiwic2NvcmVib2FyZCIsImZpbmQiLCJzb3J0IiwibGltaXQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkYXRhIiwiZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7O0FBRWUsc0VBQU9DLE9BQVAsRUFBZ0NDLFFBQWhDLEtBQThEO0FBQzNFLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxRQUFUO0FBQWVDO0FBQWYsTUFBNEJKLE9BQU8sQ0FBQ0ssSUFBMUM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxxRUFBSixDQUFlO0FBQUVMLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLEtBQWYsQ0FBakI7QUFDQSxVQUFNRSxRQUFRLENBQUNFLElBQVQsRUFBTjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsVUFBVSxHQUFHLE1BQU1GLHFFQUFVLENBQUNHLElBQVgsQ0FBZ0I7QUFBRVA7QUFBRixPQUFoQixFQUN0QlEsSUFEc0IsQ0FDakI7QUFBRVQsYUFBSyxFQUFFLENBQUM7QUFBVixPQURpQixFQUV0QlUsS0FGc0IsQ0FFaEIsRUFGZ0IsQ0FBekI7O0FBR0EsVUFBSSxDQUFDSCxVQUFMLEVBQWlCO0FBQ2YsZUFBT1IsUUFBUSxDQUFDWSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUMvQkMsaUJBQU8sRUFBRSxLQURzQjtBQUUvQkMsaUJBQU8sRUFBRTtBQUZzQixTQUExQixDQUFQO0FBSUQ7O0FBQ0QsYUFBT2YsUUFBUSxDQUFDWSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxlQUFPLEVBQUUsSUFBWDtBQUFpQkUsWUFBSSxFQUFFUjtBQUF2QixPQUExQixDQUFQO0FBQ0QsS0FYRCxDQVdFLE9BQU9TLENBQVAsRUFBVTtBQUNWLGFBQU9qQixRQUFRLENBQUNZLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQy9CQyxlQUFPLEVBQUUsS0FEc0I7QUFFL0JDLGVBQU8sRUFBRTtBQUZzQixPQUExQixDQUFQO0FBSUQ7QUFDRixHQXBCRCxDQW9CRSxPQUFPRSxDQUFQLEVBQVU7QUFDVixXQUFPakIsUUFBUSxDQUNaWSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUZELENBQVA7QUFHRDtBQUNGLENBM0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FkZGhpZ2hzY29yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgU2NvcmVib2FyZCBmcm9tICcuLi8uLi9taWRkbGV3YXJlL21vZGVscy9zY29yZWJvYXJkJztcbnJlcXVpcmUoJy4uLy4uL21pZGRsZXdhcmUvZGIvbW9uZ29vc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgc2NvcmUsIG1vZGUsIHVzZXJuYW1lIH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3U2NvcmUgPSBuZXcgU2NvcmVib2FyZCh7IHNjb3JlLCBtb2RlLCB1c2VybmFtZSB9KTtcbiAgICBhd2FpdCBuZXdTY29yZS5zYXZlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNjb3JlYm9hcmQgPSBhd2FpdCBTY29yZWJvYXJkLmZpbmQoeyBtb2RlIH0pXG4gICAgICAgIC5zb3J0KHsgc2NvcmU6IC0xIH0pXG4gICAgICAgIC5saW1pdCgxMCk7XG4gICAgICBpZiAoIXNjb3JlYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdubyBzY29yZWJvYXJkIGRhdGEgYWZ0ZXIgYWRkaW5nIGEgaGlnaHNjb3JlJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHNjb3JlYm9hcmQgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ2ZhaWxlZCB0byBnZXQgc2NvcmVib2FyZCBkYXRhIGFmdGVyIGFkZGluZyBhIGhpZ2hzY29yZScsXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ2ZhaWxlZCB0byBhZGQgbmV3IGhpZ2hzY29yZScgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/addhighscore.tsx\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });