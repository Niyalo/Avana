"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{2184:function(e,s,l){l.r(s);var r=l(7437),a=l(2265),t=l(6691),i=l.n(t),c=l(1396),n=l.n(c);s.default=()=>{let[e,s]=(0,a.useState)(0);function l(e){s(s=>e)}return(0,r.jsxs)("div",{className:"flex flex-col bg-white50 shadow-lg w-[25%] h-max pt-6 rounded-sm overflow-hidden gap-10",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,r.jsx)(i(),{src:"/demo.png",width:80,height:80,layout:"fixed",className:"border-2 h-[80px] object-cover object-top overflow-hidden rounded-full border-secondary"}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)("h3",{className:"text-primary",children:"Half Guy"}),(0,r.jsx)("p",{children:"Admin"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n(),{href:"/admin/na",className:"block w-full text-base ".concat(1==e?"bg-primary text-white50":"hover:bg-white100 text-black150","  px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(1),children:"New Applications"}),(0,r.jsx)(n(),{href:"/admin/tac",className:"block w-full text-base ".concat(2==e?"bg-primary text-white50":"hover:bg-white100 text-black150"," px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(2),children:"Terms and Conditions"}),(0,r.jsx)(n(),{href:"/admin/pp",className:"block w-full text-base ".concat(3==e?"bg-primary text-white50":"hover:bg-white100 text-black150"," px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(3),children:"Programmers Profile"}),(0,r.jsx)(n(),{href:"/admin/cp",className:"block w-full text-base ".concat(4==e?"bg-primary text-white50":"hover:bg-white100 text-black150"," px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(4),children:"Create Project"}),(0,r.jsx)(n(),{href:"/admin/vp",className:"block w-full text-base ".concat(5==e?"bg-primary text-white50":"hover:bg-white100 text-black150"," px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(5),children:"View Project"}),(0,r.jsx)(n(),{href:"/admin/er",className:"block w-full text-base ".concat(6==e?"bg-primary text-white50":"hover:bg-white100 text-black150"," px-3 py-4 border-t border-b border-grey50 justify-start"),onClick:()=>l(6),children:"Enrollment Requests"})]})]})}},8489:function(e,s,l){l.r(s);var r=l(7437),a=l(2265),t=l(6691),i=l.n(t),c=l(8540),n=l(4299);s.default=()=>{let[e,s]=(0,a.useState)(!1),[l,t]=(0,a.useState)(!1),d=(0,a.useRef)(null),o=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=d.current,s=o.current;return e&&e.addEventListener("wheel",s=>{s.preventDefault(),e.scrollLeft+=s.deltaY}),s&&s.addEventListener("wheel",e=>{e.preventDefault(),s.scrollLeft+=e.deltaY}),()=>{e&&e.removeEventListener("wheel",s=>{s.preventDefault(),e.scrollLeft+=s.deltaY}),s&&s.removeEventListener("wheel",e=>{e.preventDefault(),s.scrollLeft+=e.deltaY})}},[]);let m=c.Z.programmers.map(e=>(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsx)("div",{className:"relative w-24 h-24",children:(0,r.jsx)(i(),{src:"/images/home/".concat(e.img),fill:!0,objectFit:"cover",className:"border-2 object-top overflow-hidden rounded-full border-secondary object-cover"})}),(0,r.jsx)("p",{children:e.name})]})),x=c.Z.architects.map(e=>(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsx)("div",{className:"relative w-24 h-24",children:(0,r.jsx)(i(),{src:"/images/home/".concat(e.img),fill:!0,objectFit:"cover",className:"border-2 object-top overflow-hidden rounded-full border-secondary object-cover"})}),(0,r.jsx)("p",{children:e.name})]}));return(0,r.jsxs)("div",{className:"h-screen w-screen",children:[(0,r.jsx)(n.aX,{isVisible:e,onClose:()=>s(!1)}),(0,r.jsx)(n.m3,{isVisible:l,onClose:()=>t(!1)}),(0,r.jsxs)("div",{className:"main h-screen relative py-2 flex flex-col justify-between gap-5",children:[(0,r.jsxs)("div",{className:"flex justify-between w-full gap-10",children:[(0,r.jsx)(i(),{src:"./avana_logo.svg",width:100,height:100,alt:"Avana Logo",className:"bg-white50 p-2 px-6 rounded-sm box-content"}),(0,r.jsxs)("div",{className:"flex justify-between bg-white50 rounded-sm grow py-4 px-4",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h3",{className:"text-primary",children:"Welcome to Avana"}),(0,r.jsx)("p",{children:"Register or Login to proceed."})]}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)("div",{onClick:()=>t(!0),children:(0,r.jsx)(n.zx,{type:"login"})}),(0,r.jsx)("div",{onClick:()=>s(!0),children:(0,r.jsx)(n.zx,{type:"register"})})]})]})]}),(0,r.jsxs)("div",{className:"main flex flex-col gap-4 px-6 py-4 bg-white50 rounded-sm",children:[(0,r.jsx)("h3",{className:"text-primary",children:"Architects"}),(0,r.jsx)("div",{ref:d,className:"flex gap-10 overflow-clip overflow-x-scroll scroll-smooth",children:x})]}),(0,r.jsxs)("div",{className:"main flex flex-col gap-4 px-6 py-4 bg-white50 rounded-sm",children:[(0,r.jsx)("h3",{className:"text-primary",children:"Programmers"}),(0,r.jsx)("div",{ref:o,className:"flex gap-10 overflow-clip overflow-x-scroll scroll-smooth",children:m})]}),(0,r.jsx)("p",{className:"relative text-center bottom-0",children:"Copyright @ Avana Game Studio LLC"})]})]})}},2914:function(e,s,l){l.r(s);var r=l(7437),a=l(3533),t=l(2265),i=l(1396),c=l.n(i);s.default=e=>{let{isVisible:s,onClose:l}=e,[i,n]=(0,t.useState)({emailAddress:"",password:""}),d=e=>{n(s=>({...i,[e.target.name]:e.target.value}))};return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{if("closer"===e.target.id)return l()},className:"bg-black100 bg-opacity-25 fixed w-screen h-screen z-10 flex items-center justify-center backdrop-blur-sm",children:(0,r.jsxs)("div",{className:"main flex flex-col mx-80 p-6 bg-white50 rounded-sm gap-8 shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-primary",children:" Login "}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(a.default,{className:"text-3xl rounded-sm hover:scale-105 border bg-red cursor-pointer text-white50"})})]}),(0,r.jsxs)("form",{className:"flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"emailAddress",className:"formLabel",children:"Email Address*"}),(0,r.jsx)("input",{type:"email",id:"emailAddress",name:"emailAddress",onChange:d,placeholder:"Enter your Email Address",className:"formInput",required:!0})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"password",className:"formLabel",children:"Password*"}),(0,r.jsx)("input",{type:"password",id:"password",name:"password",onChange:d,placeholder:"Enter your password",className:"formInput",required:!0})]}),(0,r.jsx)(c(),{href:"/admin/vp",className:"w-full",children:(0,r.jsx)("input",{type:"submit",value:"Login",className:"flex w-full h-max border text-white50 justify-center border-secondary gap-2 bg-primary py-2 px-4 rounded-full items-center cursor-pointer"})})]})]})}):null}},7961:function(e,s,l){l.r(s);var r=l(7437),a=l(3533),t=l(2265),i=l(1396),c=l.n(i);s.default=e=>{let{isVisible:s,onClose:l}=e,[i,n]=(0,t.useState)({firstName:"",lastName:"",homeAddress:"",emailAddress:"",phone:"",username:"",gender:""}),d=e=>{n(s=>({...i,[e.target.name]:e.target.value}))};return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{if("closer"===e.target.id)return l()},className:"bg-black100 bg-opacity-25 fixed w-screen h-screen z-10 flex items-center justify-center backdrop-blur-sm",children:(0,r.jsxs)("div",{className:"main flex flex-col mx-80 h-4/5 p-6 bg-white50 rounded-sm gap-8 shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-primary",children:" Register "}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(a.default,{className:"text-3xl rounded-sm hover:scale-105 border bg-red cursor-pointer text-white50"})})]}),(0,r.jsxs)("form",{className:"flex flex-col gap-8 pr-4 overflow-y-scroll",children:[(0,r.jsxs)("div",{className:"flex gap-6",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"firstName",className:"formLabel",children:"First Name*"}),(0,r.jsx)("input",{type:"text",id:"firstName",name:"firstName",onChange:d,placeholder:"Enter your First Name",className:"formInput",required:!0})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"lastName",className:"formLabel",children:"Last Name*"}),(0,r.jsx)("input",{type:"text",id:"lastName",name:"lasName",onChange:d,placeholder:"Enter your Last Name",className:"formInput",required:!0})]})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"homeAddress",className:"formLabel",children:"Home Address*"}),(0,r.jsx)("input",{type:"text",id:"homeAddress",name:"homeAddress",onChange:d,placeholder:"Enter your Home Address",className:"formInput",required:!0})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"emailAddress",className:"formLabel",children:"Personal Email Address*"}),(0,r.jsx)("input",{type:"email",id:"emailAddress",name:"emailAddress",onChange:d,placeholder:"Enter your Email Address",className:"formInput",required:!0})]}),(0,r.jsxs)("div",{className:"flex gap-6",children:[(0,r.jsxs)("div",{className:"flex w-full flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"phone",className:"formLabel",children:"Phone Numnber*"}),(0,r.jsx)("input",{type:"number",id:"phone",name:"phone",onChange:d,placeholder:"Enter your Phone Number",className:"formInput appearance-none",required:!0})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{htmlFor:"username",className:"formLabel",children:"Username*"}),(0,r.jsx)("input",{type:"text",id:"username",name:"username",onChange:d,placeholder:"Enter your Username",className:"formInput appearance-none",required:!0})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("label",{className:"formLabel mb-2",children:"Gender*"}),(0,r.jsxs)("div",{className:"flex w-full justify-between",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{id:"gender",type:"radio",name:"gender",value:"male",onChange:d,className:"m-0",required:!0})," Male"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{id:"gender",type:"radio",name:"gender",value:"female",onChange:d,className:"m-0",required:!0})," Female"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{id:"gender",type:"radio",name:"gender",value:"other",onChange:d,className:"m-0",required:!0})," Other"]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col w-full items-center justify-center gap-2",children:[(0,r.jsx)("input",{type:"file",file:!0,className:"appearance-none rounded-full border-2 border-secondary top-1/2 bg-white100 w-[150px] h-[150px] file:bg-white100 file:w-full file:h-full file:cursor-pointer  file:m-0 file:mt-1 file:text-black150 file:px-3 file:border-none"}),(0,r.jsx)("h4",{className:"text-primary text-center",children:"Profile Image"})]})]}),(0,r.jsx)(c(),{href:"/logged",children:(0,r.jsx)("input",{type:"submit",value:"Register",className:"w-full flex h-max border text-white50 justify-center border-secondary gap-2 bg-primary py-2 px-4 rounded-full items-center cursor-pointer"})})]})]})}):null}},8547:function(e,s,l){l.r(s);var r=l(7437),a=l(2265);s.default=e=>{let[s,l]=(0,a.useState)(1);return(0,r.jsxs)("div",{className:"w-[360px] h-[42px] justify-start items-start inline-flex",children:[(0,r.jsx)("div",{className:"text-base cursor-pointer w-[160px] text-black150 px-3 py-2 rounded-br-sm rounded-bl-sm shadow-md text-center ".concat(1==s?"text-white50 bg-primary shadow-none":"hover:bg-white100 bg-white50 border-b border-l border-r border-grey50"),onClick:()=>{l(e=>1)},children:e.label1}),(0,r.jsx)("div",{className:"text-base cursor-pointer w-[160px] text-black150 px-3 py-2 rounded-br-sm rounded-bl-sm shadow-md text-center ".concat(2==s?"text-white50 bg-primary shadow-none":"hover:bg-white100 bg-white50 border-b border-l border-r border-grey50"),onClick:()=>{l(e=>2)},children:e.label2}),(0,r.jsx)("div",{className:"text-base cursor-pointer w-[160px] text-black150 px-3 py-2 rounded-br-sm rounded-bl-sm shadow-md text-center ".concat(3==s?"text-white50 bg-primary shadow-none":"hover:bg-white100 bg-white50 border-b border-l border-r border-grey50"),onClick:()=>{l(e=>3)},children:e.label3})]})}},4299:function(e,s,l){l.d(s,{zx:function(){return j},Cw:function(){return H},h4:function(){return n},m3:function(){return y.default},Mh:function(){return A},wk:function(){return L},Gc:function(){return C},aX:function(){return N.default},ZA:function(){return w.default}}),l(8489);var r=l(7437);l(2265);var a=l(6691),t=l.n(a),i=l(1396),c=l.n(i),n=()=>(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(t(),{src:"/avana_logo.svg",width:100,height:100,alt:"Avana Logo"}),(0,r.jsxs)("div",{className:"flex gap-6 items-center",children:[(0,r.jsx)("p",{children:"Half Guy"}),(0,r.jsx)(c(),{href:"/",children:(0,r.jsx)(j,{type:"logout"})})]})]}),d=l(9396),o=l(5278),m=l(1203),x=l(740),h=l(4719),f=l(3391),p=l(6932),u=l(9104),b=l(402),g=l(9599),j=e=>{switch(e.type){case"logout":return(0,r.jsxs)("div",{className:"buttons border-secondary bg-white50",children:[(0,r.jsx)(u.default,{className:"text-lg text-primary"}),(0,r.jsx)("p",{className:"text-primary",children:"Logout"})]});case"register":return(0,r.jsxs)("div",{className:"buttons border-secondary gap-2 bg-white50",children:[(0,r.jsx)(o.default,{className:"text-lg text-primary"}),(0,r.jsx)("p",{className:"text-primary",children:"Register"})]});case"login":return(0,r.jsxs)("div",{className:"buttons px-8 border-secondary bg-primary",children:[(0,r.jsx)(p.default,{className:"text-lg text-white50"}),(0,r.jsx)("p",{className:"text-white50",children:"Login"})]});case"primary":return(0,r.jsxs)("div",{className:"buttons border-secondary bg-primary",children:[(0,r.jsx)("p",{className:"text-white50",children:e.label}),(0,r.jsx)(m.default,{className:"text-xl text-white50"})]});case"text":return(0,r.jsx)("div",{className:"cursor-pointer text-base text-primary underline",children:e.label});case"profile":return(0,r.jsxs)("div",{className:"buttons border-secondary gap-2 bg-primary",children:[(0,r.jsx)(g.default,{className:"text-lg text-white50"}),(0,r.jsx)("p",{className:"text-white50",children:"Profile"})]});case"mail":return(0,r.jsxs)("div",{id:"mail",className:"buttons border-secondary gap-2 bg-primary ".concat("none"===e.label?"py-4":""),children:[(0,r.jsx)(b.default,{className:"text-lg text-white50"}),"none"===e.label?"":(0,r.jsx)("p",{className:"text-white50",children:e.label})]});case"add":return(0,r.jsxs)("div",{className:"buttons border-secondary gap-2 bg-primary",children:[(0,r.jsx)(d.default,{className:"text-lg text-white50"}),(0,r.jsx)("p",{className:"text-white50",children:e.label})]});case"edit":return(0,r.jsxs)("div",{className:"buttons border-secondary bg-primary",children:[(0,r.jsx)(f.default,{className:"text-lg text-white50"}),(0,r.jsx)("p",{className:"text-white50",children:e.label})]});case"accept":return(0,r.jsxs)("div",{className:"buttons border-green gap-2 bg-green ".concat("none"===e.label?"py-4":""),children:[(0,r.jsx)(h.default,{className:"text-lg text-white50"}),"none"===e.label?"":(0,r.jsx)("p",{className:"text-white50",children:e.label})]});case"decline":return(0,r.jsxs)("div",{className:"buttons border-red gap-2 bg-red ".concat("none"===e.label?"py-4":""),children:[(0,r.jsx)(x.default,{className:"text-lg text-white50"}),"none"===e.label?"":(0,r.jsx)("p",{className:"text-white50",children:e.label})]})}},w=l(8547);l(2184);var N=l(7961),y=l(2914),v=l(3533),k=l(5132),C=e=>{let{isVisible:s,onClose:l}=e,a=k.Z.map(e=>(0,r.jsxs)("div",{className:"w-full px-8 py-4 border-t border-b border-zinc-400 justify-start items-center gap-6 inline-flex hover:shadow-sm hover:scale-[1.01] hover:bg-white100",children:[(0,r.jsx)("p",{className:"text-sm",children:e.id}),(0,r.jsxs)("div",{className:"grow shrink basis-0 justify-between items-center flex",children:[(0,r.jsxs)("div",{className:"flex-col justify-start items-start gap-1 inline-flex",children:[(0,r.jsx)("p",{children:e.name}),(0,r.jsx)("p",{className:"text-sm",children:e.desc})]}),(0,r.jsx)(j,{label:"Learn more",type:"text"})]})]}));return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{"closer"===e.target.id&&l()},className:"fixed flex w-screen h-screen inset-0 bg-black150 bg-opacity-20 backdrop-blur-sm justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col w-5/6 h-4/5 p-6 bg-white50 gap-8 rounded-sm shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex gap-40 items-center",children:[(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)(t(),{src:"/demo.png",width:60,height:60,layout:"fixed",className:"border-2 h-[60px] object-cover object-top overflow-hidden rounded-full border-secondary"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h3",{className:"text-primary",children:"Half Guy"}),(0,r.jsx)("p",{children:"Programmer"})]})]}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)(j,{label:"Upgrade to architect",type:"accept"}),(0,r.jsx)(j,{label:"Deactivate",type:"decline"})]})]}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(v.default,{className:"text-3xl hover:scale-105 border bg-red cursor-pointer rounded-sm text-white50"})})]}),(0,r.jsxs)("div",{className:"bg-white50 h-4/5 w-full rounded-sm relative",children:[(0,r.jsx)(w.default,{label1:"Current",label2:"Completed",label3:"Cancelled"}),(0,r.jsx)("div",{className:"flex flex-col mt-4 h-5/6 w-full overflow-y-scroll overflow-x-hidden",children:a})]})]})}):null},A=e=>{let{isVisible:s,onClose:l}=e;return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{"closer"===e.target.id&&l()},className:"fixed flex w-screen h-screen inset-0 bg-black150 bg-opacity-20 backdrop-blur-sm justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col w-5/6 h-4/5 p-6 bg-white50 gap-8 rounded-sm shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h4",{children:"Mail to Half Guy"}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(v.default,{className:"text-3xl hover:scale-105 border bg-red cursor-pointer rounded-sm text-white50"})})]}),(0,r.jsxs)("form",{className:"flex flex-col h-full",children:[(0,r.jsx)("input",{type:"text",placeholder:"Subject",className:"appearance-none bg-white50 border-t border-b border-grey50 focus:outline-none w-full p-3"}),(0,r.jsx)("textarea",{type:"text",placeholder:"Enter your mail here",className:"appearance-none bg-white50 h-5/6 border-b border-grey50 focus:outline-none w-full p-3"}),(0,r.jsx)("input",{type:"submit",value:"Send Mail",className:"w-full mt-6 flex h-max border text-white50 justify-center border-secondary gap-2 bg-primary py-2 px-4 rounded-full items-center cursor-pointer"})]})]})}):null},G=l(3550),H=e=>{let{isVisible:s,onClose:l}=e,a=G.Z.map(e=>(0,r.jsxs)("div",{className:"w-full p-3 bg-white0 border-grey50 border-b justify-start items-center gap-6 inline-flex hover:shadow-sm hover:bg-white50",children:[(0,r.jsx)("p",{className:"text-sm",children:e.id}),(0,r.jsxs)("div",{className:"grow shrink basis-0 justify-between items-center flex",children:[(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)(t(),{src:"/".concat(e.src),width:40,height:40,layout:"fixed",className:"border-2 h-[40px] object-cover object-top overflow-hidden rounded-full border-secondary"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:"text-primary",children:e.name}),(0,r.jsx)("p",{className:"text-sm",children:e.title})]})]}),(0,r.jsx)(j,{label:"Remove",type:"decline"})]})]})),i=G.Z.map(e=>(0,r.jsxs)("div",{className:"w-full p-3 border-b bg-white0 border-grey50 justify-start items-center gap-6 inline-flex hover:shadow-sm hover:bg-white50",children:[(0,r.jsx)("p",{className:"text-sm",children:e.id}),(0,r.jsxs)("div",{className:"grow shrink basis-0 justify-between items-center flex",children:[(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)(t(),{src:"/".concat(e.src),width:40,height:40,layout:"fixed",className:"border-2 h-[40px] object-cover object-top overflow-hidden rounded-full border-secondary"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:"text-primary",children:e.name}),(0,r.jsx)("p",{className:"text-sm",children:e.title})]})]}),(0,r.jsx)(j,{label:"Enroll",type:"accept"})]})]}));return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{"closer"===e.target.id&&l()},className:"fixed flex w-screen h-screen inset-0 bg-black150 bg-opacity-20 backdrop-blur-sm justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col w-5/6 h-4/5 p-6 bg-white50 gap-8 rounded-sm shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("h2",{children:"Project Name"}),(0,r.jsx)("p",{children:"Description of Project"})]}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(v.default,{className:"text-3xl hover:scale-105 border bg-red cursor-pointer rounded-sm text-white50"})})]}),(0,r.jsxs)("div",{className:"flex h-[400px] gap-6 w-full",children:[(0,r.jsxs)("div",{className:"bg-white0 shadow-lg p-4 h-full w-full rounded-sm relative",children:[(0,r.jsx)("h4",{className:"text-primary px-3 py-2",children:"Enrolled Programmers"}),(0,r.jsx)("div",{className:"flex flex-col pr-4 mt-4 h-5/6 w-full overflow-y-scroll overflow-x-hidden",children:a})]}),(0,r.jsxs)("div",{className:"bg-white0 shadow-lg p-4 h-full w-full rounded-sm",children:[(0,r.jsx)("h4",{className:"text-green px- py-2",children:"Available Programmers"}),(0,r.jsx)("div",{className:"flex flex-col pr-4 mt-4 h-5/6 w-full overflow-y-scroll overflow-x-hidden",children:i})]})]})]})}):null},P=[{id:1,firstName:"Half",lastName:"Guy",homeAddress:"Gongabu",emailAddress:"nothalfguy@gmail.com",phone:"9800000000",username:"halfguy",gender:"Male"}],L=e=>{let{isVisible:s,onClose:l}=e,a=P.map(e=>(0,r.jsxs)("div",{className:"flex gap-10 w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-6 w-full",children:[(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Name:"}),(0,r.jsxs)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:[e.firstName," ",e.lastName]})]}),(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Email Address:"}),(0,r.jsx)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:e.emailAddress})]}),(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Home Address:"}),(0,r.jsx)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:e.homeAddress})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-6 w-full",children:[(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Username:"}),(0,r.jsx)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:e.username})]}),(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Phone:"}),(0,r.jsx)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:e.phone})]}),(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsx)("p",{className:"text-primary w-2/5",children:"Gender:"}),(0,r.jsx)("p",{className:"p-3 w-full bg-white0 rounded-sm hover:bg-white50",children:e.gender})]})]})]}));return s?(0,r.jsx)("div",{id:"closer",onClick:e=>{"closer"===e.target.id&&l()},className:"fixed flex w-screen h-screen inset-0 bg-black150 bg-opacity-20 backdrop-blur-sm justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col w-4/5 h-max p-6 bg-white50 gap-8 rounded-sm shadow-lg",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex gap-40 items-center",children:[(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)(t(),{src:"/demo.png",width:60,height:60,layout:"fixed",className:"border-2 h-[60px] object-cover object-top overflow-hidden rounded-full border-secondary"}),(0,r.jsx)("h3",{className:"text-primary",children:"Half Guy"})]}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)(j,{label:"Accept",type:"accept"}),(0,r.jsx)(j,{label:"Decline",type:"decline"})]})]}),(0,r.jsx)("div",{onClick:()=>l(),children:(0,r.jsx)(v.default,{className:"text-3xl hover:scale-105 border bg-red cursor-pointer rounded-sm text-white50"})})]}),(0,r.jsx)("div",{className:"bg-white50 h-4/5 w-full rounded-sm relative",children:a})]})}):null}},8540:function(e,s){s.Z={programmers:[{id:1,name:"Half Guy",img:"half.png"},{id:2,name:"Half Guy",img:"half.png"},{id:3,name:"Half Guy",img:"half.png"},{id:4,name:"Half Guy",img:"half.png"},{id:5,name:"Half Guy",img:"half.png"},{id:6,name:"Half Guy",img:"half.png"},{id:7,name:"Half Guy",img:"half.png"},{id:8,name:"Half Guy",img:"half.png"},{id:9,name:"Half Guy",img:"half.png"},{id:10,name:"Half Guy",img:"half.png"}],architects:[{id:1,name:"Half Guy",img:"half.png"},{id:2,name:"Half Guy",img:"half.png"},{id:3,name:"Half Guy",img:"half.png"},{id:4,name:"Half Guy",img:"half.png"},{id:5,name:"Half Guy",img:"half.png"},{id:6,name:"Half Guy",img:"half.png"},{id:7,name:"Half Guy",img:"half.png"},{id:8,name:"Half Guy",img:"half.png"},{id:9,name:"Half Guy",img:"half.png"},{id:10,name:"Half Guy",img:"half.png"}]}},3550:function(e,s){s.Z=[{id:1,name:"Half Guy",title:"Architect",src:"demo.png"},{id:2,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:3,name:"Half Guy",title:"Architect",src:"demo.png"},{id:4,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:6,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:7,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:8,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:9,name:"Half Guy",title:"Programmer",src:"demo.png"},{id:10,name:"Half Guy",title:"Programmer",src:"demo.png"}]},5132:function(e,s){s.Z=[{id:1,name:"Project X",desc:"A little description about the project",assgn:"Half Guy"},{id:2,name:"Project X",desc:"A little description about the project",assgn:"Unassigned"},{id:3,name:"Project X",desc:"A little description about the project",assgn:"Half Guy"},{id:4,name:"Project X",desc:"A little description about the project",assgn:"Half Guy"},{id:5,name:"Project X",desc:"A little description about the project",assgn:"Unassigned"},{id:6,name:"Project X",desc:"A little description about the project",assgn:"Unassigned"},{id:7,name:"Project X",desc:"A little description about the project",assgn:"Half Guy"},{id:8,name:"Project X",desc:"A little description about the project",assgn:"Unassigned"},{id:9,name:"Project X",desc:"A little description about the project",assgn:"Half Guy"}]}}]);