"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[155],{9155:(Tt,A,n)=>{n.r(A),n.d(A,{WalletsModule:()=>vt});var p=n(6814),r=n(95),Z=n(9664),w=n(6068),m=n(707),f=n(4480),W=n(4104),v=n(6340),y=n(6022),_=n(3714),J=n(6218),q=n(2160),I=n(1865),E=n(354),U=n(7213),N=n(9862),S=n(8712),D=n(5722),c=n(86),F=n(3519),u=n.n(F),t=n(4946),g=n(8672),b=n(1082),x=n(5219);function P(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",37),t._UZ(1,"span"),t.TgZ(2,"span",38)(3,"form",39)(4,"div",40)(5,"input",41),t.NdJ("input",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchInput())}),t.qZA(),t.TgZ(6,"button",42),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.search(i.dt))}),t.qZA()()()()()}if(2&a){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.formSearch)}}function Y(a,s){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Hotel"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Caja"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Base"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Tipo Caja"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Usuario"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Descripci\xf3n"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Acciones"),t.qZA()())}function B(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td",43)(15,"p-button",44),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.editWallet(o.id))}),t.qZA(),t._UZ(16,"p-confirmDialog"),t.TgZ(17,"p-button",45),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.confirmDelete(o.id))}),t.qZA()()()}if(2&a){const e=s.$implicit;t.xp6(2),t.Oqu(e.hotel.nombre),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(t.lcZ(7,6,e.base)),t.xp6(3),t.Oqu(e.tipo_cajas.nombre),t.xp6(2),t.Oqu(e.usuario.usuario),t.xp6(2),t.Oqu(e.descripcion)}}function L(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function Q(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function M(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function k(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function H(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function R(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function O(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function G(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function z(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function $(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function K(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}function X(a,s){1&a&&(t.TgZ(0,"div",46),t._uU(1,"Campo requerido"),t.qZA())}const V=function(){return{"min-width":"50rem"}},tt=function(){return["nombre","descripcion_secuencia","secuencia_incial","secuencia_actual","acciones"]},j=function(){return{width:"50vw"}};let et=(()=>{class a{constructor(e,l,i){this.FB=e,this.spinner=l,this.WalletService=i,this.loadingTable=!1,this.visibleModalWallet=!1,this.visibleModalWalletEditar=!1,this.idEditando=0,this.pageCount=10,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.first=0,this.rows=8}ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalWallet=!1}getIndex(e="",l=this.pageCount,i=1){this.spinner.show(),this.loadingTable=!0,this.WalletService.getAll(l,e,i).subscribe(o=>{this.loadingTable=!1,this.walletData=o.data,this.ultimaPage=o.last_page,this.countRegisters=o.total,this.ultimaPage=o.last_page,o.total>l&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},o=>{console.log("Error: ",o),this.spinner.hide()})}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateWallet=this.FB.group({hotel_id:["",[r.kI.required]],nombre:["",[r.kI.required]],descripcion:["",[]],base:["",[r.kI.required]],tipo:["",[r.kI.required]],usuario_id:["",[r.kI.required]]}),this.formEditWallet=this.FB.group({hotel_id:["",[r.kI.required]],nombre:["",[r.kI.required]],descripcion:["",[]],base:["",[r.kI.required]],tipo:["",[r.kI.required]],usuario_id:["",[r.kI.required]]})}openModal(){this.onCreate()}onCreate(){this.formCreateWallet.reset(),this.WalletService.getWallet(0).subscribe(e=>{this.hotel=e.hotel,this.nombre=e.nombre,this.descripcion=e.descripcion,this.base=e.base,this.tipoCaja=e.tipo_caja,this.usuarios=e.usuario,this.visibleModalWallet=!0},e=>{console.log("Error: ",e)})}submitCreate(){this.formCreateWallet.valid?this.newWallet():this.formCreateWallet.markAllAsTouched()}newWallet(){this.visibleModalWallet=!0,this.spinner.show();let e=this.formCreateWallet.value;e.hotel_id=e.hotel_id.id,e.usuario_id=e.usuario_id.id,e.tipo=e.tipo.id,e.estado=1,this.WalletService.createWallet(e).subscribe(l=>{this.spinner.hide(),this.visibleModalWallet=!1,"success"==l.code?(u().fire({title:"Exito",text:"Caja creada exitosamente.",icon:"success"}),this.getIndex()):"warning"==l.code?u().fire({title:"Advertencia",text:l.error,icon:"warning"}):u().fire({title:"Error",text:"Error al crear la caja.",icon:"error"})},l=>{console.log("Error: ",l)})}submitUpdate(){this.formEditWallet.valid&&this.updateWallet()}editWallet(e){this.idEditando=e,this.spinner.show(),this.WalletService.getWallet(e).subscribe(l=>{this.spinner.hide();const i=l.caja;this.hotel=l.hotel,this.nombre=i.nombre,this.descripcion=i.descripcion,this.base=i.base,this.tipoCaja=l.tipo_caja,this.usuarios=l.usuario,this.formEditWallet.setValue({hotel_id:this.hotel,tipo:this.tipoCaja,nombre:this.nombre,base:this.base,usuario_id:i.usuario_id,descripcion:this.descripcion}),setTimeout(()=>{this.visibleModalWalletEditar=!0},1)},l=>{console.log("Error: ",l)})}updateWallet(){this.spinner.show();let e=this.formEditWallet.value;e.tipo=e.tipo.id,e.usuario_id=e.usuario_id.id,e.hotel_id=e.hotel_id.id,e.id=this.idEditando,e.estado=1,this.WalletService.updateWallet(e).subscribe(l=>{this.spinner.hide(),this.visibleModalWalletEditar=!1,"success"==l.code?(u().fire({title:"\xc9xito",text:"Caja actualizada exitosamente.",icon:"success"}),this.getIndex()):u().fire({title:"Error",text:"Error al actualizar la caja.",icon:"error"})},l=>{console.log("Error: ",l)})}confirmDelete(e){u().fire({title:"\xbfEstas seguro que deseas eliminar esta caja?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(l=>{l.isConfirmed&&(this.spinner.show(),this.WalletService.deleteWallet({id:e}).subscribe(i=>{this.spinner.hide(),"success"==i.code?(u().fire({title:"Exito",text:"Caja eliminada exitosamente.",icon:"success"}),this.getIndex()):u().fire({title:"Error",text:"Error al eliminar la caja.",icon:"error"})},i=>{console.log("Error: ",i)}))})}searchInput(){let e=this.formSearch.get("search").value;""==e&&this.getIndex(e)}search(e){let l=this.formSearch.get("search").value;this.getIndex(l)}onPage(e){this.pageCount=e.rows,this.getIndex("",this.pageCount)}onPageChange(e){this.first=e.first,this.rows=e.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}static#t=this.\u0275fac=function(l){return new(l||a)(t.Y36(r.qu),t.Y36(g.t2),t.Y36(b.X))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-permisssions"]],decls:96,vars:47,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear una Caja",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-8"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["style","color: red;",4,"ngIf"],[1,"field","col-12","md:col-4"],["type","number","min","1","pInputText","","formControlName","base",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-6"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],["optionLabel","nombre","formControlName","tipo",3,"options"],["optionLabel","usuario","formControlName","usuario_id",3,"options"],["type","text","pInputText","","formControlName","descripcion",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Caja","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Caja",3,"visible","modal","draggable","resizable","visibleChange"],["pButton","","pRipple","","label","Editar Caja","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],[2,"color","red"]],template:function(l,i){1&l&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5,"Cajas"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"div",5),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return i.openModal()}),t.qZA()()()(),t.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"p-table",11),t.NdJ("onPage",function(d){return i.onPage(d)}),t.YNc(14,P,7,1,"ng-template",12),t.YNc(15,Y,15,0,"ng-template",13),t.YNc(16,B,18,8,"ng-template",14),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"div",15)(19,"span",16)(20,"button",17),t.NdJ("click",function(){return i.leftTable()}),t.qZA(),t._UZ(21,"button",18),t.TgZ(22,"button",19),t.NdJ("click",function(){return i.rightTable()}),t.qZA()()()()()(),t.TgZ(23,"p-dialog",20),t.NdJ("visibleChange",function(d){return i.visibleModalWallet=d}),t.TgZ(24,"div",9)(25,"form",21),t.NdJ("ngSubmit",function(){return i.submitCreate()}),t.TgZ(26,"div",22)(27,"div",23)(28,"label"),t._uU(29,"Nombre"),t.qZA(),t._UZ(30,"input",24),t.YNc(31,L,2,0,"div",25),t.qZA(),t.TgZ(32,"div",26)(33,"label"),t._uU(34,"Base"),t.qZA(),t._UZ(35,"input",27),t.YNc(36,Q,2,0,"div",25),t.qZA(),t.TgZ(37,"div",28)(38,"label"),t._uU(39,"Hotel"),t.qZA(),t._UZ(40,"p-dropdown",29),t.YNc(41,M,2,0,"div",25),t.qZA(),t.TgZ(42,"div",28)(43,"label"),t._uU(44,"Tipo de Caja"),t.qZA(),t._UZ(45,"p-dropdown",30),t.YNc(46,k,2,0,"div",25),t.qZA(),t.TgZ(47,"div",28)(48,"label"),t._uU(49,"Usuario"),t.qZA(),t._UZ(50,"p-dropdown",31),t.YNc(51,H,2,0,"div",25),t.qZA(),t.TgZ(52,"div",28)(53,"label"),t._uU(54,"Descripci\xf3n"),t.qZA(),t._UZ(55,"input",32),t.YNc(56,R,2,0,"div",25),t.qZA(),t.TgZ(57,"div",33),t._UZ(58,"button",34),t.qZA()()()()(),t.TgZ(59,"p-dialog",35),t.NdJ("visibleChange",function(d){return i.visibleModalWalletEditar=d}),t.TgZ(60,"div",9)(61,"form",21),t.NdJ("ngSubmit",function(){return i.submitUpdate()}),t.TgZ(62,"div",22)(63,"div",23)(64,"label"),t._uU(65,"Nombre"),t.qZA(),t._UZ(66,"input",24),t.YNc(67,O,2,0,"div",25),t.qZA(),t.TgZ(68,"div",26)(69,"label"),t._uU(70,"Base"),t.qZA(),t._UZ(71,"input",27),t.YNc(72,G,2,0,"div",25),t.qZA(),t.TgZ(73,"div",28)(74,"label"),t._uU(75,"Hotel"),t.qZA(),t._UZ(76,"p-dropdown",29),t.YNc(77,z,2,0,"div",25),t.qZA(),t.TgZ(78,"div",28)(79,"label"),t._uU(80,"Tipo de Caja"),t.qZA(),t._UZ(81,"p-dropdown",30),t.YNc(82,$,2,0,"div",25),t.qZA(),t.TgZ(83,"div",28)(84,"label"),t._uU(85,"Usuario"),t.qZA(),t._UZ(86,"p-dropdown",31),t.YNc(87,K,2,0,"div",25),t.qZA(),t.TgZ(88,"div",28)(89,"label"),t._uU(90,"Descripci\xf3n"),t.qZA(),t._UZ(91,"input",32),t.YNc(92,X,2,0,"div",25),t.qZA(),t.TgZ(93,"div",33),t._UZ(94,"button",36),t.qZA()(),t._UZ(95,"br"),t.qZA()()()),2&l&&(t.xp6(13),t.Q6J("value",i.walletData)("tableStyle",t.DdM(43,V))("loading",i.loadingTable)("rows",8)("globalFilterFields",t.DdM(44,tt))("rowHover",!0),t.xp6(7),t.Q6J("disabled",!i.disablePageLeft),t.xp6(1),t.Q6J("label",i.pageActual),t.xp6(1),t.Q6J("disabled",!i.disablePageRight),t.xp6(1),t.Akn(t.DdM(45,j)),t.Q6J("visible",i.visibleModalWallet)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",i.formCreateWallet),t.xp6(6),t.Q6J("ngIf",i.formCreateWallet.get("nombre").hasError("required")),t.xp6(5),t.Q6J("ngIf",i.formCreateWallet.get("base").hasError("required")),t.xp6(4),t.Q6J("options",i.hotel),t.xp6(1),t.Q6J("ngIf",i.formCreateWallet.get("hotel_id").hasError("required")),t.xp6(4),t.Q6J("options",i.tipoCaja),t.xp6(1),t.Q6J("ngIf",i.formCreateWallet.get("tipo").hasError("required")),t.xp6(4),t.Q6J("options",i.usuarios),t.xp6(1),t.Q6J("ngIf",i.formCreateWallet.get("usuario_id").hasError("required")),t.xp6(5),t.Q6J("ngIf",i.formCreateWallet.get("descripcion").hasError("required")),t.xp6(2),t.Q6J("disabled",i.formCreateWallet.invalid),t.xp6(1),t.Akn(t.DdM(46,j)),t.Q6J("visible",i.visibleModalWalletEditar)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",i.formEditWallet),t.xp6(6),t.Q6J("ngIf",i.formEditWallet.get("nombre").hasError("required")),t.xp6(5),t.Q6J("ngIf",i.formEditWallet.get("base").hasError("required")),t.xp6(4),t.Q6J("options",i.hotel),t.xp6(1),t.Q6J("ngIf",i.formEditWallet.get("hotel_id").hasError("required")),t.xp6(4),t.Q6J("options",i.tipoCaja),t.xp6(1),t.Q6J("ngIf",i.formEditWallet.get("tipo").hasError("required")),t.xp6(4),t.Q6J("options",i.usuarios),t.xp6(1),t.Q6J("ngIf",i.formEditWallet.get("usuario_id").hasError("required")),t.xp6(5),t.Q6J("ngIf",i.formEditWallet.get("descripcion").hasError("required")),t.xp6(2),t.Q6J("disabled",i.formEditWallet.invalid))},dependencies:[p.O5,Z.iA,x.jx,m.Hq,m.zx,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.qQ,f.H,_.o,q.Lt,U.V,g.Ro,r.sg,r.u,p.H9],encapsulation:2})}return a})();var T=n(3859);let it=(()=>{class a{constructor(e,l,i,o,d,h,xt){this.router=e,this.route=l,this.FB=i,this.datePipe=o,this.spinner=d,this.walletService=h,this.layoutService=xt}ngOnInit(){this.spinner.hide(),this.usuarioId=parseInt(this.route.snapshot.paramMap.get("id")),this.buildForm(),this.getDataAbrirCaja()}buildForm(){this.hoy=this.datePipe.transform(new Date,"yyyy-MM-dd"),this.form=this.FB.group({base:[this.dataCaja?.base,[r.kI.required]],fecha:[this.hoy,[r.kI.required]],usuario:[this.dataCaja?.usuario.usuario,[r.kI.required]],nombreCaja:[this.dataCaja?.nombre,[r.kI.required]]}),this.form.disable()}abrirCaja(){this.walletService.abrirCaja({usuario_id:this.dataCaja?.usuario.id,caja_id:this.dataCaja?.id,saldo_base:this.dataCaja?.base}).subscribe(l=>{this.spinner.hide();let i=l;"success"==i.code?(this.layoutService.reloadComponent(),u().fire({title:"Exito",text:"Caja Abierta exitosamente.",icon:"success"}),this.router.navigate(["dashboard/admin/wallets/detail"])):"warning"==i.code?u().fire({title:"Advertencia",text:i.error,icon:"warning"}):u().fire({title:"Error",text:"Error al abrir caja.",icon:"error"})})}getDataAbrirCaja(){this.walletService.getAbrirCaja(this.usuarioId).subscribe(e=>{this.dataCaja=e.caja,this.buildForm()})}static#t=this.\u0275fac=function(l){return new(l||a)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(r.qu),t.Y36(p.uU),t.Y36(g.t2),t.Y36(b.X),t.Y36(T.P))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-wallets"]],decls:28,vars:2,consts:[["type","ball-scale-multiple","fullScreen","true","type","true"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-center","flex-column","lg:flex-row"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",1,"p-button-outlined","mr-4",3,"routerLink"],[1,"font-medium","text-3xl","text-900"],[1,"card","mt-3"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["type","text","pInputText","","formControlName","nombreCaja",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","usuario",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","base",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-6"],["type","text","pInputText","","formControlName","fecha",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Abrir Caja","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"]],template:function(l,i){1&l&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"button",3),t.TgZ(4,"div",4),t._uU(5,"Configurar Caja"),t.qZA()()(),t.TgZ(6,"div",5)(7,"p-toolbar")(8,"form",6),t.NdJ("ngSubmit",function(){return i.abrirCaja()}),t.TgZ(9,"div",7)(10,"div",8)(11,"label"),t._uU(12,"Nombre Caja Abrir"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",8)(15,"label"),t._uU(16,"Usuario"),t.qZA(),t._UZ(17,"input",10),t.qZA(),t.TgZ(18,"div",8)(19,"label"),t._uU(20,"Base"),t.qZA(),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"div",12)(23,"label"),t._uU(24,"Fecha Apertura"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.TgZ(26,"div",14),t._UZ(27,"button",15),t.qZA()()()()()),2&l&&(t.xp6(3),t.Q6J("routerLink","/dashboard/admin/wallets/detail"),t.xp6(5),t.Q6J("formGroup",i.form))},dependencies:[c.rH,m.Hq,r._Y,r.Fj,r.JJ,r.JL,f.H,v.o,_.o,g.Ro,r.sg,r.u]})}return a})();function at(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"h5",19),t.TgZ(2,"span",20)(3,"form",21)(4,"div",22)(5,"input",23),t.NdJ("input",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchInput())}),t.qZA(),t.TgZ(6,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.search(i.dt))}),t.qZA()()()()()}if(2&a){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.formSearch)}}function lt(a,s){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Nombre de Caja"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Saldo Inicial"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Saldo Final"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Diferencia"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Tipo"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Descripcion"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Estado"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Acciones"),t.qZA()())}function ot(a,s){1&a&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Abierta"))}function rt(a,s){1&a&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Cerrada"))}function nt(a,s){1&a&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Anulada"))}function st(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"number"),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.YNc(18,ot,2,1,"td",25),t.YNc(19,rt,2,1,"td",25),t.YNc(20,nt,2,1,"td",25),t.TgZ(21,"td",26)(22,"p-button",27),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.verDetalleCaja(o))}),t.qZA(),t.TgZ(23,"p-button",28),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.confirmDelete(o.id))}),t.qZA()()()}if(2&a){const e=s.$implicit;t.xp6(2),t.Oqu(e.caja.nombre),t.xp6(2),t.hij("$ ",t.lcZ(5,9,e.abrir_saldo),""),t.xp6(3),t.hij("$ ",e.cierre_saldo?t.lcZ(8,11,e.cierre_saldo):t.lcZ(9,13,0),""),t.xp6(4),t.hij("$ ",e.diferencia?t.lcZ(12,15,e.diferencia):t.lcZ(13,17,0),""),t.xp6(4),t.hij(" ",e.caja.tipo_cajas.nombre,""),t.xp6(2),t.hij(" ",e.descripcion,""),t.xp6(1),t.Q6J("ngIf","1"==e.estado),t.xp6(1),t.Q6J("ngIf","2"==e.estado),t.xp6(1),t.Q6J("ngIf","0"==e.estado)}}const dt=function(){return{"min-width":"50rem"}},ut=function(){return["nombre","medida","precio","cantidad","inventario","acciones"]};let pt=(()=>{class a{constructor(e,l,i,o,d){this.walletService=e,this.spinner=l,this.router=i,this.FB=o,this.layoutService=d,this.loadingTable=!0,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.pageCount=30,this.items=[]}ngOnInit(){this.buildForm(),this.getIndex(),this.currentUser=JSON.parse(localStorage.getItem("currentUser")),this.usuario_id=this.currentUser.usuario.id,this.items=[{label:"Anular Caja",command:e=>this.opcionSelect(e,"anularCaja")},{label:"Cerrar Caja",command:e=>this.opcionSelect(e,"cerrarCaja")}]}buildForm(){this.formSearch=this.FB.group({search:["",[]]})}leftTable(){}search(e){let l=this.formSearch.get("search").value;this.getIndex(l)}rightTable(){}onPage(e){}getIndex(e="",l=this.pageCount,i=1){this.spinner.show(),this.loadingTable=!0,this.walletService.getAllDetalleCaja(l,e,i).subscribe(o=>{this.loadingTable=!1,this.ultimaPage=o.last_page,this.detailWallets=o.data,o.total>l&&(this.disablePageRight=!0),this.spinner.hide()},o=>{console.log("Error: ",o),this.spinner.hide()})}opcionSelect(e,l){}confirmDelete(e){u().fire({title:"\xbfSeguro Deseas Anular?",text:"",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(l=>{l.isConfirmed&&this.sendAnularCaja(e)})}sendAnularCaja(e){let l={id:e};this.spinner.show(),this.walletService.anularCaja(l).subscribe(i=>{this.spinner.hide();let o=i;"success"==o.code?(this.layoutService.reloadComponent(),u().fire({title:"Exito",text:"Caja Anulada Exitosamente.",icon:"success"}),this.getIndex()):"warning"==o.code?u().fire({title:"Advertencia",text:o.error,icon:"warning"}):u().fire({title:"Error",text:"Error Al Anular.",icon:"error"})})}abrirCaja(){this.validarCajaByUsuario()}validarCajaByUsuario(){this.walletService.validarCajaAbiertaByUsuario(this.usuario_id).subscribe(e=>{e.usuario_tiene_caja?u().fire({title:"Advertencia",text:e.msm,icon:"warning"}):this.router.navigate(["dashboard/admin/wallets/"+this.usuario_id+"/abrirCaja"])})}generarPdf(){}verDetalleCaja(e){this.router.navigate(["dashboard/admin/wallets/"+e.id+"/showDetail"])}static#t=this.\u0275fac=function(l){return new(l||a)(t.Y36(b.X),t.Y36(g.t2),t.Y36(c.F0),t.Y36(r.qu),t.Y36(T.P))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-wallets-list"]],decls:21,vars:11,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Abrir Caja",1,"p-button-outlined","mr-2",3,"click"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[4,"ngIf"],[1,"flex","gap-2"],["label","Ver","severity","danger",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"]],template:function(l,i){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),t._uU(4,"Abrir y Cerrar Caja"),t.qZA(),t._UZ(5,"div",3),t.qZA(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return i.abrirCaja()}),t.qZA()()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"p-table",9),t.NdJ("onPage",function(d){return i.onPage(d)}),t.YNc(12,at,7,1,"ng-template",10),t.YNc(13,lt,17,0,"ng-template",11),t.YNc(14,st,24,19,"ng-template",12),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"div",13)(17,"span",14)(18,"button",15),t.NdJ("click",function(){return i.leftTable()}),t.qZA(),t._UZ(19,"button",16),t.TgZ(20,"button",17),t.NdJ("click",function(){return i.rightTable()}),t.qZA()()()()()()),2&l&&(t.xp6(11),t.Q6J("value",i.detailWallets)("tableStyle",t.DdM(9,dt))("loading",i.loadingTable)("rows",8)("globalFilterFields",t.DdM(10,ut))("rowHover",!0),t.xp6(7),t.Q6J("disabled",!i.disablePageLeft),t.xp6(1),t.Q6J("label",i.pageActual),t.xp6(1),t.Q6J("disabled",!i.disablePageRight))},dependencies:[p.O5,Z.iA,x.jx,m.Hq,m.zx,r._Y,r.Fj,r.JJ,r.JL,f.H,_.o,r.sg,r.u,p.JJ]})}return a})();var C=n(2506);function ct(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"p-button",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.cerrarCaja())}),t.qZA()}}function mt(a,s){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Concepto"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Valor"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Tipo"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"secuencia"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Fecha"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Operacion"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Usuario"),t.qZA()())}function gt(a,s){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&a){const e=s.$implicit;t.xp6(2),t.Oqu(e.operacion.nombre),t.xp6(2),t.hij("$ ",t.lcZ(5,7,e.precio),""),t.xp6(3),t.Oqu(1==e.tipo?"Ingreso":"Egreso"),t.xp6(2),t.hij(" ",e.secuencia,""),t.xp6(2),t.Oqu(t.xi3(12,9,e.created_at,"dd/MM/yyyy HH:mm:ss")),t.xp6(3),t.Oqu(e.operacion.nombre),t.xp6(2),t.Oqu(e.usuario.usuario)}}const ht=function(){return{"min-width":"50rem"}},ft=function(){return["nombre","medida","precio","cantidad","inventario","acciones"]};let _t=(()=>{class a{constructor(e,l,i,o,d,h){this.router=e,this.route=l,this.walletService=i,this.FB=o,this.spinner=d,this.layoutService=h,this.loadingTable=!0,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.pageCount=30,this.estado="",this.caja_id=0,this.total=0}ngOnInit(){this.detalle_id=parseInt(this.route.snapshot.paramMap.get("id")),this.buildForm(),this.getCajaDetail()}buildForm(){this.form=this.FB.group({estado:[this.estado,[]],total:[this.total,[]]}),this.form.disable()}onPage(e){}cerrarCaja(){u().fire({title:"Agrege una descripci\xf3n antes de cerrar la caja.",text:"",icon:"warning",showCancelButton:!0,confirmButtonText:"Cerrar",input:"text",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&this.sendCerrarCaja(this.detalle_id,this.caja_id,e.value)})}sendCerrarCaja(e,l,i){let o={caja_id:l,control_caja_id:e,justificacion:i};this.spinner.show(),this.walletService.cerrarCaja(o).subscribe(d=>{this.spinner.hide();let h=d;"success"==h.code?(u().fire({title:"Exito",text:"Caja Cerrada Exitosamente.",icon:"success"}),this.layoutService.reloadComponent(),this.router.navigate(["dashboard/admin/wallets/detail"])):"warning"==h.code?u().fire({title:"Advertencia",text:h.error,icon:"warning"}):u().fire({title:"Error",text:"Error Al Cerrar caja.",icon:"error"})})}getCajaDetail(){this.walletService.getDetelleCaja(this.detalle_id).subscribe(l=>{this.detailWallets=l.detalle_caja,this.controlCaja=l.control_caja,this.detailWallets.forEach(o=>{this.total=this.total+parseFloat(o.precio)}),this.caja_id=this.controlCaja?.caja_id;let i=this.controlCaja?.estado;1==i&&(this.estado="Abierta"),2==i&&(this.estado="Cerrada"),0==i&&(this.estado="Anulada"),this.buildForm(),this.loadingTable=!1})}static#t=this.\u0275fac=function(l){return new(l||a)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(b.X),t.Y36(r.qu),t.Y36(g.t2),t.Y36(T.P))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-show-details-wallets"]],decls:28,vars:11,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-center","flex-column","lg:flex-row"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",1,"p-button-outlined","mr-4",3,"routerLink"],[1,"font-medium","text-3xl","text-900"],[2,"width","100%",3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-3"],["type","text","formControlName","estado","pInputText","",1,"w-full","mb-3","border-round-3xl"],["type","text","formControlName","total","pInputText","",1,"w-full","mb-3","border-round-3xl"],["label","Cerrar Caja","icon","pi pi-dollar","severity","danger",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","header"],["pTemplate","body"],["label","Cerrar Caja","icon","pi pi-dollar","severity","danger",3,"click"]],template:function(l,i){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div"),t._UZ(3,"button",2),t.qZA(),t.TgZ(4,"div")(5,"div",3),t._uU(6,"Detalle Caja"),t.qZA()()()(),t.TgZ(7,"p-toolbar")(8,"form",4)(9,"div",5)(10,"div",6)(11,"label"),t._uU(12,"Estado"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"div",6)(15,"label"),t._uU(16,"Total"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t._UZ(18,"div",6),t.TgZ(19,"div",6),t.YNc(20,ct,1,0,"p-button",9),t.qZA()()()(),t.TgZ(21,"div",10)(22,"div",11)(23,"div",12)(24,"p-table",13),t.NdJ("onPage",function(d){return i.onPage(d)}),t.YNc(25,mt,15,0,"ng-template",14),t.YNc(26,gt,17,12,"ng-template",15),t.qZA(),t._UZ(27,"br"),t.qZA()()()),2&l&&(t.xp6(3),t.Q6J("routerLink","/dashboard/admin/wallets/detail"),t.xp6(5),t.Q6J("formGroup",i.form),t.xp6(12),t.Q6J("ngIf",1==(null==i.controlCaja?null:i.controlCaja.estado)),t.xp6(4),t.Q6J("value",i.detailWallets)("tableStyle",t.DdM(9,ht))("loading",i.loadingTable)("rows",8)("globalFilterFields",t.DdM(10,ft))("rowHover",!0))},dependencies:[p.O5,c.rH,Z.iA,x.jx,m.Hq,m.zx,r._Y,r.Fj,r.JJ,r.JL,f.H,v.o,_.o,r.sg,r.u,p.JJ,p.uU]})}return a})(),bt=(()=>{class a{static#t=this.\u0275fac=function(l){return new(l||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild([{path:"",component:et,canActivate:[C.a],data:{permissions:["gestionCajas"]}},{path:":id/abrirCaja",component:it,canActivate:[C.a],data:{permissions:["gestionCajas.cajas.abrirCaja"]}},{path:"detail",component:pt,canActivate:[C.a],data:{permissions:["gestionCajas"]}},{path:":id/showDetail",component:_t,canActivate:[C.a],data:{permissions:["gestionCajas"]}}]),c.Bz]})}return a})();var Zt=n(1712),Ct=n(1455);let vt=(()=>{class a{static#t=this.\u0275fac=function(l){return new(l||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({providers:[{provide:N.TP,useClass:S.n,multi:!0},Ct.s,b.X,p.uU],imports:[p.ez,bt,Z.U$,w.O,r.u5,m.hJ,f.T,W.EV,v.V,y.Xt,_.j,J.A,q.kW,I.cc,E.L$,U.S,D.ii.forRoot(),g.ef,r.UX,g.ef,Zt.U]})}return a})()}}]);