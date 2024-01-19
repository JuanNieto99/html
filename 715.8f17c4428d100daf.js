"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[715],{6715:(se,h,l)=>{l.r(h),l.d(h,{HotelsModule:()=>oe});var b=l(6814),t=l(95),Z=l(4670),d=l(5219),H=l(3519),_=l.n(H),e=l(4946),x=l(1455),m=l(4104),g=l(7213),I=l(5817),N=l(2656),p=l(8027),c=l(707),C=l(4480),T=l(3714),v=l(2352);function w(n,u){if(1&n){const o=e.EpF();e.TgZ(0,"div",47)(1,"h5",48),e._uU(2,"Lista de Hoteles"),e.qZA(),e.TgZ(3,"span",49),e._UZ(4,"i",50),e.TgZ(5,"input",51),e.NdJ("input",function(i){e.CHM(o);const a=e.oxw();return e.KtG(a.onGlobalFilter(a.dt,i))}),e.qZA()()()}}function A(n,u){1&n&&(e.TgZ(0,"tr")(1,"th",52),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Correo"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Contacto"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Cel Contacto"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Nit"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Acciones"),e.qZA()())}function U(n,u){if(1&n){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",53),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td",54)(14,"p-button",55),e.NdJ("click",function(){const a=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.getHotel(a.id))}),e.qZA(),e._UZ(15,"p-confirmDialog"),e.TgZ(16,"p-button",56),e.NdJ("click",function(){const a=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.confirmDelete(a.id))}),e.qZA()()()}if(2&n){const o=u.$implicit,r=e.oxw();e.xp6(2),e.Q6J("value",r.hotels),e.xp6(2),e.Oqu(o.nombre),e.xp6(2),e.Oqu(o.email),e.xp6(2),e.Oqu(o.contacto),e.xp6(2),e.Oqu(o.contacto_telefono),e.xp6(2),e.Oqu(o.nit)}}function q(n,u){1&n&&e._UZ(0,"input",57)}function y(n,u){1&n&&e._UZ(0,"input",58)}function S(n,u){1&n&&e._UZ(0,"input",59)}function J(n,u){1&n&&e._UZ(0,"input",60)}function M(n,u){if(1&n&&e._UZ(0,"input",61),2&n){const o=e.oxw();e.Q6J("value",o.hotelData.telefono)}}function D(n,u){1&n&&e._UZ(0,"input",62)}function E(n,u){1&n&&e._UZ(0,"input",63)}function k(n,u){1&n&&e._UZ(0,"input",64)}function Y(n,u){1&n&&e._UZ(0,"input",65)}function V(n,u){1&n&&e._UZ(0,"input",66)}const Q=function(){return{"min-width":"50rem"}},$=function(){return["usuario","email","superadmin","estado"]},z=function(){return[10,20,30]},O=function(){return{width:"50vw"}},f=function(){return{standalone:!0}},B=function(){return{width:"500px"}};let F=(()=>{class n{constructor(o,r,i,a,s,ne,ie,le,re,ae){this.hotelsService=o,this.confirmationService=r,this.toastModule=i,this.dialogModule=a,this.messageService=s,this.usersService=ne,this.breadcrumbService=ie,this.tableModule=le,this.buttonModule=re,this.cdRef=ae,this.editarH=!1,this.crearH=!1,this.tcontribuyente=1,this.countries$=[],this.states$=[],this.cities$=[],this.formNewHotel=new t.cw({nombre:new t.NI("",t.kI.required),direccion:new t.NI("",[t.kI.required,t.kI.email]),ciudad_id:new t.NI("",t.kI.required),contacto:new t.NI("",t.kI.required),contacto_telefono:new t.NI("",t.kI.required),contacto_cargo:new t.NI("",t.kI.required),telefono:new t.NI("",t.kI.required),nit:new t.NI("",t.kI.required),razon_social:new t.NI("",t.kI.required),cantidad_habitaciones:new t.NI("",t.kI.required),usuario_id:new t.NI("",t.kI.required),tipo_contribuyente:new t.NI("",t.kI.required),email:new t.NI("",t.kI.required)}),this.formEditHotel=new t.cw({nombre:new t.NI("",t.kI.required),cantidad_habitaciones:new t.NI("",[t.kI.required,t.kI.email]),contacto:new t.NI("",t.kI.required),contacto_cargo:new t.NI("",t.kI.required),contacto_telefono:new t.NI("",t.kI.required),direccion:new t.NI("",t.kI.required),email:new t.NI("",t.kI.required),razon_social:new t.NI("",t.kI.required),telefono:new t.NI("",t.kI.required),nit:new t.NI("",t.kI.required),usuario_id:new t.NI("",t.kI.required),ciudad_id:new t.NI("",t.kI.required),tipo_contribuyente:new t.NI("",t.kI.required),id:new t.NI("",t.kI.required)})}ngOnInit(){this.dataUser=this.getCurrentUser(),console.log(this.dataUser.usuario.id),this.getAllHotels(),this.hotelsService.data.subscribe(o=>{this.hotels=o,this.changeDetector.detectChanges()}),this.hotelsService.getCountries(10).subscribe(o=>{this.countries$=o}),this.hotelsService.getStates(12).subscribe(o=>{this.states$=o,console.log(this.states$)},o=>{console.log("Error:",o)}),this.hotelsService.getCities(13).subscribe(o=>{this.cities$=o,console.log(this.cities$)},o=>{console.log("Error:",o)})}getCurrentUser(){const o=localStorage.getItem("currentUser");return o?JSON.parse(o):null}getAllHotels(){this.hotelsService.getHotels(30).subscribe(o=>{this.hotels=o.data,this.totalHotels=o.total,console.log(this.hotels)},o=>{console.log("Error: ",o)})}createHotel(){this.formNewHotel.reset(),this.formNewHotel.get("ciudad_id").setValue(this.selectedCity.id),this.formNewHotel.get("usuario_id").setValue(this.dataUser.usuario.id),this.formNewHotel.get("tipo_contribuyente").setValue(this.tcontribuyente),this.hotelsService.createHotel(this.formNewHotel.value).subscribe(r=>{console.log(r),this.hotelsService.refresHotelsData(),this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Hotel creado.",sticky:!0,life:200}),this.crearH=!1},r=>{console.log("Error:",r)})}getHotel(o){this.hotelsService.getHotelById(o).subscribe(r=>{this.hotelData=r.hotel,this.hotelData.id=o,this.editarH=!0,this.formEditHotel.get("nombre").setValue(this.hotelData.nombre),this.formEditHotel.get("email").setValue(this.hotelData.email),this.formEditHotel.get("cantidad_habitaciones").setValue(this.hotelData.cantidad_habitaciones),this.formEditHotel.get("direccion").setValue(this.hotelData.direccion),this.formEditHotel.get("telefono").setValue(this.hotelData.telefono),this.formEditHotel.get("contacto").setValue(this.hotelData.contacto),this.formEditHotel.get("contacto_cargo").setValue(this.hotelData.contacto_cargo),this.formEditHotel.get("razon_social").setValue(this.hotelData.razon_social),this.formEditHotel.get("contacto_telefono").setValue(this.hotelData.contacto_telefono),this.formEditHotel.get("nit").setValue(this.hotelData.nit)})}updateHotel(){this.formEditHotel.get("id").setValue(this.hotelData.id),this.formEditHotel.get("ciudad_id").setValue(this.hotelData.ciudad_id),this.formEditHotel.get("tipo_contribuyente").setValue(this.hotelData.tipo_contribuyente),this.formEditHotel.get("usuario_id").setValue(this.hotelData.usuario_id),this.hotelsService.updateHotel(this.formEditHotel.value).subscribe(r=>{console.log(r),this.editarH=!1,this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Usuario actualizado.",sticky:!0,life:200}),this.hotelsService.refresHotelsData()},r=>{console.log("Error:",r)})}confirmDelete(o){console.log(o),_().fire({title:"\xbfEstas Seguro que deseas eliminar el hotel?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&(this.hotelsService.deleteHotel(o).subscribe(i=>{console.log(i),this.hotelsService.refresHotelsData()}),_().fire({title:"Confirmaci\xf3n",text:"El hotel ha sido eliminado.",icon:"success"}))})}getCountries(){this.hotelsService.getCountries(10).subscribe(o=>{this.countries$=o})}getStates(){this.hotelsService.getStates(this.selectedCountry).subscribe(o=>{this.states$=o})}getCities(){this.hotelsService.getCities(this.selectedState).subscribe(o=>{this.cities$=o})}modalNewHotel(){this.crearH=!0}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(x.s),e.Y36(d.YP),e.Y36(m.EV),e.Y36(g.S),e.Y36(d.ez),e.Y36(I.f),e.Y36(N.p),e.Y36(p.U$),e.Y36(c.hJ),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-hotels"]],features:[e._Bn([d.YP,d.ez])],decls:126,vars:46,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"pi","pi-users","mr-2"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","icon","pi pi-user-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","label","Exportar","icon","pi pi-check"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} de {totalRecords} Hoteles","selectionMode","multiple","dataKey","hotel",3,"value","tableStyle","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Crear Hotel",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["type","text","placeholder","Hotel Brisas","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","997869687-2","pInputText","","formControlName","nit",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","Hotel Brisas S.A.S","pInputText","","formControlName","razon_social",1,"w-full","mb-3","border-round-3xl"],["optionLabel","nombre",3,"options","ngModel","ngModelOptions","ngModelChange","onChange"],["optionLabel","nombre",3,"options","ngModel","ngModelOptions","ngModelChange"],["type","text","placeholder","Cra 50 #24-09","pInputText","","formControlName","direccion",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","3003590987","pInputText","","formControlName","telefono",1,"w-full","mb-3","border-round-3xl"],["type","number","placeholder","38","pInputText","","formControlName","cantidad_habitaciones",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","Juan","pInputText","","formControlName","contacto",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","Gerente","pInputText","","formControlName","contacto_cargo",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","3149876543","pInputText","","formControlName","contacto_telefono",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["type","email","placeholder","info.email.com","pInputText","","formControlName","email",1,"w-full","mb-3","border-round-3xl"],["pButton","","pRipple","","label","Crear Usuario","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],["id","editU","header","Editar Hotel","modal","modal",3,"visible","visibleChange","onVisibleChange"],[1,"field","col-12","md:col-6"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","nombre",4,"ngIf"],["id","email1","type","email","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","email",4,"ngIf"],["type","number","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","cantidad_habitaciones",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","direccion",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","telefono",3,"value",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","contacto",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","contacto_cargo",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","contacto_telefono",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","razon_social",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","nit",4,"ngIf"],["pButton","","pRipple","","label","Editar Hotel","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],[3,"value"],[1,"flex","gap-2"],["icon","pi pi-user-edit","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["id","email1","type","email","pInputText","","formControlName","email",1,"w-full","mb-3","border-round-3xl"],["type","number","pInputText","","formControlName","cantidad_habitaciones",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","direccion",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","telefono",1,"w-full","mb-3","border-round-3xl",3,"value"],["type","text","pInputText","","formControlName","contacto",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","contacto_cargo",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","contacto_telefono",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","razon_social",1,"w-full","mb-3","border-round-3xl"],["type","text","pInputText","","formControlName","nit",1,"w-full","mb-3","border-round-3xl"]],template:function(r,i){1&r&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),e._uU(5,"Hoteles"),e.qZA(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"i",5),e.TgZ(9,"span"),e._uU(10,"Hoteles Creados"),e.qZA()()()(),e.TgZ(11,"div",6)(12,"button",7),e.NdJ("click",function(){return i.modalNewHotel()}),e.qZA(),e._UZ(13,"button",8),e.qZA()()(),e.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"p-table",12),e.YNc(18,w,6,0,"ng-template",13),e.YNc(19,A,15,0,"ng-template",14),e.YNc(20,U,17,6,"ng-template",15),e.qZA()()()(),e.TgZ(21,"p-dialog",16),e.NdJ("visibleChange",function(s){return i.crearH=s}),e.TgZ(22,"div",10)(23,"h5"),e._uU(24,"Completa el formulario"),e.qZA(),e.TgZ(25,"form",17),e.NdJ("ngSubmit",function(){return i.createHotel()}),e.TgZ(26,"div",18)(27,"div",19)(28,"label"),e._uU(29,"Nombre del Hotel"),e.qZA(),e._UZ(30,"input",20),e.qZA(),e.TgZ(31,"div",19)(32,"label"),e._uU(33,"Nit"),e.qZA(),e._UZ(34,"input",21),e.qZA(),e.TgZ(35,"div",19)(36,"label"),e._uU(37,"Razon social"),e.qZA(),e._UZ(38,"input",22),e.qZA(),e.TgZ(39,"div",19)(40,"label"),e._uU(41,"Pa\xeds"),e.qZA(),e.TgZ(42,"p-dropdown",23),e.NdJ("ngModelChange",function(s){return i.selectedCountry=s})("onChange",function(){return i.getStates()}),e.qZA()(),e.TgZ(43,"div",19)(44,"label"),e._uU(45,"Departamento"),e.qZA(),e.TgZ(46,"p-dropdown",23),e.NdJ("ngModelChange",function(s){return i.selectedState=s})("onChange",function(){return i.getCities()}),e.qZA()(),e.TgZ(47,"div",19)(48,"label"),e._uU(49,"Ciudad"),e.qZA(),e.TgZ(50,"p-dropdown",24),e.NdJ("ngModelChange",function(s){return i.selectedCity=s}),e.qZA()(),e.TgZ(51,"div",19)(52,"label"),e._uU(53,"Direccion"),e.qZA(),e._UZ(54,"input",25),e.qZA(),e.TgZ(55,"div",19)(56,"label"),e._uU(57,"Telefono"),e.qZA(),e._UZ(58,"input",26),e.qZA(),e.TgZ(59,"div",19)(60,"label"),e._uU(61,"No Habitaciones"),e.qZA(),e._UZ(62,"input",27),e.qZA(),e.TgZ(63,"div",19)(64,"label"),e._uU(65,"Contacto"),e.qZA(),e._UZ(66,"input",28),e.qZA(),e.TgZ(67,"div",19)(68,"label"),e._uU(69,"Contacto Cargo"),e.qZA(),e._UZ(70,"input",29),e.qZA(),e.TgZ(71,"div",19)(72,"label"),e._uU(73,"Contacto Telefono"),e.qZA(),e._UZ(74,"input",30),e.qZA(),e.TgZ(75,"div",31)(76,"label"),e._uU(77,"Correo Electr\xf3nico"),e.qZA(),e._UZ(78,"input",32),e.qZA(),e.TgZ(79,"div",31),e._UZ(80,"button",33),e.qZA()()()()(),e.TgZ(81,"p-dialog",34),e.NdJ("visibleChange",function(s){return i.editarH=s})("onVisibleChange",function(){return i.editarH=!i.editarH}),e.TgZ(82,"form",17),e.NdJ("ngSubmit",function(){return i.updateHotel()}),e.TgZ(83,"div",18)(84,"div",35)(85,"label"),e._uU(86,"Nombre"),e.qZA(),e.YNc(87,q,1,0,"input",36),e.qZA(),e.TgZ(88,"div",35)(89,"label"),e._uU(90,"Email"),e.qZA(),e.YNc(91,y,1,0,"input",37),e.qZA(),e.TgZ(92,"div",19)(93,"label"),e._uU(94,"No Habitaciones"),e.qZA(),e.YNc(95,S,1,0,"input",38),e.qZA(),e.TgZ(96,"div",19)(97,"label"),e._uU(98,"Direccion"),e.qZA(),e.YNc(99,J,1,0,"input",39),e.qZA(),e.TgZ(100,"div",19)(101,"label"),e._uU(102,"Telefono"),e.qZA(),e.YNc(103,M,1,1,"input",40),e.qZA(),e.TgZ(104,"div",19)(105,"label"),e._uU(106,"Contacto"),e.qZA(),e.YNc(107,D,1,0,"input",41),e.qZA(),e.TgZ(108,"div",19)(109,"label"),e._uU(110,"Cargo"),e.qZA(),e.YNc(111,E,1,0,"input",42),e.qZA(),e.TgZ(112,"div",19)(113,"label"),e._uU(114,"Contacto Telefono"),e.qZA(),e.YNc(115,k,1,0,"input",43),e.qZA(),e.TgZ(116,"div",35)(117,"label"),e._uU(118,"Raz\xf3n Social"),e.qZA(),e.YNc(119,Y,1,0,"input",44),e.qZA(),e.TgZ(120,"div",35)(121,"label"),e._uU(122,"Nit"),e.qZA(),e.YNc(123,V,1,0,"input",45),e.qZA(),e.TgZ(124,"div",31),e._UZ(125,"button",46),e.qZA()()()()),2&r&&(e.xp6(17),e.Q6J("value",i.hotels)("tableStyle",e.DdM(38,Q))("rows",10)("globalFilterFields",e.DdM(39,$))("paginator",!0)("rowsPerPageOptions",e.DdM(40,z))("showCurrentPageReport",!0)("rowHover",!0),e.xp6(4),e.Akn(e.DdM(41,O)),e.Q6J("visible",i.crearH)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(4),e.Q6J("formGroup",i.formNewHotel),e.xp6(17),e.Q6J("options",i.countries$)("ngModel",i.selectedCountry)("ngModelOptions",e.DdM(42,f)),e.xp6(4),e.Q6J("options",i.states$)("ngModel",i.selectedState)("ngModelOptions",e.DdM(43,f)),e.xp6(4),e.Q6J("options",i.cities$)("ngModel",i.selectedCity)("ngModelOptions",e.DdM(44,f)),e.xp6(31),e.Akn(e.DdM(45,B)),e.Q6J("visible",i.editarH),e.xp6(1),e.Q6J("formGroup",i.formEditHotel),e.xp6(5),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH),e.xp6(4),e.Q6J("ngIf",i.editarH))},dependencies:[b.O5,p.iA,d.jx,p.UA,p.Mo,c.Hq,c.zx,t._Y,t.Fj,t.wV,t.JJ,t.JL,t.On,C.H,m.FN,T.o,v.Lt,g.V,t.sg,t.u],encapsulation:2})}return n})(),R=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:F}]),Z.Bz]})}return n})();var P=l(6068),G=l(6340),j=l(6022),L=l(6218),K=l(1865),X=l(354),W=l(9862),ee=l(8712),te=l(5722);let oe=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({providers:[{provide:W.TP,useClass:ee.n,multi:!0},x.s],imports:[b.ez,R,p.U$,P.O,t.u5,c.hJ,C.T,m.EV,G.V,j.Xt,T.j,L.A,v.kW,K.cc,X.L$,g.S,te.ii.forRoot(),t.UX]})}return n})()}}]);