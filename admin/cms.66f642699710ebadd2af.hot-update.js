webpackHotUpdate("cms",{

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: widgetFor('body'),
    cover: entry.getIn(['data', 'cover']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_desc: entry.getIn(['data', 'meta_description']),
    title: entry.getIn(['data', 'title']),
    slug: entry.getIn(['data', 'slug']),
    author: entry.getIn(['data', 'author']),
    date: entry.getIn(['data', 'date']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.66f642699710ebadd2af.hot-update.js.map