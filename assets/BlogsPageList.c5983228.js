import{a as d,B as g,b as m}from"./BlogCardSmall.27a9ecdb.js";import{_,U as p,i as o,t as n,q as u,T as B,s,j as r,v as C,z as f,F as b,k as l}from"./index.d09eb5c6.js";const h={name:"BlogsPageList",components:{BlogCard:d,BlogCardBig:g,BlogCardSmall:m},props:{blogsList:{type:Array,required:!0},blogCardComponent:{type:String,default:"BlogCardSmall"}},data(){return{duration:.3,component:"BlogCard"}},methods:{...p,changeCardComponent(){this.component=this.blogCardComponent}}},L={key:0,class:"blogs-page__list--empty"},v=l("span",{class:"__icon-actions-closed_view"},null,-1),y=l("p",null,"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",-1),k=[v,y];function E(t,D,e,S,i,q){return e.blogsList?(o(),n(B,{key:0,tag:"ul",name:"cards-anim",class:"blogs-page__list",onBeforeEnter:t.onBeforeEnter,onEnter:t.onEnter,onLeave:t.onLeave},{default:u(()=>[(o(!0),r(b,null,C(e.blogsList,(a,c)=>(o(),n(f(i.component),{key:`${e.blogCardComponent}-${a.id}-${c}`,tag:"li",blogData:a},null,8,["blogData"]))),128)),e.blogsList.length<1?(o(),r("div",L,k)):s("",!0)]),_:1},8,["onBeforeEnter","onEnter","onLeave"])):s("",!0)}var N=_(h,[["render",E]]);export{N as default};
