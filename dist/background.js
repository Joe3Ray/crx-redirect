/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 986);
/******/ })
/************************************************************************/
/******/ ({

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = __webpack_require__(987);

var state = {
  enable: true,
  lists: []
};

var getInitialState = function getInitialState() {
  return (0, _storage.get)('redirect').then(function (info) {
    return Object.assign(state, info.redirect);
  });
};

var command = {
  SWITCH_STATUS: function SWITCH_STATUS(status) {
    state.enable = status;
    (0, _storage.set)('redirect', state);
  },
  SWITCH_ITEM: function SWITCH_ITEM(id) {
    state.lists.forEach(function (item, idx) {
      if (item.id === id) {
        state.lists[idx].enable = !item.enable;
      }
    });
    (0, _storage.set)('redirect', state);
  },
  DELETE_ITEM: function DELETE_ITEM(id) {
    var idx = void 0;
    for (var i = 0, len = state.lists.length; i < len; i += 1) {
      if (state.lists[i].id === id) {
        idx = i;
        break;
      }
    }
    state.lists.splice(idx, 1);
    (0, _storage.set)('redirect', state);
  },
  ADD_ITEM: function ADD_ITEM(data) {
    state.lists.push(data);
    (0, _storage.set)('redirect', state);
  },
  MODIFY_ITEM: function MODIFY_ITEM(data) {
    var idx = void 0;
    for (var i = 0, len = state.lists.length; i < len; i += 1) {
      if (state.lists[i].id === data.id) {
        idx = i;
        break;
      }
    }
    state.lists[idx] = data;
    (0, _storage.set)('redirect', state);
  }
};

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (state.enable) {
    var currentUrl = details.url;
    var rules = state.lists.filter(function (item) {
      if (item.enable && (currentUrl.indexOf(item.before) > -1 || currentUrl.indexOf(item.after) > -1)) {
        return true;
      }
      return false;
    }).sort(function (a, b) {
      return a.order < b.order;
    });

    var rule = rules[0];
    var redirectUrl = currentUrl.replace(rule.before, rule.after);
    return { redirectUrl: redirectUrl };
  }
  return {};
}, {
  urls: ['<all_urls>']
}, ['blocking']);

window.state = state;
window.getInitialState = getInitialState;
window.command = command;

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var set = exports.set = function set(key, val) {
  chrome.storage.sync.set(_defineProperty({}, key, val));
};

var get = exports.get = function get(key) {
  return new Promise(function (resolve) {
    chrome.storage.sync.get(key, function (items) {
      resolve(items);
    });
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWMzZjQ4OGU1YWJhZWFhNzhkNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UuanMiXSwibmFtZXMiOlsic3RhdGUiLCJlbmFibGUiLCJsaXN0cyIsImdldEluaXRpYWxTdGF0ZSIsInRoZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJpbmZvIiwicmVkaXJlY3QiLCJjb21tYW5kIiwiU1dJVENIX1NUQVRVUyIsInN0YXR1cyIsIlNXSVRDSF9JVEVNIiwiaWQiLCJmb3JFYWNoIiwiaXRlbSIsImlkeCIsIkRFTEVURV9JVEVNIiwiaSIsImxlbiIsImxlbmd0aCIsInNwbGljZSIsIkFERF9JVEVNIiwiZGF0YSIsInB1c2giLCJNT0RJRllfSVRFTSIsImNocm9tZSIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsImRldGFpbHMiLCJjdXJyZW50VXJsIiwidXJsIiwicnVsZXMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiYmVmb3JlIiwiYWZ0ZXIiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJ1bGUiLCJyZWRpcmVjdFVybCIsInJlcGxhY2UiLCJ1cmxzIiwid2luZG93Iiwic2V0Iiwia2V5IiwidmFsIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFB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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5ODYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVjM2Y0ODhlNWFiYWVhYTc4ZDQ2IiwiaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgZW5hYmxlOiB0cnVlLFxuICBsaXN0czogW10sXG59O1xuXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiAoXG4gIGdldCgncmVkaXJlY3QnKS50aGVuKGluZm8gPT4gKFxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIGluZm8ucmVkaXJlY3QpXG4gICkpXG4pO1xuXG5jb25zdCBjb21tYW5kID0ge1xuICBTV0lUQ0hfU1RBVFVTKHN0YXR1cykge1xuICAgIHN0YXRlLmVuYWJsZSA9IHN0YXR1cztcbiAgICBzZXQoJ3JlZGlyZWN0Jywgc3RhdGUpO1xuICB9LFxuICBTV0lUQ0hfSVRFTShpZCkge1xuICAgIHN0YXRlLmxpc3RzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgIHN0YXRlLmxpc3RzW2lkeF0uZW5hYmxlID0gIWl0ZW0uZW5hYmxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldCgncmVkaXJlY3QnLCBzdGF0ZSk7XG4gIH0sXG4gIERFTEVURV9JVEVNKGlkKSB7XG4gICAgbGV0IGlkeDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc3RhdGUubGlzdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdGF0ZS5saXN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlLmxpc3RzLnNwbGljZShpZHgsIDEpO1xuICAgIHNldCgncmVkaXJlY3QnLCBzdGF0ZSk7XG4gIH0sXG4gIEFERF9JVEVNKGRhdGEpIHtcbiAgICBzdGF0ZS5saXN0cy5wdXNoKGRhdGEpO1xuICAgIHNldCgncmVkaXJlY3QnLCBzdGF0ZSk7XG4gIH0sXG4gIE1PRElGWV9JVEVNKGRhdGEpIHtcbiAgICBsZXQgaWR4O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdGF0ZS5saXN0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgaWYgKHN0YXRlLmxpc3RzW2ldLmlkID09PSBkYXRhLmlkKSB7XG4gICAgICAgIGlkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZS5saXN0c1tpZHhdID0gZGF0YTtcbiAgICBzZXQoJ3JlZGlyZWN0Jywgc3RhdGUpO1xuICB9LFxufTtcblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAoZGV0YWlscykgPT4ge1xuICAgIGlmIChzdGF0ZS5lbmFibGUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBkZXRhaWxzLnVybDtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3RhdGUubGlzdHMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpdGVtLmVuYWJsZVxuICAgICAgICAgICYmIChcbiAgICAgICAgICAgIGN1cnJlbnRVcmwuaW5kZXhPZihpdGVtLmJlZm9yZSkgPiAtMVxuICAgICAgICAgICAgfHwgY3VycmVudFVybC5pbmRleE9mKGl0ZW0uYWZ0ZXIpID4gLTFcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pLnNvcnQoKGEsIGIpID0+IChhLm9yZGVyIDwgYi5vcmRlcikpO1xuXG4gICAgICBjb25zdCBydWxlID0gcnVsZXNbMF07XG4gICAgICBjb25zdCByZWRpcmVjdFVybCA9IGN1cnJlbnRVcmwucmVwbGFjZShydWxlLmJlZm9yZSwgcnVsZS5hZnRlcik7XG4gICAgICByZXR1cm4geyByZWRpcmVjdFVybCB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH0sXG4gIHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgfSxcbiAgWydibG9ja2luZyddLFxuKTtcblxud2luZG93LnN0YXRlID0gc3RhdGU7XG53aW5kb3cuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlO1xud2luZG93LmNvbW1hbmQgPSBjb21tYW5kO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhY2tncm91bmQuanMiLCJleHBvcnQgY29uc3Qgc2V0ID0gKGtleSwgdmFsKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICBba2V5XTogdmFsLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSBrZXkgPT4gKFxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KGtleSwgKGl0ZW1zKSA9PiB7XG4gICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICB9KTtcbiAgfSlcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=