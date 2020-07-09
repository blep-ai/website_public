webpackHotUpdate("cms",{

/***/ "":
false,

/***/ "./.cache/error-overlay-handler.js":
/*!*****************************************!*\
  !*** ./.cache/error-overlay-handler.js ***!
  \*****************************************/
/*! exports provided: clearError, reportError, errorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMap", function() { return errorMap; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/gatsby/node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _pmmmwh_react_refresh_webpack_plugin_src_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pmmmwh/react-refresh-webpack-plugin/src/overlay */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/overlay/index.js");
/* harmony import */ var _pmmmwh_react_refresh_webpack_plugin_src_overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pmmmwh_react_refresh_webpack_plugin_src_overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-error-overlay */ "./node_modules/react-error-overlay/lib/index.js");
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_error_overlay__WEBPACK_IMPORTED_MODULE_6__);






(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ErrorOverlay = {
  showCompileError: {}.GATSBY_HOT_LOADER !== "fast-refresh" ? react_error_overlay__WEBPACK_IMPORTED_MODULE_6__["reportBuildError"] : _pmmmwh_react_refresh_webpack_plugin_src_overlay__WEBPACK_IMPORTED_MODULE_5__["showCompileError"],
  clearCompileError: {}.GATSBY_HOT_LOADER !== "fast-refresh" ? react_error_overlay__WEBPACK_IMPORTED_MODULE_6__["dismissBuildError"] : _pmmmwh_react_refresh_webpack_plugin_src_overlay__WEBPACK_IMPORTED_MODULE_5__["clearCompileError"]
};

if ({}.GATSBY_HOT_LOADER !== "fast-refresh") {
  // Report runtime errors
  react_error_overlay__WEBPACK_IMPORTED_MODULE_6__["startReportingRuntimeErrors"]({
    onError: function onError() {},
    filename: "/commons.js"
  });
  react_error_overlay__WEBPACK_IMPORTED_MODULE_6__["setEditorHandler"](function (errorLocation) {
    return window.fetch("/__open-stack-frame-in-editor?fileName=" + window.encodeURIComponent(errorLocation.fileName) + "&lineNumber=" + window.encodeURIComponent(errorLocation.lineNumber || 1));
  });
}

var errorMap = {};

function flat(arr) {
  var _ref;

  return Array.prototype.flat ? arr.flat() : (_ref = []).concat.apply(_ref, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(arr));
}

var handleErrorOverlay = function handleErrorOverlay() {
  var errors = Object.values(errorMap);
  var errorStringsToDisplay = [];

  if (errors.length > 0) {
    errorStringsToDisplay = flat(errors).map(function (error) {
      if (typeof error === "string") {
        return error;
      } else if (typeof error === "object") {
        var errorStrBuilder = [error.text];

        if (error.filePath) {
          errorStrBuilder.push("File: " + error.filePath);
        }

        return errorStrBuilder.join("\n\n");
      }

      return null;
    }).filter(Boolean);
  }

  if (errorStringsToDisplay.length > 0) {
    ErrorOverlay.showCompileError(errorStringsToDisplay.join("\n\n"));
  } else {
    ErrorOverlay.clearCompileError();
  }
};

var clearError = function clearError(errorID) {
  delete errorMap[errorID];
  handleErrorOverlay();
};
var reportError = function reportError(errorID, error) {
  if (error) {
    errorMap[errorID] = error;
  }

  handleErrorOverlay();
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorOverlay, "ErrorOverlay", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
  reactHotLoader.register(errorMap, "errorMap", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
  reactHotLoader.register(flat, "flat", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
  reactHotLoader.register(handleErrorOverlay, "handleErrorOverlay", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
  reactHotLoader.register(clearError, "clearError", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
  reactHotLoader.register(reportError, "reportError", "/Users/allie/src/blep/website/.cache/error-overlay-handler.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
var _jsxFileName = "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;
var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

function StaticQueryDataRenderer(_ref) {
  var staticQueryData = _ref.staticQueryData,
      data = _ref.data,
      query = _ref.query,
      render = _ref.render;
  var finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 22
    }
  }, "Loading (StaticQuery)"));
}

var StaticQuery = function StaticQuery(props) {
  var data = props.data,
      query = props.query,
      render = props.render,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, function (staticQueryData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer, {
      data: data,
      query: query,
      render: render || children,
      staticQueryData: staticQueryData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    });
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "development" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

__signature__(useStaticQuery, "useContext{context}");

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n" + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(prefetchPathname, "prefetchPathname", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(StaticQueryContext, "StaticQueryContext", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(StaticQueryDataRenderer, "StaticQueryDataRenderer", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(StaticQuery, "StaticQuery", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(useStaticQuery, "useStaticQuery", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(graphql, "graphql", "/Users/allie/src/blep/website/.cache/gatsby-browser-entry.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.set */ "./node_modules/gatsby/node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.map */ "./node_modules/gatsby/node_modules/core-js/modules/es6.map.js");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/gatsby/node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.ends-with.js");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");














(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




/**
 * Available resource loading statuses
 */

var PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: "error",

  /**
   * Resources loaded successfully
   */
  Success: "success"
};

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var stripSurroundingSlashes = function stripSurroundingSlashes(s) {
  s = s[0] === "/" ? s.slice(1) : s;
  s = s.endsWith("/") ? s.slice(0, -1) : s;
  return s;
};

var createPageDataUrl = function createPageDataUrl(path) {
  var fixedPath = path === "/" ? "index" : stripSurroundingSlashes(path);
  return "" + "/page-data/" + fixedPath + "/page-data.json";
};

var doFetch = function doFetch(url, method) {
  if (method === void 0) {
    method = "GET";
  }

  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
};

var _loadPageDataJson = function loadPageDataJson(loadObj) {
  var pagePath = loadObj.pagePath,
      _loadObj$retries = loadObj.retries,
      retries = _loadObj$retries === void 0 ? 0 : _loadObj$retries;
  var url = createPageDataUrl(pagePath);
  return doFetch(url).then(function (req) {
    var status = req.status,
        responseText = req.responseText; // Handle 200

    if (status === 200) {
      try {
        var jsonPayload = JSON.parse(responseText);

        if (jsonPayload.path === undefined) {
          throw new Error("not a valid pageData response");
        }

        return Object.assign(loadObj, {
          status: PageResourceStatus.Success,
          payload: jsonPayload
        });
      } catch (err) {// continue regardless of error
      }
    } // Handle 404


    if (status === 404 || status === 200) {
      // If the request was for a 404 page and it doesn't exist, we're done
      if (pagePath === "/404.html") {
        return Object.assign(loadObj, {
          status: PageResourceStatus.Error
        });
      } // Need some code here to cache the 404 request. In case
      // multiple loadPageDataJsons result in 404s


      return _loadPageDataJson(Object.assign(loadObj, {
        pagePath: "/404.html",
        notFound: true
      }));
    } // handle 500 response (Unrecoverable)


    if (status === 500) {
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    } // Handle everything else, including status === 0, and 503s. Should retry


    if (retries < 3) {
      return _loadPageDataJson(Object.assign(loadObj, {
        retries: retries + 1
      }));
    } // Retried 3 times already, result is an error.


    return Object.assign(loadObj, {
      status: PageResourceStatus.Error
    });
  });
};

var doesConnectionSupportPrefetch = function doesConnectionSupportPrefetch() {
  if ("connection" in navigator && typeof navigator.connection !== "undefined") {
    if ((navigator.connection.effectiveType || "").includes("2g")) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

var toPageResources = function toPageResources(pageData, component) {
  if (component === void 0) {
    component = null;
  }

  var page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath
  };
  return {
    component: component,
    json: pageData.result,
    page: page
  };
};

var BaseLoader = /*#__PURE__*/function () {
  function BaseLoader(loadComponent, matchPaths) {
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //   }
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.pageDataDb = new Map();
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["setMatchPaths"])(matchPaths);
  }

  var _proto = BaseLoader.prototype;

  _proto.setApiRunner = function setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner("disableCorePrefetching").some(function (a) {
      return a;
    });
  };

  _proto.loadPageDataJson = function loadPageDataJson(rawPath) {
    var _this = this;

    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      return Promise.resolve(this.pageDataDb.get(pagePath));
    }

    return _loadPageDataJson({
      pagePath: pagePath
    }).then(function (pageData) {
      _this.pageDataDb.set(pagePath, pageData);

      return pageData;
    });
  };

  _proto.findMatchPath = function findMatchPath(rawPath) {
    return Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findMatchPath"])(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist
  ;

  _proto.loadPage = function loadPage(rawPath) {
    var _this2 = this;

    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(rawPath);

    if (this.pageDb.has(pagePath)) {
      var page = this.pageDb.get(pagePath);
      return Promise.resolve(page.payload);
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    var inFlight = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(function (allData) {
      var result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      var pageData = result.payload;
      var _pageData = pageData,
          componentChunkName = _pageData.componentChunkName;
      return _this2.loadComponent(componentChunkName).then(function (component) {
        var finalResult = {
          createdAt: new Date()
        };
        var pageResources;

        if (!component) {
          finalResult.status = PageResourceStatus.Error;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ""
          });
          pageResources = toPageResources(pageData, component);
          finalResult.payload = pageResources;
          _emitter__WEBPACK_IMPORTED_MODULE_14__["default"].emit("onPostLoadPageResources", {
            page: pageResources,
            pageResources: pageResources
          });
        }

        _this2.pageDb.set(pagePath, finalResult); // undefined if final result is an error


        return pageResources;
      });
    }) // prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    .then(function (response) {
      _this2.inFlightDb.delete(pagePath);

      return response;
    }).catch(function (err) {
      _this2.inFlightDb.delete(pagePath);

      throw err;
    });
    this.inFlightDb.set(pagePath, inFlight);
    return inFlight;
  } // returns undefined if loading page ran into errors
  ;

  _proto.loadPageSync = function loadPageSync(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(rawPath);

    if (this.pageDb.has(pagePath)) {
      return this.pageDb.get(pagePath).payload;
    }

    return undefined;
  };

  _proto.shouldPrefetch = function shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  };

  _proto.prefetch = function prefetch(pagePath) {
    var _this3 = this;

    if (!this.shouldPrefetch(pagePath)) {
      return false;
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner("onPrefetchPathname", {
        pathname: pagePath
      });
      this.prefetchTriggered.add(pagePath);
    } // If a plugin has disabled core prefetching, stop now.


    if (this.prefetchDisabled) {
      return false;
    }

    var realPath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(pagePath); // Todo make doPrefetch logic cacheable
    // eslint-disable-next-line consistent-return

    this.doPrefetch(realPath).then(function () {
      if (!_this3.prefetchCompleted.has(pagePath)) {
        _this3.apiRunner("onPostPrefetchPathname", {
          pathname: pagePath
        });

        _this3.prefetchCompleted.add(pagePath);
      }
    });
    return true;
  };

  _proto.doPrefetch = function doPrefetch(pagePath) {
    throw new Error("doPrefetch not implemented");
  };

  _proto.hovering = function hovering(rawPath) {
    this.loadPage(rawPath);
  };

  _proto.getResourceURLsForPathname = function getResourceURLsForPathname(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(rawPath);
    var page = this.pageDataDb.get(pagePath);

    if (page) {
      var pageResources = toPageResources(page.payload);
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(createComponentUrls(pageResources.page.componentChunkName)), [createPageDataUrl(pagePath)]);
    } else {
      return null;
    }
  };

  _proto.isPageNotFound = function isPageNotFound(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_15__["findPath"])(rawPath);
    var page = this.pageDb.get(pagePath);
    return page && page.notFound === true;
  };

  _proto.loadAppData = function loadAppData(retries) {
    var _this4 = this;

    if (retries === void 0) {
      retries = 0;
    }

    return doFetch("" + "/page-data/app-data.json").then(function (req) {
      var status = req.status,
          responseText = req.responseText;
      var appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return _this4.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          var jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error("not a valid app-data response");
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return BaseLoader;
}();

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return (window.___chunkMapping[componentChunkName] || []).map(function (chunk) {
    return "" + chunk;
  });
};

var ProdLoader = /*#__PURE__*/function (_BaseLoader) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ProdLoader, _BaseLoader);

  function ProdLoader(asyncRequires, matchPaths) {
    var loadComponent = function loadComponent(chunkName) {
      return asyncRequires.components[chunkName] ? asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is null
      .catch(function () {
        return null;
      }) : Promise.resolve();
    };

    return _BaseLoader.call(this, loadComponent, matchPaths) || this;
  }

  var _proto2 = ProdLoader.prototype;

  _proto2.doPrefetch = function doPrefetch(pagePath) {
    var _this5 = this;

    var pageDataUrl = createPageDataUrl(pagePath);
    return Object(_prefetch__WEBPACK_IMPORTED_MODULE_13__["default"])(pageDataUrl, {
      crossOrigin: "anonymous",
      as: "fetch"
    }).then(function () {
      return (// This was just prefetched, so will return a response from
        // the cache instead of making another request to the server
        _this5.loadPageDataJson(pagePath)
      );
    }).then(function (result) {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      var pageData = result.payload;
      var chunkName = pageData.componentChunkName;
      var componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_13__["default"])).then(function () {
        return pageData;
      });
    });
  };

  _proto2.loadPageDataJson = function loadPageDataJson(rawPath) {
    return _BaseLoader.prototype.loadPageDataJson.call(this, rawPath).then(function (data) {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, "HEAD").then(function (req) {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  };

  // @ts-ignore
  _proto2.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ProdLoader;
}(BaseLoader);
var instance;
var setLoader = function setLoader(_loader) {
  instance = _loader;
};
var publicLoader = {
  // Deprecated methods. As far as we're aware, these are only used by
  // core gatsby and the offline plugin, however there's a very small
  // chance they're called by others.
  getResourcesForPathname: function getResourcesForPathname(rawPath) {
    console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");
    return instance.i.loadPage(rawPath);
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(rawPath) {
    console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");
    return instance.i.loadPageSync(rawPath);
  },
  enqueue: function enqueue(rawPath) {
    return instance.prefetch(rawPath);
  },
  // Real methods
  getResourceURLsForPathname: function getResourceURLsForPathname(rawPath) {
    return instance.getResourceURLsForPathname(rawPath);
  },
  loadPage: function loadPage(rawPath) {
    return instance.loadPage(rawPath);
  },
  loadPageSync: function loadPageSync(rawPath) {
    return instance.loadPageSync(rawPath);
  },
  prefetch: function prefetch(rawPath) {
    return instance.prefetch(rawPath);
  },
  isPageNotFound: function isPageNotFound(rawPath) {
    return instance.isPageNotFound(rawPath);
  },
  hovering: function hovering(rawPath) {
    return instance.hovering(rawPath);
  },
  loadAppData: function loadAppData() {
    return instance.loadAppData();
  }
};
var _default = publicLoader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageResourceStatus, "PageResourceStatus", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(preferDefault, "preferDefault", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(stripSurroundingSlashes, "stripSurroundingSlashes", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(createPageDataUrl, "createPageDataUrl", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(doFetch, "doFetch", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(_loadPageDataJson, "loadPageDataJson", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(doesConnectionSupportPrefetch, "doesConnectionSupportPrefetch", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(toPageResources, "toPageResources", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(BaseLoader, "BaseLoader", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(createComponentUrls, "createComponentUrls", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(ProdLoader, "ProdLoader", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(instance, "instance", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(setLoader, "setLoader", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(publicLoader, "publicLoader", "/Users/allie/src/blep/website/.cache/loader.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/.cache/loader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.cache/page-renderer.js":
/*!*********************************!*\
  !*** ./.cache/page-renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-runner-browser */ "./.cache/api-runner-browser.js");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




 // Renders page

var PageRenderer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PageRenderer, _React$Component);

  function PageRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageRenderer.prototype;

  _proto.render = function render() {
    var props = Object.assign({}, this.props, {
      pathContext: this.props.pageContext
    });

    var _apiRunner = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("replaceComponentRenderer", {
      props: this.props,
      loader: _loader__WEBPACK_IMPORTED_MODULE_4__["publicLoader"]
    }),
        replacementElement = _apiRunner[0];

    var pageElement = replacementElement || Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.props.pageResources.component, Object.assign({}, props, {
      key: this.props.path || this.props.pageResources.page.path
    }));
    var wrappedPage = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("wrapPageElement", {
      element: pageElement,
      props: props
    }, pageElement, function (_ref) {
      var result = _ref.result;
      return {
        element: result,
        props: props
      };
    }).pop();
    return wrappedPage;
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return PageRenderer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

PageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageResources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
var _default = PageRenderer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageRenderer, "PageRenderer", "/Users/allie/src/blep/website/.cache/page-renderer.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/.cache/page-renderer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.cache/public-page-renderer-dev.js":
/*!********************************************!*\
  !*** ./.cache/public-page-renderer-dev.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _query_result_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-result-store */ "./.cache/query-result-store.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var DevPageRenderer = function DevPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_2__["default"].loadPageSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_result_store__WEBPACK_IMPORTED_MODULE_3__["PageQueryStore"], {
    location: location,
    pageResources: pageResources
  });
};

DevPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
var _default = DevPageRenderer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DevPageRenderer, "DevPageRenderer", "/Users/allie/src/blep/website/.cache/public-page-renderer-dev.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/.cache/public-page-renderer-dev.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.cache/query-result-store.js":
/*!**************************************!*\
  !*** ./.cache/query-result-store.js ***!
  \**************************************/
/*! exports provided: PageQueryStore, StaticQueryStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageQueryStore", function() { return PageQueryStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryStore", function() { return StaticQueryStore; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _socketIo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socketIo */ "./.cache/socketIo.js");
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-renderer */ "./.cache/page-renderer.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");


var _jsxFileName = "/Users/allie/src/blep/website/.cache/query-result-store.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







if (false) {}

var getPathFromProps = function getPathFromProps(props) {
  return props.pageResources && props.pageResources.page ? Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_6__["default"])(props.pageResources.page.path) : undefined;
};

var PageQueryStore = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PageQueryStore, _React$Component);

  function PageQueryStore(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleMittEvent = function () {
      _this.setState({
        pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["getPageQueryData"])()
      });
    };

    _this.state = {
      pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["getPageQueryData"])(),
      path: null
    };
    return _this;
  }

  var _proto = PageQueryStore.prototype;

  _proto.componentDidMount = function componentDidMount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["registerPath"])(getPathFromProps(this.props));

    ___emitter.on("*", this.handleMittEvent);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["unregisterPath"])(this.state.path);

    ___emitter.off("*", this.handleMittEvent);
  };

  PageQueryStore.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var newPath = getPathFromProps(props);

    if (newPath !== state.path) {
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["unregisterPath"])(state.path);
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["registerPath"])(newPath);
      return {
        path: newPath
      };
    }

    return null;
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed
    return this.props.location !== nextProps.location || this.state.path !== nextState.path || this.state.pageQueryData[Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_6__["default"])(nextState.path)] !== nextState.pageQueryData[Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_6__["default"])(nextState.path)];
  };

  _proto.render = function render() {
    var data = this.state.pageQueryData[getPathFromProps(this.props)]; // eslint-disable-next-line

    if (!data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 14
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props, data, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 12
      }
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return PageQueryStore;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
var StaticQueryStore = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(StaticQueryStore, _React$Component2);

  function StaticQueryStore(props) {
    var _this2;

    _this2 = _React$Component2.call(this, props) || this;

    _this2.handleMittEvent = function () {
      _this2.setState({
        staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["getStaticQueryData"])()
      });
    };

    _this2.state = {
      staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_4__["getStaticQueryData"])()
    };
    return _this2;
  }

  var _proto2 = StaticQueryStore.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    ___emitter.on("*", this.handleMittEvent);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    ___emitter.off("*", this.handleMittEvent);
  };

  _proto2.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - static query results changed
    return this.state.staticQueryData !== nextState.staticQueryData;
  };

  _proto2.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQueryContext"].Provider, {
      value: this.state.staticQueryData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }, this.props.children);
  };

  // @ts-ignore
  _proto2.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return StaticQueryStore;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getPathFromProps, "getPathFromProps", "/Users/allie/src/blep/website/.cache/query-result-store.js");
  reactHotLoader.register(PageQueryStore, "PageQueryStore", "/Users/allie/src/blep/website/.cache/query-result-store.js");
  reactHotLoader.register(StaticQueryStore, "StaticQueryStore", "/Users/allie/src/blep/website/.cache/query-result-store.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1593817021975
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/cms/preview-templates/AboutPagePreview.js":
/*!*******************************************************!*\
  !*** ./src/cms/preview-templates/AboutPagePreview.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AboutPageTemplate */ "./src/components/AboutPageTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/AboutPagePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var AboutPagePreview = function AboutPagePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    content: widgetFor('body'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  });
};

AboutPagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = AboutPagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutPagePreview, "AboutPagePreview", "/Users/allie/src/blep/website/src/cms/preview-templates/AboutPagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/AboutPagePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/cms/preview-templates/ArticlePreview.js":
/*!*****************************************************!*\
  !*** ./src/cms/preview-templates/ArticlePreview.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ArticleTemplate */ "./src/components/ArticleTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var ArticlePreview = function ArticlePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: widgetFor('body'),
    cover: entry.getIn(['data', 'cover']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_desc: entry.getIn(['data', 'meta_description']),
    title: entry.getIn(['data', 'title']),
    slug: entry.getIn(['data', 'slug']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))));
};

ArticlePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = ArticlePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticlePreview, "ArticlePreview", "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/cms/preview-templates/ContactPagePreview.js":
/*!*********************************************************!*\
  !*** ./src/cms/preview-templates/ContactPagePreview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContactPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ContactPageTemplate */ "./src/components/ContactPageTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/ContactPagePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var ContactPagePreview = function ContactPagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContactPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

ContactPagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = ContactPagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPagePreview, "ContactPagePreview", "/Users/allie/src/blep/website/src/cms/preview-templates/ContactPagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/ContactPagePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/cms/preview-templates/HomePagePreview.js":
/*!******************************************************!*\
  !*** ./src/cms/preview-templates/HomePagePreview.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HomePageTemplate */ "./src/components/HomePageTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/HomePagePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var HomePagePreview = function HomePagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  var entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs']);
  var blurbs = entryBlurbs ? entryBlurbs.toJS() : [];
  var entryTestimonials = entry.getIn(['data', 'testimonials']);
  var testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    heading: entry.getIn(['data', 'heading']),
    description: entry.getIn(['data', 'description']),
    offerings: {
      blurbs: blurbs
    },
    testimonials: testimonials,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  });
};

HomePagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = HomePagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePagePreview, "HomePagePreview", "/Users/allie/src/blep/website/src/cms/preview-templates/HomePagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/HomePagePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/cms/preview-templates/PricingPagePreview.js":
/*!*********************************************************!*\
  !*** ./src/cms/preview-templates/PricingPagePreview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PricingPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PricingPageTemplate */ "./src/components/PricingPageTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/PricingPagePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var PricingPagePreivew = function PricingPagePreivew(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  var entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
  var pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PricingPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    pricing: {
      heading: entry.getIn(['data', 'pricing', 'heading']),
      description: entry.getIn(['data', 'pricing', 'description']),
      plans: pricingPlans
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};

PricingPagePreivew.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = PricingPagePreivew;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PricingPagePreivew, "PricingPagePreivew", "/Users/allie/src/blep/website/src/cms/preview-templates/PricingPagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/PricingPagePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AboutPageTemplate/index.js":
/*!***************************************************!*\
  !*** ./src/components/AboutPageTemplate/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Content */ "./src/components/Content/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/AboutPageTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var AboutPageTemplate = function AboutPageTemplate(_ref) {
  var meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      title = _ref.title,
      content = _ref.content,
      contentComponent = _ref.contentComponent;
  var PageContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_3__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white flex flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, meta_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "flex flex-wrap items-center text-center md:text-left my-12 py-12 lg:px-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-full whitespace-pre-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-5xl text-black leading-tight mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    className: "markdown mb-12",
    content: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

AboutPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var _default = AboutPageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutPageTemplate, "AboutPageTemplate", "/Users/allie/src/blep/website/src/components/AboutPageTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/AboutPageTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ArticleTemplate/index.js":
/*!*************************************************!*\
  !*** ./src/components/ArticleTemplate/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Content */ "./src/components/Content/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/ArticleTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ArticleTemplate = function ArticleTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      cover = _ref.cover,
      meta_title = _ref.meta_title,
      meta_desc = _ref.meta_desc,
      tags = _ref.tags,
      title = _ref.title;
  var PostContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_1__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: cover,
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent, {
    content: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Tags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, tags && tags.length ? tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag) + "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, tag));
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

var _default = ArticleTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticleTemplate, "ArticleTemplate", "/Users/allie/src/blep/website/src/components/ArticleTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/ArticleTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ContactPageTemplate/index.js":
/*!*****************************************************!*\
  !*** ./src/components/ContactPageTemplate/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms */ "./src/components/forms/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/ContactPageTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, meta_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, subtitle))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_3__["ContactForm"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }))));
};

ContactPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var _default = ContactPageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "/Users/allie/src/blep/website/src/components/ContactPageTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/ContactPageTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Content/index.js":
/*!*****************************************!*\
  !*** ./src/components/Content/index.js ***!
  \*****************************************/
/*! exports provided: HTMLContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLContent", function() { return HTMLContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/Content/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var HTMLContent = function HTMLContent(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  });
};

var Content = function Content(_ref2) {
  var content = _ref2.content,
      className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, content);
};

var _default = Content;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HTMLContent, "HTMLContent", "/Users/allie/src/blep/website/src/components/Content/index.js");
  reactHotLoader.register(Content, "Content", "/Users/allie/src/blep/website/src/components/Content/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/Content/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/HomePageTemplate/index.js":
/*!**************************************************!*\
  !*** ./src/components/HomePageTemplate/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Offerings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Offerings */ "./src/components/Offerings/index.js");
/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Testimonials */ "./src/components/Testimonials/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/HomePageTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var HomePageTemplate = function HomePageTemplate(_ref) {
  var title = _ref.title,
      heading = _ref.heading,
      description = _ref.description,
      offerings = _ref.offerings,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      testimonials = _ref.testimonials;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, meta_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, title))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offerings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gridItems: offerings.blurbs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Testimonials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Testimonials__WEBPACK_IMPORTED_MODULE_3__["default"], {
    testimonials: testimonials,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))))))));
};

HomePageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  offerings: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
  }),
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
var _default = HomePageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "/Users/allie/src/blep/website/src/components/HomePageTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/HomePageTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Offerings/index.js":
/*!*******************************************!*\
  !*** ./src/components/Offerings/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/Offerings/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Offerings = function Offerings(_ref) {
  var gridItems = _ref.gridItems;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, gridItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.image,
      className: "column is-6",
      style: {
        borderRadius: '5px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "has-text-centered",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      src: item.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, item.text)));
  }));
};

Offerings.propTypes = {
  gridItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
var _default = Offerings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Offerings, "Offerings", "/Users/allie/src/blep/website/src/components/Offerings/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/Offerings/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Pricing/index.js":
/*!*****************************************!*\
  !*** ./src/components/Pricing/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/Pricing/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Pricing = function Pricing(_ref) {
  var data = _ref.data;
  return data.map(function (price) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: price.plan,
      className: "w-1/3 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shadow-lg rounded overflow-hidden",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-6 py-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-bold text-xl mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, price.plan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-gray-700 text-base",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, price.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-6 py-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, price.items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: item,
        className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 last:mr-0",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, "#", item);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-6 py-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-gray-900 leading-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, price.price)))));
  });
};

Pricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    plan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  }))
};
var _default = Pricing;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Pricing, "Pricing", "/Users/allie/src/blep/website/src/components/Pricing/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/Pricing/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PricingPageTemplate/index.js":
/*!*****************************************************!*\
  !*** ./src/components/PricingPageTemplate/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pricing */ "./src/components/Pricing/index.js");
/* harmony import */ var _SubscribeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SubscribeForm */ "./src/components/SubscribeForm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/PricingPageTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var PricingPageTemplate = function PricingPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      pricing = _ref.pricing;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white flex flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, meta_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-cover lg:bg-contain bg-top bg-no-repeat -mx-16",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,.5) 60%, rgba(255,255,255,1) 95%),url(\"/img/Mask Group 4@2x.png\")"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "flex flex-wrap items-center text-center md:text-left my-12 py-48 lg:px-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-full whitespace-pre-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-5xl text-gray-800 leading-tight mb-6 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-2xl text-gray-700 mb-12 font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "text-l text-indigo-500 mb-2 font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Sign up now to be notified when we launch!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubscribeForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputPlaceholder1: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  })))))));
};

PricingPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    plans: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  })
};
var _default = PricingPageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PricingPageTemplate, "PricingPageTemplate", "/Users/allie/src/blep/website/src/components/PricingPageTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/PricingPageTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SubscribeForm/index.js":
/*!***********************************************!*\
  !*** ./src/components/SubscribeForm/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");




var _jsxFileName = "/Users/allie/src/blep/website/src/components/SubscribeForm/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var url = "//meowware.us19.list-manage.com/subscribe/post?u=93c68bc3169d90850d9cf570e&amp;id=11e35c42eb";

var CustomForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomForm, _Component);

  function CustomForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      EMAIL: "",
      b_93c68bc3169d90850d9cf570e_11e35c42eb: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = CustomForm.prototype;

  _proto.handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var email = this.state.EMAIL;
    email && email.indexOf("@") > -1 && this.props.onValidated(this.state);
  };

  _proto.handleChange = function handleChange(event) {
    var _this$setState;

    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        status = _this$props.status,
        message = _this$props.message,
        onValidated = _this$props.onValidated,
        className = _this$props.className,
        inputClass1 = _this$props.inputClass1,
        inputPlaceholder1 = _this$props.inputPlaceholder1,
        inputClass2 = _this$props.inputClass2,
        inputPlaceholder2 = _this$props.inputPlaceholder2,
        buttonClass = _this$props.buttonClass,
        errorClass = _this$props.errorClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      className: className + " subscribe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      className: inputClass1,
      placeholder: inputPlaceholder1,
      type: "email",
      name: "EMAIL",
      value: this.state.EMAIL,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      className: inputClass2,
      placeholder: inputPlaceholder2,
      type: "email",
      name: "EMAIL",
      value: this.state.EMAIL,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        position: "absolute",
        left: "-5000px",
        ariaHidden: "true"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      name: "b_93c68bc3169d90850d9cf570e_11e35c42eb",
      tabIndex: "-1",
      value: this.state.b_93c68bc3169d90850d9cf570e_11e35c42eb,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      className: buttonClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, status === "sending" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "text-blue-200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, "Submit") : "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: errorClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, status === "error" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "text-red-600",
      dangerouslySetInnerHTML: {
        __html: message
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }), status === "success" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "text-green-600",
      dangerouslySetInnerHTML: {
        __html: message
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return CustomForm;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

CustomForm.defaultProps = {
  inputPlaceholder1: "Sign up for the upcoming beta!",
  inputPlaceholder2: "Sign up for the beta!",
  className: "w-full sm:max-w-sm flex items-center pb-2",
  inputClass1: "hidden sm:block rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus:outline-none focus:bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm",
  inputClass2: "sm:hidden rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus:outline-none focus:bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm",
  buttonClass: "transition duration-150 ease-in-out rounded-none p-2 px-8 appearance-none bg-indigo-500 text-white border-2 box-border border-indigo-500 hover:bg-indigo-400 text-sm font-bold focus:outline-none focus:bg-indigo-700",
  errorClass: "w-full sm:max-w-sm flex items-center text-xs whitespace-pre-line"
};

var _default = function _default(props) {
  var _this2 = this;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: url,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CustomForm, Object.assign({
        status: status,
        message: message,
        onValidated: subscribe
      }, props, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(url, "url", "/Users/allie/src/blep/website/src/components/SubscribeForm/index.js");
  reactHotLoader.register(CustomForm, "CustomForm", "/Users/allie/src/blep/website/src/components/SubscribeForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/SubscribeForm/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Testimonials/index.js":
/*!**********************************************!*\
  !*** ./src/components/Testimonials/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/Testimonials/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Testimonials = function Testimonials(_ref) {
  var testimonials = _ref.testimonials;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, testimonials.map(function (testimonial, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "message",
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, testimonial.quote, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, " \u2013 ", testimonial.author)));
  }));
};

Testimonials.propTypes = {
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
var _default = Testimonials;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Testimonials, "Testimonials", "/Users/allie/src/blep/website/src/components/Testimonials/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/Testimonials/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/forms/ContactForm/index.js":
/*!***************************************************!*\
  !*** ./src/components/forms/ContactForm/index.js ***!
  \***************************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validationSchema */ "./src/components/forms/ContactForm/validationSchema.js");







var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/components/forms/ContactForm/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};

var ContactForm = function ContactForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_9__["default"],
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      fetch("/?no-cache=1", {
        //eslint-disable-line
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode(Object.assign({
          'form-name': 'contact'
        }, values))
      }).then(function () {
        Object(gatsby_link__WEBPACK_IMPORTED_MODULE_8__["navigate"])('/contact/success');
        setSubmitting(false);
      }).catch(function (error) {
        console.log(error);
        alert("Error: Please Try Again!"); //eslint-disable-line

        setSubmitting(false);
      });
    },
    render: function render(_ref2) {
      var errors = _ref2.errors,
          touched = _ref2.touched,
          isSubmitting = _ref2.isSubmitting,
          handleSubmit = _ref2.handleSubmit,
          handleReset = _ref2.handleReset;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        name: "contact",
        onSubmit: handleSubmit,
        onReset: handleReset,
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "field",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "control",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "input",
        type: "text",
        placeholder: "Full Name",
        name: "name",
        id: "name",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      })), touched.name && errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "has-text-danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 43
        }
      }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "field",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "control",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "input",
        type: "email",
        placeholder: "Email",
        name: "email",
        id: "email",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      })), touched.email && errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "has-text-danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 45
        }
      }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "field",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "control",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "textarea",
        component: "textarea",
        placeholder: "Message",
        name: "message",
        id: "message",
        rows: "6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      })), touched.message && errors.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "has-text-danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 49
        }
      }, errors.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "field is-grouped is-pulled-right",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "control",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button",
        type: "reset",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, "Clear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "control",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button is-primary",
        type: "submit",
        disabled: isSubmitting,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, "Submit"))));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });
};


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "/Users/allie/src/blep/website/src/components/forms/ContactForm/index.js");
  reactHotLoader.register(ContactForm, "ContactForm", "/Users/allie/src/blep/website/src/components/forms/ContactForm/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.d2fd306679fd4c498352.hot-update.js.map