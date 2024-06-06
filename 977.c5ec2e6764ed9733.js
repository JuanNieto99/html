"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[977],{9977:(pt,b,o)=>{o.r(b),o.d(b,{PermissionsModule:()=>it});var P=o(6814),a=o(95),v=o(86),p=o(5219),N=o(3519),c=o.n(N),u=o(2791),t=o(4946),_=o(5619),I=o(7398),w=o(4444),x=o(9862);let C=(()=>{class n{constructor(e){this.httpClient=e,this.dataSubject=new _.X([]),this.data=this.dataSubject.asObservable(),this.baseUrl=w.D.url,this.endpointCrear="/permisoCrear",this.endpointPListar="/permisoListar",this.endpointPMostrar="/permisoMostrar",this.endpointPActualizar="/permisoActualizar",this.endpointPEliminar="/permisoEliminar"}getPermissions(e,i="",s=1){return this.httpClient.post(`${this.baseUrl+this.endpointPListar}?per_page=${e}&page=${s}&search=${i}`,{})}CreatePermissions(e){return this.httpClient.post(`${this.baseUrl+this.endpointCrear}`,e)}getPermissionById(e){return this.httpClient.get(`${this.baseUrl+this.endpointPMostrar}/${e}`).pipe((0,I.U)(i=>i))}updatePermissions(e){return this.httpClient.post(`${this.baseUrl+this.endpointPActualizar}`,e)}deletePermissions(e){return this.httpClient.post(`${this.baseUrl+this.endpointPEliminar}`,{id:e})}refresPermissionData(){this.getPermissions(30).subscribe(e=>{this.dataSubject.next(e.data)},e=>{console.log("Error: ",e)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(x.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var J=o(8672),T=o(1455),g=o(4104),h=o(7213),S=o(5817),U=o(2656),f=o(9664),d=o(707),Z=o(4480),A=o(3714);function y(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.modalNewP())}),t.qZA()}}function E(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t._UZ(1,"span"),t.TgZ(2,"span",32)(3,"form",33)(4,"div",34)(5,"input",35),t.NdJ("input",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchInput())}),t.qZA(),t.TgZ(6,"button",36),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.search(s.dt))}),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.formSearch)}}function Y(n,l){1&n&&(t.TgZ(0,"tr")(1,"th",37),t._uU(2,"Nombre"),t.qZA(),t.TgZ(3,"th",37),t._uU(4,"C\xf3digo"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Descripci\xf3n"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()())}function B(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",41),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw();return t.KtG(r.getPermission(s.id))}),t.qZA()}}function M(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",42),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw();return t.KtG(r.confirmDelete(s.id))}),t.qZA()}}function F(n,l){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",38),t.YNc(8,B,1,0,"p-button",39),t._UZ(9,"p-confirmDialog"),t.YNc(10,M,1,0,"p-button",40),t.qZA()()),2&n){const e=l.$implicit,i=t.oxw();t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.descripcion),t.xp6(2),t.Q6J("ngIf",i.permisoActualizar),t.xp6(2),t.Q6J("ngIf",i.permisoEliminar)}}function Q(n,l){if(1&n&&t._UZ(0,"input",43),2&n){const e=t.oxw();t.Q6J("value",e.permissionData.nombre)}}function z(n,l){if(1&n&&t._UZ(0,"input",44),2&n){const e=t.oxw();t.Q6J("value",e.permissionData.codigo)}}const D=function(){return{"min-width":"50rem"}},R=function(){return["nombre","medida","precio","cantidad","inventario","acciones"]},$=function(){return{width:"50vw"}},j=function(){return{width:"500px"}};let G=(()=>{class n{constructor(e,i,s,r,m,st,nt,ot,rt,at,lt,mt){this.permissionsService=e,this.spinner=i,this.hotelsService=s,this.confirmationService=r,this.toastModule=m,this.dialogModule=st,this.messageService=nt,this.usersService=ot,this.breadcrumbService=rt,this.tableModule=at,this.buttonModule=lt,this.cdRef=mt,this.permisoCrear=u.e.hasPermission(["administracion.permisos.crear"]),this.permisoActualizar=u.e.hasPermission(["administracion.permisos.actualizar"]),this.permisoEliminar=u.e.hasPermission(["administracion.permisos.eliminar"]),this.editarH=!1,this.crearH=!1,this.pageCount=10,this.editarPermit=!1,this.crearPermit=!1,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.registrosContar=0,this.loadingTable=!1,this.formSearch=new a.cw({search:new a.NI("",[])}),this.formNewP=new a.cw({nombre:new a.NI("",a.kI.required),codigo:new a.NI("",a.kI.required),descripcion:new a.NI("",[])}),this.formEditP=new a.cw({nombre:new a.NI("",a.kI.required),codigo:new a.NI("",a.kI.required),id:new a.NI("",[])})}ngOnInit(){this.getIndex(),this.permissionsService.data.subscribe(e=>{this.permission=e})}createPermission(){const e=this.formNewP.value;this.formNewP.reset(),this.permissionsService.CreatePermissions(e).subscribe(i=>{this.crearPermit=!1,c().fire({title:"Confirmaci\xf3n",text:"El Permiso ha sido creado.",icon:"success",timer:2e3,showConfirmButton:!1}),this.getIndex()},i=>{console.log("Error:",i)})}getIndex(e="",i=this.pageCount,s=1){this.spinner.show(),this.loadingTable=!0,this.permissionsService.getPermissions(i,e,s).subscribe(r=>{this.loadingTable=!1,this.permission=r.data,this.totalPermission=r.total,this.ultimaPage=r.last_page,this.registrosContar=r.total,this.ultimaPage=r.last_page,r.total>i&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},r=>{console.log("Error: ",r)})}getPermission(e){this.permissionsService.getPermissionById(e).subscribe(i=>{this.permissionData=i,this.formEditP.get("nombre").setValue(i.nombre),this.formEditP.get("codigo").setValue(i.codigo),this.formEditP.get("codigo").disable(),this.formEditP.get("id").setValue(i.id),this.editarPermit=!0})}updatePermission(){this.formEditP.get("id").setValue(this.permissionData.id),this.permissionsService.updatePermissions(this.formEditP.value).subscribe(i=>{this.editarPermit=!1,this.permissionsService.refresPermissionData()},i=>{console.log("Error:",i)})}confirmDelete(e){c().fire({title:"\xbfEstas Seguro que deseas eliminar el Permiso?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&(this.permissionsService.deletePermissions(e).subscribe(s=>{this.permissionsService.refresPermissionData()}),c().fire({title:"Confirmaci\xf3n",text:"El Permiso ha sido eliminado.",icon:"success"}))})}modalNewP(){this.crearPermit=!0}searchInput(){let e=this.formSearch.get("search").value;""==e&&this.getIndex(e)}search(e){let i=this.formSearch.get("search").value;this.getIndex(i)}onPage(e){this.pageCount=e.rows,this.getIndex("",this.pageCount)}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(C),t.Y36(J.t2),t.Y36(T.s),t.Y36(p.YP),t.Y36(g.EV),t.Y36(h.S),t.Y36(p.ez),t.Y36(S.f),t.Y36(U.p),t.Y36(f.U$),t.Y36(d.hJ),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-permisssions"]],features:[t._Bn([p.YP,p.ez])],decls:52,vars:31,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear un Permiso",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["type","text","placeholder","Auditar","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","aut","pInputText","","formControlName","codigo",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","descripcion",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Permiso","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Rol","modal","modal",3,"visible","draggable","resizable","visibleChange","onVisibleChange"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","nombre",3,"value",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","codigo",3,"value",4,"ngIf"],["pButton","","pRipple","","label","Editar Permiso","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["pButton","","pRipple","","label","Crear",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[2,"width","20%"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl",3,"value"],["type","text","pInputText","","formControlName","codigo",1,"w-full","mb-3","border-round-3xl",3,"value"]],template:function(i,s){1&i&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),t._uU(5,"Permisos"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,y,1,0,"button",4),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"p-table",8),t.NdJ("onPage",function(m){return s.onPage(m)}),t.YNc(12,E,7,1,"ng-template",9),t.YNc(13,Y,9,0,"ng-template",10),t.YNc(14,F,11,5,"ng-template",11),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"div",12)(17,"span",13)(18,"button",14),t.NdJ("click",function(){return s.leftTable()}),t.qZA(),t._UZ(19,"button",15),t.TgZ(20,"button",16),t.NdJ("click",function(){return s.rightTable()}),t.qZA()()()()()(),t.TgZ(21,"p-dialog",17),t.NdJ("visibleChange",function(m){return s.crearPermit=m}),t.TgZ(22,"div",6)(23,"form",18),t.NdJ("ngSubmit",function(){return s.createPermission()}),t.TgZ(24,"div",19)(25,"div",20)(26,"label"),t._uU(27,"Nombre del Permiso"),t.qZA(),t._UZ(28,"input",21),t.qZA(),t.TgZ(29,"div",20)(30,"label"),t._uU(31,"C\xf3digo"),t.qZA(),t._UZ(32,"input",22),t.qZA(),t.TgZ(33,"div",20)(34,"label"),t._uU(35,"Descripcion"),t.qZA(),t._UZ(36,"input",23),t.qZA(),t.TgZ(37,"div",24),t._UZ(38,"button",25),t.qZA()()()()(),t.TgZ(39,"p-dialog",26),t.NdJ("visibleChange",function(m){return s.editarPermit=m})("onVisibleChange",function(){return s.editarPermit=!s.editarPermit}),t.TgZ(40,"form",18),t.NdJ("ngSubmit",function(){return s.updatePermission()}),t.TgZ(41,"div",19)(42,"div",20)(43,"label"),t._uU(44,"Nombre del Permiso"),t.qZA(),t.YNc(45,Q,1,1,"input",27),t.qZA(),t.TgZ(46,"div",20)(47,"label"),t._uU(48,"C\xf3digo"),t.qZA(),t.YNc(49,z,1,1,"input",28),t.qZA(),t.TgZ(50,"div",24),t._UZ(51,"button",29),t.qZA()()()()),2&i&&(t.xp6(7),t.Q6J("ngIf",s.permisoCrear),t.xp6(4),t.Q6J("value",s.permission)("tableStyle",t.DdM(27,D))("loading",s.loadingTable)("rows",8)("globalFilterFields",t.DdM(28,R))("rowHover",!0),t.xp6(7),t.Q6J("disabled",!s.disablePageLeft),t.xp6(1),t.Q6J("label",s.pageActual),t.xp6(1),t.Q6J("disabled",!s.disablePageRight),t.xp6(1),t.Akn(t.DdM(29,$)),t.Q6J("visible",s.crearPermit)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",s.formNewP),t.xp6(15),t.Q6J("disabled",s.formNewP.invalid),t.xp6(1),t.Akn(t.DdM(30,j)),t.Q6J("visible",s.editarPermit)("draggable",!1)("resizable",!1),t.xp6(1),t.Q6J("formGroup",s.formEditP),t.xp6(5),t.Q6J("ngIf",s.editarPermit),t.xp6(4),t.Q6J("ngIf",s.editarPermit),t.xp6(2),t.Q6J("disabled",s.formEditP.invalid))},dependencies:[P.O5,f.iA,p.jx,d.Hq,d.zx,a._Y,a.Fj,a.JJ,a.JL,Z.H,g.FN,A.o,h.V,a.sg,a.u],encapsulation:2})}return n})();var H=o(2506);let L=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[v.Bz.forChild([{path:"",component:G,canActivate:[H.a],data:{permissions:["administracion.permisos"]}}]),v.Bz]})}return n})();var V=o(6068),O=o(6340),q=o(6022),K=o(6218),X=o(2160),k=o(1865),W=o(354),tt=o(8712),et=o(5722);let it=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({providers:[{provide:x.TP,useClass:tt.n,multi:!0},C,T.s],imports:[P.ez,L,f.U$,V.O,a.u5,d.hJ,Z.T,g.EV,O.V,q.Xt,A.j,K.A,X.kW,k.cc,W.L$,h.S,et.ii.forRoot(),a.UX]})}return n})()}}]);