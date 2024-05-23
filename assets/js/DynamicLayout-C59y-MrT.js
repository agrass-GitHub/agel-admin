import{b as E,u as V,a as F,d as Q}from"./index-3ax47SeH.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{ai as s,o as c,O as u,P as o,a as l,V as e,T as y,u as n,S as k,ay as X,az as Y,k as Z,a1 as ee,c as I,F as z,a8 as H,R as T,U as $,r as te,_ as oe,w as U,D as ne,J as le,X as N,aA as se,Q as ae,W as re,d as ce}from"./@vue-BUfntaX4.js";import{u as L,b as P}from"./vue-router-BgQatW0n.js";import{q as ie,p as de}from"./@vueuse-DrCho8eq.js";import"./pinia-BcZ_goKD.js";import"./vue-demi-Dq6ymT-8.js";import"./@element-plus-CEn1-KrG.js";import"./element-plus-crx-D5bblJ1H.js";import"./element-plus-DXIbwMX0.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Cdlb6j_n.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DbhjpF8H.js";import"./axios-B6xwUs71.js";import"./mockjs-B3hQZpvU.js";/* empty css                */const b=h=>(X("data-v-400a3910"),h=h(),Y(),h),ue={class:"pb-6"},_e={class:"grid grid-cols-3 gap-2"},pe=b(()=>l("div",{class:"h-[25%] bg-[var(--el-color-primary)] rounded-sm"},null,-1)),me={class:"h-[65%] flex justify-between"},fe=b(()=>l("div",{class:"w-[25%] h-full bg-[var(--el-color-primary-light-3)] rounded-sm"},null,-1)),he={class:"main w-[70%]"},ve=b(()=>l("div",{class:"w-[25%] h-full bg-[var(--el-color-primary)] rounded-sm"},null,-1)),be={class:"w-[70%] h-full flex flex-col justify-between"},xe=b(()=>l("div",{class:"h-[25%] bg-[var(--el-color-primary-light-3)] rounded-sm"},null,-1)),ye={class:"main h-[65%]"},we=b(()=>l("div",{class:"h-[25%] bg-[var(--el-color-primary)] rounded-sm"},null,-1)),ge={class:"main h-[65%]"},Ee={class:"pb-6"},Ce={class:"flex justify-between my-4 items-center"},ke=b(()=>l("div",{class:"text-sm"},"是否开启导航条",-1)),Ae={class:"flex justify-between my-4 items-center"},Ie=b(()=>l("div",{class:"text-sm"},"是否开启页脚",-1)),Se={class:"flex justify-between my-4 items-center"},Ve=b(()=>l("div",{class:"text-sm"},"是否开启面包屑",-1)),$e={class:"flex justify-between my-4 items-center"},De=b(()=>l("div",{class:"text-sm"},"导航条风格",-1)),Be={class:"flex justify-between my-4 items-center"},ze=b(()=>l("div",{class:"text-sm"},"组件语言",-1)),Fe={class:"flex justify-between my-4 items-center"},Te=b(()=>l("div",{class:"text-sm"},"组件大小",-1)),je={class:"pb-6"},Re={class:"flex justify-between my-4 items-center"},Me=b(()=>l("div",{class:"text-sm"},"主题颜色",-1)),Ue={class:"flex justify-between my-4 items-center"},Ne=b(()=>l("div",{class:"text-sm"},"黑暗模式",-1)),He={class:"flex justify-between my-4 items-center"},Le=b(()=>l("div",{class:"text-sm"},"灰色模式",-1)),Pe={__name:"AppThemeDrawer",setup(h){const t=E(),_=["#2463eb","#0C819F","#409EFF","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"];return(i,a)=>{const p=s("ElDivider"),d=s("CircleCheckFilled"),m=s("ElIcon"),f=s("ElTooltip"),v=s("ElSwitch"),x=s("ElRadioButton"),C=s("ElRadioGroup"),A=s("ElColorPicker"),w=s("ElDrawer");return c(),u(w,{modelValue:n(t).themeDrawer,"onUpdate:modelValue":a[13]||(a[13]=r=>n(t).themeDrawer=r),title:"控制面板设置",size:"320px","append-to-body":""},{default:o(()=>[l("div",ue,[e(p,null,{default:o(()=>[y("布局切换")]),_:1}),l("div",_e,[e(f,{content:"经典",placement:"bottom"},{default:o(()=>[l("div",{class:"layout-box hover:shadow-md flex flex-col justify-between",onClick:a[0]||(a[0]=r=>n(t).layout="classics")},[pe,l("div",me,[fe,l("div",he,[n(t).layout=="classics"?(c(),u(m,{key:0,style:{"--color":"var(--el-color-primary)"}},{default:o(()=>[e(d)]),_:1})):k("",!0)])])])]),_:1}),e(f,{content:"纵向",placement:"bottom",onClick:a[2]||(a[2]=r=>n(t).layout="vertical")},{default:o(()=>[l("div",{class:"layout-box hover:shadow-md flex justify-between",onClick:a[1]||(a[1]=r=>n(t).layout="vertical")},[ve,l("div",be,[xe,l("div",ye,[n(t).layout=="vertical"?(c(),u(m,{key:0,style:{"--color":"var(--el-color-primary)"}},{default:o(()=>[e(d)]),_:1})):k("",!0)])])])]),_:1}),e(f,{content:"横向",placement:"bottom"},{default:o(()=>[l("div",{class:"layout-box hover:shadow-md flex flex-col justify-between",onClick:a[3]||(a[3]=r=>n(t).layout="horizontal")},[we,l("div",ge,[n(t).layout=="horizontal"?(c(),u(m,{key:0,style:{"--color":"var(--el-color-primary)"}},{default:o(()=>[e(d)]),_:1})):k("",!0)])])]),_:1})])]),l("div",Ee,[e(p,null,{default:o(()=>[y("组件设置")]),_:1}),l("div",Ce,[ke,e(v,{modelValue:n(t).navTabs,"onUpdate:modelValue":a[4]||(a[4]=r=>n(t).navTabs=r)},null,8,["modelValue"])]),l("div",Ae,[Ie,e(v,{modelValue:n(t).footer,"onUpdate:modelValue":a[5]||(a[5]=r=>n(t).footer=r)},null,8,["modelValue"])]),l("div",Se,[Ve,e(v,{modelValue:n(t).breadcrumb,"onUpdate:modelValue":a[6]||(a[6]=r=>n(t).breadcrumb=r)},null,8,["modelValue"])]),l("div",$e,[De,e(C,{modelValue:n(t).navTabsIsBackground,"onUpdate:modelValue":a[7]||(a[7]=r=>n(t).navTabsIsBackground=r)},{default:o(()=>[e(x,{label:!0},{default:o(()=>[y("背景")]),_:1}),e(x,{label:!1},{default:o(()=>[y("简约")]),_:1})]),_:1},8,["modelValue"])]),l("div",Be,[ze,e(C,{modelValue:n(t).language,"onUpdate:modelValue":a[8]||(a[8]=r=>n(t).language=r)},{default:o(()=>[e(x,{label:"en"},{default:o(()=>[y("英文")]),_:1}),e(x,{label:"zhCn"},{default:o(()=>[y("中文")]),_:1})]),_:1},8,["modelValue"])]),l("div",Fe,[Te,e(C,{modelValue:n(t).componentSize,"onUpdate:modelValue":a[9]||(a[9]=r=>n(t).componentSize=r)},{default:o(()=>[e(x,{label:"large"},{default:o(()=>[y("大")]),_:1}),e(x,{label:"default"},{default:o(()=>[y("中")]),_:1}),e(x,{label:"small"},{default:o(()=>[y("小")]),_:1})]),_:1},8,["modelValue"])])]),l("div",je,[e(p,null,{default:o(()=>[y("全局主题")]),_:1}),l("div",null,[l("div",Re,[Me,e(A,{modelValue:n(t).primaryColor,"onUpdate:modelValue":a[10]||(a[10]=r=>n(t).primaryColor=r),"color-format":"hex",predefine:_},null,8,["modelValue"])]),l("div",Ue,[Ne,e(v,{modelValue:n(t).isDark,"onUpdate:modelValue":a[11]||(a[11]=r=>n(t).isDark=r),"inline-prompt":"","active-icon":"Sunny","inactive-icon":"Moon"},null,8,["modelValue"])]),l("div",He,[Le,e(v,{modelValue:n(t).isGray,"onUpdate:modelValue":a[12]||(a[12]=r=>n(t).isGray=r)},null,8,["modelValue"])])])])]),_:1},8,["modelValue"])}}},Ge=B(Pe,[["__scopeId","data-v-400a3910"]]),Oe={__name:"IconCollapse",setup(h){const t=E();return(_,i)=>{const a=s("Expand"),p=s("Fold"),d=s("ElIcon");return c(),u(d,{size:20,class:"cursor-pointer",title:n(t).menuCollapse?"打开菜单":"收起菜单",onClick:i[0]||(i[0]=m=>n(t).menuCollapse=!n(t).menuCollapse)},{default:o(()=>[n(t).menuCollapse?(c(),u(a,{key:0})):(c(),u(p,{key:1}))]),_:1},8,["title"])}}},Ke={class:"flex items-center space-x-1"},We={__name:"AppBreadcrumb",setup(h){const t=L(),_=Z(()=>t.matched.filter(i=>i.meta&&i.meta.title).map(i=>({path:i.path,title:i.meta.title,icon:i.meta.icon,to:i.redirect})));return(i,a)=>{const p=s("ElIcon"),d=s("ElBreadcrumbItem"),m=s("ElBreadcrumb");return c(),u(m,{"separator-icon":"ArrowRight"},{default:o(()=>[e(ee,{name:"breadcrumb"},{default:o(()=>[(c(!0),I(z,null,H(n(_),f=>(c(),u(d,{key:f.path,to:f.to},{default:o(()=>[l("div",Ke,[f.icon?(c(),u(p,{key:0},{default:o(()=>[(c(),u(T(f.icon)))]),_:2},1024)):k("",!0),l("span",null,$(f.title),1)])]),_:2},1032,["to"]))),128))]),_:1})]),_:1})}}},qe=B(We,[["__scopeId","data-v-53265e40"]]),Je={class:"h-full flex items-center space-x-4"},G={__name:"IconBarLeft",setup(h){const t=E();return(_,i)=>(c(),I("div",Je,[e(Oe),n(t).breadcrumb?(c(),u(qe,{key:0})):k("",!0)]))}},Qe={},Xe={class:"flex justify-between px-3 pb-2"},Ye=l("span",{class:"font-bold"},"提醒",-1),Ze=l("span",{class:"text-p cursor-pointer hover:text-gray-500"},"全部已读",-1),et={class:"h-52 border-t"},tt=l("div",{class:"flex-1 px-3 text-xs"},"你还有一段工作未处理...",-1),ot=l("p",{class:"w-10 text-xs text-right text-gray-400"},"一周前",-1),nt=l("div",{class:"text-center text-p cursor-pointer border-t pt-2 hover:text-gray-500"}," 查看所有通知 ",-1);function lt(h,t){const _=s("Bell"),i=s("ElIcon"),a=s("ElBadge"),p=s("ElAvatar"),d=s("ElScrollbar"),m=s("ElPopover");return c(),u(m,{placement:"bottom",width:280,trigger:"hover"},{reference:o(()=>[e(a,{"is-dot":"",class:"mt-1.5"},{default:o(()=>[e(i,{size:20,title:"提醒"},{default:o(()=>[e(_)]),_:1})]),_:1})]),default:o(()=>[l("div",Xe,[e(a,{value:5},{default:o(()=>[Ye]),_:1}),Ze]),l("div",et,[e(d,null,{default:o(()=>[(c(),I(z,null,H(5,f=>l("div",{key:f,class:"py-2 px-2 flex items-center cursor-pointer"},[e(p,{size:30,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),tt,ot])),64))]),_:1})]),nt]),_:1})}const st=B(Qe,[["render",lt]]),at={__name:"IconFullScreen",setup(h){const{isFullscreen:t,toggle:_}=ie();return(i,a)=>{const p=s("FullScreen"),d=s("ElIcon");return c(),u(d,{size:18,onClick:n(_),title:n(t)?"退出全屏":"开启全屏"},{default:o(()=>[e(p)]),_:1},8,["onClick","title"])}}},rt={class:"flex items-center space-x-2",title:"用户"},ct={__name:"IconUser",setup(h){const t=V(),_=P();function i(){t.logoutApp().then(()=>{_.push({path:"/login"})})}return(a,p)=>{const d=s("ElAvatar"),m=s("Avatar"),f=s("ElIcon"),v=s("ArrowDown"),x=s("ElDropdownItem"),C=s("ElDropdownMenu"),A=s("ElDropdown");return c(),u(A,null,{dropdown:o(()=>[e(C,null,{default:o(()=>[e(x,{icon:"Postcard"},{default:o(()=>[y("个人资料")]),_:1}),e(x,{icon:"SetUp"},{default:o(()=>[y("系统设置")]),_:1}),e(x,{divided:"",icon:"SwitchButton",onClick:i},{default:o(()=>[y("退出登录")]),_:1})]),_:1})]),default:o(()=>[l("div",rt,[n(t).userInfo.portrait?(c(),u(d,{key:0,size:30,src:n(t).userInfo.portrait},null,8,["src"])):(c(),u(f,{key:1,size:20},{default:o(()=>[e(m)]),_:1})),l("span",null,$(n(t).userInfo.name),1),e(f,null,{default:o(()=>[e(v)]),_:1})])]),_:1})}}},it={__name:"IconOperation",setup(h){const t=E();return(_,i)=>{const a=s("Operation"),p=s("ElIcon");return c(),u(p,{size:20,title:"控制面板",onClick:i[0]||(i[0]=d=>n(t).themeDrawer=!n(t).themeDrawer)},{default:o(()=>[e(a)]),_:1})}}},dt={class:"h-full flex items-center cursor-pointer space-x-4"},j={__name:"IconBarRight",setup(h){return(t,_)=>(c(),I("div",dt,[e(it),e(at),e(st),e(ct)]))}},ut=l("span",null,"放大页面",-1),_t={class:"text-xs text-gray-500"},pt={class:"fixed top-2.5 right-2.5 text-gray-700 cursor-pointer z-20"},R={__name:"AppMain",setup(h){const t=L(),_=P(),i={path:F.path,title:F.meta.title,icon:F.meta.icon,fixed:!0},a=E(),p=V(),d=te(!1),m=de("AgelNavTabs",[i],sessionStorage),f=A(Q),v=oe({});U(()=>t.path,()=>{m.value.findIndex(r=>r.path===t.path)==-1&&m.value.push({path:t.path,icon:t.meta.icon,title:t.meta.title,fixed:!1})},{immediate:!0}),U(()=>p.token,w=>{w==""&&(m.value=[i])});function x(w){_.push({path:w})}function C({path:w}){v[w]=new Date().getTime()}function A(w,r=[]){return w.forEach(g=>{const D=g.name;g.children&&g.children.length>0?A(g.children,r):g.meta&&g.meta.keepAlive&&r.indexOf(D)===-1&&r.push(D)}),r}return(w,r)=>{const g=s("AgelIcon"),D=s("AgelNavTabs"),O=s("RouterView"),K=s("ElMain"),W=s("ElFooter"),q=s("CircleCloseFilled"),J=s("ElIcon");return c(),I(z,null,[n(a).navTabs?(c(),u(D,{key:0,tabs:n(m),"onUpdate:tabs":r[1]||(r[1]=S=>ne(m)?m.value=S:null),"route-path":n(t).path,"home-path":"/home","is-background":n(a).navTabsIsBackground,more:"",reload:"",fixed:"",onReload:C,onPathChange:x},{menu:o(()=>[l("div",{onClick:r[0]||(r[0]=S=>d.value=!0)},[e(g,{icon:"FullScreen"}),ut])]),_:1},8,["tabs","route-path","is-background"])):k("",!0),e(K,{class:"flex flex-col flex-1 p-2 bg-gray-200 dark:bg-[var(--el-bg-color-page)] overflow-hidden"},{default:o(()=>[l("div",{class:le(["flex flex-col flex-1 bg-white dark:bg-[var(--el-bg-color)] overflow-hidden",{"full-screen-view":d.value}])},[e(O,null,{default:o(({Component:S,route:M})=>[e(N,{appear:"",name:"el-fade-in-linear",mode:"out-in"},{default:o(()=>[(c(),u(se,{include:n(f)},[(c(),u(T(S),{key:v[M.path]||M.path,class:"h-full relative p-[10px]"}))],1032,["include"]))]),_:2},1024)]),_:1})],2)]),_:1}),n(a).footer?(c(),u(W,{key:1,height:"25px",class:"border-t flex items-center justify-end"},{default:o(()=>[l("span",_t," ag-admin copyright©"+$(new Date().getFullYear()),1)]),_:1})):k("",!0),e(N,{name:"el-zoom-in-top"},{default:o(()=>[ae(l("div",pt,[e(J,{size:30,onClick:r[2]||(r[2]=S=>d.value=!1)},{default:o(()=>[e(q)]),_:1})],512),[[re,d.value]])]),_:1})],64)}}},mt={class:"border-b font-bold text-p whitespace-nowrap text-center h-[40px] leading-[40px]"},ft={__name:"ClassicsLayout",setup(h){const t=E(),_=V();return(i,a)=>{const p=s("ElHeader"),d=s("AgelMenu"),m=s("ElScrollbar"),f=s("ElAside"),v=s("ElContainer");return c(),u(v,{class:"h-full overflow-hidden"},{default:o(()=>[e(p,{height:"45px",class:"flex items-center justify-between border-b"},{default:o(()=>[e(G),e(j)]),_:1}),e(v,{class:"overflow-hidden"},{default:o(()=>[e(f,{width:n(t).slideMenuWidth,class:"overflow-hidden border-r"},{default:o(()=>[e(m,null,{default:o(()=>[l("div",mt,$(n(t).menuCollapse?"Ag":"Ag Admin"),1),e(d,{menus:n(_).menuData,router:"",collapse:n(t).menuCollapse,"collapse-transition":!1,class:"border-r-0"},null,8,["menus","collapse"])]),_:1})]),_:1},8,["width"]),e(v,{direction:"vertical"},{default:o(()=>[e(R)]),_:1})]),_:1})]),_:1})}}},ht=l("div",{class:"border py-1 px-2 bg-p text-white rounded-lg whitespace-nowrap"},"Ag Admin",-1),vt={__name:"HorizontalLayout",setup(h){const t=V();return(_,i)=>{const a=s("AgelMenu"),p=s("ElHeader"),d=s("ElContainer");return c(),u(d,{class:"h-full overflow-hidden"},{default:o(()=>[e(p,{height:"45px",class:"border-b flex items-center justify-between"},{default:o(()=>[ht,e(a,{menus:n(t).menuData,router:"",mode:"horizontal",class:"border-b-0 h-[45px] flex-1 overflow-hidden"},null,8,["menus"]),e(j)]),_:1}),e(d,{class:"overflow-hidden flex-col"},{default:o(()=>[e(R)]),_:1})]),_:1})}}},bt={class:"border-b font-bold text-p whitespace-nowrap text-center h-[45px] leading-[45px]"},xt={__name:"VerticalLayout",setup(h){const t=E(),_=V();return(i,a)=>{const p=s("AgelMenu"),d=s("ElScrollbar"),m=s("ElAside"),f=s("ElHeader"),v=s("ElContainer");return c(),u(v,{class:"h-full overflow-hidden"},{default:o(()=>[e(m,{width:n(t).slideMenuWidth,class:"overflow-hidden border-r"},{default:o(()=>[e(d,null,{default:o(()=>[l("div",bt,$(n(t).menuCollapse?"Ag":"Ag Admin"),1),e(p,{menus:n(_).menuData,router:"",collapse:n(t).menuCollapse,"collapse-transition":!1,class:"border-r-0"},null,8,["menus","collapse"])]),_:1})]),_:1},8,["width"]),e(v,{class:"overflow-hidden"},{default:o(()=>[e(f,{height:"45px",class:"border-b flex items-center justify-between"},{default:o(()=>[e(G),e(j)]),_:1}),e(R)]),_:1})]),_:1})}}},yt=ce({__name:"DynamicLayout",setup(h){const t={classics:ft,horizontal:vt,vertical:xt},_=E();return(i,a)=>(c(),I(z,null,[(c(),u(T(t[n(_).layout]))),e(Ge)],64))}}),Lt=B(yt,[["__scopeId","data-v-cc5017b1"]]);export{Lt as default};