(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2mql":function(e,t,r){"use strict";r("4DPX"),r("R48M");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(d){var o=h(r);o&&o!==d&&e(t,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(t),m=c(r),y=0;y<i.length;++y){var b=i[y];if(!(a[b]||n&&n[b]||m&&m[b]||s&&s[b])){var g=p(r,b);try{l(t,b,g)}catch(v){}}}}return t}},Cqi8:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y}));r("6kNP"),r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("pJf4");var n=r("o0o1"),o=r.n(n),a=(r("ls82"),r("E5k/"),r("q1tI")),i=r.n(a),s=r("oY9k"),c=r.n(s),l=r("Zttt"),u=r("MKeS");function f(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,o)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){f(a,n,o,i,s,"next",e)}function s(e){f(a,n,o,i,s,"throw",e)}i(void 0)}))}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=Object(u.a)((function(){return Promise.all([r.e(5),r.e(25)]).then(r.bind(null,"435K"))}),{ssr:!1}),m={color:"rgba(11, 94, 29, 0.2)",visible:!0,text:"blep.ai",fontSize:48,horzAlign:"center",vertAlign:"center"},y=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).handleChange=r.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r.state={exchange:"binance",period:"5m",symbol:"BTCUSDT",limit:300,options:{alignLabels:!0,timeScale:{rightOffset:0,barSpacing:3,fixLeftEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2b2b43",visible:!0,timeVisible:!0,secondsVisible:!1},layout:{fontFamily:"Heebo"},priceScale:{},watermark:Object.assign({},m)},sumOpenInterest:[{data:[]}],sumOpenInterestValue:[{data:[]}],topLongShortAccountRatio_longAccount:[{data:[]}],globalLongShortAccountRatio_longAccount:[{data:[]}],topLongShortPositionRatio_longAccount:[{data:[]}],buySellRatio:[{data:[]}],buySellVol:[{data:[]}]},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,s,u,f=n.prototype;return f.extractLineSeries=function(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=0,i=n;a<i.length;a++){var s=i[a];t[s]=[]}return e.forEach((function(e){for(var r in t)t[r].push({time:e.timestamp/1e3,value:parseFloat(e[r])})})),t},f.makeReq=function(){var e=p(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://blep-cors.herokuapp.com","https://fapi.binance.com",r=this.state.symbol,n=this.state.limit,e.prev=4,e.next=7,c()("https://blep-cors.herokuapp.com/https://fapi.binance.com"+t+"/?symbol="+r+"&period="+this.state.period+"&limit="+n);case 7:if((a=e.sent).ok){e.next=10;break}throw Error(a.statusText);case 10:return e.abrupt("return",a.json());case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),f.handleChange=function(e){this.state[e.target.name]=e.target.value,this.componentDidMount()},f.componentDidMount=function(){var e=p(o.a.mark((function e(){var t,r,n,a,i,s,c,l,u,f,p,h,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["/futures/data/openInterestHist","/futures/data/topLongShortAccountRatio","/futures/data/globalLongShortAccountRatio","/futures/data/topLongShortPositionRatio","/futures/data/takerlongshortRatio"],e.next=3,Promise.all(t.map(this.makeReq.bind(this)));case 3:for(a in r=e.sent,n=this.extractLineSeries(r[0],"sumOpenInterest","sumOpenInterestValue"))this.setState(((i={})[a]=[{data:n[a]}],i));for(l in n=this.extractLineSeries(r[1],"longAccount"),s=n.longAccount.map((function(e){return{time:e.time,value:1}})),c=n.longAccount.map((function(e){return{time:e.time,value:0}})),n)this.setState(((u={})["topLongShortAccountRatio_"+l]=[{data:n[l]},{data:s},{data:c}],u));for(f in n=this.extractLineSeries(r[2],"longAccount"))this.setState(((p={})["globalLongShortAccountRatio_"+f]=[{data:n[f]},{data:s},{data:c}],p));for(h in n=this.extractLineSeries(r[3],"longAccount"))this.setState(((d={})["topLongShortPositionRatio_"+h]=[{data:n[h]},{data:s},{data:c}],d));(n=this.extractLineSeries(r[4],"buySellRatio","buyVol","sellVol")).buyVol=n.buyVol.map((function(e){return Object.assign({},e,{color:"green"})})),n.sellVol=n.sellVol.map((function(e){return Object.assign({},e,{value:-e.value,color:"red"})})),this.setState({buySellRatio:[{data:n.buySellRatio}]}),this.setState({buySellVol:[{data:n.buyVol},{data:n.sellVol}]});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),f.render=function(){return i.a.createElement(l.a,{includePreFooter:!0},i.a.createElement("div",{className:"flex flex-col bg-white"},i.a.createElement("div",{className:"container px-8 mx-auto"},i.a.createElement("main",{className:"py-12 my-12"},i.a.createElement("label",null,"Exchange",i.a.createElement("select",{name:"exchange",value:this.state.period,onChange:this.handleChange},i.a.createElement("option",{value:"binance"},"Binance"))),i.a.createElement("label",null,"Period",i.a.createElement("select",{name:"period",value:this.state.period,onChange:this.handleChange},i.a.createElement("option",{value:"5m"},"5m"),i.a.createElement("option",{value:"15m"},"15m"),i.a.createElement("option",{value:"30m"},"30m"),i.a.createElement("option",{value:"1h"},"1h"),i.a.createElement("option",{value:"2h"},"2h"),i.a.createElement("option",{value:"4h"},"4h"),i.a.createElement("option",{value:"6h"},"6h"),i.a.createElement("option",{value:"12h"},"12h"),i.a.createElement("option",{value:"1d"},"1d"))),this.charts))))},a=n,(s=[{key:"charts",get:function(){var e=this,t=[["Open Interest",this.state.sumOpenInterest],["Open Value",this.state.sumOpenInterestValue],["Top Account Longs+Shorts",this.state.topLongShortAccountRatio_longAccount,"areaSeries"],["Account Longs+Shorts",this.state.globalLongShortAccountRatio_longAccount,"areaSeries"],["Top Positions Longs+Shorts",this.state.topLongShortPositionRatio_longAccount,"areaSeries"],["Buy Sell Volume Ratio",this.state.buySellRatio],["Buy Sell Volume",this.state.buySellVol,"histogramSeries"]],r=function(t){return t+" "+e.state.period+" | blep.ai"};return t.map((function(t){var n,o=t[0],a=t[1],s=t[2],c=void 0===s?"lineSeries":s;return i.a.createElement(d,Object.assign({key:o,className:"py-12 my-12",options:Object.assign({},e.state.options,{watermark:Object.assign({},m,{text:r(o)})})},((n={})[c]=a,n),{autoWidth:!0,height:600}))}))}}])&&h(a.prototype,s),u&&h(a,u),n}(a.Component)},MKeS:function(e,t,r){"use strict";r("sc67"),r("wZFJ"),r("MIFh"),r("n7j8"),r("6kNP"),r("8npG"),r("E5k/"),r("DrhF"),r("pJf4");var n=r("q1tI"),o=r.n(n);function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=r("2mql"),l=r.n(c);function u(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var f=o.a.createContext();var p=function(e){return e};function h(e){var t=e.resolve,r=void 0===t?p:t,n=e.render,c=e.onLoad;function l(e,t){void 0===t&&(t={});var l=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),p={};function h(e){return t.cacheKey?t.cacheKey(e):l.resolve?l.resolve(e):null}var d,m=function(e){var o,f;function d(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:h(r)},n.promise=null,u(!r.__chunkExtractor||l.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(l.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(l.chunkName(r))),s(n)):(!1!==t.ssr&&l.isReady&&l.isReady(r)&&n.loadSync(),n)}f=e,(o=d).prototype=Object.create(f.prototype),o.prototype.constructor=o,o.__proto__=f,d.getDerivedStateFromProps=function(e,t){var r=h(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var m=d.prototype;return m.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},m.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},m.componentWillUnmount=function(){this.mounted=!1},m.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},m.triggerOnLoad=function(){var e=this;c&&setTimeout((function(){c(e.state.result,e.props)}))},m.loadSync=function(){if(this.state.loading)try{var e=l.requireSync(this.props),t=r(e,{Loadable:b});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},m.getCacheKey=function(){return h(this.props)||JSON.stringify(this.props)},m.getCache=function(){return p[this.getCacheKey()]},m.setCache=function(e){p[this.getCacheKey()]=e},m.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,a(n,["__chunkExtractor","forwardedRef"]));this.promise=l.requireAsync(o).then((function(n){var o=r(n,{Loadable:b});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:b}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},m.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,s=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,l=c.error,u=c.loading,f=c.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:i({},s,{ref:r})})}if(l)throw l;var h=o||t.fallback||null;return u?h:n({loading:u,fallback:h,result:f,options:t,props:i({},s,{ref:r})})},d}(o.a.Component),y=(d=m,function(e){return o.a.createElement(f.Consumer,null,(function(t){return o.a.createElement(d,Object.assign({__chunkExtractor:t},e))}))}),b=o.a.forwardRef((function(e,t){return o.a.createElement(y,Object.assign({forwardedRef:t},e))}));return b.preload=function(e){l.requireAsync(e)},b.load=function(e){return l.requireAsync(e)},b}return{loadable:l,lazy:function(e,t){return l(e,i({},t,{suspense:!0}))}}}var d=h({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return l()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),m=d.loadable,y=d.lazy,b=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),g=b.loadable,v=b.lazy;var S=m;S.lib=g,y.lib=v;t.a=S},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";r("m210"),r("4DPX");var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case c:case s:case d:return e;default:switch(e=e&&e.$$typeof){case u:case h:case b:case y:case l:return e;default:return t}}case a:return t}}}function x(e){return O(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=h,t.Fragment=i,t.Lazy=b,t.Memo=y,t.Portal=a,t.Profiler=c,t.StrictMode=s,t.Suspense=d,t.isAsyncMode=function(e){return x(e)||O(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return O(e)===u},t.isContextProvider=function(e){return O(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===h},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===a},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===s},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===c||e===s||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===h||e.$$typeof===v||e.$$typeof===S||e.$$typeof===w||e.$$typeof===g)},t.typeOf=O}}]);
//# sourceMappingURL=component---src-pages-charts-lite-js-4bc1a78af38cf2efe886.js.map