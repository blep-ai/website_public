webpackHotUpdate("cms",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var url = '//meowware.us19.list-manage.com/subscribe/post?u=93c68bc3169d90850d9cf570e&amp;id=11e35c42eb';

var CustomForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CustomForm, _Component);

  function CustomForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      EMAIL: '',
      b_93c68bc3169d90850d9cf570e_11e35c42eb: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CustomForm.prototype;

  _proto.handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var email = this.state.EMAIL;
    email && email.indexOf('@') > -1 && this.props.onValidated(this.state);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      className: className + " subscribe"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: inputClass1,
      placeholder: inputPlaceholder1,
      type: "email",
      name: "EMAIL",
      value: this.state.EMAIL,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: inputClass2,
      placeholder: inputPlaceholder2,
      type: "email",
      name: "EMAIL",
      value: this.state.EMAIL,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        position: 'absolute',
        left: '-5000px',
        ariaHidden: 'true'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      name: "b_93c68bc3169d90850d9cf570e_11e35c42eb",
      tabIndex: "-1",
      value: this.state.b_93c68bc3169d90850d9cf570e_11e35c42eb,
      onChange: this.handleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: buttonClass
    }, status === 'sending' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "text-blue-200"
    }, "Submit") : "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: errorClass
    }, status === 'error' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-red-600",
      dangerouslySetInnerHTML: {
        __html: message
      }
    }), status === 'success' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-green-600",
      dangerouslySetInnerHTML: {
        __html: message
      }
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return CustomForm;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

CustomForm.defaultProps = {
  inputPlaceholder1: 'Sign up for the upcoming beta!',
  inputPlaceholder2: 'Sign up for the beta!',
  className: 'w-full sm_max-w-sm flex items-center pb-2',
  inputClass1: 'hidden sm_block rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus_outline-none focus_bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm',
  inputClass2: 'sm_hidden rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus_outline-none focus_bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm',
  buttonClass: 'transition duration-150 ease-in-out rounded-none p-2 px-8 appearance-none bg-indigo-500 text-white border-2 box-border border-indigo-500 hover_bg-indigo-400 text-sm font-bold focus_outline-none focus_bg-indigo-700',
  errorClass: 'w-full sm_max-w-sm flex items-center text-xs whitespace-pre-line'
};

var _default = function _default(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomForm, Object.assign({
        status: status,
        message: message,
        onValidated: subscribe
      }, props));
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

/***/ })

})
//# sourceMappingURL=cms.cbffeede974f02701a13.hot-update.js.map