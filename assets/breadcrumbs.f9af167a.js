function m(){const o=["home","404"],i=["product","blog-item"],r=this.$route.name;if(o.includes(r))return this.$emit("breadcrumbs-change",[]);const s=this.pageRouteTitle,c=this.$route.params,t=[{title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",routeTo:{name:"home"}}];i.includes(r)?u.call(this):a.call(this);for(let e of t)if(!e){this.$emit("breadcrumbs-change",[]);return}this.$emit("breadcrumbs-change",t);function a(){const e={title:s,routeTo:{name:r,params:c}};t.push(e)}function u(){const e=this.previousBreadcrumbs;Array.isArray(e)?e.forEach(n=>t.push(n)):t.push(e),s&&c&&a()}}export{m as c};
