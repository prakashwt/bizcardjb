(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{164:function(e,t,n){"use strict";var r=n(76),o=n(5),l=n(73),c=n(74),h=n(19),d=n(57),f=n(75),m=n(12),v=Math.min,w=[].push,x=4294967295,y=!m((function(){RegExp(x,"y")}));n(58)("split",2,(function(e,t,n,m){var C;return C="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(o,e,t);for(var l,c,h,output=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=void 0===t?x:t>>>0,y=new RegExp(e.source,d+"g");(l=f.call(y,o))&&!((c=y.lastIndex)>m&&(output.push(o.slice(m,l.index)),l.length>1&&l.index<o.length&&w.apply(output,l.slice(1)),h=l[0].length,m=c,output.length>=v));)y.lastIndex===l.index&&y.lastIndex++;return m===o.length?!h&&y.test("")||output.push(""):output.push(o.slice(m)),output.length>v?output.slice(0,v):output}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var o=e(this),l=null==n?void 0:n[t];return void 0!==l?l.call(n,o,r):C.call(String(o),n,r)},function(e,t){var r=m(C,e,this,t,C!==n);if(r.done)return r.value;var f=o(e),w=String(this),k=l(f,RegExp),_=f.unicode,L=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),R=new k(y?f:"^(?:"+f.source+")",L),j=void 0===t?x:t>>>0;if(0===j)return[];if(0===w.length)return null===d(R,w)?[w]:[];for(var p=0,q=0,I=[];q<w.length;){R.lastIndex=y?q:0;var z,A=d(R,y?w:w.slice(q));if(null===A||(z=v(h(R.lastIndex+(y?0:q)),w.length))===p)q=c(w,q,_);else{if(I.push(w.slice(p,q)),I.length===j)return I;for(var i=1;i<=A.length-1;i++)if(I.push(A[i]),I.length===j)return I;q=p=z}}return I.push(w.slice(p)),I}]}))},165:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';e.exports=n,t.default=n},175:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14m-7-7h14"/></svg>';e.exports=n,t.default=n},197:function(e,t,n){"use strict";n.r(t);var r=n(263),o=n.n(r),l=(n(264),{props:["src","mime","content","resizeImage"],data:function(){return{cropper:{},dataURL:null,blobData:null,image:{}}},methods:{cropPhoto:function(){var e=this,t=this,canvas=this.cropper.getCroppedCanvas(),n=canvas.toDataURL(this.mime);this.content.photo.url=n,this.content.photo.mime=this.mime,canvas.toBlob((function(n){t.content.photo.blob=new File([n],"photo",{type:e.mime}),t.resizeImage("photo",t.mime),t.$emit("closeCropper")}),this.mime,.8)}},mounted:function(){this.image=this.$refs.image,this.cropper=new o.a(this.image,{zoomable:!1,scalable:!0,aspectRatio:1,autoCropArea:1,responsive:!0,viewMode:2,highlight:!1,rotatable:!1})}}),c=n(45),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center fixed top-0 left-0 right-0 bottom-0 items-center z-30 bg-black bg-opacity-80",attrs:{id:"notificationContainer"}},[n("div",{staticClass:"flex flex-col items-center notification content bg-gray-800 text-gray-100 rounded relative z-50 max-w-sm mx-4 p-2"},[n("div",{staticClass:"mb-2 max-w-sm max-h-80"},[n("img",{ref:"image",attrs:{src:e.src}})]),e._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"p-3 font-extrabold rounded tracking-wide focus:outline-none select-none bg-gray-700 mr-2 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200",on:{click:function(t){return e.$emit("closeCropper")}}},[e._v("\n        Cancel\n      ")]),e._v(" "),n("button",{staticClass:"font-extrabold leading-none tracking-wide select-none flex-shrink-0 p-3 text-white bg-green-600 rounded hover:bg-green-500 focus:bg-green-500 transition-colors duration-200 focus:outline-none",on:{click:e.cropPhoto}},[e._v("\n        Crop photo\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},272:function(e,t,n){"use strict";n.r(t);n(164),n(107);var r={props:["content","type","label","description","resizeImage","showAlert"],data:function(){return{dragOver:!1,showCropper:!1,tempURL:null,mime:null}},computed:{imageAttached:function(){return!!this.content[this.type].url}},methods:{closeCropper:function(){this.showCropper=!1},attachFile:function(e,t,n){n?(this.fileLoaded(e,t,!0),this.dragOver=!1):this.$refs["import".concat(t)].click()},fileLoaded:function(e,t,n){if(n&&e.dataTransfer.files.length||!n&&e.target.files.length){var r=n?e.dataTransfer.files[0]:e.target.files[0],o=r.type;"logo"==t&&r.type.match(/image\/(svg\+xml|png|jpeg|gif|webp)/)||r.type.match(/image\/(png|jpeg|gif|webp)/)?this.imageLoaded(r,t,o):"logo"==t?this.showAlert("Unsupported file format.\nOnly jpeg, png, webp, gif and svg file can be attached."):this.showAlert("Unsupported file format.\nOnly jpeg, png, webp and gif file can be attached.")}},imageLoaded:function(e,t,n){var r=this,o=new FileReader;o.onload=function(o){var l=o.target.result,c=l.split(",")[0].split(":")[1].split("/")[1].match(/^\w+/g)[0];"logo"==t||n.match(/gif|webp/)?(r.content[t]={url:l,blob:e,ext:c,mime:n,resized:e},n.match(/svg|gif|webp/)||r.resizeImage(t,n)):(r.content.photo.ext=c,r.mime=n,r.tempURL=l,r.showCropper=!0)},o.readAsDataURL(e)}}},o=n(45),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex mt-6"},[r("transition",{attrs:{name:"list"}},[e.showCropper?r("Cropper",{attrs:{src:e.tempURL,content:e.content,mime:e.mime,resizeImage:e.resizeImage},on:{closeCropper:e.closeCropper}}):e._e()],1),e._v(" "),r("div",{staticClass:"flex flex-wrap items-center"},[e.imageAttached?r("img",{staticClass:"w-12 h-12 rounded object-contain",attrs:{src:e.content[e.type].url,title:"logo"==e.type?"Brand logo":"Card holder's photo"}}):e._e(),e._v(" "),e.imageAttached?e._e():r("button",{staticClass:"p-3 rounded bg-gray-700 cursor-pointer hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none",class:e.dragOver?"bg-gray-900 outline-white":"bg-gray-700 border-none",attrs:{"aria-label":e.label},on:{click:function(t){return e.attachFile(null,e.type,!1)},drop:function(t){return t.preventDefault(),e.attachFile(t,e.type,!0)},dragleave:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!1},dragover:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!0}}},[r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"import"+e.type,attrs:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"+("logo"==e.type?",.svg":"")},on:{change:function(t){return e.fileLoaded(t,e.type,!1)},click:function(e){e.target.files=null}}}),e._v(" "),r("div",{staticClass:"w-6 h-6 pointer-events-none",domProps:{innerHTML:e._s(n(175))}})]),e._v(" "),e.imageAttached?r("button",{staticClass:"p-1 m-2 flex-shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200",attrs:{"aria-label":"Remove "+e.type,title:"Remove "+e.type},on:{click:function(t){e.content[e.type].url=null}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(165))}})]):r("p",{staticClass:"ml-3 leading-none"},[e._v("\n      "+e._s(e.label)),r("span",{staticClass:"text-sm text-gray-400"},[r("br"),e._v(e._s(e.description))])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Cropper:n(197).default})}}]);