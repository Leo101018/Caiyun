!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=77)}({19:function(e,t,n){var i;
/*!

 @Name：layer mobile v2.0 弹层组件移动版
 @Author：贤心
 @Site：http://layer.layui.com/mobie/
 @License：LGPL
    
 */!function(o){"use strict";var r=document,s="getElementsByClassName",l=function(e){return r.querySelectorAll(e)},a={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},c={extend:function(e){var t=JSON.parse(JSON.stringify(a));for(var n in e)t[n]=e[n];return t},timer:{},end:{},touch:function(e,t){e.addEventListener("click",function(e){t.call(this,e)},!1)}},d=0,u=["layui-m-layer"],y=function(e){this.config=c.extend(e),this.view()};y.prototype.view=function(){var e=this.config,t=r.createElement("div");this.id=t.id=u[0]+d,t.setAttribute("class",u[0]+" "+u[0]+(e.type||0)),t.setAttribute("index",d);var n,i=(n="object"==typeof e.title,e.title?'<h3 style="'+(n?e.title[1]:"")+'">'+(n?e.title[0]:e.title)+"</h3>":""),o=function(){"string"==typeof e.btn&&(e.btn=[e.btn]);var t,n=(e.btn||[]).length;return 0!==n&&e.btn?(t='<span yes type="1">'+e.btn[0]+"</span>",2===n&&(t='<span no type="0">'+e.btn[1]+"</span>"+t),'<div class="layui-m-layerbtn">'+t+"</div>"):""}();if(e.fixed||(e.top=e.hasOwnProperty("top")?e.top:100,e.style=e.style||"",e.style+=" top:"+(r.body.scrollTop+e.top)+"px"),2===e.type&&(e.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(e.content||"")+"</p>"),e.skin&&(e.anim="up"),"msg"===e.skin&&(e.shade=!1),t.innerHTML=(e.shade?"<div "+("string"==typeof e.shade?'style="'+e.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(e.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(e.skin?"layui-m-layer-"+e.skin+" ":"")+(e.className?e.className:"")+" "+(e.anim?"layui-m-anim-"+e.anim:"")+'" '+(e.style?'style="'+e.style+'"':"")+">"+i+'<div class="layui-m-layercont">'+e.content+"</div>"+o+"</div></div></div>",!e.type||2===e.type){var a=r[s](u[0]+e.type);a.length>=1&&layer.close(a[0].getAttribute("index"))}document.body.appendChild(t);var c=this.elem=l("#"+this.id)[0];e.success&&e.success(c),this.index=d++,this.action(e,c)},y.prototype.action=function(e,t){var n=this;e.time&&(c.timer[n.index]=setTimeout(function(){layer.close(n.index)},1e3*e.time));var i=function(){0==this.getAttribute("type")?(e.no&&e.no(),layer.close(n.index)):e.yes?e.yes(n.index):layer.close(n.index)};if(e.btn)for(var o=t[s]("layui-m-layerbtn")[0].children,r=o.length,l=0;l<r;l++)c.touch(o[l],i);if(e.shade&&e.shadeClose){var a=t[s]("layui-m-layershade")[0];c.touch(a,function(){layer.close(n.index,e.end)})}e.end&&(c.end[n.index]=e.end)},o.layer={v:"2.0",index:d,open:function(e){return new y(e||{}).index},close:function(e){var t=l("#"+u[0]+e)[0];t&&(t.innerHTML="",r.body.removeChild(t),clearTimeout(c.timer[e]),delete c.timer[e],"function"==typeof c.end[e]&&c.end[e](),delete c.end[e])},closeAll:function(){for(var e=r[s](u[0]),t=0,n=e.length;t<n;t++)layer.close(0|e[0].getAttribute("index"))}},void 0===(i=function(){return layer}.call(t,n,t,e))||(e.exports=i)}(window)},77:function(e,t,n){var i=n(19),o=["netflix","vimeo.com","hulu.com","twitch"];function r(e,t,n){if("alert"==e.type)i.open({content:e.content,skin:"msg",time:e.time});else if("closeVideoBtn"==e.type)document.getElementById("substr")&&document.getElementsByClassName("cyxy-video-trans")[0].click();else if("turnOnVideoBtn"==e.type){document.getElementsByClassName("cyxy-video-trans");let e=document.getElementById("substr"),t=document.URL,n=document.querySelector("video:not(#rewardvideo)");if(!e&&n)for(const e of o)if(t.includes(e)){browser.runtime.sendMessage({type:"showSubByVideoBtn"});break}}}document.head.appendChild(document.createElement("style")).innerHTML="",browser.runtime.onMessage.hasListener(r)||browser.runtime.onMessage.addListener(r)}});