import{d,b as p,r as n,w as m,u as c,o as i,c as f,e as v,f as S,g as E,h,i as o,j as s}from"./index.20c6dc2c.js";const b=d({id:"store",state:()=>({apiResults:[],selectedStep:0,sortAscending:!1,loading:!1}),getters:{},actions:{async fetch(){throw new Error("not_implemented")},sort(){throw new Error("not_implemented")},setSelectedStep(l){this.selectedStep=l}}}),w={key:0},k=p({__name:"InstructionView",setup(l){const t=b(),_=h();let e=n(),a=n(!1),r=n(!1);m(()=>_.name,()=>{setTimeout(()=>{u()},200)},{immediate:!0,deep:!0});const u=async()=>{switch(r.value=!1,a.value=!0,_.name){case"fetch":t.setSelectedStep(1),e.value=o(()=>s(()=>import("./Instruction.1c12b7df.js"),["assets/Instruction.1c12b7df.js","assets/Instruction.e427c189.css","assets/index.20c6dc2c.js","assets/index.dbca8b6b.css"]));break;case"state":t.setSelectedStep(2),e.value=o(()=>s(()=>import("./Instruction.1c12b7df.js"),["assets/Instruction.1c12b7df.js","assets/Instruction.e427c189.css","assets/index.20c6dc2c.js","assets/index.dbca8b6b.css"]));break;case"component":t.setSelectedStep(3),e.value=o(()=>s(()=>import("./Instruction.1c12b7df.js"),["assets/Instruction.1c12b7df.js","assets/Instruction.e427c189.css","assets/index.20c6dc2c.js","assets/index.dbca8b6b.css"]));break;case"route":t.setSelectedStep(4),e.value=o(()=>s(()=>import("./Instruction.1c12b7df.js"),["assets/Instruction.1c12b7df.js","assets/Instruction.e427c189.css","assets/index.20c6dc2c.js","assets/index.dbca8b6b.css"]));break;case"submit":t.setSelectedStep(5),e.value=o(()=>s(()=>import("./Instruction.1c12b7df.js"),["assets/Instruction.1c12b7df.js","assets/Instruction.e427c189.css","assets/index.20c6dc2c.js","assets/index.dbca8b6b.css"]));break}a.value=!1,r.value=!0};return(I,V)=>!c(a)&&c(r)?(i(),f("div",w,[(i(),v(S(c(e))))])):E("",!0)}});var y=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{y as I,b as s};
