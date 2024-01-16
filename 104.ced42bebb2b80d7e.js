"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[104],{3104:(at,g,i)=>{i.r(g),i.d(g,{InventoryModule:()=>K});var U=i(6814),o=i(95),h=i(4670),d=i(5219),N=i(3519),f=i.n(N),t=i(4946),S=i(5619),w=i(7398),M=i(4444),y=i(9862);let b=(()=>{class r{constructor(e){this.httpClient=e,this.dataSubject=new S.X([]),this.data=this.dataSubject.asObservable(),this.baseUrl=M.D.url,this.endpointCrear="/inventarioCrear",this.endpointPListar="/inventarioListar",this.endpointPMostrar="/inventarioMostrar",this.endpointPActualizar="/inventarioActualizar",this.endpointPEliminar="/inventarioEliminar"}getInventories(e){return this.httpClient.post(`${this.baseUrl+this.endpointPListar}?per_page=${e}`,{nombre:"",descripcion:"",estado:"",hotel_id:""})}createInventory(e){return this.httpClient.post(`${this.baseUrl+this.endpointCrear}`,e)}getInventoryById(e){return this.httpClient.get(`${this.baseUrl+this.endpointPMostrar}/${e}`).pipe((0,w.U)(n=>n))}updateInventory(e){return this.httpClient.post(`${this.baseUrl+this.endpointPActualizar}`,e)}deleteInventry(e){return this.httpClient.post(`${this.baseUrl+this.endpointPEliminar}`,{id:e})}refresInventaryData(){this.getInventories(30).subscribe(e=>{console.log(e.data),this.dataSubject.next(e.data)},e=>{console.log("Error: ",e)})}static#t=this.\u0275fac=function(n){return new(n||r)(t.LFG(y.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var I=i(1082),E=i(5379),Z=i(1455),u=i(4104),v=i(7213),J=i(5817),D=i(2656),c=i(8027),p=i(707),C=i(4480),T=i(3714),A=i(2352);function P(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"div",31)(1,"h5",32),t._uU(2,"Lista de Inventarios"),t.qZA(),t.TgZ(3,"span",33),t._UZ(4,"i",34),t.TgZ(5,"input",35),t.NdJ("input",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onGlobalFilter(a.dt,s))}),t.qZA()()()}}function Y(r,m){1&r&&(t.TgZ(0,"tr")(1,"th",36),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Descripcion"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()())}function q(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",37),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",38)(8,"p-button",39),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.getInventory(a.id))}),t.qZA(),t._UZ(9,"p-confirmDialog"),t.TgZ(10,"p-button",40),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.confirmDelete(a.id))}),t.qZA()()()}if(2&r){const e=m.$implicit,n=t.oxw();t.xp6(2),t.Q6J("value",n.inventories),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.descripcion)}}const H=function(){return{"min-width":"50rem"}},B=function(){return["usuario","email","superadmin","estado"]},F=function(){return[10,20,30]},W=function(){return{width:"50vw"}},x=function(){return{standalone:!0}},j=function(){return{width:"500px"}};let z=(()=>{class r{constructor(e,n,s,a,l,k,tt,et,nt,it,ot,rt,st){this.inventoryService=e,this.walletService=n,this.permissionsService=s,this.hotelsService=a,this.confirmationService=l,this.toastModule=k,this.dialogModule=tt,this.messageService=et,this.usersService=nt,this.breadcrumbService=it,this.tableModule=ot,this.buttonModule=rt,this.cdRef=st,this.tipo=1,this.editarW=!1,this.crearW=!1,this.editarPermit=!1,this.crearPermit=!1,this.formNewInventory=new o.cw({nombre:new o.NI("",o.kI.required),descripcion:new o.NI("",o.kI.required),estado:new o.NI("",o.kI.required),hotel_id:new o.NI("",o.kI.required)}),this.formEditInventory=new o.cw({nombre:new o.NI("",o.kI.required),descripcion:new o.NI("",o.kI.required),estado:new o.NI("",o.kI.required),hotel_id:new o.NI("",o.kI.required),id:new o.NI("",o.kI.required)})}ngOnInit(){this.getAllHotels(),this.getAllInventories(),this.inventoryService.data.subscribe(e=>{this.inventories=e})}getAllHotels(){this.hotelsService.getHotels(30).subscribe(e=>{this.hotels=e.data,console.log(this.hotels)},e=>{console.log("Error: ",e)})}createInventory(){this.formNewInventory.get("hotel_id").setValue(this.selectedHotel.id),this.inventoryService.createInventory(this.formNewInventory.value).subscribe(n=>{console.log(n),this.inventoryService.refresInventaryData(),this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Inventario Creado.",sticky:!0,life:200}),this.crearW=!1},n=>{console.log("Error:",n)})}getAllInventories(){this.inventoryService.getInventories(30).subscribe(e=>{this.inventories=e.data,this.totalInventories=e.total,console.log(this.inventories)},e=>{console.log("Error: ",e)})}getInventory(e){this.inventoryService.getInventoryById(e).subscribe(n=>{this.inventoryData=n,console.log(this.inventoryData),this.editarW=!0})}updateInventory(){this.formEditInventory.get("id").setValue(this.inventoryData.id),this.formEditInventory.get("hotel_id").setValue(this.selectedHotel.id);const e=this.formEditInventory.value;console.log(e),this.inventoryService.updateInventory(e).subscribe(n=>{console.log(n),this.editarW=!1,this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Inventario actualizado.",sticky:!0,life:200}),this.inventoryService.refresInventaryData()},n=>{console.log("Error:",n)})}confirmDelete(e){console.log(e),f().fire({title:"\xbfEstas Seguro que deseas eliminar este inventario?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed&&(this.inventoryService.deleteInventry(e).subscribe(s=>{console.log(s),this.inventoryService.refresInventaryData()}),f().fire({title:"Confirmaci\xf3n",text:"La caja ha sido eliminada.",icon:"success"}))})}modalNewW(){this.crearW=!0}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(b),t.Y36(I.X),t.Y36(E.q),t.Y36(Z.s),t.Y36(d.YP),t.Y36(u.EV),t.Y36(v.S),t.Y36(d.ez),t.Y36(J.f),t.Y36(D.p),t.Y36(c.U$),t.Y36(p.hJ),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-inventory"]],features:[t._Bn([d.YP,d.ez])],decls:72,vars:32,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"pi","pi-users","mr-2"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","icon","pi pi-user-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","label","Exportar","icon","pi pi-check"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} de {totalRecords} Permisos","selectionMode","multiple","dataKey","hotel",3,"value","tableStyle","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Crear Inventario",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["type","text","placeholder","Caja 1","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","Caja hotel 1","pInputText","","formControlName","descripcion",1,"w-full","mb-3","border-round-3xl"],["optionLabel","nombre",3,"options","ngModel","ngModelOptions","ngModelChange"],["htmlFor","state"],["formControlName","estado",1,"w-full","mb-3","border-round-3xl","selects-main"],["value","1"],["value","2"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Inventario","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],["header","Editar Inventario","modal","modal",3,"visible","visibleChange","onVisibleChange"],["pButton","","pRipple","","label","Editar Inventario","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],[3,"value"],[1,"flex","gap-2"],["icon","pi pi-user-edit","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"]],template:function(n,s){1&n&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),t._uU(5,"Inventarios"),t.qZA(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"i",5),t.TgZ(9,"span"),t._uU(10,"Inventarios Creados"),t.qZA()()()(),t.TgZ(11,"div",6)(12,"button",7),t.NdJ("click",function(){return s.modalNewW()}),t.qZA(),t._UZ(13,"button",8),t.qZA()()(),t.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"p-table",12),t.YNc(18,P,6,0,"ng-template",13),t.YNc(19,Y,9,0,"ng-template",14),t.YNc(20,q,11,3,"ng-template",15),t.qZA()()()(),t.TgZ(21,"p-dialog",16),t.NdJ("visibleChange",function(l){return s.crearW=l}),t.TgZ(22,"div",10)(23,"h5"),t._uU(24,"Completa el formulario"),t.qZA(),t.TgZ(25,"form",17),t.NdJ("ngSubmit",function(){return s.createInventory()}),t.TgZ(26,"div",18)(27,"div",19)(28,"label"),t._uU(29,"Nombre del Inventario"),t.qZA(),t._UZ(30,"input",20),t.qZA(),t.TgZ(31,"div",19)(32,"label"),t._uU(33,"Descripcion"),t.qZA(),t._UZ(34,"input",21),t.qZA(),t.TgZ(35,"div",19)(36,"label"),t._uU(37,"Hotel"),t.qZA(),t.TgZ(38,"p-dropdown",22),t.NdJ("ngModelChange",function(l){return s.selectedHotel=l}),t.qZA()(),t.TgZ(39,"div",19)(40,"label",23),t._uU(41,"Estado"),t.qZA(),t.TgZ(42,"select",24)(43,"option",25),t._uU(44,"Activo"),t.qZA(),t.TgZ(45,"option",26),t._uU(46,"Inactivo"),t.qZA()()(),t.TgZ(47,"div",27),t._UZ(48,"button",28),t.qZA()()()()(),t.TgZ(49,"p-dialog",29),t.NdJ("visibleChange",function(l){return s.editarW=l})("onVisibleChange",function(){return s.editarW=!s.editarW}),t.TgZ(50,"form",17),t.NdJ("ngSubmit",function(){return s.updateInventory()}),t.TgZ(51,"div",18)(52,"div",19)(53,"label"),t._uU(54,"Nombre del Inventario"),t.qZA(),t._UZ(55,"input",20),t.qZA(),t.TgZ(56,"div",19)(57,"label"),t._uU(58,"Descripcion"),t.qZA(),t._UZ(59,"input",21),t.qZA(),t.TgZ(60,"div",19)(61,"p-dropdown",22),t.NdJ("ngModelChange",function(l){return s.selectedHotel=l}),t.qZA()(),t.TgZ(62,"div",19)(63,"label",23),t._uU(64,"Estado"),t.qZA(),t.TgZ(65,"select",24)(66,"option",25),t._uU(67,"Activo"),t.qZA(),t.TgZ(68,"option",26),t._uU(69,"Inactivo"),t.qZA()()(),t.TgZ(70,"div",27),t._UZ(71,"button",30),t.qZA()()()()),2&n&&(t.xp6(17),t.Q6J("value",s.inventories)("tableStyle",t.DdM(25,H))("rows",10)("globalFilterFields",t.DdM(26,B))("paginator",!0)("rowsPerPageOptions",t.DdM(27,F))("showCurrentPageReport",!0)("rowHover",!0),t.xp6(4),t.Akn(t.DdM(28,W)),t.Q6J("visible",s.crearW)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(4),t.Q6J("formGroup",s.formNewInventory),t.xp6(13),t.Q6J("options",s.hotels)("ngModel",s.selectedHotel)("ngModelOptions",t.DdM(29,x)),t.xp6(11),t.Akn(t.DdM(30,j)),t.Q6J("visible",s.editarW),t.xp6(1),t.Q6J("formGroup",s.formEditInventory),t.xp6(11),t.Q6J("options",s.hotels)("ngModel",s.selectedHotel)("ngModelOptions",t.DdM(31,x)))},dependencies:[c.iA,d.jx,c.UA,c.Mo,p.Hq,p.zx,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,C.H,u.FN,T.o,A.Lt,v.V,o.sg,o.u],encapsulation:2})}return r})(),$=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[h.Bz.forChild([{path:"",component:z}]),h.Bz]})}return r})();var O=i(6068),_=i(6340),L=i(6022),R=i(6218),V=i(1865),G=i(354),Q=i(8712),X=i(5722);let K=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({providers:[{provide:y.TP,useClass:Q.n,multi:!0},I.X,b,Z.s],imports:[U.ez,$,c.U$,O.O,o.u5,p.hJ,C.T,u.EV,_.V,L.Xt,T.j,R.A,A.kW,V.cc,G.L$,v.S,X.ii.forRoot(),o.UX]})}return r})()}}]);