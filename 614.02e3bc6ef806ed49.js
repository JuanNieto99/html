"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[614],{5614:(Q,C,o)=>{o.r(C),o.d(C,{InternalSequenceModule:()=>pe});var h=o(6814),a=o(86),s=o(95),I=o(2791),S=o(3519),f=o.n(S),e=o(4946),v=o(8672),y=o(4444),Z=o(9862);let T=(()=>{class i{constructor(n){this.httpClient=n,this.baseUrl=y.D.url,this.endpointListar="/secuenciaInternaListar",this.endpointInternalSequenceGet="/secuenciaInternaEditar/",this.endpointInternalSequenceUpdate="/secuenciaInternaActualizar",this.endpointInternalSequenceCreate="/secuenciaInternaCrear",this.endpointDelete="/secuenciaInternaEliminar"}getAll(n,r="",t=1){return this.httpClient.post(`${this.baseUrl+this.endpointListar}?per_page=${n}&page=${t}&search=${r}`,{})}getInternalSequence(n){return this.httpClient.get(`${this.baseUrl+this.endpointInternalSequenceGet+n}`)}createInternalSequence(n){return this.httpClient.post(`${this.baseUrl+this.endpointInternalSequenceCreate}`,n)}updateInternalSequence(n){return this.httpClient.post(`${this.baseUrl+this.endpointInternalSequenceUpdate}`,n)}deleteInternalSequence(n){return this.httpClient.post(`${this.baseUrl+this.endpointDelete}`,n)}static#e=this.\u0275fac=function(r){return new(r||i)(e.LFG(Z.eN))};static#n=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var x=o(9664),M=o(5219),q=o(707),A=o(4480),U=o(3714),E=o(6218),l=o(2160),m=o(7213),d=o(7161);function _(i,u){if(1&i){const n=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.openModal())}),e.qZA()}}function p(i,u){if(1&i){const n=e.EpF();e.TgZ(0,"div",35),e._UZ(1,"span"),e.TgZ(2,"span",36)(3,"form",37)(4,"div",38)(5,"input",39),e.NdJ("input",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.searchInput())}),e.qZA(),e.TgZ(6,"button",40),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.search(t.dt))}),e.qZA()()()()()}if(2&i){const n=e.oxw();e.xp6(3),e.Q6J("formGroup",n.formSearch)}}function J(i,u){1&i&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Hotel"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Descripci\xf3n"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Recibo Inicial"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Recibo Actual"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Tipo Operacion"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Acciones"),e.qZA()())}function P(i,u){if(1&i){const n=e.EpF();e.TgZ(0,"p-button",44),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().$implicit,c=e.oxw();return e.KtG(c.editInternalSequence(t.id))}),e.qZA()}}function R(i,u){if(1&i){const n=e.EpF();e.TgZ(0,"p-button",45),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().$implicit,c=e.oxw();return e.KtG(c.confirmDelete(t.id))}),e.qZA()}}function w(i,u){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",41),e.YNc(12,P,1,0,"p-button",42),e._UZ(13,"p-confirmDialog"),e.YNc(14,R,1,0,"p-button",43),e.qZA()()),2&i){const n=u.$implicit,r=e.oxw();e.xp6(2),e.Oqu(n.hotel.nombre),e.xp6(2),e.Oqu(n.descripcion_secuencia),e.xp6(2),e.Oqu(n.secuencia_incial),e.xp6(2),e.Oqu(n.secuencia_actual),e.xp6(2),e.Oqu(null==n||null==n.tipo_operacion?null:n.tipo_operacion.nombre),e.xp6(2),e.Q6J("ngIf",r.permisoActualizar),e.xp6(2),e.Q6J("ngIf",r.permisoEliminar)}}function D(i,u){1&i&&(e.TgZ(0,"tr")(1,"td",46),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function Y(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function O(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function B(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function F(i,u){1&i&&e._UZ(0,"p-message",48)}function L(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function $(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function k(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function z(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function H(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function G(i,u){1&i&&e._UZ(0,"p-message",48)}function K(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function j(i,u){1&i&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}const W=function(){return{"min-width":"50rem"}},V=function(){return["nombre","descripcion_secuencia","secuencia_incial","secuencia_actual","acciones"]},N=function(){return{width:"50vw"}};let X=(()=>{class i{constructor(n,r,t){this.FB=n,this.spinner=r,this.InternalSequenceService=t,this.permisoCrear=I.e.hasPermission(["administracion.secuenciaInterna.crear"]),this.permisoActualizar=I.e.hasPermission(["administracion.secuenciaInterna.actualizar"]),this.permisoEliminar=I.e.hasPermission(["administracion.secuenciaInterna.eliminar"]),this.loadingTable=!1,this.pageCount=10,this.visibleModalInternalSequence=!0,this.visibleModalInternalSequenceEditar=!1,this.imagen=null,this.idEditando=0,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.first=0,this.rows=8}esMayor(n,r){return parseInt(n,10)>parseInt(r,10)}ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalInternalSequence=!1}openModal(){this.onCreate()}onCreate(){this.formCreateInternalSequence.reset(),this.InternalSequenceService.getInternalSequence(0).subscribe(n=>{this.hotel=n.hotel,this.secuenciaDescripcion=n.descripcion_secuencia,this.secuenciaInicial=n.secuencia_incial,this.secuenciaActual=n.secuencia_actual,this.tipo_operacion=n.tipo_operacion,this.visibleModalInternalSequence=!0},n=>{console.log("Error: ",n)})}onRemove(n){this.imagen=null}onSelect(n){this.imagen=n.currentFiles[0]}onPage(n){this.pageCount=n.rows,this.getIndex("",this.pageCount)}searchInput(){let n=this.formSearch.get("search").value;""==n&&this.getIndex(n)}search(n){let r=this.formSearch.get("search").value;this.getIndex(r)}submitCreate(){this.formCreateInternalSequence.valid?this.newInternalSequence():this.formCreateInternalSequence.markAllAsTouched()}newInternalSequence(){this.visibleModalInternalSequence=!0,this.spinner.show();let n=this.formCreateInternalSequence.value;n.hotel_id=n.hotel_id.id,n.tipo_operacion_id=n.tipo_operacion_id.id,n.estado=1,this.InternalSequenceService.createInternalSequence(n).subscribe(r=>{this.spinner.hide(),this.imagen=null,this.visibleModalInternalSequence=!1,"success"==r.code?(f().fire({title:"Exito",text:"Recibo interno creado exitosamente.",icon:"success"}),this.getIndex()):"warning"==r.code?f().fire({title:"Advertencia",text:r.mensaje,icon:"warning"}):f().fire({title:"Error",text:"Error al crear el recibo interno.",icon:"error"})},r=>{console.log("Error: ",r)})}editInternalSequence(n){this.idEditando=n,this.spinner.show(),this.InternalSequenceService.getInternalSequence(n).subscribe(r=>{let t,c;this.spinner.hide(),this.hotel=r.hotel,this.tipo_operacion=r.tipo_operacion;const g=r.secuencia_interna;g&&"descripcion_secuencia"in g&&(this.secuenciaDescripcion=g.descripcion_secuencia,this.secuenciaInicial=g.secuencia_incial,this.secuenciaActual=g.secuencia_actual,r.hotel.forEach(b=>{b.id==g.hotel_id&&(t=b)}),r.tipo_operacion.forEach(b=>{b.id==g.tipo_operacion_id&&(c=b)}),this.formEditInternalSequence.setValue({hotel_id:t,descripcion_secuencia:this.secuenciaDescripcion,secuencia_incial:this.secuenciaInicial,secuencia_actual:this.secuenciaActual,tipo_operacion_id:c})),setTimeout(()=>{this.visibleModalInternalSequenceEditar=!0},1)},r=>{console.log("Error: ",r)})}updateInternalSequence(){this.spinner.show();let n=this.formEditInternalSequence.value;n.hotel_id=n.hotel_id.id,n.tipo_operacion_id=n.tipo_operacion_id.id,n.id=this.idEditando,n.estado=1,this.InternalSequenceService.updateInternalSequence(n).subscribe(r=>{this.spinner.hide(),this.imagen=null,this.visibleModalInternalSequenceEditar=!1,"success"==r.code?(f().fire({title:"\xc9xito",text:"Recibo interno actualizado exitosamente.",icon:"success"}),this.getIndex()):f().fire({title:"Error",text:"Error al actualizar el recibo interno.",icon:"error"})},r=>{console.log("Error: ",r)})}submitUpdate(){this.formEditInternalSequence.valid&&this.updateInternalSequence()}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateInternalSequence=this.FB.group({hotel_id:["",[s.kI.required]],tipo_operacion_id:["",[s.kI.required]],descripcion_secuencia:["",[]],secuencia_incial:["",[s.kI.required,s.kI.pattern("^[0-9]*$")]],secuencia_actual:["",[s.kI.required,s.kI.pattern("^[0-9]*$")]]}),this.formEditInternalSequence=this.FB.group({hotel_id:["",[s.kI.required]],tipo_operacion_id:["",[s.kI.required]],descripcion_secuencia:["",[]],secuencia_incial:["",[s.kI.required,s.kI.pattern("^[0-9]*$")]],secuencia_actual:["",[s.kI.required,s.kI.pattern("^[0-9]*$")]]})}confirmDelete(n){f().fire({title:"\xbfEstas seguro que deseas eliminar \xe9ste recibo?",text:"Ten cuidado, esta acci\xf3n no se prodr\xe1 revertir",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&(this.spinner.show(),this.InternalSequenceService.deleteInternalSequence({id:n}).subscribe(t=>{this.spinner.hide(),"success"==t.code?(f().fire({title:"Exito",text:"Recibo eliminado exitosamente.",icon:"success"}),this.getIndex()):f().fire({title:"Error",text:"Error al eliminar el recibo.",icon:"error"})},t=>{console.log("Error: ",t)}))})}getIndex(n="",r=this.pageCount,t=1){this.spinner.show(),this.loadingTable=!0,this.InternalSequenceService.getAll(r,n,t).subscribe(c=>{this.loadingTable=!1,this.internalSequenceData=c.data,this.ultimaPage=c.last_page,this.countRegisters=c.total,this.ultimaPage=c.last_page,c.total>r&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},c=>{console.log("Error: ",c),this.spinner.hide()})}onPageChange(n){this.first=n.first,this.rows=n.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(s.qu),e.Y36(v.t2),e.Y36(T))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-internal-sequence"]],decls:88,vars:46,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2","icon","",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear Recibo Interno",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],["style","color: red;",4,"ngIf"],["optionLabel","nombre","formControlName","tipo_operacion_id",3,"options"],["type","number","min","0","pInputText","","formControlName","secuencia_incial",1,"w-full","mb-3","border-round-3xl"],["severity","error","class","padding","text","El recibo inicial no puede ser mayor al recibo actual",4,"ngIf"],["type","number","min","0","pInputText","","formControlName","secuencia_actual",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["type","text","pInputTextarea","","rows","3","cols","20","formControlName","descripcion_secuencia"],["pButton","","pRipple","","label","Crear Recibo Interno","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Recibo Interno",3,"visible","modal","draggable","resizable","visibleChange"],["pButton","","pRipple","","label","Editar Recibo Interno","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"],[2,"color","red"],["severity","error","text","El recibo inicial no puede ser mayor al recibo actual",1,"padding"]],template:function(r,t){1&r&&(e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Recibo Interno"),e.qZA()(),e.TgZ(6,"div",4),e.YNc(7,_,1,0,"button",5),e.qZA()()(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"p-table",9),e.NdJ("onPage",function(g){return t.onPage(g)}),e.YNc(12,p,7,1,"ng-template",10),e.YNc(13,J,13,0,"ng-template",11),e.YNc(14,w,15,7,"ng-template",12),e.YNc(15,D,3,0,"ng-template",13),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"div",14)(18,"span",15)(19,"button",16),e.NdJ("click",function(){return t.leftTable()}),e.qZA(),e._UZ(20,"button",17),e.TgZ(21,"button",18),e.NdJ("click",function(){return t.rightTable()}),e.qZA()()()()()(),e.TgZ(22,"p-dialog",19),e.NdJ("visibleChange",function(g){return t.visibleModalInternalSequence=g}),e.TgZ(23,"div",7)(24,"form",20),e.NdJ("ngSubmit",function(){return t.submitCreate()}),e.TgZ(25,"div",21)(26,"div",22)(27,"label"),e._uU(28,"Hotel"),e.qZA(),e._UZ(29,"p-dropdown",23),e.YNc(30,Y,2,0,"div",24),e.qZA(),e.TgZ(31,"div",22)(32,"label"),e._uU(33,"Tipo Operacion"),e.qZA(),e._UZ(34,"p-dropdown",25),e.YNc(35,O,2,0,"div",24),e.qZA(),e.TgZ(36,"div",22)(37,"label"),e._uU(38,"Recibo Inicial"),e.qZA(),e._UZ(39,"input",26),e.YNc(40,B,2,0,"div",24),e.YNc(41,F,1,0,"p-message",27),e.qZA(),e.TgZ(42,"div",22)(43,"label"),e._uU(44,"Recibo Actual"),e.qZA(),e._UZ(45,"input",28),e.YNc(46,L,2,0,"div",24),e.qZA(),e.TgZ(47,"div",29)(48,"label"),e._uU(49,"Descripci\xf3n"),e.qZA(),e._UZ(50,"textarea",30),e.YNc(51,$,2,0,"div",24),e.qZA(),e.TgZ(52,"div",29),e._UZ(53,"button",31),e.qZA()(),e._UZ(54,"br"),e.qZA()()(),e.TgZ(55,"p-dialog",32),e.NdJ("visibleChange",function(g){return t.visibleModalInternalSequenceEditar=g}),e.TgZ(56,"div",7)(57,"form",20),e.NdJ("ngSubmit",function(){return t.submitUpdate()}),e.TgZ(58,"div",21)(59,"div",22)(60,"label"),e._uU(61,"Hotel"),e.qZA(),e._UZ(62,"p-dropdown",23),e.YNc(63,k,2,0,"div",24),e.qZA(),e.TgZ(64,"div",22)(65,"label"),e._uU(66,"Tipo Operacion"),e.qZA(),e._UZ(67,"p-dropdown",25),e.YNc(68,z,2,0,"div",24),e.qZA(),e.TgZ(69,"div",22)(70,"label"),e._uU(71,"Recibo Inicial"),e.qZA(),e._UZ(72,"input",26),e.YNc(73,H,2,0,"div",24),e.YNc(74,G,1,0,"p-message",27),e.qZA(),e.TgZ(75,"div",22)(76,"label"),e._uU(77,"Recibo Actual"),e.qZA(),e._UZ(78,"input",28),e.YNc(79,K,2,0,"div",24),e.qZA(),e.TgZ(80,"div",29)(81,"label"),e._uU(82,"Descripci\xf3n"),e.qZA(),e._UZ(83,"textarea",30),e.YNc(84,j,2,0,"div",24),e.qZA(),e.TgZ(85,"div",29),e._UZ(86,"button",33),e.qZA()(),e._UZ(87,"br"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("ngIf",t.permisoCrear),e.xp6(4),e.Q6J("value",t.internalSequenceData)("tableStyle",e.DdM(42,W))("loading",t.loadingTable)("rows",8)("globalFilterFields",e.DdM(43,V))("rowHover",!0),e.xp6(8),e.Q6J("disabled",!t.disablePageLeft),e.xp6(1),e.Q6J("label",t.pageActual),e.xp6(1),e.Q6J("disabled",!t.disablePageRight),e.xp6(1),e.Akn(e.DdM(44,N)),e.Q6J("visible",t.visibleModalInternalSequence)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",t.formCreateInternalSequence),e.xp6(5),e.Q6J("options",t.hotel),e.xp6(1),e.Q6J("ngIf",t.formCreateInternalSequence.get("hotel_id").hasError("required")),e.xp6(4),e.Q6J("options",t.tipo_operacion),e.xp6(1),e.Q6J("ngIf",t.formCreateInternalSequence.get("tipo_operacion_id").hasError("required")),e.xp6(5),e.Q6J("ngIf",t.formCreateInternalSequence.get("secuencia_incial").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formCreateInternalSequence.get("secuencia_incial").value,t.formCreateInternalSequence.get("secuencia_actual").value)),e.xp6(5),e.Q6J("ngIf",t.formCreateInternalSequence.get("secuencia_actual").hasError("required")),e.xp6(5),e.Q6J("ngIf",t.formCreateInternalSequence.get("descripcion_secuencia").hasError("required")),e.xp6(2),e.Q6J("disabled",t.esMayor(t.formCreateInternalSequence.get("secuencia_incial").value,t.formCreateInternalSequence.get("secuencia_actual").value)||!t.formCreateInternalSequence.valid),e.xp6(2),e.Akn(e.DdM(45,N)),e.Q6J("visible",t.visibleModalInternalSequenceEditar)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",t.formEditInternalSequence),e.xp6(5),e.Q6J("options",t.hotel),e.xp6(1),e.Q6J("ngIf",t.formEditInternalSequence.get("hotel_id").hasError("required")),e.xp6(4),e.Q6J("options",t.tipo_operacion),e.xp6(1),e.Q6J("ngIf",t.formCreateInternalSequence.get("tipo_operacion_id").hasError("required")),e.xp6(5),e.Q6J("ngIf",t.formEditInternalSequence.get("secuencia_incial").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formEditInternalSequence.get("secuencia_incial").value,t.formEditInternalSequence.get("secuencia_actual").value)),e.xp6(5),e.Q6J("ngIf",t.formEditInternalSequence.get("secuencia_actual").hasError("required")),e.xp6(5),e.Q6J("ngIf",t.formEditInternalSequence.get("descripcion_secuencia").hasError("required")),e.xp6(2),e.Q6J("disabled",t.esMayor(t.formEditInternalSequence.get("secuencia_incial").value,t.formEditInternalSequence.get("secuencia_actual").value)||!t.formEditInternalSequence.valid))},dependencies:[h.O5,x.iA,M.jx,q.Hq,q.zx,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.qQ,A.H,U.o,E.g,l.Lt,m.V,s.sg,s.u,v.Ro,d.q],styles:["svg[_ngcontent-%COMP%]{width:45%}"]})}return i})();var ee=o(2506);let ne=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:X,canActivate:[ee.a],data:{permissions:["administracion.secuenciaInterna"]}}]),a.Bz]})}return i})();var te=o(6068),ie=o(4104),ae=o(6022),re=o(6340),oe=o(5722),le=o(354),se=o(1712),ce=o(1865),ue=o(8712);let pe=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({providers:[{provide:Z.TP,useClass:ue.n,multi:!0},T],imports:[h.ez,ne,x.U$,te.O,s.u5,q.hJ,A.T,ie.EV,re.V,ae.Xt,U.j,E.A,l.kW,ce.cc,le.L$,m.S,oe.ii.forRoot(),s.UX,v.ef,se.U,d.O]})}return i})()},7161:(Q,C,o)=>{o.d(C,{O:()=>E,q:()=>U});var h=o(6814),a=o(4946),s=o(2591),I=o(2736),S=o(3823),f=o(8468);function e(l,m){1&l&&a._UZ(0,"CheckIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function v(l,m){1&l&&a._UZ(0,"InfoCircleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function y(l,m){1&l&&a._UZ(0,"TimesCircleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function Z(l,m){1&l&&a._UZ(0,"ExclamationTriangleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function T(l,m){if(1&l&&a._UZ(0,"span",6),2&l){const d=a.oxw(2);a.Q6J("innerHTML",d.text,a.oJD)}}function x(l,m){if(1&l&&(a.TgZ(0,"div"),a.YNc(1,T,1,1,"span",5),a.qZA()),2&l){const d=a.oxw();a.xp6(1),a.Q6J("ngIf",!d.escape)}}function M(l,m){if(1&l&&(a.TgZ(0,"span",8),a._uU(1),a.qZA()),2&l){const d=a.oxw(2);a.xp6(1),a.Oqu(d.text)}}function q(l,m){if(1&l&&a.YNc(0,M,2,1,"span",7),2&l){const d=a.oxw();a.Q6J("ngIf",d.escape)}}const A=function(l,m,d,_,p){return{"p-inline-message-info":l,"p-inline-message-warn":m,"p-inline-message-error":d,"p-inline-message-success":_,"p-inline-message-icon-only":p}};let U=(()=>{class l{severity;text;escape=!0;style;styleClass;get icon(){return this.severity&&this.severity.trim()?this.severity:"info"}static \u0275fac=function(_){return new(_||l)};static \u0275cmp=a.Xpm({type:l,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:8,vars:16,consts:[["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngIf","ngIfElse"],["escapeOut",""],[3,"styleClass"],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(_,p){if(1&_&&(a.TgZ(0,"div",0),a.YNc(1,e,1,1,"CheckIcon",1),a.YNc(2,v,1,1,"InfoCircleIcon",1),a.YNc(3,y,1,1,"TimesCircleIcon",1),a.YNc(4,Z,1,1,"ExclamationTriangleIcon",1),a.YNc(5,x,2,1,"div",2),a.YNc(6,q,1,1,"ng-template",null,3,a.W1O),a.qZA()),2&_){const J=a.MAs(7);a.Tol(p.styleClass),a.Q6J("ngStyle",p.style)("ngClass",a.qbA(10,A,"info"===p.severity,"warn"===p.severity,"error"===p.severity,"success"===p.severity,null==p.text)),a.xp6(1),a.Q6J("ngIf","success"===p.icon),a.xp6(1),a.Q6J("ngIf","info"===p.icon),a.xp6(1),a.Q6J("ngIf","error"===p.icon),a.xp6(1),a.Q6J("ngIf","warn"===p.icon),a.xp6(1),a.Q6J("ngIf",!p.escape)("ngIfElse",J)}},dependencies:function(){return[h.mk,h.O5,h.PC,s.n,S.u,f.x,I.L]},styles:[".p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}\n"],encapsulation:2,changeDetection:0})}return l})(),E=(()=>{class l{static \u0275fac=function(_){return new(_||l)};static \u0275mod=a.oAB({type:l});static \u0275inj=a.cJS({imports:[h.ez,s.n,S.u,f.x,I.L]})}return l})()}}]);