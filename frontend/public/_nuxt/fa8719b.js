(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{164:function(t,e,n){"use strict";var l=n(76),r=n(5),o=n(73),c=n(74),d=n(19),h=n(57),v=n(75),f=n(12),_=Math.min,m=[].push,x=4294967295,w=!f((function(){RegExp(x,"y")}));n(58)("split",2,(function(t,e,n,f){var C;return C="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!l(t))return n.call(r,t,e);for(var o,c,d,output=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,_=void 0===e?x:e>>>0,w=new RegExp(t.source,h+"g");(o=v.call(w,r))&&!((c=w.lastIndex)>f&&(output.push(r.slice(f,o.index)),o.length>1&&o.index<r.length&&m.apply(output,o.slice(1)),d=o[0].length,f=c,output.length>=_));)w.lastIndex===o.index&&w.lastIndex++;return f===r.length?!d&&w.test("")||output.push(""):output.push(r.slice(f)),output.length>_?output.slice(0,_):output}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,l){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r,l):C.call(String(r),n,l)},function(t,e){var l=f(C,t,this,e,C!==n);if(l.done)return l.value;var v=r(t),m=String(this),k=o(v,RegExp),y=v.unicode,I=(v.ignoreCase?"i":"")+(v.multiline?"m":"")+(v.unicode?"u":"")+(w?"y":"g"),E=new k(w?v:"^(?:"+v.source+")",I),M=void 0===e?x:e>>>0;if(0===M)return[];if(0===m.length)return null===h(E,m)?[m]:[];for(var p=0,q=0,P=[];q<m.length;){E.lastIndex=w?q:0;var R,S=h(E,w?m:m.slice(q));if(null===S||(R=_(d(E.lastIndex+(w?0:q)),m.length))===p)q=c(m,q,y);else{if(P.push(m.slice(p,q)),P.length===M)return P;for(var i=1;i<=S.length-1;i++)if(P.push(S[i]),P.length===M)return P;q=p=R}}return P.push(m.slice(p)),P}]}))},183:function(t,e,n){"use strict";n.r(e);n(164);var l={props:["product","colors","PreviewMode"],methods:{getTitle:function(t){return t.toLowerCase().split(" ").join("_")}}},r=n(45),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",style:{backgroundColor:""+t.colors.cardBg.color}},[t.product.image?n("img",{attrs:{src:t.PreviewMode?t.product.image.dataURI:"./media/"+t.getTitle(t.product.image.title)+"."+t.product.image.ext,alt:"Product image"}}):t._e(),t._v(" "),n("div",{staticClass:"controls prodInfo"},[n("p",{staticClass:"title card"},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),t.product.description?n("p",{staticClass:"desc card"},[t._v("\n      "+t._s(t.product.description)+"\n    ")]):t._e(),t._v(" "),t.product.price?n("p",{staticClass:"price card"},[t._v("\n      "+t._s(t.product.price)+"\n    ")]):t._e(),t._v(" "),t.product.label?n("a",{staticClass:"label",style:{backgroundColor:""+t.colors.buttonBg.color,lineHeight:t.PreviewMode?"inherit":"1.5rem"},attrs:{target:"_blank",href:t.product.link}},[n("p",{staticClass:"action"},[t._v(t._s(t.product.label))])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);