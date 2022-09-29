"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[758],{2758:(b,s,i)=>{i.r(s),i.d(s,{ProdutosModule:()=>v});var a=i(6895),c=i(433),p=i(9541),o=i(1571),g=i(6684);let l=(()=>{class t{constructor(){this.produtos=g.X}getAll(){return this.produtos}getOne(n){return this.produtos.find(e=>e.id===n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=i(8881);let m=(()=>{class t{constructor(n){this.snackBar=n}notificar(n){this.snackBar.open(n,"ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(n){return new(n||t)(o.LFG(_.ux))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=i(5087);let h=(()=>{class t{constructor(n,e,u,d){this.produtosService=n,this.route=e,this.notificarService=u,this.carrinho=d,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(e)}adicionarCarrinho(){this.notificarService.notificar("Produto adicionado ao carrinho");const n={...this.produto,quantidade:this.quantidade};this.carrinho.adicionarAoCarrinho(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(p.gz),o.Y36(m),o.Y36(f.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhesproduto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel:"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return e.quantidade=d}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return e.adicionarCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&n&&(o.xp6(2),o.Q6J("src",null==e.produto?null:e.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==e.produto?null:e.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==e.produto?null:e.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",e.quantidade),o.xp6(3),o.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,a.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),t})();function x(t,r){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11," Comprar "),o.qZA()()()),2&t){const n=r.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",n.id,""),o.xp6(1),o.Q6J("src",n.imagem,o.LSH),o.xp6(2),o.hij(" ",n.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,n.preco,"BRL")," "),o.xp6(3),o.hij(" ",n.descricaoPreco," ")}}const C=[{path:"",component:(()=>{class t{constructor(n,e){this.produtosService=n,this.route=e}ngOnInit(){const n=this.produtosService.getAll();this.route.queryParamMap.subscribe(e=>{const u=e.get("descricao")?.toLowerCase();this.produtos=u?n.filter(d=>d.descricao.toLowerCase().includes(u)):n})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(p.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0),o.YNc(1,x,12,8,"div",1),o.qZA()),2&n&&(o.xp6(1),o.Q6J("ngForOf",e.produtos))},dependencies:[a.sg,p.yS,a.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),t})()},{path:":id",component:h}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.Bz.forChild(C),p.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.ez,P,c.u5]}),t})()}}]);