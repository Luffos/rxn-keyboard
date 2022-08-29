"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[351],{8555:function(e){var t=function(e){};e.exports=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(t(n),!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=0;(u=new Error(n.replace(/%s/g,(function(){return String(i[c++])})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},9205:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(5671),i=n(3144),o=n(8555),u=n.n(o),c=!("undefined"==typeof window||!window.document||!window.document.createElement),a={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},l={},s=c,f=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,null,[{key:"get",value:function(t){return s&&(s=!1,e._update()),u()(a[t],"No dimension set for key "+t),a[t]}},{key:"set",value:function(e){e&&(c?u()(!1,"Dimensions cannot be set in the browser"):(null!=e.screen&&(a.screen=e.screen),null!=e.window&&(a.window=e.window)))}},{key:"_update",value:function(){if(c){var e=window,t=e.document.documentElement;a.window={fontScale:1,height:t.clientHeight,scale:e.devicePixelRatio||1,width:t.clientWidth},a.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width},Array.isArray(l.change)&&l.change.forEach((function(e){return e(a)}))}}},{key:"addEventListener",value:function(e,t){var n=this;return l[e]=l[e]||[],l[e].push(t),{remove:function(){n.removeEventListener(e,t)}}}},{key:"removeEventListener",value:function(e,t){Array.isArray(l[e])&&(l[e]=l[e].filter((function(e){return e!==t})))}}]),e}();c&&window.addEventListener("resize",f._update,!1)},9845:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9205),i=n(7294);function o(){var e=(0,i.useState)((function(){return r.Z.get("window")})),t=e[0],n=e[1];return(0,i.useEffect)((function(){function e(e){var t=e.window;null!=t&&n(t)}return r.Z.addEventListener("change",e),n(r.Z.get("window")),function(){r.Z.removeEventListener("change",e)}}),[]),t}},4912:function(e,t,n){var r=n(9205),i=n(9845);t.ZP=function(){var e=(0,i.Z)(),t=e.width,n=e.height;return{vw:function(e){return function(e,t){return(t||r.Z.get("window").width)*(e/100)}(e,t)},vh:function(e){return function(e,t){return(t||r.Z.get("window").height)*(e/100)}(e,n)},vmin:function(e){return function(e,t,n){return Math.min((t||r.Z.get("window").width)*(null!=e?e/100:1),(n||r.Z.get("window").height)*(null!=e?e/100:1))}(e,t,n)},vmax:function(e){return function(e,t,n){return Math.max((t||r.Z.get("window").width)*(null!=e?e/100:1),(n||r.Z.get("window").height)*(null!=e?e/100:1))}(e,t,n)},percentage:function(e,t){return function(e,t){return t*e/100}(e,t)}}}},1359:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(7294),i=n(1597),o="style-module--navItem--rjYGv",u=function(e){var t=e.TopBarSelected;return r.createElement("div",{id:"style-module--topNavBarRoot---nFJA"},r.createElement(i.rU,{to:"/",id:"style-module--topNavBarTitle--udWfK"},"RXN Input"),r.createElement(i.rU,{to:"/docs",style:{height:"100%",marginLeft:"5vmin"}},r.createElement("div",{"data-currentpage":"DOCS"===t,id:o},r.createElement("p",null,"Documentation"))),r.createElement(i.rU,{to:"/examples",style:{height:"100%",marginRight:"2.5vmin"}},r.createElement("div",{"data-currentpage":"EXAMPLES"===t,id:o},r.createElement("p",null,"Examples"))),r.createElement("div",{style:{marginLeft:"auto"}},r.createElement("a",{id:"style-module--githubIcon---QN3M",style:{display:"flex",height:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center",marginRight:"3vmin"},href:"https://github.com/Luffos/rxn-input"},r.createElement("img",{style:{pointerEvents:"none",width:"3vmin",aspectRatio:"1"},src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPHBhdGggZmlsbD0iI2ZmZiINCiAgICAgICAgZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIgLz4NCjwvc3ZnPg=="}))))},c=(0,r.memo)(u);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=n(5671),f=n(3144);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=n(9611);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var m=["style","className","fill","paused","children","id","d","ref","height","amplitude","speed","points"],g=["options"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(D){return!1}}();return function(){var n,r=M(e);if(t){var i=M(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,h.Z)(e,t)}(n,e);var t=j(n);function n(e){var i;return(0,s.Z)(this,n),(i=t.call(this,e)).t=function(){return i.i.current.offsetWidth},i.h=function(){return i.i.current.offsetHeight},i.i=r.createRef(),i.state={path:""},i.l=0,i.o=0,i.p=0,i.u=i.u.bind(y(i)),i}return(0,f.Z)(n,[{key:"m",value:function(){for(var e=[],t=0;t<=Math.max(this.props.points,1);t++){var n=t/this.props.points*this.t(),r=(this.p+(t+t%this.props.points))*this.props.speed*100,i=Math.sin(r/100)*this.props.amplitude,o=Math.sin(r/100)*i+this.props.height;e.push({x:n,y:o})}return e}},{key:"g",value:function(e){var t="M "+e[0].x+" "+e[0].y,n={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},r=function(e,t){return" C "+e.x+" "+e.y+" "+e.x+" "+e.y+" "+t.x+" "+t.y};t+=r(n,e[1]);for(var i=n,o=1;o<e.length-1;o++)t+=r(i={x:e[o].x-i.x+e[o].x,y:e[o].y-i.y+e[o].y},e[o+1]);return t+=" L "+this.t()+" "+this.h(),t+=" L 0 "+this.h()+" Z"}},{key:"v",value:function(){this.setState({path:this.g(this.m())})}},{key:"M",value:function(){if(!this.props.paused){var e=new Date;this.o+=e-this.l,this.l=e}this.p=this.o*Math.PI/1e3,this.v()}},{key:"u",value:function(){this.M(),this._&&this.D()}},{key:"D",value:function(){this._=window.requestAnimationFrame(this.u),this.l=new Date}},{key:"componentDidMount",value:function(){this._||this.D()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this._),this._=0}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,i=e.fill,o=(e.paused,e.children),u=e.id,c=(e.d,e.ref,e.height,e.amplitude,e.speed,e.points,l(e,m));return r.createElement("div",{style:v({width:"100%",display:"inline-block"},t),className:n,id:u,ref:this.i},r.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o,r.createElement("path",Object.assign({},{d:this.state.path,fill:i},c))))}}]),n}(r.Component),b={height:20,amplitude:20,speed:.15,points:3},D=function(e){var t=e.options,n=l(e,g);return r.createElement(L,Object.assign({},b,t,n))};D.defaultProps={paused:!1,fill:"#fff"};var E=D,I=n(4912),x=function(){var e=(0,I.ZP)().vmin;return r.createElement("footer",{id:"style-module--footer--1bf2a"},r.createElement("div",{style:{height:e(2)}},r.createElement(E,{options:{speed:.5},fill:"rgba(255,255,255,0.01)",id:"style-module--wave--0y0Xj"})),r.createElement("div",{style:{display:"flex",width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center"}},r.createElement("h5",{style:{color:"white",margin:0,padding:0,fontSize:e(2),marginBottom:e(2)}},"Made with ❤️ by Luffos Inc.")))},O=(0,r.memo)(x),N=function(e){var t=e.children,n=e.TopBarSelected;return r.createElement(r.Fragment,null,r.createElement(c,{TopBarSelected:n}),r.createElement("div",{style:{display:"flex",flexDirection:"column"}},t,r.createElement(O,null)))},S=(0,r.memo)(N)},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=commons-afaf580f9b279f894d6c.js.map