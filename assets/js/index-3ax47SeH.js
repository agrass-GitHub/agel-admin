const __vite__fileDeps=["assets/js/home-B5B_vta5.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/js/@vue-BUfntaX4.js","assets/js/baseTable-CEZcBN9T.js","assets/js/pinia-BcZ_goKD.js","assets/js/vue-demi-Dq6ymT-8.js","assets/js/@element-plus-CEn1-KrG.js","assets/js/element-plus-crx-D5bblJ1H.js","assets/js/element-plus-DXIbwMX0.js","assets/js/lodash-es-CiJSjksT.js","assets/js/@vueuse-DrCho8eq.js","assets/js/@popperjs-D9SI2xQl.js","assets/js/@ctrl-r5W6hzzQ.js","assets/js/dayjs-Cdlb6j_n.js","assets/js/async-validator-DKvM95Vc.js","assets/js/memoize-one-BdPwpGay.js","assets/js/normalize-wheel-es-B6fDCfyv.js","assets/js/@floating-ui-DbhjpF8H.js","assets/css/element-plus-BdOdcotq.css","assets/css/element-plus-crx-CXITdSY0.css","assets/js/axios-B6xwUs71.js","assets/js/vue-router-BgQatW0n.js","assets/js/mockjs-B3hQZpvU.js","assets/css/@unocss-CC20SAMN.css","assets/js/cacheView-DLj8Gq8w.js","assets/js/switch-roles-Bfrba0-O.js","assets/js/admin-8E6JkA5U.js","assets/js/user-BycMqRRy.js","assets/js/IframeLayout-DHaOXmmF.js","assets/js/menu-DUu_lHnR.js","assets/js/404-Dn4G97Xp.js","assets/js/401-BUcM-aYX.js","assets/js/login-BEUdblHm.js","assets/js/DynamicLayout-C59y-MrT.js","assets/css/DynamicLayout-FWEmFQtW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as S,r as h,k as g,ai as v,o as w,O as C,P as V,V as M,u as Y,at as $}from"./@vue-BUfntaX4.js";import{d as A,c as F}from"./pinia-BcZ_goKD.js";import{Q as z}from"./@element-plus-CEn1-KrG.js";import{E as U}from"./element-plus-crx-D5bblJ1H.js";import{p as E}from"./@vueuse-DrCho8eq.js";import{O as j,P as q,x as T,Q as G}from"./element-plus-DXIbwMX0.js";import{a as H}from"./axios-B6xwUs71.js";import{c as N,a as B}from"./vue-router-BgQatW0n.js";import{M as m}from"./mockjs-B3hQZpvU.js";/* empty css                */import"./vue-demi-Dq6ymT-8.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Cdlb6j_n.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DbhjpF8H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function x(o){let t="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(o))return console.error("输入错误的hex");o=o.replace("#",""),t=o.match(/../g);for(let n=0;n<3;n++)t[n]=parseInt(t[n],16);return t}function D(o,t,s){const n=/^\d{1,3}$/;if(!n.test(o)||!n.test(t)||!n.test(s))return console.error("输入错误的rgb颜色值");const e=[o.toString(16),t.toString(16),s.toString(16)];for(let r=0;r<3;r++)e[r].length==1&&(e[r]=`0${e[r]}`);return`#${e.join("")}`}function k(o,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(o))return console.error("输入错误的hex颜色值");const n=x(o);for(let e=0;e<3;e++)n[e]=Math.floor(n[e]*(1-t));return D(n[0],n[1],n[2])}function P(o,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(o))return console.error("输入错误的hex颜色值");const n=x(o);for(let e=0;e<3;e++)n[e]=Math.floor((255-n[e])*t+n[e]);return D(n[0],n[1],n[2])}function W(o){const t=E("isDark",o.isDark),s=E("isGray",o.isGray),n=E("primaryColor",o.primaryColor);S(()=>{document.documentElement.setAttribute("class",t.value?"dark":""),document.body.setAttribute("style",s.value?"filter: grayscale(1)":""),e(n.value,"primary")});function e(r,a){const i=[3,5,7,8,9];document.documentElement.style.setProperty(`--el-color-${a}`,r),document.documentElement.style.setProperty(`--el-color-${a}-dark-2`,`${(t.value?P:k)(r,.2)}`),i.forEach(c=>{document.documentElement.style.setProperty(`--el-color-${a}-light-${c}`,`${(t.value?k:P)(r,c/10)}`)})}return{isDark:t,isGray:s,primaryColor:n}}const J=A("appStore",()=>{const o=h(!1),t=g(()=>o.value?"65px":"220px"),s=E("layout","vertical"),n=h(!1),e=h(!0),r=h(!0),a=h(!1),i=h(!0),c="default",u="zhCn",{isDark:p,isGray:_,primaryColor:d}=W({isDark:!1,isGray:!1,primaryColor:"#2463eb"});return{menuCollapse:o,slideMenuWidth:t,layout:s,themeDrawer:n,navTabs:r,navTabsIsBackground:a,breadcrumb:e,footer:i,componentSize:c,isDark:p,isGray:_,primaryColor:d,language:u}}),Q={__name:"App",setup(o){const t=J(),s=g(()=>({zhCn:j,en:q})[t.language]),n={AgelTable:{ElTable:{highlightCurrentRow:!0},ElTableColumn:{showOverflowTooltip:!0}},AgelFormItem:{AgelSelect:function(e){return{placeholder:"请选择"+e.label}},ElInput:function(e){return{clearable:!0,placeholder:"请输入"+e.label}},ElDatePicker:function(e){var i;let r="YYYY-MM-DD",a=(i=e==null?void 0:e.attrs)==null?void 0:i.type;return(a=="datetime"||a=="datetimerange")&&(r="YYYY-MM-DD HH:mm:ss"),(a=="month"||a=="monthrange")&&(r="YYYY-MM"),a=="year"&&(r="YYYY"),{valueFormat:r,placeholder:"请选择"+e.label}}}};return(e,r)=>{const a=v("RouterView"),i=v("el-config-provider");return w(),C(i,{locale:s.value,button:{autoInsertSpace:!0},size:Y(t).componentSize,"experimental-features":{ElementPlusCrx:n}},{default:V(()=>[M(a)]),_:1},8,["locale","size","experimental-features"])}}},K="modulepreload",X=function(o){return"/agel-admin/"+o},b={},l=function(t,s,n){let e=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(s.map(i=>{if(i=X(i),i in b)return;b[i]=!0;const c=i.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":K,c||(p.as="script",p.crossOrigin=""),p.href=i,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((_,d)=>{p.addEventListener("load",_),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},I={path:"/home",name:"home",meta:{title:"首页",icon:"HomeFilled",hidden:!0},component:()=>l(()=>import("./home-B5B_vta5.js"),__vite__mapDeps([0,1,2]))},O=[I,{path:"/baseTable",name:"baseTable",meta:{title:"基础列表",icon:"Menu"},component:()=>l(()=>import("./baseTable-CEZcBN9T.js"),__vite__mapDeps([3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))},{path:"/cacheView",name:"cacheView",meta:{title:"缓存页面",icon:"Discount",keepAlive:!0},component:()=>l(()=>import("./cacheView-DLj8Gq8w.js"),__vite__mapDeps([24,2]))},{path:"/roles",name:"roles",meta:{title:"权限相关",icon:"UserFilled"},children:[{path:"/roles/switch",name:"switch-roles",meta:{title:"权限切换",icon:"UserFilled"},component:()=>l(()=>import("./switch-roles-Bfrba0-O.js"),__vite__mapDeps([25,8,2,9,10,6,11,12,13,14,15,16,17,18,4,5,7,19,20,21,22,23]))},{path:"/roles/admin",name:"admin",meta:{title:"管理员角色可见",icon:"UserFilled",roles:["admin"]},component:()=>l(()=>import("./admin-8E6JkA5U.js"),__vite__mapDeps([26,1,2]))},{path:"/roles/user",name:"user",meta:{title:"用户角色可见",icon:"UserFilled",roles:["user"]},component:()=>l(()=>import("./user-BycMqRRy.js"),__vite__mapDeps([27,1,2]))}]},{path:"/link",name:"link",redirect:"/link/element-plus",meta:{title:"外部链接",icon:"Connection"},children:[{path:"/link/vuejs",name:"vuejs",meta:{title:"vuejs",icon:"ElementPlus",link:"https://cn.vuejs.org/"},component:()=>l(()=>import("./IframeLayout-DHaOXmmF.js"),__vite__mapDeps([28,21,2]))},{path:"/link/element-plus",name:"element-plus",meta:{title:"element-plus",icon:"ElementPlus",link:"https://element-plus.org/zh-CN/"},component:()=>l(()=>import("./IframeLayout-DHaOXmmF.js"),__vite__mapDeps([28,21,2]))},{path:"/link/element-plus-crx",name:"element-plus-crx",meta:{title:"element-plus-crx",icon:"ElementPlus",link:"https://agrass.gitee.io/element-plus-crx/"},component:()=>l(()=>import("./IframeLayout-DHaOXmmF.js"),__vite__mapDeps([28,21,2]))}]},{path:"/menu",name:"menu",redirect:"/menu/menu-1",meta:{title:"多级菜单",icon:"Grid"},children:[{path:"/menu/menu-1",name:"menu-1",meta:{title:"菜单1",icon:"Menu"},component:()=>l(()=>import("./menu-DUu_lHnR.js"),__vite__mapDeps([29,1,2]))},{path:"/menu/menu-2",name:"menu-2",meta:{title:"菜单2",icon:"Menu"},component:()=>l(()=>import("./menu-DUu_lHnR.js"),__vite__mapDeps([29,1,2]))},{path:"/menu/menu-3",name:"menu-3",redirect:"/menu/menu-3-1",meta:{title:"菜单3",icon:"Menu"},children:[{path:"/menu/menu-3-1",name:"menu-3-1",meta:{title:"菜单3-1",icon:"Menu"},component:()=>l(()=>import("./menu-DUu_lHnR.js"),__vite__mapDeps([29,1,2]))},{path:"/menu/menu-3-2",name:"menu-3-2",meta:{title:"菜单3-2",icon:"Menu"},component:()=>l(()=>import("./menu-DUu_lHnR.js"),__vite__mapDeps([29,1,2]))}]}]}],Z=[{path:"/",redirect:"/login"},{path:"/:pathMatch(.*)*",redirect:"/404"},{path:"/404",name:"404",component:()=>l(()=>import("./404-Dn4G97Xp.js"),__vite__mapDeps([30,1,2]))},{path:"/401",name:"401",component:()=>l(()=>import("./401-BUcM-aYX.js"),__vite__mapDeps([31,1,2]))},{path:"/login",name:"login",component:()=>l(()=>import("./login-BEUdblHm.js"),__vite__mapDeps([32,21,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23]))},{path:"/index",redirect:I.path,component:()=>l(()=>import("./DynamicLayout-C59y-MrT.js"),__vite__mapDeps([33,1,2,21,10,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,34,23])),children:O},{path:"/test",name:"test",meta:{title:"基础列表",icon:"Menu"},component:()=>l(()=>import("./baseTable-CEZcBN9T.js"),__vite__mapDeps([3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))}],y=H.create({timeout:3e4,withCredentials:!0});y.interceptors.request.use(o=>{const t=R();return o.headers.token=t.token,o});y.interceptors.response.use(o=>{const{data:t}=o;return t.success?(console.log(t),t):(t.msg&&T.error(t.msg),Promise.reject(t))});const R=A("userStore",()=>{const o=E("userInfo",e(),sessionStorage),t=g(()=>o.value.token),s=g(()=>o.value.role),n=g(()=>i(O));function e(){return{name:"",id:"",portrait:"",token:"",role:""}}function r(c){return y({url:"/mock/login",method:"post",data:c}).then(u=>(o.value=u.data,u.data))}function a(){return new Promise(c=>{o.value=e(),c(!0)})}function i(c){return c.map(u=>{const p=u.meta.hidden!==!0,_=u.meta.roles?u.meta.roles.includes(s.value):!0,d={children:[],title:u.meta.title,icon:u.meta.icon,index:u.path,hidden:!(p&&_)};return u.children&&u.children.length>0&&(d.children=i(u.children)),d})}return{userInfo:o,menuData:n,token:t,role:s,loginApp:r,logoutApp:a}}),L=N({history:B("/agel-admin/"),routes:Z});L.beforeEach((o,t,s)=>{const n=["/login","/401","/404"],e=o.meta,r=R(),a=n.includes(o.path),i=e.roles?e.roles.includes(r.role):!0;return!(r.token!=="")&&!a?(T.warning("请先登录后再操作"),s("/login")):i?s():s("/401")});m.setup({timeout:"200-500"});const ee=m.Random;m.mock("/mock/data","post",o=>{const t=JSON.parse(o.body),s=[];for(let n=0;n<t.size;n++){let e={name:ee.cname(),age:m.mock("@float(20, 80,0,0)"),email:m.mock("@email"),id:m.mock("@id"),decs:m.mock("@cparagraph"),date:m.mock("@date(yyyy-MM-dd)")};s.push(e)}return{success:!0,msg:"",data:{list:s,total:100}}});m.mock("/mock/login","post",o=>{const t=JSON.parse(o.body),s={name:t.account,role:t.account,age:m.mock("@float(20, 80,0,0)"),email:m.mock("@email"),id:m.mock("@id"),decs:m.mock("@cparagraph"),date:m.mock("@date(yyyy-MM-dd)"),token:"xxxxxxxxtoken",portrait:"http://dummyimage.com/200x200/333333/ffffff&text="+t.account};return["admin","user"].includes(t.account)?{success:!0,msg:"",data:s}:{success:!1,msg:"请输入正确的账号",data:{}}});const f=$(Q),te=F();f.use(te);f.use(L);f.use(G);f.use(U);for(const[o,t]of Object.entries(z))f.component(o,t);f.mount("#app");export{I as a,J as b,O as d,y as h,R as u};