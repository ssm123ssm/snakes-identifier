(function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1498:function(e,t,n){"use strict";var a=n("4470"),r=n.n(a);r.a},4470:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),o=n.n(r),i={},l=o.a.create(i);l.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},a["default"].use(Plugin);Plugin;var s=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(s["a"]);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld"),n("Footer")],1)},u=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("b-container",{staticClass:"nopad",attrs:{fluid:""}},[n("h1",[e._v("Identification of venomous snakes in Sri Lanka using Machine Learning")]),n("b-card",{staticStyle:{"max-width":"20rem",margin:"auto","margin-top":"20px","margin-bottom":"20px"},attrs:{title:"Upload Image","img-src":"/cover.jpg","img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[e._v(" Upload an image of the snake to identify ")]),e.preview?n("b-img",{staticClass:"mt-3",attrs:{src:e.preview,fluid:"",alt:"Responsive image",thumbnail:""}}):e._e(),n("hr"),e.analysing?e._e():n("b-form-file",{staticClass:"ov",attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",name:"file"},on:{change:e.onFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}]},[e.analysing?e._e():n("b-button",{staticClass:"m-3",attrs:{variant:"primary"},on:{click:e.upload}},[e._v("Upload and analyze")]),e.uploading?n("b-progress",{attrs:{value:e.value,max:e.max,"show-progress":"",animated:""}}):e._e()],1),n("hr"),e.analysing?n("div",[n("h5",[e._v("Analysing")]),n("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1):e._e(),e.analysed?n("b-card",[n("b-card-title",[e._v("Analysis report")]),n("b-card-text",[e._v(" Prediction :"),n("span",{staticClass:"bold"},[e._v(" "+e._s(e.analysis.displayName))]),e._v(" "),n("br"),e._v(" Score: "+e._s((100*e.analysis.classification.score).toFixed(2))+" % ")])],1):e._e()],1)],1)],1)},d=[],p=(n("99af"),n("3ca3"),n("ddb0"),n("2b3d"),{name:"HelloWorld",props:{},data:function(){return{file:null,value:0,max:100,server:window.location.origin,uploading:!1,analysing:!1,analysed:!1,analysis:{},preview:null}},methods:{upload:function(){this.uploading=!0,this.analysed=!1,console.log(this.file);var e=this,t=new FormData;t.append("file",this.file),this.axios.post(this.server+"/publicUpload",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e.value=parseInt(t.loaded/t.total*100)}}).then((function(t){e.uploading=!1,e.per=0,e.analysing=!0,console.log(t.data.filename),e.analyseFile(t.data.filename)})).catch((function(t){console.log(t),e.uploading=!1}))},analyseFile:function(e){var t=this;this.axios.get("".concat(t.server,"/predict?file=").concat(e)).then((function(e){console.log(e),t.analysis=e.data,t.analysed=!0,t.analysing=!1})).catch((function(e){console.log(e),t.analysed=!0,t.analysing=!1}))},onFileChange:function(e){var t=e.target.files[0];console.log(URL.createObjectURL(t)),this.preview=URL.createObjectURL(t)}}}),g=p,v=(n("1498"),n("2877")),h=Object(v["a"])(g,f,d,!1,null,"113b4831",null),b=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" ft"},[e._v(" created by supun manathunga ")])},y=[],_={name:"Footer"},w=_,x=(n("84be"),Object(v["a"])(w,m,y,!1,null,"22acad08",null)),j=x.exports,O={name:"App",components:{HelloWorld:b,Footer:j}},P=O,C=(n("034f"),Object(v["a"])(P,c,u,!1,null,null,null)),F=C.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(F)}}).$mount("#app")},"84be":function(e,t,n){"use strict";var a=n("afd9"),r=n.n(a);r.a},"85ec":function(e,t,n){},afd9:function(e,t,n){}});
//# sourceMappingURL=app.3a5262f6.js.map