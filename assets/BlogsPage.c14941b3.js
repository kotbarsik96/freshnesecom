import{a as P,B as w,b as R}from"./BlogCardSmall.27a9ecdb.js";import{p as c}from"./page-controls.500bb39b.js";import{c as L}from"./breadcrumbs.f9af167a.js";import{_ as A,m as T,f as S,V as Q,g,i as u,j as h,l as i,q as s,k as r,B as V,t as p,s as y,u as o,x as d,F as H,v as D}from"./index.d09eb5c6.js";import{L as F}from"./LinksList.f242622f.js";const I={name:"BlogsPage",components:{BlogCard:P,BlogCardBig:w,BlogCardSmall:R,LinksList:F},data(){return{viewType:"grid",pageRouteTitle:"\u0411\u043B\u043E\u0433\u0438",pageRouteName:"blogs-pagenumber",categories:[],searchResults:[],searchQuery:""}},emits:["breadcrumbs-change"],computed:{...T(["blogs","blogsCategories"]),blogCardComponent(){if(this.viewType==="grid")return"BlogCard";if(this.viewType==="list")return"BlogCardSmall"},maxBlogsOnPage(){return 6},blogsList(){return this.blogs?this.blogs:[]},pagesArray(){let l;this.searchResults&&this.searchQuery?l=this.searchResults:l=this.blogsList;const e=this.maxBlogsOnPage;return c.computed.createPagesArray(l,e)},pagesAmount:c.computed.pagesAmount,pageNumber:c.computed.pageNumber},methods:{...S(["loadJsonFile"]),...Q(["addModal"]),createBreadcrumbs:L,checkRoutePageNumber(){c.methods.checkRoutePageNumber.call(this)},setPage:c.methods.setPage},watch:{pageNumber:c.watch.pageNumber,pagesArray:c.watch.pagesArray},created(){if(this.loadJsonFile("blogs"),this.$route.name==="blogs"){const l=this.$route.params.pageNumber||1;this.setPage(l)}this.createBreadcrumbs()}},x={class:"blogs-page"},M={class:"tag--colored"},q={class:"blogs-page__content"},J={class:"blogs-page__head"},O={class:"blogs-page__body"},U={class:"blogs-page__links"},j=r("a",{href:"#",class:"link"},"\u0418\u044E\u043B\u044C 2022",-1),z=r("a",{href:"#",class:"link"},"\u0418\u044E\u043D\u044C 2022",-1),E=r("a",{href:"#",class:"link"},"\u041C\u0430\u0439 2022",-1),G=r("a",{href:"#",class:"link"},"\u0410\u043F\u0440\u0435\u043B\u044C 2022",-1),K=r("a",{href:"#",class:"link"},"\u041C\u0430\u0440\u0442 2022",-1);function W(l,e,X,Y,n,t){const m=g("PageHeadlineItem"),C=g("PageHeadline"),b=g("BlogCardBig"),f=g("InputSearch"),_=g("LinksList"),k=g("RouterLink"),v=g("SimpleHeadline"),B=g("RouterView"),N=g("PaginationControls");return u(),h("main",x,[i(C,{class:"container"},{title:s(()=>[o(d(n.pageRouteTitle),1)]),default:s(()=>[i(m,{iconName:"layout-square_grid",isActive:n.viewType==="grid",isControl:"",onClick:e[0]||(e[0]=a=>n.viewType="grid")},{default:s(()=>[o("\u0421\u0435\u0442\u043A\u0430")]),_:1},8,["isActive"]),i(m,{iconName:"layout-sections",isActive:n.viewType==="list",isControl:"",onClick:e[1]||(e[1]=a=>n.viewType="list")},{default:s(()=>[o("\u0421\u043F\u0438\u0441\u043E\u043A")]),_:1},8,["isActive"]),i(m,null,{default:s(()=>[o(" \u0411\u043B\u043E\u0433\u043E\u0432: "),r("span",M,d(t.blogsList.length),1)]),_:1})]),_:1}),r("section",q,[r("div",{class:V(["blogs-page__container",{"blogs-page__container--grid-view":n.viewType==="grid","blogs-page__container--list-view":n.viewType==="list"}])},[r("div",J,[l.blogs[0]?(u(),p(b,{key:0,blogData:l.blogs[0]},null,8,["blogData"])):y("",!0),l.blogs[1]?(u(),p(b,{key:1,blogData:l.blogs[1]},null,8,["blogData"])):y("",!0)]),i(f,{class:"blogs-page__search",name:"blogs-search",array:t.blogsList,keysForSearch:["title","tags","category"],placeholder:"\u0418\u0441\u043A\u0430\u0442\u044C \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, \u0442\u0435\u0433\u0443...",doShowResultsInSearchBody:!1,searchResults:n.searchResults,"onUpdate:searchResults":e[2]||(e[2]=a=>n.searchResults=a),searchQuery:n.searchQuery,"onUpdate:searchQuery":e[3]||(e[3]=a=>n.searchQuery=a)},{button:s(()=>[o("\u0418\u0441\u043A\u0430\u0442\u044C")]),_:1},8,["array","searchResults","searchQuery"]),r("div",O,[r("div",U,[i(_,{class:"blogs-page__links-list"},{title:s(()=>[o("\u0410\u0440\u0445\u0438\u0432\u044B")]),default:s(()=>[j,z,E,G,K]),_:1}),i(_,{isNoColor:"",class:"blogs-page__links-list"},{title:s(()=>[o("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")]),default:s(()=>[(u(!0),h(H,null,D(l.blogsCategories,a=>(u(),p(k,{class:"link",key:a.id,to:{name:"home"}},{default:s(()=>[o(d(a.title),1)]),_:2},1024))),128))]),_:1}),i(v,{class:"blogs-page__headline",headlineTag:"h5"},{descr:s(()=>[o(" \u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u0443\u0437\u043D\u0430\u0435\u0442 \u043E\u0431 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445, \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0445 \u043E\u0442 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u0438 \u043E \u0434\u0440\u0443\u0433\u043E\u043C ")]),default:s(()=>[o(" \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C ")]),_:1}),r("button",{class:"button",onClick:e[4]||(e[4]=a=>l.addModal({name:"ModalSubscribe",params:{titleTag:"h4"}}))}," \u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ")]),i(B,{blogsList:t.pagesArray[t.pageNumber-1],blogCardComponent:t.blogCardComponent},null,8,["blogsList","blogCardComponent"])])],2)]),i(N,{class:"container",list:t.blogsList,pagesAmount:t.pagesAmount,pageNumber:t.pageNumber,onPageNumberClick:e[5]||(e[5]=a=>t.setPage(a)),onNextButtonClick:e[6]||(e[6]=a=>t.setPage(t.pageNumber+1)),onPrevButtonClick:e[7]||(e[7]=a=>t.setPage(t.pageNumber-1))},{title:s(()=>[o("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430:")]),button:s(()=>[o("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430")]),"pcs-title":s(()=>[o("\u0411\u043B\u043E\u0433\u043E\u0432")]),_:1},8,["list","pagesAmount","pageNumber"])])}var ae=A(I,[["render",W]]);export{ae as default};