(function(e){function t(t){for(var l,a,i=t[0],c=t[1],d=t[2],u=0,h=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);s&&s(t);while(h.length)h.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(l=!1)}l&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},o={app:0},r=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0000":function(e,t,n){"use strict";n("14fd")},"14fd":function(e,t,n){},"158e":function(e,t,n){"use strict";n("f15a")},"24e5":function(e,t,n){"use strict";n("4b6c")},"4b6c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),o=Object(l["h"])('<a target="_blank" href="https://github.com/justcaliturner/simple-code-editor"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:var(--main_4);color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),r=Object(l["h"])('<div class="sun"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></div><div class="moon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></div>',2),a=[r],i=Object(l["g"])("div",{class:"footer"},[Object(l["i"])(" The color system powered by "),Object(l["g"])("a",{target:"_blank",href:"https://lisa.vicuxd.com/"},"Lisa color")],-1);function c(e,t,n,r,c,d){var s=Object(l["r"])("Home");return Object(l["m"])(),Object(l["f"])("div",null,[o,Object(l["g"])("div",{onClick:t[0]||(t[0]=function(){return d.switchTheme&&d.switchTheme.apply(d,arguments)}),class:"float_button"},a),Object(l["j"])(s),i])}var d={class:"demo"},s=Object(l["g"])("h1",{class:"title"},"Simple CodeEditor for Vue.js",-1),u={class:"container"},h=Object(l["g"])("div",{class:"subtitle"},[Object(l["g"])("p",null,[Object(l["i"])(" It's easy to use, both support "),Object(l["g"])("mark",null,"read-only"),Object(l["i"])(" and "),Object(l["g"])("mark",null,"edit mode"),Object(l["i"])(", you can directly use it in the browser or import the JavaScript modules via the NPM package ")])],-1),g={class:"button_group"},b=Object(l["g"])("button",null,[Object(l["g"])("a",{target:"_blank",href:"https://highlightjs.org/static/demo/"},"More themes")],-1),p={class:"useage"},j={class:"container"},O=Object(l["g"])("h2",null,"Useage",-1),f=Object(l["g"])("h3",null,"In the Browser",-1),m=Object(l["g"])("p",null,"Step 1. Add the CSS file.",-1),y=Object(l["g"])("p",null,[Object(l["i"])(" Step 2. Add the JavaScript files after the "),Object(l["g"])("code",null,"vue.js"),Object(l["i"])(" file. ")],-1),v=Object(l["g"])("p",null,[Object(l["i"])(" Step 3. Declaring the component, and using the customized tag into the HTML template. For all configure items please check the "),Object(l["g"])("a",{href:"#api"},"API"),Object(l["i"])(" list. ")],-1),w=Object(l["g"])("h3",{style:{"margin-top":"60px"}},"Install with NPM",-1),_=Object(l["g"])("p",null,"Step 1",-1),x=Object(l["g"])("p",null,"Step 2. Importing the component and registration.",-1),C=Object(l["g"])("h3",{style:{"margin-top":"60px"}},"Customizing the theme style",-1),k=Object(l["g"])("p",null,"You can cover the CSS file to customize the theme style.",-1),S=Object(l["g"])("a",{href:"https://github.com/justcaliturner/simple-code-editor",target:"_blank",class:"link"},[Object(l["g"])("span",null,"View on Github"),Object(l["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[Object(l["g"])("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),Object(l["g"])("polyline",{points:"12 5 19 12 12 19"})])],-1),E={class:"api",id:"api"},T={class:"container"},D=Object(l["g"])("h2",null,"API",-1),L=Object(l["g"])("h3",{id:"read_only"},[Object(l["i"])("read_only"),Object(l["g"])("label",null," - Boolean")],-1),M=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),H=Object(l["g"])("p",null,"Description: whether the code is editable",-1),V=Object(l["g"])("p",null,"UI Rendering:",-1),B=Object(l["g"])("h3",null,[Object(l["i"])("value"),Object(l["g"])("label",null," - String")],-1),I=Object(l["g"])("p",null,"Default: unset",-1),R=Object(l["g"])("p",null,[Object(l["i"])(" Description: setting the contents of a code editor. If you want to bind the data, please use the property "),Object(l["g"])("a",{href:"#v-model"},[Object(l["g"])("code",null,"v-model")])],-1),z=Object(l["g"])("p",null,"UI Rendering:",-1),P=Object(l["g"])("h3",{id:"v-model"},"v-model",-1),U=Object(l["g"])("p",null,[Object(l["i"])(" Description: varies based on the value of form inputs element or output of components, the specific usage you can read the "),Object(l["g"])("a",{target:"_blank",href:"https://v3.vuejs.org/api/directives.html#v-model"},"Vue.js Documentation")],-1),A=Object(l["g"])("p",null,"UI Rendering:",-1),J=Object(l["g"])("h3",{id:"language_selector"},[Object(l["i"])(" language_selector"),Object(l["g"])("label",null," - Boolean")],-1),W=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),q=Object(l["g"])("p",null,[Object(l["i"])(" Description: whether the language selector is availed, if the value is "),Object(l["g"])("code",null,"true"),Object(l["i"])(", you can use the property "),Object(l["g"])("a",{href:"#languages"},[Object(l["g"])("code",null,"languages")]),Object(l["i"])(" to set which languages can be selected ")],-1),N=Object(l["g"])("p",null,"UI Rendering:",-1),$=Object(l["g"])("h3",{id:"languages"},[Object(l["i"])("languages"),Object(l["g"])("label",null," - Array")],-1),F=Object(l["g"])("p",null,[Object(l["i"])(" Default: "),Object(l["g"])("code",null,'[["javascript", "JS"],["cpp", "C++"],["python", "Python"]]')],-1),G=Object(l["g"])("p",null,[Object(l["i"])(" Description: This property is a two-dimensional array, the first item of each child is an index of the language and it's required, the second item of each child is used for display, which is for the better user reading experience, it can be free to customize and optional, if it's unset, the UI display will be replaced with the index of the language. When the value of "),Object(l["g"])("a",{href:"#language_selector"},[Object(l["g"])("code",null,"language_selector")]),Object(l["i"])(" is "),Object(l["g"])("code",null,"true"),Object(l["i"])(", you can set multiple languages to be selected ")],-1),K=Object(l["g"])("p",null,"All the languages:",-1),Y=Object(l["g"])("h3",null,[Object(l["i"])("wrap_code"),Object(l["g"])("label",null," - Boolean")],-1),Z=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),Q=Object(l["g"])("p",null,"Description: whether the code is allowed to wrap automatically",-1),X=Object(l["g"])("p",null,"UI Rendering:",-1),ee=Object(l["g"])("h3",null,[Object(l["i"])("hide_header"),Object(l["g"])("label",null," - Boolean")],-1),te=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),ne=Object(l["g"])("p",null,"Description: whether the header of code editor is hidden",-1),le=Object(l["g"])("p",null,"UI Rendering:",-1),oe=Object(l["g"])("h3",null,[Object(l["i"])("display_language"),Object(l["g"])("label",null," - Boolean")],-1),re=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"true")],-1),ae=Object(l["g"])("p",null,"Description: whether the language name is displayed",-1),ie=Object(l["g"])("p",null,"UI Rendering:",-1),ce=Object(l["g"])("h3",null,[Object(l["i"])("copy_code"),Object(l["g"])("label",null," - Boolean")],-1),de=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"true")],-1),se=Object(l["g"])("p",null,"Description: whether the code can be copied by the icon button",-1),ue=Object(l["g"])("p",null,"UI Rendering:",-1),he=Object(l["g"])("h3",null,[Object(l["i"])("theme"),Object(l["g"])("label",null," - String")],-1),ge=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"dark")],-1),be=Object(l["g"])("p",null,"Description: switching between light and dark themes",-1),pe=Object(l["g"])("h3",null,[Object(l["i"])("font_size"),Object(l["g"])("label",null," - String")],-1),je=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"17px")],-1),Oe=Object(l["g"])("p",null,"Description: setting the font size",-1),fe=Object(l["g"])("h3",null,[Object(l["i"])("width"),Object(l["g"])("label",null," - String")],-1),me=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"540px")],-1),ye=Object(l["g"])("p",null,"Description: setting the width of the code editor",-1),ve=Object(l["g"])("h3",null,[Object(l["i"])("height"),Object(l["g"])("label",null," - String")],-1),we=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"auto")],-1),_e=Object(l["g"])("p",null," Description: the height of the container is adaptive by default, you can also set it to a specific value, and the scroll bar will work with a long text ",-1),xe=Object(l["g"])("p",null,"UI Rendering:",-1),Ce=Object(l["g"])("h3",null,[Object(l["i"])("min_width"),Object(l["g"])("label",null," - String")],-1),ke=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Se=Object(l["g"])("p",null,"Description: setting the min-width of the code editor",-1),Ee=Object(l["g"])("h3",null,[Object(l["i"])("min_height"),Object(l["g"])("label",null," - String")],-1),Te=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),De=Object(l["g"])("p",null,"Description: setting the min-height of the code editor",-1),Le=Object(l["g"])("h3",null,[Object(l["i"])("max_width"),Object(l["g"])("label",null," - String")],-1),Me=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),He=Object(l["g"])("p",null,"Description: setting the max-width of the code editor",-1),Ve=Object(l["g"])("h3",null,[Object(l["i"])("max_height"),Object(l["g"])("label",null," - String")],-1),Be=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Ie=Object(l["g"])("p",null,"Description: setting the max-height of the code editor",-1),Re=Object(l["g"])("h3",null,[Object(l["i"])("border_radius"),Object(l["g"])("label",null," - String")],-1),ze=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"12px")],-1),Pe=Object(l["g"])("p",null,"Description: setting the radius of the code editor",-1),Ue=Object(l["g"])("p",null,"UI Rendering:",-1),Ae=Object(l["g"])("h3",null,[Object(l["i"])("selector_width"),Object(l["g"])("label",null," - String")],-1),Je=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"110px")],-1),We=Object(l["g"])("p",null,"Description: setting the width of the selector",-1),qe=Object(l["g"])("p",null,"UI Rendering:",-1),Ne=Object(l["g"])("h3",null,[Object(l["i"])("selector_height"),Object(l["g"])("label",null," - String")],-1),$e=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"auto")],-1),Fe=Object(l["g"])("p",null,"Description: setting the height of the selector",-1),Ge=Object(l["g"])("p",null,"UI Rendering:",-1),Ke=Object(l["g"])("h3",null,[Object(l["i"])("selector_displayed_by_default"),Object(l["g"])("label",null," - Boolean")],-1),Ye=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),Ze=Object(l["g"])("p",null,"Description: whether the selector is displayed by default",-1),Qe=Object(l["g"])("h3",null,[Object(l["i"])("z_index"),Object(l["g"])("label",null," - String")],-1),Xe=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),et=Object(l["g"])("p",null,"Description: setting the stack order of the code editor",-1),tt=Object(l["g"])("h3",null,[Object(l["i"])("autofocus"),Object(l["g"])("label",null," - Boolean")],-1),nt=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),lt=Object(l["g"])("p",null," Description: whether the code editor should automatically get focus when the page loads ",-1),ot=Object(l["g"])("a",{href:"https://github.com/justcaliturner/simple-code-editor",target:"_blank",class:"link"},[Object(l["g"])("span",null,"View on Github"),Object(l["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[Object(l["g"])("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),Object(l["g"])("polyline",{points:"12 5 19 12 12 19"})])],-1);function rt(e,t,n,o,r,a){var i=Object(l["r"])("CodeEditor");return Object(l["m"])(),Object(l["f"])("div",null,[Object(l["g"])("div",d,[s,Object(l["g"])("div",u,[h,Object(l["j"])(i,{value:'<CodeEditor v-model="value"></CodeEditor>',z_index:"3",width:"100%",languages:[["html","HTML"],["javascript","JavaScript"],["css","CSS"]],language_selector:!0}),Object(l["j"])(i,{class:Object(l["k"])(r.theme),theme:r.theme,value:"import CodeEditor from 'simple-code-editor';\r\nexport default {\r\n    components: {\r\n      CodeEditor\r\n    },\r\n    data() {\r\n        return {\r\n          value: ''\r\n        }\r\n    }\r\n}",width:"100%",height:"332px",language_selector:!0},null,8,["class","theme"]),Object(l["g"])("div",g,[Object(l["g"])("button",{class:Object(l["k"])({selected:"dark"==r.theme}),onClick:t[0]||(t[0]=function(e){return a.changeTheme("dark")})}," Atom one dark ",2),Object(l["g"])("button",{class:Object(l["k"])({selected:"github_dark"==r.theme}),onClick:t[1]||(t[1]=function(e){return a.changeTheme("github_dark")})}," Github dark ",2),Object(l["g"])("button",{class:Object(l["k"])({selected:"tomorrow_night_bright"==r.theme}),onClick:t[2]||(t[2]=function(e){return a.changeTheme("tomorrow_night_bright")})}," Tomorrow night bright ",2),b])])]),Object(l["g"])("div",p,[Object(l["g"])("div",j,[O,f,m,Object(l["j"])(i,{value:'<link rel="stylesheet" href="/path/code_editor.min.css">',languages:[["html","HTML"]],read_only:!0,width:"100%"}),y,Object(l["j"])(i,{value:'<script src="/path/highlight.min.js"><\/script>\r\n<script src="/path/code_editor.prod.js"><\/script>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),v,Object(l["j"])(i,{value:"const app = Vue.createApp({\r\n  components: {\r\n      'code-editor': CodeEditor\r\n  }\r\n})",languages:[["javascript","JS"]],read_only:!0,width:"100%"}),Object(l["j"])(i,{value:"<code-editor></code-editor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),w,_,Object(l["j"])(i,{value:"npm install simple-code-editor",languages:[["shell","NPM"]],read_only:!0,width:"100%"}),x,Object(l["j"])(i,{value:"import CodeEditor from 'simple-code-editor';\r\nexport default {\r\n    components: {\r\n      CodeEditor\r\n    }\r\n}",languages:[["javascript","JS"]],read_only:!0,width:"100%"}),Object(l["j"])(i,{value:"<CodeEditor></CodeEditor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),C,k,Object(l["j"])(i,{value:'\x3c!--1. Setting the theme to an empty value--\x3e\r\n\x3c!--2. Add your customized class to change the style--\x3e\r\n<CodeEditor theme="" class="github_dark"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,class:"github_dark",width:"100%"}),S])]),Object(l["g"])("div",E,[Object(l["g"])("div",T,[D,L,M,H,Object(l["j"])(i,{value:'<CodeEditor :read_only="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),V,Object(l["j"])(i,{read_only:!0,value:"// Read-only mode",width:"100%"}),B,I,R,Object(l["j"])(i,{value:'<CodeEditor value="console.log(13)"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),z,Object(l["j"])(i,{value:"console.log(13)",width:"100%"}),P,U,Object(l["j"])(i,{value:'<CodeEditor v-model="demo"></CodeEditor>\r\n<CodeEditor v-model="demo"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),A,Object(l["j"])(i,{modelValue:r.demo,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.demo=e}),width:"100%",hide_header:!0},null,8,["modelValue"]),Object(l["j"])(i,{modelValue:r.demo,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.demo=e}),width:"100%",hide_header:!0},null,8,["modelValue"]),J,W,q,Object(l["j"])(i,{value:'<CodeEditor :language_selector="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),N,Object(l["j"])(i,{value:"// You can select the language in the top left corner",language_selector:!0,width:"100%"}),$,F,G,Object(l["j"])(i,{value:"<CodeEditor :language_selector=\"true\" :languages=\"[['javascript', 'JS'],['python', 'Python']]\"></CodeEditor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),K,Object(l["j"])(i,{read_only:!0,height:"200px",value:'[\r\n    "1c",\r\n    "abnf",\r\n    "accesslog",\r\n    "actionscript",\r\n    "ada",\r\n    "angelscript",\r\n    "apache",\r\n    "applescript",\r\n    "arcade",\r\n    "arduino",\r\n    "armasm",\r\n    "xml",\r\n    "asciidoc",\r\n    "aspectj",\r\n    "autohotkey",\r\n    "autoit",\r\n    "avrasm",\r\n    "awk",\r\n    "axapta",\r\n    "bash",\r\n    "basic",\r\n    "bnf",\r\n    "brainfuck",\r\n    "c",\r\n    "cal",\r\n    "capnproto",\r\n    "ceylon",\r\n    "clean",\r\n    "clojure",\r\n    "clojure-repl",\r\n    "cmake",\r\n    "coffeescript",\r\n    "coq",\r\n    "cos",\r\n    "cpp",\r\n    "crmsh",\r\n    "crystal",\r\n    "csharp",\r\n    "csp",\r\n    "css",\r\n    "d",\r\n    "markdown",\r\n    "dart",\r\n    "delphi",\r\n    "diff",\r\n    "django",\r\n    "dns",\r\n    "dockerfile",\r\n    "dos",\r\n    "dsconfig",\r\n    "dts",\r\n    "dust",\r\n    "ebnf",\r\n    "elixir",\r\n    "elm",\r\n    "ruby",\r\n    "erb",\r\n    "erlang-repl",\r\n    "erlang",\r\n    "excel",\r\n    "fix",\r\n    "flix",\r\n    "fortran",\r\n    "fsharp",\r\n    "gams",\r\n    "gauss",\r\n    "gcode",\r\n    "gherkin",\r\n    "glsl",\r\n    "gml",\r\n    "go",\r\n    "golo",\r\n    "gradle",\r\n    "groovy",\r\n    "haml",\r\n    "handlebars",\r\n    "haskell",\r\n    "haxe",\r\n    "hsp",\r\n    "http",\r\n    "hy",\r\n    "inform7",\r\n    "ini",\r\n    "irpf90",\r\n    "isbl",\r\n    "java",\r\n    "javascript",\r\n    "jboss-cli",\r\n    "json",\r\n    "julia",\r\n    "julia-repl",\r\n    "kotlin",\r\n    "lasso",\r\n    "latex",\r\n    "ldif",\r\n    "leaf",\r\n    "less",\r\n    "lisp",\r\n    "livecodeserver",\r\n    "livescript",\r\n    "llvm",\r\n    "lsl",\r\n    "lua",\r\n    "makefile",\r\n    "mathematica",\r\n    "matlab",\r\n    "maxima",\r\n    "mel",\r\n    "mercury",\r\n    "mipsasm",\r\n    "mizar",\r\n    "perl",\r\n    "mojolicious",\r\n    "monkey",\r\n    "moonscript",\r\n    "n1ql",\r\n    "nestedtext",\r\n    "nginx",\r\n    "nim",\r\n    "nix",\r\n    "node-repl",\r\n    "nsis",\r\n    "objectivec",\r\n    "ocaml",\r\n    "openscad",\r\n    "oxygene",\r\n    "parser3",\r\n    "pf",\r\n    "pgsql",\r\n    "php",\r\n    "php-template",\r\n    "plaintext",\r\n    "pony",\r\n    "powershell",\r\n    "processing",\r\n    "profile",\r\n    "prolog",\r\n    "properties",\r\n    "protobuf",\r\n    "puppet",\r\n    "purebasic",\r\n    "python",\r\n    "python-repl",\r\n    "q",\r\n    "qml",\r\n    "r",\r\n    "reasonml",\r\n    "rib",\r\n    "roboconf",\r\n    "routeros",\r\n    "rsl",\r\n    "ruleslanguage",\r\n    "rust",\r\n    "sas",\r\n    "scala",\r\n    "scheme",\r\n    "scilab",\r\n    "scss",\r\n    "shell",\r\n    "smali",\r\n    "smalltalk",\r\n    "sml",\r\n    "sqf",\r\n    "sql",\r\n    "stan",\r\n    "stata",\r\n    "step21",\r\n    "stylus",\r\n    "subunit",\r\n    "swift",\r\n    "taggerscript",\r\n    "yaml",\r\n    "tap",\r\n    "tcl",\r\n    "thrift",\r\n    "tp",\r\n    "twig",\r\n    "typescript",\r\n    "vala",\r\n    "vbnet",\r\n    "vbscript",\r\n    "vbscript-html",\r\n    "verilog",\r\n    "vhdl",\r\n    "vim",\r\n    "wasm",\r\n    "wren",\r\n    "x86asm",\r\n    "xl",\r\n    "xquery",\r\n    "zephir"\r\n]',languages:[["javascript","JS"],["python","Python"]],language_selector:!0,width:"100%"}),Y,Z,Q,Object(l["j"])(i,{value:'<CodeEditor :wrap_code="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),X,Object(l["j"])(i,{languages:[["html","HTML"]],wrap_code:!0,value:' \x3c!-- The code can wrap automatically --\x3e\r\n<CodeEditor :language_selector="true" :hide_header="true"></CodeEditor>',width:"100%"}),ee,te,ne,Object(l["j"])(i,{value:'<CodeEditor :hide_header="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),le,Object(l["j"])(i,{value:"// The header is hidden",hide_header:!0,width:"100%"}),oe,re,ae,Object(l["j"])(i,{value:'<CodeEditor :display_language="false"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ie,Object(l["j"])(i,{value:"// The language name is hidden",display_language:!1,width:"100%"}),ce,de,se,Object(l["j"])(i,{value:'<CodeEditor :copy_code="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ue,Object(l["j"])(i,{value:"// The icon button is hidden",copy_code:!1,width:"100%"}),he,ge,be,Object(l["j"])(i,{value:'<CodeEditor theme="dark"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Object(l["j"])(i,{value:'<CodeEditor theme="light"></CodeEditor>',languages:[["html","HTML"]],theme:"light",read_only:!0,width:"100%"}),pe,je,Oe,Object(l["j"])(i,{value:'<CodeEditor font_size="17px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),fe,me,ye,Object(l["j"])(i,{value:'<CodeEditor width="540px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ve,we,_e,Object(l["j"])(i,{value:'<CodeEditor height="150px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),xe,Object(l["j"])(i,{value:"// The scroll bar will work with a long text",height:"150px",width:"100%"}),Ce,ke,Se,Object(l["j"])(i,{value:'<CodeEditor min_width="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ee,Te,De,Object(l["j"])(i,{value:'<CodeEditor min_height="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Le,Me,He,Object(l["j"])(i,{value:'<CodeEditor max_width="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ve,Be,Ie,Object(l["j"])(i,{value:'<CodeEditor max_height="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Re,ze,Pe,Object(l["j"])(i,{value:'<CodeEditor border_radius="4px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ue,Object(l["j"])(i,{hide_header:!1,value:"// The border radius is 4px",border_radius:"4px",width:"100%"}),Ae,Je,We,Object(l["j"])(i,{value:'<CodeEditor selector_width="150px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),qe,Object(l["j"])(i,{languages:[["javascript","JS"],["css","The width is 150px"]],language_selector:!0,selector_displayed_by_default:!0,value:"// Demo",selector_width:"150px",width:"100%"}),Ne,$e,Fe,Object(l["j"])(i,{value:'<CodeEditor selector_height="90px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ge,Object(l["j"])(i,{languages:[["javascript","JS"],["css","The height is 90px"],["rust","Rust"],["python","Python"],["cpp"," C++"]],language_selector:!0,selector_displayed_by_default:!0,value:"// Demo",selector_width:"160px",selector_height:"90px",width:"100%"}),Ke,Ye,Ze,Object(l["j"])(i,{value:'<CodeEditor :selector_displayed_by_default="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Qe,Xe,et,Object(l["j"])(i,{value:'<CodeEditor z_index="6"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),tt,nt,lt,Object(l["j"])(i,{value:'<CodeEditor :autofocus="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"})])]),ot])}Object(l["o"])("data-v-26e54fb2");var at={key:0,class:"header"},it=["onClick"],ct=["autofocus"],dt=["autofocus","value"],st=Object(l["i"])("        "),ut=Object(l["i"])("\r\n      ");function ht(e,t,n,o,r,a){var i=Object(l["r"])("Dropdown"),c=Object(l["r"])("CopyCode"),d=Object(l["s"])("highlight");return Object(l["m"])(),Object(l["f"])("div",{class:Object(l["k"])(["code_editor hljs",{hide_header:a.withoutHeader,scroll:a.canScroll,read_only:n.read_only,wrap_code:n.wrap_code,atom_one_dark:"dark"==n.theme,atom_one_light:"light"==n.theme}]),style:Object(l["l"])({width:n.width,height:n.height,borderRadius:n.border_radius,zIndex:n.z_index,maxWidth:n.max_width,minWidth:n.min_width,maxHeight:n.max_height,minHeight:n.min_height})},[1!=a.withoutHeader?(Object(l["m"])(),Object(l["f"])("div",at,[n.display_language?(Object(l["m"])(),Object(l["d"])(i,{key:0,color:"dark"==n.theme?"#aaa":"#999",width:n.selector_width,mark:r.mark,disabled:0==n.language_selector,default_display:n.selector_displayed_by_default},{default:Object(l["v"])((function(){return[Object(l["g"])("ul",{class:"lang_list",style:Object(l["l"])({height:n.selector_height})},[(Object(l["m"])(!0),Object(l["f"])(l["a"],null,Object(l["p"])(r.languageList,(function(e,t){return Object(l["m"])(),Object(l["f"])("li",{key:t,onClick:function(t){return a.changeLang(e)}},Object(l["t"])(void 0===e[1]?e[0]:e[1]),9,it)})),128))],4)]})),_:1},8,["color","width","mark","disabled","default_display"])):Object(l["e"])("",!0),n.copy_code?(Object(l["m"])(),Object(l["d"])(c,{key:1,width:"16px",height:"16px",color:"dark"==n.theme?"#aaa":"#999",content:r.content},null,8,["color","content"])):Object(l["e"])("",!0)])):Object(l["e"])("",!0),Object(l["g"])("div",{class:"code_area",style:Object(l["l"])({borderBottomLeftRadius:n.border_radius,borderBottomRightRadius:n.border_radius,borderTopLeftRadius:1==a.withoutHeader?n.border_radius:0,borderTopRightRadius:1==a.withoutHeader?n.border_radius:0})},[1!=n.read_only&&void 0===n.modelValue?Object(l["w"])((Object(l["m"])(),Object(l["f"])("textarea",{key:0,ref:"textarea",autofocus:n.autofocus,onInput:t[0]||(t[0]=function(){return a.calcContainerWidth&&a.calcContainerWidth.apply(a,arguments)}),onKeydown:t[1]||(t[1]=Object(l["x"])(Object(l["y"])((function(){return a.tab&&a.tab.apply(a,arguments)}),["prevent","stop"]),["tab"])),onScroll:t[2]||(t[2]=function(){return a.scroll&&a.scroll.apply(a,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.staticValue=e}),style:Object(l["l"])({fontSize:n.font_size})},null,44,ct)),[[l["u"],r.staticValue]]):Object(l["e"])("",!0),1!=n.read_only&&void 0!==n.modelValue?(Object(l["m"])(),Object(l["f"])("textarea",{key:1,ref:"textarea",autofocus:n.autofocus,onKeydown:t[4]||(t[4]=Object(l["x"])(Object(l["y"])((function(){return a.tab&&a.tab.apply(a,arguments)}),["prevent","stop"]),["tab"])),onScroll:t[5]||(t[5]=function(){return a.scroll&&a.scroll.apply(a,arguments)}),value:n.modelValue,onInput:t[6]||(t[6]=function(t){return e.$emit("update:modelValue",t.target.value),a.calcContainerWidth(t)}),style:Object(l["l"])({fontSize:n.font_size})},null,44,dt)):Object(l["e"])("",!0),Object(l["g"])("pre",{style:Object(l["l"])({width:0===r.containerWidth?"":r.containerWidth+"px"})},[st,Object(l["w"])(Object(l["g"])("code",{class:Object(l["k"])(r.languageClass),style:Object(l["l"])({top:r.top+"px",left:r.left+"px",fontSize:n.font_size,borderBottomLeftRadius:1==n.read_only?n.border_radius:0,borderBottomRightRadius:1==n.read_only?n.border_radius:0})},null,6),[[d,a.contentValue]]),ut],4)],4)],6)}Object(l["n"])();var gt=n("b85c"),bt=n("1487"),pt=n.n(bt);Object(l["o"])("data-v-657adc61");var jt={class:"mark"},Ot=["stroke"],ft=Object(l["g"])("polyline",{points:"6 9 12 15 18 9"},null,-1),mt=[ft];function yt(e,t,n,o,r,a){return Object(l["m"])(),Object(l["f"])("div",{class:Object(l["k"])(["dropdown",{disabled:n.disabled}]),onClick:t[0]||(t[0]=function(){return a.toggleDropdown&&a.toggleDropdown.apply(a,arguments)}),onFocusout:t[1]||(t[1]=function(){return a.hideDropdown&&a.hideDropdown.apply(a,arguments)}),tabindex:"0"},[Object(l["g"])("div",jt,[Object(l["g"])("div",{style:Object(l["l"])({color:n.color})},Object(l["t"])(n.mark),5),a.showArrow?(Object(l["m"])(),Object(l["f"])("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},mt,8,Ot)):Object(l["e"])("",!0)]),Object(l["j"])(l["b"],{name:"fade"},{default:Object(l["v"])((function(){return[r.show?(Object(l["m"])(),Object(l["f"])("div",{key:0,class:"panel",style:Object(l["l"])({width:n.width,height:n.height})},[Object(l["q"])(e.$slots,"default",{},void 0,!0)],4)):Object(l["e"])("",!0)]})),_:3})],34)}Object(l["n"])();var vt={name:"Dropdown",props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},mark:{type:String,default:""},disabled:{type:Boolean,default:!1},color:{type:String,default:"#aaa"},default_display:{type:Boolean,default:!1}},data:function(){return{show:this.default_display}},computed:{showArrow:function(){return 1!=this.disabled}},methods:{toggleDropdown:function(){0==this.disabled&&(1==this.show?this.show=!1:this.show=!0)},hideDropdown:function(){this.show=!1}}},wt=(n("a0c8"),n("d959")),_t=n.n(wt);const xt=_t()(vt,[["render",yt],["__scopeId","data-v-657adc61"]]);var Ct=xt;Object(l["o"])("data-v-25792806");var kt={class:"tooltip"},St=["value"],Et=["stroke"],Tt=Object(l["g"])("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),Dt=Object(l["g"])("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),Lt=[Tt,Dt];function Mt(e,t,n,o,r,a){return Object(l["m"])(),Object(l["f"])("div",{class:"copy_code",onClick:t[0]||(t[0]=function(){return a.copy&&a.copy.apply(a,arguments)}),onFocusout:t[1]||(t[1]=function(){return a.resetMessage&&a.resetMessage.apply(a,arguments)}),tabindex:"0",style:Object(l["l"])({width:n.width,height:n.height})},[Object(l["g"])("div",kt,Object(l["t"])(r.message),1),Object(l["g"])("textarea",{ref:"textarea",value:n.content,tabindex:"1",readonly:""},null,8,St),(Object(l["m"])(),Object(l["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-copy"},Lt,8,Et))],36)}Object(l["n"])();var Ht={name:"CopyCode",props:{content:{type:String},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"#aaa"}},data:function(){return{message:"Copy code"}},methods:{selectContent:function(){var e,t,n=this.$refs.textarea;/Chrome/.test(navigator.userAgent)?n.select():(e=document.createRange(),e.selectNodeContents(n),t=window.getSelection(),t.removeAllRanges(),t.addRange(e),n.setSelectionRange(0,n.value.length)),1==document.execCommand("copy")?document.execCommand("copy"):navigator.clipboard.writeText(n.value)},copy:function(e){this.selectContent(),e.target.focus(),this.message="Copied!"},resetMessage:function(){this.message="Copy code"}}};n("9966");const Vt=_t()(Ht,[["render",Mt],["__scopeId","data-v-25792806"]]);var Bt=Vt,It={components:{Dropdown:Ct,CopyCode:Bt},name:"CodeEditor",props:{modelValue:{type:String},wrap_code:{type:Boolean,default:!1},read_only:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},hide_header:{type:Boolean,default:!1},value:{type:String,default:""},width:{type:String,default:"540px"},height:{type:String,default:"auto"},max_width:{type:String},min_width:{type:String},max_height:{type:String},min_height:{type:String},border_radius:{type:String,default:"12px"},language_selector:{type:Boolean,default:!1},languages:{type:Array,default:function(){return[["javascript","JS"],["cpp","C++"],["python","Python"]]}},selector_width:{type:String,default:"110px"},selector_height:{type:String,default:"auto"},selector_displayed_by_default:{type:Boolean,default:!1},display_language:{type:Boolean,default:!0},copy_code:{type:Boolean,default:!0},z_index:{type:String},font_size:{type:String,default:"17px"},theme:{type:String,default:"dark"}},directives:{highlight:{bind:function(e,t){e.textContent=t.value,pt.a.highlightElement(e)},componentUpdated:function(e,t){e.textContent=t.value,pt.a.highlightElement(e)},created:function(e,t){e.textContent=t.value,pt.a.highlightElement(e)},updated:function(e,t){e.textContent=t.value,pt.a.highlightElement(e)}}},data:function(){return{containerWidth:0,staticValue:this.value,top:0,left:0,languageClass:"hljs language-"+this.languages[0][0],mark:void 0===this.languages[0][1]?this.languages[0][0]:this.languages[0][1],languageList:this.languages,content:void 0===this.modelValue?this.staticValue:this.modelValue}},watch:{value:function(e){this.staticValue=e}},computed:{contentValue:function(){return this.read_only?this.value:void 0===this.modelValue?this.staticValue+"\n":this.modelValue+"\n"},canScroll:function(){return"auto"!=this.height},withoutHeader:function(){return 1==this.hide_header||0==this.display_language&&0==this.copy_code}},methods:{changeLang:function(e){this.mark=void 0===e[1]?e[0]:e[1],this.languageClass="language-"+e[0]},calcContainerWidth:function(e){this.containerWidth=e.target.clientWidth},tab:function(){document.execCommand("insertText",!1,"    ")},scroll:function(e){this.top=-e.target.scrollTop,this.left=-e.target.scrollLeft},resize:function(){var e=this,t=new ResizeObserver((function(t){var n,l=Object(gt["a"])(t);try{for(l.s();!(n=l.n()).done;){var o=n.value,r=o.contentRect;e.containerWidth=r.width+40}}catch(a){l.e(a)}finally{l.f()}}));this.$refs.textarea&&t.observe(this.$refs.textarea)}},mounted:function(){this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue})),this.resize()},updated:function(){this.$emit("input",this.staticValue),this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue}))}};n("24e5"),n("0000");const Rt=_t()(It,[["render",ht],["__scopeId","data-v-26e54fb2"]]);var zt=Rt,Pt={name:"Home",components:{CodeEditor:zt},data:function(){return{theme:"dark",demo:"// Please edit it"}},methods:{changeTheme:function(e){this.theme=e}}};n("158e");const Ut=_t()(Pt,[["render",rt]]);var At=Ut,Jt={components:{Home:At},mounted:function(){this.$nextTick((function(){localStorage.getItem("vic_theme")&&"light"==localStorage.getItem("vic_theme")?document.body.className="":document.body.className="mirror"}))},methods:{switchTheme:function(){""===document.body.className?(document.body.className="mirror",localStorage.setItem("vic_theme","mirror")):(document.body.className="",localStorage.setItem("vic_theme","light"))}}};n("ddff");const Wt=_t()(Jt,[["render",c]]);var qt=Wt;Object(l["c"])(qt).mount("#app")},"5c6a":function(e,t,n){},9966:function(e,t,n){"use strict";n("fddd")},a0c8:function(e,t,n){"use strict";n("ab20")},ab20:function(e,t,n){},ddff:function(e,t,n){"use strict";n("5c6a")},f15a:function(e,t,n){},fddd:function(e,t,n){}});
//# sourceMappingURL=app.21049e79.js.map