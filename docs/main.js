/*! For license information please see main.js.LICENSE?45c3ca23dbc9f188c58c */
!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){!function(e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o,r=!1,s=void 0!==e;s&&e.getComputedStyle?(o=i.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(t){try{o.style.position=t+"sticky"}catch(t){}return""!=o.style.position}))&&(r=!0)):r=!0;var a=!1,f="undefined"!=typeof ShadowRoot,l={top:null,left:null},c=[];function h(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}function d(t){return parseFloat(t)||0}function u(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}var p=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(c.some((function(t){return t._node===e})))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,c.push(this),this.refresh()}return n(t,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var t=this._node,n=getComputedStyle(t),o={position:n.position,top:n.top,display:n.display,marginTop:n.marginTop,marginBottom:n.marginBottom,marginLeft:n.marginLeft,marginRight:n.marginRight,cssFloat:n.cssFloat};if(!isNaN(parseFloat(o.top))&&"table-cell"!=o.display&&"none"!=o.display){this._active=!0;var s=t.style.position;"sticky"!=n.position&&"-webkit-sticky"!=n.position||(t.style.position="static");var a=t.parentNode,l=f&&a instanceof ShadowRoot?a.host:a,c=t.getBoundingClientRect(),p=l.getBoundingClientRect(),g=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:c.left,right:i.documentElement.clientWidth-c.right},this._offsetToParent={top:c.top-p.top-d(g.borderTopWidth),left:c.left-p.left-d(g.borderLeftWidth),right:-c.right+p.right-d(g.borderRightWidth)},this._styles={position:s,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var m=d(o.top);this._limits={start:c.top+e.pageYOffset-m,end:p.top+e.pageYOffset+l.offsetHeight-d(g.borderBottomWidth)-t.offsetHeight-m-d(o.marginBottom)};var v=g.position;"absolute"!=v&&"relative"!=v&&(l.style.position="relative"),this._recalcPosition();var _=this._clone={};_.node=i.createElement("div"),h(_.node.style,{width:c.right-c.left+"px",height:c.bottom-c.top+"px",marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),a.insertBefore(_.node,t),_.docOffsetTop=u(_.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=l.top<=this._limits.start?"start":l.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":h(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":h(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":h(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(u(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,h(this._node.style,this._styles),delete this._styles,c.some((function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node}))||h(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),c.some((function(e,i){if(e._node===t._node)return c.splice(i,1),!0})),this._removed=!0}}]),t}(),g={stickies:c,Sticky:p,forceSticky:function(){r=!1,m(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<c.length;e++)if(c[e]._node===t)return c[e];return new p(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],i=function(i){var n=t[i];return n instanceof HTMLElement?c.some((function(t){if(t._node===n)return e.push(t),!0}))?"continue":void e.push(new p(n)):(e.push(void 0),"continue")},n=0;n<t.length;n++)i(n);return e}},refreshAll:function(){c.forEach((function(t){return t.refresh()}))},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}c.some((function(e){if(e._node===t)return e.remove(),!0}))},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var i=t[e];c.some((function(t){if(t._node===i)return t.remove(),!0}))},i=0;i<t.length;i++)e(i)},removeAll:function(){for(;c.length;)c[0].remove()}};function m(){if(!a){a=!0,r(),e.addEventListener("scroll",r),e.addEventListener("resize",g.refreshAll),e.addEventListener("orientationchange",g.refreshAll);var t=void 0,n=void 0,o=void 0;"hidden"in i?(n="hidden",o="visibilitychange"):"webkitHidden"in i&&(n="webkitHidden",o="webkitvisibilitychange"),o?(i[n]||s(),i.addEventListener(o,(function(){i[n]?clearInterval(t):s()}))):s()}function r(){e.pageXOffset!=l.left?(l.top=e.pageYOffset,l.left=e.pageXOffset,g.refreshAll()):e.pageYOffset!=l.top&&(l.top=e.pageYOffset,l.left=e.pageXOffset,c.forEach((function(t){return t._recalcPosition()})))}function s(){t=setInterval((function(){c.forEach((function(t){return t._fastCheck()}))}),500)}}r||m(),t.exports?t.exports=g:s&&(e.Stickyfill=g)}(window,document)},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n);i(2);o.a.add(document.querySelectorAll(".sticky"))},function(t,e,i){}]);