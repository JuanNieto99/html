"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[34],{5034:(x,u,n)=>{n.r(u),n.d(u,{InvoiceModule:()=>Q});var m=n(177),p=n(1626),s=n(6554),c=n(1141),h=n(3386),d=n(5493),g=n(2242),I=n(635),v=n(306),t=n(540);let C=(()=>{class i{constructor(e){this.httpClient=e,this.baseUrl=v.T.url,this.endPointAnular="/facturaAnular",this.endPointListar="/facturaListar"}getAll(e,a=1,o=""){return this.httpClient.post(`${this.baseUrl+this.endPointListar}?page=${a}&per_page=${e}&search=${o}`,{})}anular(e){return this.httpClient.post(`${this.baseUrl+this.endPointAnular}?=${e.id}`,e)}static{this.\u0275fac=function(a){return new(a||i)(t.KVO(p.Qq))}}static{this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var E=n(8032),b=n.n(E),j=n(5989),T=n(92),l=n(4341),y=n(5779),P=n(563),k=n(7927);function $(i,f){if(1&i){const e=t.RV6();t.j41(0,"div",20),t.nrm(1,"span"),t.j41(2,"span",21)(3,"form",22)(4,"div",23)(5,"input",24),t.bIt("keyup.enter",function(o){t.eBV(e);const r=t.XpG();return t.Njj(r.buscarPorTecla(o))})("input",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.searchInput())}),t.k0s(),t.j41(6,"button",25),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.search())}),t.k0s()()()()()}if(2&i){const e=t.XpG();t.R7$(3),t.Y8G("formGroup",e.formSearch)}}function A(i,f){1&i&&(t.j41(0,"tr")(1,"th"),t.EFF(2,"Concepto"),t.k0s(),t.j41(3,"th"),t.EFF(4,"Recibo interno"),t.k0s(),t.j41(5,"th"),t.EFF(6,"Recibo externo"),t.k0s(),t.j41(7,"th"),t.EFF(8,"Excedente"),t.k0s(),t.j41(9,"th"),t.EFF(10,"Subtotal"),t.k0s(),t.j41(11,"th"),t.EFF(12,"Total"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Nombre del hotel"),t.k0s(),t.j41(15,"th"),t.EFF(16,"Cliente"),t.k0s(),t.j41(17,"th"),t.EFF(18,"Acciones"),t.k0s()())}function B(i,f){if(1&i){const e=t.RV6();t.j41(0,"p-button",29),t.bIt("click",function(){t.eBV(e);const o=t.XpG().$implicit,r=t.XpG();return t.Njj(r.confirmDelete(o.id))}),t.k0s()}}function G(i,f){if(1&i){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.nI1(9,"currencyFormat"),t.k0s(),t.j41(10,"td"),t.EFF(11),t.nI1(12,"currencyFormat"),t.k0s(),t.j41(13,"td"),t.EFF(14),t.nI1(15,"currencyFormat"),t.k0s(),t.j41(16,"td"),t.EFF(17),t.k0s(),t.j41(18,"td"),t.EFF(19),t.k0s(),t.nrm(20,"t"),t.j41(21,"td",26),t.nrm(22,"p-confirmDialog"),t.DNE(23,B,1,0,"p-button",27),t.j41(24,"p-button",28),t.bIt("click",function(){const r=t.eBV(e).$implicit,F=t.XpG();return t.Njj(F.confirmAbrirPdf(r.id))}),t.k0s()()()}if(2&i){const e=f.$implicit,a=t.XpG();t.R7$(2),t.JRh(e.concepto),t.R7$(2),t.JRh(e.secuencia_factura_interna),t.R7$(2),t.JRh(e.secuencia_factura_externa||"No hay recibo externo"),t.R7$(2),t.JRh(t.bMT(9,9,e.excedente)),t.R7$(3),t.JRh(t.bMT(12,11,e.sub_total)),t.R7$(3),t.JRh(t.bMT(15,13,e.total)),t.R7$(3),t.JRh(e.hotel.nombre),t.R7$(2),t.JRh(e.cliente.nombres+" "+e.cliente.apellidos),t.R7$(4),t.Y8G("ngIf",a.permisoEliminar)}}function D(i,f){1&i&&(t.j41(0,"tr")(1,"td",30),t.EFF(2," Cargando informaci\xf3n, por favor espere... "),t.k0s()())}const M=function(){return{"min-width":"50rem"}};let N=(()=>{class i{constructor(e,a,o,r){this.invoiceService=e,this.spinner=a,this.appComponent=o,this.FB=r,this.permisoCrear=j.u.hasPermission(["administracion.facturacion.crear"]),this.permisoEliminar=j.u.hasPermission(["administracion.facturacion.eliminar"]),this.loadingTable=!1,this.pageCount=10,this.ultimaPage=1,this.disablePageRight=!1,this.pageActual=1,this.disablePageLeft=!1}ngOnInit(){this.buildForm(),this.getIndex(),this.baseUrl=v.T.url,this.token=this.appComponent.getToken()}buildForm(){this.formSearch=this.FB.group({search:["",[]]})}getIndex(e="",a=this.pageCount,o=1){this.spinner.show(),this.loadingTable=!0,this.invoiceService.getAll(a,o,e).subscribe(r=>{this.loadingTable=!1,this.roomsData=r.data,this.countRegisters=r.total,this.ultimaPage=r.last_page,r.total>a&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},r=>{console.log("Error",r),this.spinner.hide()})}searchInput(){let e=this.formSearch.get("search").value;this.pageActual=1,""==e&&(console.log("ads"),this.getIndex(e))}search(){let e=this.formSearch.get("search").value;this.getIndex(e)}confirmDelete(e){b().fire({title:"Quieres anular esta factura?",text:"Ten cuidado, esta acci\xf3n no se puede revertir",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed&&(this.spinner.show(),this.invoiceService.anular({id:e}).subscribe(o=>{this.spinner.hide(),"success"==o.code?(b().fire({title:"Exito",text:"Factura anulada exitosamente",icon:"success"}),this.getIndex()):b().fire({title:"Error",text:"Error al anular la factura",icon:"error"})},o=>{console.log("Error: ",o)}))})}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}confirmAbrirPdf(e){window.open(this.baseUrl+"/facturaRemisionPdf/"+e+"?token="+this.token,"_blank")}buscarPorTecla(e){"Enter"==e.code&&this.search()}onPage(e){this.pageCount=e.rows,this.getIndex("",this.pageCount)}static{this.\u0275fac=function(a){return new(a||i)(t.rXU(C),t.rXU(s.ex),t.rXU(T.Z),t.rXU(l.ok))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-invoice"]],decls:22,vars:9,consts:[["type","ball-scale-multiple","size","large","bdColor","rgba(192,192,192,0.8)","template","<img src='assets/loading/cargando.gif' />"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-file-pdf","severity","danger",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"]],template:function(a,o){1&a&&(t.nrm(0,"ngx-spinner",0),t.j41(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t.EFF(5,"Facturaci\xf3n"),t.k0s(),t.j41(6,"div",4),t.nrm(7,"div",5),t.k0s()(),t.nrm(8,"div",6),t.k0s()(),t.j41(9,"div",7)(10,"div",8)(11,"div",9)(12,"p-table",10),t.bIt("onPage",function(F){return o.onPage(F)}),t.DNE(13,$,7,1,"ng-template",11),t.DNE(14,A,19,0,"ng-template",12),t.DNE(15,G,25,15,"ng-template",13),t.DNE(16,D,3,0,"ng-template",14),t.k0s(),t.j41(17,"div",15)(18,"span",16)(19,"button",17),t.bIt("click",function(){return o.leftTable()}),t.k0s(),t.nrm(20,"button",18),t.j41(21,"button",19),t.bIt("click",function(){return o.rightTable()}),t.k0s()()()()()()),2&a&&(t.R7$(12),t.Y8G("value",o.roomsData)("tableStyle",t.lJ4(8,M))("loading",o.loadingTable)("rows",8)("rowHover",!0),t.R7$(7),t.Y8G("disabled",!o.disablePageLeft),t.R7$(1),t.Y8G("label",o.pageActual),t.R7$(1),t.Y8G("disabled",!o.disablePageRight))},dependencies:[m.bT,h.XI,y.Ei,c._f,c.$n,l.qT,l.me,l.BC,l.cb,P.n,g.S,l.j4,l.JD,s.et,k.l]})}}return i})();var R=n(3091),X=n(1765);let S=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[R.iI.forChild([{path:"",component:N,canActivate:[X.q],data:{permissions:["administracion.facturacion"]}}]),R.iI]})}}return i})();var U=n(9998),J=n(1830),L=n(4714),O=n(1305),V=n(494),Y=n(9883),K=n(981),Z=n(1570),H=n(4058),W=n(6627),w=n(3887);let Q=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({providers:[{provide:p.a7,useClass:I.R,multi:!0},C],imports:[S,m.MD,h.bG,d.e,l.YN,c.tm,P.Z,U.MB,J.m,L.wZ,g.u,O.f,Y.kr,V.Ko,K.O3,Z.P,H.RZ.forRoot(),l.X1,s.PO,W.I,w.G]})}}return i})()},7927:(x,u,n)=>{n.d(u,{l:()=>p});var m=n(540);let p=(()=>{class s{transform(h){if(""===h)return"";const d=Number(h).toFixed(2),[g,I]=d.split(".");return g.replace(/\B(?=(\d{3})+(?!\d))/g,".")}static{this.\u0275fac=function(d){return new(d||s)}}static{this.\u0275pipe=m.EJ8({name:"currencyFormat",type:s,pure:!0})}}return s})()},3887:(x,u,n)=>{n.d(u,{G:()=>s});var m=n(177),p=n(540);let s=(()=>{class c{static{this.\u0275fac=function(g){return new(g||c)}}static{this.\u0275mod=p.$C({type:c})}static{this.\u0275inj=p.G2t({imports:[m.MD]})}}return c})()}}]);