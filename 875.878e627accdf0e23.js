"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[875],{875:(te,f,i)=>{i.r(f),i.d(f,{PermissionsModule:()=>$});var h=i(6814),s=i(95),v=i(4670),m=i(5219),C=i(3519),b=i.n(C),e=i(4946),P=i(5379),Z=i(1455),c=i(4104),g=i(7213),A=i(5817),N=i(2656),p=i(8027),u=i(707),x=i(4480),T=i(3714);function w(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"div",29)(1,"h5",30),e._uU(2,"Lista de Permisos"),e.qZA(),e.TgZ(3,"span",31),e._UZ(4,"i",32),e.TgZ(5,"input",33),e.NdJ("input",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onGlobalFilter(l.dt,n))}),e.qZA()()()}}function U(r,d){1&r&&(e.TgZ(0,"tr")(1,"th",34),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"C\xf3digo"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Descripci\xf3n"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Acciones"),e.qZA()())}function y(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",35),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",36)(10,"p-button",37),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.getPermission(l.id))}),e.qZA(),e._UZ(11,"p-confirmDialog"),e.TgZ(12,"p-button",38),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.confirmDelete(l.id))}),e.qZA()()()}if(2&r){const t=d.$implicit,o=e.oxw();e.xp6(2),e.Q6J("value",o.permission),e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.codigo),e.xp6(2),e.Oqu(t.descripcion)}}function S(r,d){if(1&r&&e._UZ(0,"input",39),2&r){const t=e.oxw();e.Q6J("value",t.permissionData.nombre)}}function I(r,d){if(1&r&&e._UZ(0,"input",40),2&r){const t=e.oxw();e.Q6J("value",t.permissionData.codigo)}}const J=function(){return{"min-width":"50rem"}},E=function(){return["usuario","email","superadmin","estado"]},Y=function(){return[10,20,30]},M=function(){return{width:"50vw"}},D=function(){return{width:"500px"}};let _=(()=>{class r{constructor(t,o,n,l,a,K,L,X,k,W,ee){this.permissionsService=t,this.hotelsService=o,this.confirmationService=n,this.toastModule=l,this.dialogModule=a,this.messageService=K,this.usersService=L,this.breadcrumbService=X,this.tableModule=k,this.buttonModule=W,this.cdRef=ee,this.editarH=!1,this.crearH=!1,this.editarPermit=!1,this.crearPermit=!1,this.formNewP=new s.cw({nombre:new s.NI("",s.kI.required),codigo:new s.NI("",s.kI.required),descripcion:new s.NI("",s.kI.required)}),this.formEditP=new s.cw({nombre:new s.NI("",s.kI.required),codigo:new s.NI("",s.kI.required),id:new s.NI("",s.kI.required)})}ngOnInit(){this.getAllPermissions(),this.permissionsService.data.subscribe(t=>{this.permission=t})}createPermission(){const t=this.formNewP.value;this.formNewP.reset(),this.permissionsService.CreatePermissions(t).subscribe(o=>{this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Usuario creado.",sticky:!0,life:200}),this.crearPermit=!1,this.getAllPermissions()},o=>{console.log("Error:",o)})}getAllPermissions(){this.permissionsService.getPermissions(30).subscribe(t=>{this.permission=t.data,this.totalPermission=t.total},t=>{console.log("Error: ",t)})}getPermission(t){this.permissionsService.getPermissionById(t).subscribe(o=>{this.permissionData=o,console.log(this.permissionData),this.formEditP.get("nombre").setValue(o.nombre),this.formEditP.get("codigo").setValue(o.codigo),this.formEditP.get("codigo").disable(),this.formEditP.get("id").setValue(o.id),this.editarPermit=!0})}updatePermission(){this.formEditP.get("id").setValue(this.permissionData.id);const t=this.formEditP.value;console.log(t),this.permissionsService.updatePermissions(t).subscribe(o=>{console.log(o),this.editarPermit=!1,this.permissionsService.refresPermissionData()},o=>{console.log("Error:",o)})}confirmDelete(t){console.log(t),b().fire({title:"\xbfEstas Seguro que deseas eliminar el Permiso?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&(this.permissionsService.deletePermissions(t).subscribe(n=>{console.log(n),this.permissionsService.refresPermissionData()}),b().fire({title:"Confirmaci\xf3n",text:"El Permiso ha sido eliminado.",icon:"success"}))})}modalNewP(){this.crearPermit=!0}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(P.q),e.Y36(Z.s),e.Y36(m.YP),e.Y36(c.EV),e.Y36(g.S),e.Y36(m.ez),e.Y36(A.f),e.Y36(N.p),e.Y36(p.U$),e.Y36(u.hJ),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-permisssions"]],features:[e._Bn([m.YP,m.ez])],decls:54,vars:26,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"pi","pi-users","mr-2"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","icon","pi pi-user-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","label","Exportar","icon","pi pi-check"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} de {totalRecords} Permisos","selectionMode","multiple","dataKey","hotel",3,"value","tableStyle","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Crear un Permiso",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["type","text","placeholder","Auditar","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","aut","pInputText","","formControlName","codigo",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","descripcion",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Permiso","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],["header","Editar Rol","modal","modal",3,"visible","visibleChange","onVisibleChange"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","nombre",3,"value",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","codigo",3,"value",4,"ngIf"],["pButton","","pRipple","","label","Editar Permiso","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],[3,"value"],[1,"flex","gap-2"],["icon","pi pi-user-edit","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl",3,"value"],["type","text","pInputText","","formControlName","codigo",1,"w-full","mb-3","border-round-3xl",3,"value"]],template:function(o,n){1&o&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),e._uU(5,"Permisos"),e.qZA(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"i",5),e.TgZ(9,"span"),e._uU(10,"Permisos Creados"),e.qZA()()()(),e.TgZ(11,"div",6)(12,"button",7),e.NdJ("click",function(){return n.modalNewP()}),e.qZA(),e._UZ(13,"button",8),e.qZA()()(),e.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"p-table",12),e.YNc(18,w,6,0,"ng-template",13),e.YNc(19,U,11,0,"ng-template",14),e.YNc(20,y,13,4,"ng-template",15),e.qZA()()()(),e.TgZ(21,"p-dialog",16),e.NdJ("visibleChange",function(a){return n.crearPermit=a}),e.TgZ(22,"div",10)(23,"h5"),e._uU(24,"Completa el formulario"),e.qZA(),e.TgZ(25,"form",17),e.NdJ("ngSubmit",function(){return n.createPermission()}),e.TgZ(26,"div",18)(27,"div",19)(28,"label"),e._uU(29,"Nombre del Permiso"),e.qZA(),e._UZ(30,"input",20),e.qZA(),e.TgZ(31,"div",19)(32,"label"),e._uU(33,"C\xf3digo"),e.qZA(),e._UZ(34,"input",21),e.qZA(),e.TgZ(35,"div",19)(36,"label"),e._uU(37,"Descripcion"),e.qZA(),e._UZ(38,"input",22),e.qZA(),e.TgZ(39,"div",23),e._UZ(40,"button",24),e.qZA()()()()(),e.TgZ(41,"p-dialog",25),e.NdJ("visibleChange",function(a){return n.editarPermit=a})("onVisibleChange",function(){return n.editarPermit=!n.editarPermit}),e.TgZ(42,"form",17),e.NdJ("ngSubmit",function(){return n.updatePermission()}),e.TgZ(43,"div",18)(44,"div",19)(45,"label"),e._uU(46,"Nombre del Permiso"),e.qZA(),e.YNc(47,S,1,1,"input",26),e.qZA(),e.TgZ(48,"div",19)(49,"label"),e._uU(50,"C\xf3digo"),e.qZA(),e.YNc(51,I,1,1,"input",27),e.qZA(),e.TgZ(52,"div",23),e._UZ(53,"button",28),e.qZA()()()()),2&o&&(e.xp6(17),e.Q6J("value",n.permission)("tableStyle",e.DdM(21,J))("rows",10)("globalFilterFields",e.DdM(22,E))("paginator",!0)("rowsPerPageOptions",e.DdM(23,Y))("showCurrentPageReport",!0)("rowHover",!0),e.xp6(4),e.Akn(e.DdM(24,M)),e.Q6J("visible",n.crearPermit)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(4),e.Q6J("formGroup",n.formNewP),e.xp6(16),e.Akn(e.DdM(25,D)),e.Q6J("visible",n.editarPermit),e.xp6(1),e.Q6J("formGroup",n.formEditP),e.xp6(5),e.Q6J("ngIf",n.editarPermit),e.xp6(4),e.Q6J("ngIf",n.editarPermit))},dependencies:[h.O5,p.iA,m.jx,p.UA,p.Mo,u.Hq,u.zx,s._Y,s.Fj,s.JJ,s.JL,x.H,c.FN,T.o,g.V,s.sg,s.u],encapsulation:2})}return r})(),q=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[v.Bz.forChild([{path:"",component:_}]),v.Bz]})}return r})();var F=i(6068),B=i(6340),R=i(6022),V=i(6218),H=i(2352),Q=i(1865),O=i(354),z=i(9862),j=i(8712),G=i(5722);let $=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({providers:[{provide:z.TP,useClass:j.n,multi:!0},P.q,Z.s],imports:[h.ez,q,p.U$,F.O,s.u5,u.hJ,x.T,c.EV,B.V,R.Xt,T.j,V.A,H.kW,Q.cc,O.L$,g.S,G.ii.forRoot(),s.UX]})}return r})()}}]);