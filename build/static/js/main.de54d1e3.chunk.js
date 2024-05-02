(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{196:function(e,a,t){e.exports=t.p+"static/media/memoriesText.fcbcfa5a.png"},197:function(e,a,t){e.exports=t.p+"static/media/memoriesLogo.e342bbed.png"},218:function(e,a,t){e.exports=t(274)},242:function(e,a,t){e.exports=t.p+"static/media/memories.5c0c63fb.png"},273:function(e,a,t){},274:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),o=t.n(r),i=t(25),c=t(84),s=t(208);var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify({...null===a||void 0===a?void 0:a.data})),{...e,authData:a.data,loading:!1,errors:null};case"LOGOUT":return localStorage.clear(),{...e,authData:null,loading:!1,errors:null};default:return e}};const d=Object(c.b)({posts:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"START_LOADING":return{...e,isLoading:!0};case"END_LOADING":return{...e,isLoading:!1};case"FETCH_ALL":return{...e,posts:a.payload.data,currentPage:a.payload.currentPage,numberOfPages:a.payload.numberOfPages};case"FETCH_BY_SEARCH":case"FETCH_BY_CREATOR":return{...e,posts:a.payload.data};case"FETCH_POST":return{...e,post:a.payload.post};case"LIKE":return{...e,posts:e.posts.map(e=>e._id===a.payload._id?a.payload:e)};case"COMMENT":return{...e,posts:e.posts.map(e=>e._id==+a.payload._id?a.payload:e)};case"CREATE":return{...e,posts:[...e.posts,a.payload]};case"UPDATE":return{...e,posts:e.posts.map(e=>e._id===a.payload._id?a.payload:e)};case"DELETE":return{...e,posts:e.posts.filter(e=>e._id!==a.payload)};default:return e}},auth:m});var p=t(324),u=t(47),g=t(9),v=t(211),E=t(310),h=t(277),b=t(311),y=t(117),f=t.n(y),x=t(307),O=Object(x.a)(e=>({media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:{display:"flex",width:"100%",[e.breakpoints.down("sm")]:{flexWrap:"wrap",flexDirection:"column"}},section:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"self-start",borderRadius:"20px",margin:"10px",flex:1},imageSection:{marginLeft:"20px",maxWidth:"800px",[e.breakpoints.down("sm")]:{marginLeft:0}},recommendedPosts:{display:"flex",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:"12px"}},loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",marginRight:"30px"}})),C=t(195);const N=t.n(C).a.create({baseURL:"https://aman-memories-server.onrender.com"});N.interceptors.request.use(e=>(localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e));const S=e=>async a=>{try{a({type:"START_LOADING"});const{data:t}=await(e=>N.get("/posts/".concat(e)))(e);a({type:"FETCH_POST",payload:{post:t}})}catch(t){}},j=e=>async a=>{try{a({type:"START_LOADING"});const{data:{data:t,currentPage:n,numberOfPages:l}}=await(e=>N.get("/posts?page=".concat(e)))(e);a({type:"FETCH_ALL",payload:{data:t,currentPage:n,numberOfPages:l}}),a({type:"END_LOADING"})}catch(t){}},w=e=>async a=>{try{a({type:"START_LOADING"});const{data:{data:t}}=await(e=>N.get("/posts/creator?name=".concat(e)))(e);a({type:"FETCH_BY_CREATOR",payload:{data:t}}),a({type:"END_LOADING"})}catch(t){}},I=e=>async a=>{try{a({type:"START_LOADING"});const{data:{data:t}}=await(e=>N.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags)))(e);a({type:"FETCH_BY_SEARCH",payload:{data:t}}),a({type:"END_LOADING"})}catch(t){}},k=(e,a)=>async t=>{try{t({type:"START_LOADING"});const{data:l}=await(n=e,N.post("/posts",n));t({type:"CREATE",payload:l}),t({type:"END_LOADING"}),a("/posts/".concat(l._id))}catch(l){}var n},T=(e,a)=>async t=>{try{t({type:"START_LOADING"});const{data:n}=await((e,a)=>N.patch("/posts/".concat(e),a))(e,a);t({type:"UPDATE",payload:n}),t({type:"END_LOADING"})}catch(n){}},D=e=>async a=>{const t=JSON.parse(localStorage.getItem("profile"));try{const{data:n}=await(e=>N.patch("/posts/".concat(e,"/likePost")))(e,null===t||void 0===t||t.token);a({type:"LIKE",payload:n})}catch(n){}},_=(e,a)=>async t=>{try{const{data:n}=await((e,a)=>N.post("/posts/".concat(a,"/commentPost"),{value:e}))(e,a);return t({type:"COMMENT",payload:n}),n.comments}catch(n){}},A=e=>async a=>{try{await(await(e=>N.delete("/posts/".concat(e)))(e)),a({type:"DELETE",payload:e})}catch(t){}};var L=t(329),R=t(309);var P=e=>{let{post:a}=e;const t=JSON.parse(localStorage.getItem("profile")),[r,o]=Object(n.useState)(""),c=Object(i.b)(),[s,m]=Object(n.useState)(null===a||void 0===a?void 0:a.comments),d=O(),p=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement("div",{className:d.commentsOuterContainer},l.a.createElement("div",{className:d.commentsInnerContainer},l.a.createElement(h.a,{gutterBottom:!0,variant:"h5"},"Comments"),s.length?null===s||void 0===s?void 0:s.map((e,a)=>l.a.createElement(h.a,{key:a,gutterBottom:!0,variant:"subtitle1"},l.a.createElement("strong",null,e.split(": ")[0]),e.split(":")[1])):l.a.createElement("div",{style:{margin:"auto"}},"There are no comments at this moment"),l.a.createElement("div",{ref:p})),l.a.createElement("div",{style:{width:"70%"}},l.a.createElement(h.a,{gutterBottom:!0,variant:"h5"},"Write a comment"),l.a.createElement(L.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:r,onChange:e=>o(e.target.value)}),l.a.createElement("br",null),l.a.createElement(R.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!r.length,color:"primary",variant:"contained",onClick:async()=>{var e;const n=await c(_("".concat(null===t||void 0===t||null===(e=t.result)||void 0===e?void 0:e.name,": ").concat(r),a._id));o(""),m(n),p.current.scrollIntoView({behavior:"smooth"})}},"Comment"))))};var B=()=>{var e;const{post:a,posts:t,isLoading:r}=Object(i.c)(e=>e.posts),o=Object(i.b)(),c=Object(g.p)(),s=O(),{id:m}=Object(g.r)();if(Object(n.useEffect)(()=>{o(S(m))},[m]),Object(n.useEffect)(()=>{a&&o(j({search:"none",title:null===a||void 0===a?void 0:a.title}))},[a]),!a)return null;if(r)return l.a.createElement(v.a,{elevation:6,className:s.loadingPaper},l.a.createElement(E.a,{size:"7em"}));const d=t.filter(e=>{let{_id:t}=e;return t!==a._id});return l.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},l.a.createElement("div",{className:s.card},l.a.createElement("div",{className:s.section},l.a.createElement(h.a,{variant:"h3",component:"h2"},a.title),l.a.createElement(h.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},a.tags.map(e=>l.a.createElement(u.b,{to:"/tags/".concat(e),style:{textDecoration:"none",color:"#3f51b5"}}," #".concat(e," ")))),l.a.createElement(h.a,{align:"left",gutterBottom:!0,variant:"body1",component:"p"},a.message),l.a.createElement(h.a,{variant:"h6"},"Created by:",l.a.createElement(u.b,{to:"/creators/".concat(a.name),style:{textDecoration:"none",color:"#3f51b5"}}," ".concat(a.name))),l.a.createElement(h.a,{variant:"body1"},f()(a.createdAt).fromNow()),l.a.createElement(b.a,{style:{margin:"20px 0"}}),l.a.createElement("div",{style:{height:"fit-content",boxShadow:"0px 3px 10px rgb(0 0 0 / 6%)",borderRadius:"6px",padding:"12px",marginTop:"12px"}},l.a.createElement(P,{post:a})),l.a.createElement(b.a,{style:{margin:"20px 0"}})),l.a.createElement("div",{className:s.imageSection},l.a.createElement("img",{className:s.media,src:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:a.title}))),!!d.length&&l.a.createElement("div",{className:s.section},l.a.createElement(h.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),l.a.createElement(b.a,null),l.a.createElement("div",{className:s.recommendedPosts},null===d||void 0===d||null===(e=d.slice(0,4))||void 0===e?void 0:e.map(e=>{let{title:a,name:t,message:n,likes:r,selectedFile:o,_id:i}=e;return l.a.createElement("div",{style:{margin:"20px",cursor:"pointer",padding:"12px",boxShadow:"0px 3px 10px rgb(0 0 0 / 6%)"},onClick:()=>(e=>c("/posts/".concat(e)))(i),key:i},l.a.createElement(h.a,{gutterBottom:!0,variant:"h6"},a),l.a.createElement(h.a,{gutterBottom:!0,variant:"subtitle2"},t),l.a.createElement(h.a,{gutterBottom:!0,variant:"subtitle2"},n),l.a.createElement(h.a,{gutterBottom:!0,variant:"subtitle1"},"Likes: ",r.length),l.a.createElement("img",{src:o,width:"200px"}))}))))},F=t(313),W=t(314),G=t(332),H=t(124),z=t(328),M=t(327),U=t(318),J=(t(242),t(196)),Y=t.n(J),K=t(197),Q=t.n(K),$=t(312),q=Object(x.a)(e=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText($.a[500]),backgroundColor:$.a[500]}}));var V=()=>{const[e,a]=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(i.b)(),r=Object(g.n)(),o=Object(g.p)(),c=q(),s=()=>{t({type:"LOGOUT"}),o("/auth"),a(null)};return Object(n.useEffect)(()=>{const t=null===e||void 0===e?void 0:e.token;if(t){1e3*Object(H.a)(t).exp<(new Date).getTime()&&s()}a(JSON.parse(localStorage.getItem("profile")))},[r]),l.a.createElement(F.a,{className:c.appBar,position:"static",color:"inherit"},l.a.createElement("div",{className:c.brandContainer},l.a.createElement("div",{style:{cursor:"pointer"},onClick:()=>o("/"),className:c.brandContainer},l.a.createElement("img",{src:Y.a,alt:"icon",height:"45px"}),l.a.createElement("img",{className:c.image,src:Q.a,alt:"icon",height:"40px"}))),l.a.createElement(W.a,{className:c.toolbar},(null===e||void 0===e?void 0:e.result)?l.a.createElement("div",{className:c.profile},l.a.createElement(G.a,{className:c.purple,alt:null===e||void 0===e?void 0:e.result.name,src:null===e||void 0===e?void 0:e.result.imageUrl},null===e||void 0===e?void 0:e.result.name.charAt(0)),l.a.createElement(h.a,{className:c.userName,variant:"h6"},null===e||void 0===e?void 0:e.result.name),l.a.createElement(R.a,{variant:"contained",className:c.logout,color:"secondary",onClick:s},"Logout")):l.a.createElement(R.a,{variant:"contained",color:"primary",onClick:()=>{o("/auth")}},"Sign In")),l.a.createElement(z.a,{subscriberId:"66323277868b8f1418e12f53",applicationIdentifier:"hs2r04wGfG3g"},l.a.createElement(M.a,null,e=>{let{unseenCount:a}=e;return console.log("unseenCount",a),l.a.createElement(U.a,{unseenCount:a})})))},X=t(330),Z=t(323),ee=t(139),ae=t.n(ee),te=t(319),ne=t(213),le=t(320),re=t(321),oe=t(322),ie=t(201),ce=t.n(ie),se=t(203),me=t.n(se),de=t(202),pe=t.n(de),ue=t(159),ge=t.n(ue),ve=Object(x.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},imageWrapper:{position:"relative",display:"block",padding:0,borderRadius:0,"&:hover":{zIndex:1},"&:hover $imageBackdrop":{opacity:.15},"&:hover $imageMarked":{opacity:0},"&:hover $imageTitle":{border:"4px solid currentColor"}},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}});var Ee=e=>{var a,t,n,r;let{post:o,setCurrentId:c}=e;const s=Object(i.b)(),m=ve(),d=Object(g.p)(),p=JSON.parse(localStorage.getItem("profile")),u=()=>{var e;return(null===o||void 0===o||null===(e=o.likes)||void 0===e?void 0:e.length)>0?o.likes.find(e=>{var a,t;return e===((null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.googleId)||(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t._id))})?l.a.createElement(l.a.Fragment,null,l.a.createElement(ce.a,{fontSize:"small"}),"\xa0",o.likes.length>2?"You and ".concat(o.likes.length-1," others"):"".concat(o.likes.length," like").concat(o.likes.length>1?"s":"")):l.a.createElement(l.a.Fragment,null,l.a.createElement(ge.a,{fontSize:"small"}),"\xa0",o.likes.length," ",1===o.likes.length?"Like":"Likes"):l.a.createElement(l.a.Fragment,null,l.a.createElement(ge.a,{fontSize:"small"}),"\xa0Like")};return l.a.createElement(te.a,{className:m.card,raised:!0,elevation:6},l.a.createElement(ne.a,{key:o._id,className:m.imageWrapper,style:{width:o.selectedFile.width},onClick:()=>d("/posts/".concat(o._id))},l.a.createElement(le.a,{className:m.media,image:o.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:o.title}),l.a.createElement("div",{className:m.overlay},l.a.createElement(h.a,{variant:"h6"},o.name),l.a.createElement(h.a,{variant:"body2"},f()(o.createdAt).fromNow())),((null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t._id)===(null===o||void 0===o?void 0:o.creator))&&l.a.createElement("div",{className:m.overlay2},l.a.createElement(R.a,{className:"edit-button",onClick:e=>{e.stopPropagation(),c(o._id)},style:{color:"white"},size:"small"},l.a.createElement(pe.a,{fontSize:"default"}))),l.a.createElement("div",{className:m.details},l.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"h2"},o.tags.map(e=>"#".concat(e," ")))),l.a.createElement(h.a,{className:m.title,gutterBottom:!0,variant:"h5",component:"h2"},o.title),l.a.createElement(re.a,null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},o.message))),l.a.createElement(oe.a,{className:m.cardActions},l.a.createElement(R.a,{size:"small",color:"primary",disabled:!(null===p||void 0===p?void 0:p.result),onClick:()=>s(D(o._id))},l.a.createElement(u,null)),((null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(r=p.result)||void 0===r?void 0:r._id)===(null===o||void 0===o?void 0:o.creator))&&l.a.createElement(R.a,{size:"small",color:"secondary",onClick:()=>s(A(o._id))},l.a.createElement(me.a,{fontSize:"small"})," Delete")))},he=Object(x.a)(e=>({mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"},noDatastyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"31px",margin:"auto"}}));var be=e=>{let{setCurrentId:a}=e;const{posts:t,isLoading:n}=Object(i.c)(e=>e.posts),r=he();return t.length||n?n?l.a.createElement(E.a,null):l.a.createElement(Z.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3},t.map(e=>l.a.createElement(Z.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},l.a.createElement(Ee,{post:e,setCurrentId:a})))):"No posts"},ye=t(204),fe=t.n(ye),xe=Object(x.a)(e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}));var Oe=e=>{var a;let{currentId:t,setCurrentId:r}=e;const[o,c]=Object(n.useState)({title:"",message:"",tags:[],selectedFile:""}),s=Object(i.c)(e=>t?e.posts.posts.find(e=>e._id===t):null),m=Object(i.b)(),d=xe(),p=JSON.parse(localStorage.getItem("profile")),u=Object(g.p)(),E=()=>{r(0),c({title:"",message:"",tags:[],selectedFile:""})},{isLoading:b}=Object(i.c)(e=>e.posts);Object(n.useEffect)(()=>{(null===s||void 0===s?void 0:s.title)||E(),s&&c(s)},[s]);if(!(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name))return l.a.createElement(v.a,{className:d.paper,elevation:6},l.a.createElement(h.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."));return l.a.createElement(v.a,{className:d.paper,elevation:6},l.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:async e=>{var a,n;(e.preventDefault(),0===t)?(m(k({...o,name:null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name},u)),E()):m(T(t,{...o,name:null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.name}))}},l.a.createElement(h.a,{variant:"h6"},t?'Editing "'.concat(null===s||void 0===s?void 0:s.title,'"'):"Creating a Memory"),l.a.createElement(L.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:e=>c({...o,title:e.target.value})}),l.a.createElement(L.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:e=>c({...o,message:e.target.value})}),l.a.createElement("div",{style:{padding:"5px 0",width:"94%"}},l.a.createElement(ae.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onAdd:e=>{return a=e,void c({...o,tags:[...o.tags,a]});var a},onDelete:e=>{return a=e,void c({...o,tags:o.tags.filter(e=>e!==a)});var a}})),l.a.createElement("div",{className:d.fileInput},l.a.createElement(fe.a,{type:"file",multiple:!1,onDone:e=>{let{base64:a}=e;return c({...o,selectedFile:a})}})),l.a.createElement(R.a,{disa:!0,className:d.buttonSubmit,disabled:b,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),l.a.createElement(R.a,{variant:"contained",color:"secondary",size:"small",onClick:E,fullWidth:!0},"Clear")))},Ce=t(333),Ne=t(331),Se=Object(x.a)(()=>({ul:{justifyContent:"space-around"}}));var je=e=>{let{page:a}=e;const{numberOfPages:t}=Object(i.c)(e=>e.posts),r=Object(i.b)(),o=Se();return Object(n.useEffect)(()=>{a&&r(j(a))},[r,a]),l.a.createElement(Ce.a,{classes:{ul:o.ul},count:t,page:Number(a)||5,variant:"outlined",color:"primary",renderItem:e=>l.a.createElement(Ne.a,Object.assign({},e,{component:u.b,to:"/posts?page=".concat(e.page)}))})},we=Object(x.a)(e=>({appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:{[e.breakpoints.down("xs")]:{flexDirection:"column-reverse"}}}));var Ie=()=>{const e=we(),a=new URLSearchParams(Object(g.n)().search),t=a.get("page")||1,r=a.get("searchQuery"),[o,c]=Object(n.useState)(0),s=Object(i.b)(),[m,d]=Object(n.useState)(""),[u,E]=Object(n.useState)([]),h=Object(g.p)(),b=()=>{m||u?(s(I({search:m,tags:u.join(",")})),h("/posts/search?searchQuery=".concat(m||"none","&tags=").concat(u.join(",")))):h("/")};return l.a.createElement(X.a,{in:!0},l.a.createElement(p.a,{maxWidth:"xl"},l.a.createElement(Z.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},l.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:9},l.a.createElement(be,{setCurrentId:c})),l.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(F.a,{className:e.appBarSearch,position:"static",color:"inherit"},l.a.createElement(L.a,{onKeyDown:e=>{13===e.keyCode&&b()},name:"search",variant:"outlined",label:"Search Memories",fullWidth:!0,value:m,onChange:e=>d(e.target.value)}),l.a.createElement(ae.a,{style:{margin:"10px 0"},value:u,onAdd:e=>{return a=e,E([...u,a]);var a},onDelete:e=>{return a=e,E(u.filter(e=>e!==a));var a},label:"Search Tags",variant:"outlined"}),l.a.createElement(R.a,{onClick:b,className:e.searchButton,variant:"contained",color:"primary"},"Search")),l.a.createElement(Oe,{currentId:o,setCurrentId:c}),!r&&!u.length&&l.a.createElement(v.a,{className:e.pagination,elevation:6},l.a.createElement(je,{page:t}))))))},ke=t(207),Te=t.n(ke),De=Object(x.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}})),_e=t(325),Ae=t(326),Le=t(205),Re=t.n(Le),Pe=t(206),Be=t.n(Pe);var Fe=e=>{let{name:a,handleChange:t,label:n,half:r,autoFocus:o,type:i,handleShowPassword:c}=e;return l.a.createElement(Z.a,{item:!0,xs:12,sm:r?6:12},l.a.createElement(L.a,{name:a,onChange:t,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:i,InputProps:"password"===a?{endAdornment:l.a.createElement(_e.a,{position:"end"},l.a.createElement(Ae.a,{onClick:c},"password"===i?l.a.createElement(Re.a,null):l.a.createElement(Be.a,null)))}:null}))};t(187);const We=(e,a)=>async t=>{try{const{data:n}=await(e=>N.post("/user/signup",e))(e);t({type:"AUTH",data:n}),a("/")}catch(n){}},Ge=(e,a)=>async t=>{try{const{data:n}=await(e=>N.post("/user/signin",e))(e);t({type:"AUTH",data:n}),a("/")}catch(n){}};var He=()=>{const e=Object(i.b)(),a=De(),[t,r]=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),[o,c]=Object(n.useState)(!1),[s,m]=Object(n.useState)(!1),d=Object(g.p)(),u=e=>r({...t,[e.target.name]:e.target.value});return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{component:"main",maxWidth:"xs"},l.a.createElement(v.a,{className:a.paper,elevation:3},l.a.createElement(G.a,{className:a.avatar},l.a.createElement(Te.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),l.a.createElement("form",{className:a.form,onSubmit:a=>{a.preventDefault(),console.log("formData",t),e(s?We(t,d):Ge(t,d))}},l.a.createElement(Z.a,{container:!0,spacing:2},s&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Fe,{name:"firstName",label:"First Name",handleChange:u,autoFocus:!0,half:!0}),l.a.createElement(Fe,{name:"lastName",label:"Last Name",handleChange:u,half:!0})),l.a.createElement(Fe,{name:"email",label:"Email Address",handleChange:u,type:"email"}),l.a.createElement(Fe,{name:"password",label:"Password",handleChange:u,type:o?"text":"password",handleShowPassword:()=>c(!o)}),s&&l.a.createElement(Fe,{name:"confirmPassword",label:"Repeat Password",handleChange:u,type:"password"})),l.a.createElement(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},s?"Sign Up":"Sign In"),l.a.createElement(Z.a,{container:!0},l.a.createElement(Z.a,{item:!0},l.a.createElement(R.a,{onClick:()=>{m(e=>!e),c(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up")))))))};var ze=()=>{const{name:e}=Object(g.r)(),a=Object(i.b)(),{posts:t,isLoading:r}=Object(i.c)(e=>e.posts),o=Object(g.n)();return Object(n.useEffect)(()=>{o.pathname.startsWith("/tags")?a(I({tags:e})):a(w(e))},[]),t.length||r?l.a.createElement("div",null,l.a.createElement(h.a,{variant:"h2"},e),l.a.createElement(b.a,{style:{margin:"20px 0 50px 0"}}),r?l.a.createElement(E.a,null):l.a.createElement(Z.a,{container:!0,alignItems:"stretch",spacing:3},null===t||void 0===t?void 0:t.map(e=>l.a.createElement(Z.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},l.a.createElement(Ee,{post:e}))))):"No posts"};var Me=()=>{const e=JSON.parse(localStorage.getItem("profile"));return l.a.createElement(u.a,null,l.a.createElement(p.a,{maxWidth:"xl"},l.a.createElement(V,null),l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/",element:l.a.createElement(g.a,{to:"/posts"})}),l.a.createElement(g.b,{path:"/posts",element:l.a.createElement(Ie,null)}),l.a.createElement(g.b,{path:"/posts/search",element:l.a.createElement(Ie,null)}),l.a.createElement(g.b,{path:"/posts/:id",element:l.a.createElement(B,null)}),l.a.createElement(g.b,{path:"/creators/:name",element:l.a.createElement(ze,null)}),l.a.createElement(g.b,{path:"/auth",element:e?l.a.createElement(g.a,{to:"/posts"}):l.a.createElement(He,null)}))))};t(273);const Ue=Object(c.d)(d,Object(c.c)(Object(c.a)(s.a)));o.a.render(l.a.createElement(i.a,{store:Ue},l.a.createElement(Me,null)),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.de54d1e3.chunk.js.map