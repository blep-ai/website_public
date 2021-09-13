webpackHotUpdate("cms",{

/***/ "./src/components/NavBar/index.js":
/*!****************************************!*\
  !*** ./src/components/NavBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _static_img_logo3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/img/logo3.svg */ "./static/img/logo3.svg");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


 // import SearchBox from '../SearchBox'


var links = [// ['Products', '/products'], // include list of integrations and metrics
// ['Solutions', '/solutions'],
// ['Docs', '/docs'], // Academy
// ['About', '/about'], // Contact
['Careers', 'https://jobs.lever.co/Blep'], ['Blog', '/blog']]; // ['Integrations', '/integrations'], // include metrics/ list of all streams
// Blog / Insights,

var NavBar = function NavBar(_ref) {
  var toggleNavbar = _ref.toggleNavbar,
      isActive = _ref.isActive,
      appLive = _ref.appLive,
      _ref$productName = _ref.productName,
      productName = _ref$productName === void 0 ? 'analytics' : _ref$productName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["StaticQuery"], {
    query: "2744294623",
    render: function render(data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "items-center px-4 my-2 bg-white grid grid-cols-2 md_grid-cols-3 gap-4 md_px-4",
        "aria-label": "main navigation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden text-sm md_block"
      }, links.map(function (l) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          key: l[0],
          to: l[1],
          className: "block inline-block mr-6 font-medium text-black-200 hover_underline"
        }, l[0]);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md_text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_img_logo3_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], {
        className: "inline-block",
        height: "1.5rem",
        style: {
          marginBottom: '-.1rem',
          marginRight: '.1rem'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-2xl tracking-tight align-middle",
        style: {
          fontFamily: 'Roboto Condensed',
          fontWeight: 300
        }
      }, productName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "inline-block px-2 py-2 text-sm font-medium leading-none text-blue-600 bg-white border border-blue-600 hover_text-white hover_bg-blue-600 md_px-4 md_py-2 transition duration-200 ease-in-out",
        href: "https://analytics.blep.ai"
      }, "Get Started"))));
    }
  });
};

var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(links, "links", "/Users/allie/src/blep/website/src/components/NavBar/index.js");
  reactHotLoader.register(NavBar, "NavBar", "/Users/allie/src/blep/website/src/components/NavBar/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/components/NavBar/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.eb152c959fe562267dfa.hot-update.js.map