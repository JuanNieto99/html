"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[21],{2021:(Ie,A,c)=>{c.r(A),c.d(A,{RecipesModule:()=>Ae});var h=c(6814),p=c(95),f=c(9664),J=c(6068),m=c(707),_=c(4480),N=c(4104),w=c(6340),M=c(6022),b=c(3714),T=c(6218),v=c(2160),S=c(1865),E=c(354),Z=c(7213),P=c(9862),k=c(8712),F=c(5722),u=c(86),x=c(2791),G=c(3519),l=c.n(G),e=c(4946),Q=c(4444);let C=(()=>{class s{constructor(t){this.httpClient=t,this.baseUrl=Q.D.url,this.endpointListar="/recetaListar",this.endpointRecipesGet="/recetaEditar/",this.endpointRecipesUpdate="/recetaActualizar",this.endpointRecipesCreate="/recetaCrear",this.endpointDelete="/recetaEliminar",this.endpointProductsGet="/getRecetaProductos/",this.endpointProductsCreate="/agregarProductosReceta",this.endpointAllProductsGet="/getAllProductosByRecetas/",this.endpointTaxesGet="/getRecetaCrearImpuesto/",this.endpointTaxesByIdGet="/getImpuestoReceta/",this.endpointTaxesCreate="/agregarImpuestoReceta"}getAll(t,o="",i=1){const r={headers:new P.WM({"Content-Type":"application/json"})};return this.httpClient.post(`${this.baseUrl+this.endpointListar}?per_page=${t}&page=${i}&search=${o}`,r)}getRecipes(t){return this.httpClient.get(`${this.baseUrl+this.endpointRecipesGet+t}`)}createRecipes(t){return this.httpClient.post(`${this.baseUrl+this.endpointRecipesCreate}`,t)}updateRecipes(t){return this.httpClient.post(`${this.baseUrl+this.endpointRecipesUpdate}`,t)}deleteRecipes(t){return this.httpClient.post(`${this.baseUrl+this.endpointDelete}`,t)}getProducts(t){return this.httpClient.get(`${this.baseUrl+this.endpointProductsGet+t}`)}getProductsRecetas(t,o=1,i=10,r=""){return this.httpClient.get(`${this.baseUrl+this.endpointAllProductsGet+t}?page=${o}&per_page=${i}${r?`&search=${r}`:""}`)}createRecipesProducts(t){return this.httpClient.post(`${this.baseUrl+this.endpointProductsCreate}`,t)}getTaxes(t){return this.httpClient.get(`${this.baseUrl+this.endpointTaxesGet+t}`)}getRecipeTaxes(t,o=1,i=10,r=""){return this.httpClient.get(`${this.baseUrl+this.endpointTaxesByIdGet+t}?page=${o}&per_page=${i}${r?`&search=${r}`:""}`)}createTaxes(t){return this.httpClient.post(`${this.baseUrl+this.endpointTaxesCreate}`,t)}static#e=this.\u0275fac=function(o){return new(o||s)(e.LFG(P.eN))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var g=c(8672),I=c(5219);function B(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openModal())}),e.qZA()}}function Y(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div",33),e._UZ(1,"span"),e.TgZ(2,"span",34)(3,"form",35)(4,"div",36)(5,"input",37),e.NdJ("keyup.enter",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.buscarPorTecla(i))})("input",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchInput())}),e.qZA(),e.TgZ(6,"button",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.search())}),e.qZA()()()()()}if(2&s){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.formSearch)}}function D(s,n){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Hotel"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Precio"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Descripci\xf3n"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Acciones"),e.qZA()())}function L(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"p-button",43),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw();return e.KtG(r.editRecipes(i.id))}),e.qZA()}}function $(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"p-button",44),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw();return e.KtG(r.redirectToRecipesProducts(i.id))}),e.qZA()}}function H(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"p-button",45),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw();return e.KtG(r.confirmDelete(i.id))}),e.qZA()}}function O(s,n){if(1&s&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td",39),e.YNc(11,L,1,0,"p-button",40),e.YNc(12,$,1,0,"p-button",41),e.YNc(13,H,1,0,"p-button",42),e.qZA()()),2&s){const t=n.$implicit,o=e.oxw();e.xp6(2),e.Oqu(t.hotel.nombre),e.xp6(2),e.hij("",t.nombre," "),e.xp6(2),e.Oqu(e.gM2(7,7,t.precio,"COP","","1.0-0")),e.xp6(3),e.Oqu(t.descripcion),e.xp6(2),e.Q6J("ngIf",o.permisoActualizar),e.xp6(1),e.Q6J("ngIf",o.permisoActualizar),e.xp6(1),e.Q6J("ngIf",o.permisoEliminar)}}function z(s,n){1&s&&(e.TgZ(0,"tr")(1,"td",46),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function j(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function K(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function V(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function X(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function W(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function ee(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function te(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}function ie(s,n){1&s&&(e.TgZ(0,"div",47),e._uU(1,"Campo requerido"),e.qZA())}const oe=function(){return{"min-width":"50rem"}},se=function(){return["nombre","Hotel","acciones"]},q=function(){return{width:"95vw"}};let re=(()=>{class s{constructor(t,o,i,r){this.recipesService=t,this.FB=o,this.spinner=i,this.router=r,this.permisoCrear=x.e.hasPermission(["gestionInventario.recetas.crear"]),this.permisoActualizar=x.e.hasPermission(["gestionInventario.recetas.actualizar"]),this.permisoEliminar=x.e.hasPermission(["gestionInventario.recetas.eliminar"]),this.loadingTable=!1,this.visibleModalRecipes=!0,this.visibleModalRecipesEditar=!1,this.imagen=null,this.idEditando=0,this.pageCount=10,this.first=0,this.rows=8,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1}ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalRecipes=!1}redirectToRecipesProducts(t){this.router.navigate(["/dashboard/admin/recipes/"+t+"/recipes-products"])}openModal(){this.onCreate()}onCreate(){this.formCreateRecipes.reset(),this.recipesService.getRecipes(0).subscribe(t=>{this.hotel=t.hotel,this.nombre=t.nombre,this.recipesDescripcion=t.descripcion,this.precio=t.precio,this.visibleModalRecipes=!0},t=>{console.log("Error: ",t)})}newRecipes(){this.spinner.show();let t=this.formCreateRecipes.value;t.hotel_id=t.hotel_id.id,t.estado=1,this.recipesService.createRecipes(t).subscribe(o=>{this.spinner.hide(),this.imagen=null,this.visibleModalRecipes=!1,"success"==o.code?(l().fire({title:"\xc9xito",text:"Receta creada exitosamente.",icon:"success"}),this.getIndex()):l().fire({title:"Error",text:"Error al crear la receta.",icon:"error"})},o=>{console.log("Error: ",o)})}submitCreate(){this.formCreateRecipes.valid?this.newRecipes():this.formCreateRecipes.markAllAsTouched()}editRecipes(t){this.idEditando=t,this.spinner.show(),this.recipesService.getRecipes(t).subscribe(o=>{this.spinner.hide(),this.hotel=o.hotel;const i=o.receta;i&&(this.nombre=i.nombre,this.recipesDescripcion=i.descripcion,this.precio=parseFloat(i.precio),this.formEditRecipes.setValue({hotel_id:this.hotel,precio:this.precio,descripcion:this.recipesDescripcion,nombre:this.nombre})),setTimeout(()=>{this.visibleModalRecipesEditar=!0},1)},o=>{console.log("Error: ",o)})}updateRecipe(){this.spinner.show();let t=this.formEditRecipes.value;t.hotel_id=t.hotel_id.id,t.nombre=t.nombre,t.descripcion=t.descripcion,t.precio=t.precio,t.id=this.idEditando,t.estado=1,this.recipesService.updateRecipes(t).subscribe(o=>{this.spinner.hide(),this.imagen=null,this.visibleModalRecipesEditar=!1,"success"==o.code?(l().fire({title:"\xc9xito",text:"Receta actualizado exitosamente.",icon:"success"}),this.getIndex()):l().fire({title:"Error",text:"Error al actualizar la receta.",icon:"error"})},o=>{console.log("Error: ",o)})}submitUpdate(){this.formEditRecipes.valid&&this.updateRecipe()}confirmDelete(t){l().fire({title:"\xbfEstas seguro que deseas eliminar esta receta?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&(this.spinner.show(),this.recipesService.deleteRecipes({id:t}).subscribe(i=>{this.spinner.hide(),"success"==i.code?(l().fire({title:"Exito",text:"Receta eliminada exitosamente.",icon:"success"}),this.getIndex()):l().fire({title:"Error",text:"Error al eliminar la receta.",icon:"error"})},i=>{console.log("Error: ",i)}))})}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateRecipes=this.FB.group({hotel_id:["",[p.kI.required]],nombre:["",[p.kI.required]],precio:["",[p.kI.required]],descripcion:["",[]]}),this.formEditRecipes=this.FB.group({hotel_id:["",[p.kI.required]],nombre:["",[p.kI.required]],precio:["",[p.kI.required]],descripcion:["",[]]})}getIndex(t="",o=this.pageCount,i=1){this.spinner.show(),this.loadingTable=!0,this.recipesService.getAll(o,t,i).subscribe(r=>{this.loadingTable=!1,this.recipesData=r.data,this.ultimaPage=r.last_page,this.countRegisters=r.total,this.ultimaPage=r.last_page,r.total>o&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},r=>{console.log("Error: ",r)})}onRemove(t){this.imagen=null}onSelect(t){this.imagen=t.currentFiles[0]}onPage(t){this.pageCount=t.rows,this.getIndex("",this.pageCount)}searchInput(){let t=this.formSearch.get("search").value;this.pageActual=1,""==t&&this.getIndex(t)}search(){let t=this.formSearch.get("search").value;this.getIndex(t)}onPageChange(t){this.first=t.first,this.rows=t.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}buscarPorTecla(t){"Enter"==t.code&&this.search()}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(C),e.Y36(p.qu),e.Y36(g.t2),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-recipes"]],decls:76,vars:40,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2","icon","",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear Receta",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],["style","color: red;",4,"ngIf"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","number","min","1","pInputText","","formControlName","precio",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["type","text","pInputTextarea","","rows","3","cols","20","formControlName","descripcion"],["pButton","","pRipple","","label","Crear Receta","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Recetas",3,"visible","modal","draggable","resizable","visibleChange"],["pButton","","pRipple","","label","Editar Receta","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-cog","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-cog","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"],[2,"color","red"]],template:function(o,i){1&o&&(e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Recetas"),e.qZA()(),e.TgZ(6,"div",4),e.YNc(7,B,1,0,"button",5),e.qZA()()(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"p-table",9),e.NdJ("onPage",function(a){return i.onPage(a)}),e.YNc(12,Y,7,1,"ng-template",10),e.YNc(13,D,11,0,"ng-template",11),e.YNc(14,O,14,12,"ng-template",12),e.YNc(15,z,3,0,"ng-template",13),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"div",14)(18,"span",15)(19,"button",16),e.NdJ("click",function(){return i.leftTable()}),e.qZA(),e._UZ(20,"button",17),e.TgZ(21,"button",18),e.NdJ("click",function(){return i.rightTable()}),e.qZA()()()()()(),e.TgZ(22,"p-dialog",19),e.NdJ("visibleChange",function(a){return i.visibleModalRecipes=a}),e.TgZ(23,"div",7)(24,"form",20),e.NdJ("ngSubmit",function(){return i.submitCreate()}),e.TgZ(25,"div",21)(26,"div",22)(27,"label"),e._uU(28,"Hotel"),e.qZA(),e._UZ(29,"p-dropdown",23),e.YNc(30,j,2,0,"div",24),e.qZA(),e.TgZ(31,"div",22)(32,"label"),e._uU(33,"Nombre"),e.qZA(),e._UZ(34,"input",25),e.YNc(35,K,2,0,"div",24),e.qZA(),e.TgZ(36,"div",22)(37,"label"),e._uU(38,"Precio"),e.qZA(),e._UZ(39,"input",26),e.YNc(40,V,2,0,"div",24),e.qZA(),e.TgZ(41,"div",27)(42,"label"),e._uU(43,"Descripci\xf3n"),e.qZA(),e._UZ(44,"textarea",28),e.YNc(45,X,2,0,"div",24),e.qZA(),e.TgZ(46,"div",27),e._UZ(47,"button",29),e.qZA()(),e._UZ(48,"br"),e.qZA()()(),e.TgZ(49,"p-dialog",30),e.NdJ("visibleChange",function(a){return i.visibleModalRecipesEditar=a}),e.TgZ(50,"div",7)(51,"form",20),e.NdJ("ngSubmit",function(){return i.submitUpdate()}),e.TgZ(52,"div",21)(53,"div",22)(54,"label"),e._uU(55,"Hotel"),e.qZA(),e._UZ(56,"p-dropdown",23),e.YNc(57,W,2,0,"div",24),e.qZA(),e.TgZ(58,"div",22)(59,"label"),e._uU(60,"Nombre"),e.qZA(),e._UZ(61,"input",25),e.YNc(62,ee,2,0,"div",24),e.qZA(),e.TgZ(63,"div",22)(64,"label"),e._uU(65,"Precio"),e.qZA(),e._UZ(66,"input",26),e.YNc(67,te,2,0,"div",24),e.qZA(),e.TgZ(68,"div",27)(69,"label"),e._uU(70,"Descripci\xf3n"),e.qZA(),e._UZ(71,"textarea",28),e.YNc(72,ie,2,0,"div",24),e.qZA(),e.TgZ(73,"div",27),e._UZ(74,"button",31),e.qZA()(),e._UZ(75,"br"),e.qZA()()()),2&o&&(e.xp6(7),e.Q6J("ngIf",i.permisoCrear),e.xp6(4),e.Q6J("value",i.recipesData)("tableStyle",e.DdM(36,oe))("loading",i.loadingTable)("rows",8)("globalFilterFields",e.DdM(37,se))("rowHover",!0),e.xp6(8),e.Q6J("disabled",!i.disablePageLeft),e.xp6(1),e.Q6J("label",i.pageActual),e.xp6(1),e.Q6J("disabled",!i.disablePageRight),e.xp6(1),e.Akn(e.DdM(38,q)),e.Q6J("visible",i.visibleModalRecipes)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",i.formCreateRecipes),e.xp6(5),e.Q6J("options",i.hotel),e.xp6(1),e.Q6J("ngIf",i.formCreateRecipes.get("hotel_id").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formCreateRecipes.get("nombre").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formCreateRecipes.get("precio").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formCreateRecipes.get("descripcion").hasError("required")),e.xp6(2),e.Q6J("disabled",i.formCreateRecipes.invalid),e.xp6(2),e.Akn(e.DdM(39,q)),e.Q6J("visible",i.visibleModalRecipesEditar)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",i.formEditRecipes),e.xp6(5),e.Q6J("options",i.hotel),e.xp6(1),e.Q6J("ngIf",i.formEditRecipes.get("hotel_id").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formEditRecipes.get("nombre").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formEditRecipes.get("precio").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formEditRecipes.get("descripcion").hasError("required")),e.xp6(2),e.Q6J("disabled",i.formEditRecipes.invalid))},dependencies:[h.O5,f.iA,I.jx,m.Hq,m.zx,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.qQ,_.H,b.o,T.g,v.Lt,Z.V,p.sg,p.u,g.Ro,h.H9],styles:["svg[_ngcontent-%COMP%]{width:45%}"]})}return s})();var R=c(4844);function ae(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div",48),e._UZ(1,"span"),e.TgZ(2,"span",49)(3,"form",7)(4,"div",50)(5,"input",51),e.NdJ("keyup.enter",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.buscarPorTeclaProductos(i))}),e.qZA(),e.TgZ(6,"button",52),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchProductos())}),e.qZA()()()()()}if(2&s){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.formSearch)}}function ne(s,n){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Nombre del Producto"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Medida"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Cantidad"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Descripci\xf3n"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Acciones"),e.qZA()())}function ce(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"p-button",53),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.quitarProducto(r))}),e.qZA()()()}if(2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(null==t?null:t.medida),e.xp6(2),e.Oqu(t.cantidad),e.xp6(2),e.Oqu(t.descripcion)}}function pe(s,n){1&s&&(e.TgZ(0,"tr")(1,"td",54),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function le(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div",48),e._UZ(1,"span"),e.TgZ(2,"span",49)(3,"form",7)(4,"div",50)(5,"input",51),e.NdJ("keyup.enter",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.buscarPorTeclaImpuestos(i))}),e.qZA(),e.TgZ(6,"button",52),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchImpuestos())}),e.qZA()()()()()}if(2&s){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.formSearch)}}function de(s,n){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Nombre"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Porcentaje"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Acciones"),e.qZA()())}function ue(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"p-button",53),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.quitarImpuesto(r))}),e.qZA()()()}if(2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.porcentaje)}}function me(s,n){1&s&&(e.TgZ(0,"tr")(1,"td",54),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function ge(s,n){if(1&s&&(e.TgZ(0,"div",55)(1,"span",56),e._uU(2),e.qZA()()),2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre)}}function he(s,n){1&s&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}function fe(s,n){1&s&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido "),e.qZA())}function _e(s,n){1&s&&(e.TgZ(0,"div",57),e._uU(1,"La cantidad debe ser al menos 1."),e.qZA())}function be(s,n){if(1&s&&(e.TgZ(0,"div",55)(1,"span",56),e._uU(2),e.qZA()()),2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre)}}function Te(s,n){1&s&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}const U=function(){return{"min-width":"50rem"}},ve=function(){return{width:"60vw"}},Ze=function(){return{width:"95vw"}};let Pe=(()=>{class s{constructor(t,o,i,r,a,d){this.recipesService=t,this.FB=o,this.spinner=i,this.router=r,this.route=a,this.cdr=d,this.productsData=[],this.loadingTable=!1,this.productoVisible=!1,this.productosSeleccionados=[],this.displayModalProducts=!1,this.displayModalTaxes=!1,this.taxesData=[],this.impuestosSeleccionados=[],this.pageActualProductos=1,this.pageCountProductos=10,this.disablePageLeftProductos=!1,this.disablePageRightProductos=!1,this.pageActualImpuestos=1,this.pageCountImpuestos=10,this.disablePageLeftImpuestos=!1,this.disablePageRightImpuestos=!1}ngOnInit(){this.spinner.hide(),this.dataRecipesDetail=[],this.buildForm(),this.recetaId=parseFloat(this.route.snapshot.paramMap.get("id")),this.getProductsAndRecipesList(this.recetaId),this.getProductsForRecipe(this.recetaId),this.getTaxesAndRecipesList(this.recetaId),this.getTaxesById(this.recetaId)}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.form=this.FB.group({nombreReceta:[this.dataRecipesDetail?.detalleRecipes?.recipes?.nombre,[]],descripcion:[this.dataRecipesDetail?.detalleRecipes?.descripcion,[]],precio:[this.dataRecipesDetail?.detalleRecipes?.precio,[]]}),this.formImpuesto=this.FB.group({impuesto_id:[null,p.kI.required],nombre:[""],porcentaje:[""]}),this.form.get("nombreReceta").disable(),this.form.get("descripcion").disable(),this.form.get("precio").disable(),this.formProducto=this.FB.group({producto_id:[null,[p.kI.required]],cantidad:[1,[p.kI.required,p.kI.min(1)]]}),this.formTaxes=this.FB.group({impuesto_id:[null,[p.kI.required]]})}openModal(){this.displayModalProducts=!0}closeModal(){this.displayModalProducts=!1}getProductsAndRecipesList(t){this.loadingTable=!0,this.recipesService.getProducts(t).subscribe(o=>{this.productsData=o.productos,this.loadingTable=!1;const i=Number(o.receta.precio).toLocaleString("es-CO");this.form.get("nombreReceta").setValue(o.receta.nombre),this.form.get("precio").setValue(`$${i}`),this.form.get("descripcion").setValue(o.receta.descripcion)},o=>{console.error(o),this.loadingTable=!1})}onCantidadChange(t){this.formProducto.controls.cantidad.setValue(t.target.value)}agregarProductos(){const t=this.formProducto.get("producto_id").value,o=this.formProducto.get("cantidad").value;if(t){this.productosGuardados=this.productosGuardados||[],this.productosSeleccionados=this.productosSeleccionados||[],t.cantidad=Number(o);const i=this.productosParaMostrar.find(r=>r.id===t.id);i?i.cantidad+=Number(o):this.productosParaMostrar.push({id:t.id,nombre:t.nombre,descripcion:t.descripcion,cantidad:Number(o),medida:t.medida.nombre}),this.cdr.detectChanges(),this.formProducto.reset(),this.closeModal()}else console.error("Por favor, selecciona un producto antes de agregar.")}getProductsForRecipe(t,o=1,i=this.pageCountProductos,r=""){this.loadingTable=!0,this.recipesService.getProductsRecetas(t,o,i,r).subscribe(a=>{a&&a.receta&&a.receta.data&&a.receta.data.length>0?(this.productosGuardados=a.receta.data.map(d=>({id:d.productos.id,nombre:d.productos.nombre,cantidad:d.cantidad,descripcion:d.productos.descripcion,medida:d.productos.medida.nombre})),this.pageActualProductos=a.receta.current_page,this.ultimaPageProductos=a.receta.last_page,this.validatePageProductos()):this.productosGuardados=[],this.productosParaMostrar=[...this.productosGuardados,...this.productosSeleccionados],this.loadingTable=!1},a=>{console.error(a),this.loadingTable=!1})}sendProducts(){this.spinner.show();const t=this.productosParaMostrar;if(Array.isArray(t)){let o={receta_id:this.recetaId,producto:t.map(i=>({producto_id:i.producto_id?i.producto_id:i.id,cantidad:String(i.cantidad)}))};this.recipesService.createRecipesProducts(o).subscribe(i=>{this.spinner.hide(),"success"==i.code&&l().fire({title:"Exito",text:"Los productos se han guardado correctamente.",icon:"success"})},i=>{this.spinner.hide(),console.error(i),l().fire({title:"Error",text:"Hubo un error al guardar los productos.",icon:"error"})})}else l().fire({title:"Error",text:"Hubo un error al guardar los productos.",icon:"error"})}quitarProducto(t){let o=this.productosSeleccionados.findIndex(i=>i===t);-1!==o?this.productosSeleccionados.splice(o,1):(o=this.productosGuardados.findIndex(i=>i===t),-1!==o&&this.productosGuardados.splice(o,1)),this.productosParaMostrar=[...this.productosGuardados,...this.productosSeleccionados],this.cdr.detectChanges()}openModalTaxes(){this.displayModalTaxes=!0}closeModalTaxes(){this.displayModalTaxes=!1}getTaxesAndRecipesList(t){this.loadingTable=!0,this.recipesService.getTaxes(t).subscribe(o=>{this.taxesData=o.impuesto,this.loadingTable=!1},o=>{console.error(o),this.loadingTable=!1})}agregarImpuestos(){const t=this.formImpuesto.get("impuesto_id").value.id,o=this.taxesData.find(i=>i.id===t);o?(this.impuestosGuardados=this.impuestosGuardados||[],this.impuestosSeleccionados=this.impuestosSeleccionados||[],this.impuestosSeleccionados.push({impuesto_id:o.id,nombre:o.nombre,porcentaje:Number(o.porcentaje)}),this.impuestosParaMostrar=[...this.impuestosGuardados,...this.impuestosSeleccionados],this.cdr.detectChanges(),this.formImpuesto.get("impuesto_id").setValue(null),this.closeModalTaxes()):console.error("Por favor, selecciona un impuesto antes de agregar.")}getTaxesById(t,o=1,i=this.pageCountImpuestos,r=""){this.loadingTable=!0,this.recipesService.getRecipeTaxes(t,o,i,r).subscribe(a=>{a&&a.receta_impuesto&&a.receta_impuesto.data&&a.receta_impuesto.data.length>0?(this.impuestosGuardados=a.receta_impuesto.data.map(d=>({id:d.impuesto.id,nombre:d.impuesto.nombre,porcentaje:d.impuesto.porcentaje})),this.pageActualImpuestos=a.receta_impuesto.current_page,this.ultimaPageImpuestos=a.receta_impuesto.last_page,this.validatePageImpuestos()):this.impuestosGuardados=[],this.impuestosParaMostrar=[...this.impuestosGuardados,...this.impuestosSeleccionados],this.loadingTable=!1},a=>{console.error(a),this.loadingTable=!1})}sendTaxes(){if(Array.isArray(this.impuestosSeleccionados)){let t={receta_id:this.recetaId,impuestos:Array.isArray(this.impuestosSeleccionados)?this.impuestosSeleccionados.map(o=>({impuesto_id:o.impuesto_id})):[]};this.recipesService.createTaxes(t).subscribe(o=>{o.val&&this.getTaxesById(this.recetaId)},o=>{console.error(o),l().fire({title:"Error",text:"Hubo un error al guardar los impuestos.",icon:"error"})})}else l().fire({title:"Error",text:"Por favor, agrega al menos un impuesto a la receta antes de guardar.",icon:"error"});l().fire({title:"Exito",text:"Los impuestos se han guardado correctamente.",icon:"success"})}quitarTaxes(t){let o=this.impuestosSeleccionados.findIndex(i=>i===t);-1!==o?this.impuestosSeleccionados.splice(o,1):(o=this.impuestosGuardados.findIndex(i=>i===t),-1!==o&&this.impuestosGuardados.splice(o,1)),this.impuestosParaMostrar=[...this.impuestosGuardados,...this.impuestosSeleccionados],this.cdr.detectChanges()}searchInputProductos(){let t=this.formSearch.get("search").value;this.pageActualProductos=1,""==t&&this.getProductsForRecipe(this.recetaId,this.pageActualProductos,this.pageCountProductos,t)}searchProductos(){let t=this.formSearch.get("search").value;this.pageActualProductos=1,this.getProductsForRecipe(this.recetaId,this.pageActualProductos,this.pageCountProductos,t)}onPageProductos(t){this.pageCountProductos=t.rows,this.getProductsForRecipe(this.recetaId,this.pageActualProductos,this.pageCountProductos,this.formSearch.get("search").value)}buscarPorTeclaProductos(t){"Enter"==t.code&&this.searchProductos()}searchInputImpuestos(){let t=this.formSearch.get("search").value;this.pageActualImpuestos=1,""==t&&this.getTaxesById(this.recetaId,this.pageActualImpuestos,this.pageCountImpuestos,t)}searchImpuestos(){let t=this.formSearch.get("search").value;this.pageActualImpuestos=1,this.getTaxesById(this.recetaId,this.pageActualImpuestos,this.pageCountImpuestos,t)}onPageImpuestos(t){this.pageCountImpuestos=t.rows,this.getTaxesById(this.recetaId,this.pageActualImpuestos,this.pageCountImpuestos,this.formSearch.get("search").value)}buscarPorTeclaImpuestos(t){"Enter"==t.code&&this.searchImpuestos()}leftTableProductos(){this.pageActualProductos>1&&(this.pageActualProductos--,this.getProductsForRecipe(this.recetaId,this.pageActualProductos,this.pageCountProductos),this.validatePageProductos())}rightTableProductos(){this.pageActualProductos<this.ultimaPageProductos&&(this.pageActualProductos++,this.getProductsForRecipe(this.recetaId,this.pageActualProductos,this.pageCountProductos),this.validatePageProductos())}validatePageProductos(){this.disablePageLeftProductos=1!=this.pageActualProductos,this.disablePageRightProductos=!(this.pageActualProductos>=this.ultimaPageProductos)}leftTableImpuestos(){this.pageActualImpuestos>1&&(this.pageActualImpuestos--,this.getTaxesById(this.recetaId,this.pageActualImpuestos,this.pageCountImpuestos),this.validatePageImpuestos())}rightTableImpuestos(){this.pageActualImpuestos<this.ultimaPageImpuestos&&(this.pageActualImpuestos++,this.getTaxesById(this.recetaId,this.pageActualImpuestos,this.pageCountImpuestos),this.validatePageImpuestos())}validatePageImpuestos(){this.disablePageLeftImpuestos=1!=this.pageActualImpuestos,this.disablePageRightImpuestos=!(this.pageActualImpuestos>=this.ultimaPageImpuestos)}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(C),e.Y36(p.qu),e.Y36(g.t2),e.Y36(u.F0),e.Y36(u.gz),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-recipes-products"]],decls:105,vars:46,consts:[["type","ball-scale-multiple",3,"fullScreen"],[1,"card","mb-1"],[1,"surface-section","px-2","pt-3","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"flex"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",1,"p-button-outlined","mr-4",3,"routerLink"],[1,"flex","align-items-center","font-medium","text-3xl","text-900"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["type","text","formControlName","nombreReceta","pInputText","",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-3"],["type","text","formControlName","precio","pInputText","",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["formControlName","descripcion","pInputTextarea","","rows","3","cols","20"],[1,"card","m-1"],["orientation","left"],["header","Agregar Producto",1,"line-height-3","m-0"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"font-medium","text-3xl","text-900"],["pButton","","pRipple","","type","button","icon","pi pi-plus",1,"p-button-rounded","p-button-text",3,"click"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Guardar","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll",3,"value","tableStyle","loading","rows"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Agregar Impuesto",1,"line-height-3","m-0"],["pButton","","pRipple","","label","Guardar",1,"p-button-outlined","mr-2",3,"click"],["header","Agregar Productos",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],["formControlName","producto_id","optionLabel","nombre","placeholder","Buscar Producto",1,"dropdown-custom",3,"options","autoDisplayFirst"],["pTemplate","item"],["style","color: red;",4,"ngIf"],["type","number","formControlName","cantidad","placeholder","Cantidad","pInputText","","min","1",1,"w-full","mb-3","border-round-3xl",3,"change"],["pButton","","pRipple","","label","Agregar Producto","icon","pi pi-fw","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Agregar Impuesto",3,"visible","modal","draggable","resizable","visibleChange"],["formControlName","impuesto_id","optionLabel","nombre","placeholder","Buscar Impuesto",1,"dropdown-custom",3,"options","autoDisplayFirst"],["pButton","","pRipple","","label","Agregar Impuesto","icon","pi pi-fw","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","3"],[1,"flex","align-items-center"],[1,"ml-2"],[2,"color","red"]],template:function(o,i){1&o&&(e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"div",4),e._UZ(6,"button",5),e.TgZ(7,"div",6),e._uU(8," Detalle de Receta "),e.qZA()(),e.TgZ(9,"form",7),e._UZ(10,"br"),e.TgZ(11,"div",8)(12,"div",9)(13,"label"),e._uU(14,"Nombre de Receta"),e.qZA(),e._UZ(15,"input",10),e.qZA(),e.TgZ(16,"div",11)(17,"label"),e._uU(18," Precio "),e.qZA(),e._UZ(19,"input",12),e.qZA(),e.TgZ(20,"div",13)(21,"label"),e._uU(22,"Descripci\xf3n"),e.qZA(),e._UZ(23,"textarea",14),e.qZA()()()()()()(),e.TgZ(24,"div",15)(25,"p-tabView",16)(26,"p-tabPanel",17)(27,"div",18)(28,"div",3)(29,"div")(30,"div",19)(31,"button",20),e.NdJ("click",function(){return i.openModal()}),e.qZA(),e._uU(32," Agregar Producto "),e.qZA()(),e.TgZ(33,"div",21)(34,"button",22),e.NdJ("click",function(){return i.sendProducts()}),e.qZA()()()(),e.TgZ(35,"div",23)(36,"div",24)(37,"div",25)(38,"p-table",26),e.YNc(39,ae,7,1,"ng-template",27),e.YNc(40,ne,11,0,"ng-template",28),e.YNc(41,ce,11,4,"ng-template",29),e.YNc(42,pe,3,0,"ng-template",30),e.qZA(),e._UZ(43,"br"),e.TgZ(44,"div",31)(45,"span",32)(46,"button",33),e.NdJ("click",function(){return i.leftTableProductos()}),e.qZA(),e._UZ(47,"button",34),e.TgZ(48,"button",35),e.NdJ("click",function(){return i.rightTableProductos()}),e.qZA()()()()()()(),e.TgZ(49,"p-tabPanel",36),e._UZ(50,"ngx-spinner",0),e.TgZ(51,"div",18)(52,"div",3)(53,"div")(54,"div",19)(55,"button",20),e.NdJ("click",function(){return i.openModalTaxes()}),e.qZA(),e._uU(56," Agregar Impuesto "),e.qZA()(),e.TgZ(57,"div",21)(58,"button",37),e.NdJ("click",function(){return i.sendTaxes()}),e.qZA()()()(),e.TgZ(59,"div",23)(60,"div",24)(61,"div",25)(62,"p-table",26),e.YNc(63,le,7,1,"ng-template",27),e.YNc(64,de,7,0,"ng-template",28),e.YNc(65,ue,7,2,"ng-template",29),e.YNc(66,me,3,0,"ng-template",30),e.qZA(),e._UZ(67,"br"),e.TgZ(68,"div",31)(69,"span",32)(70,"button",33),e.NdJ("click",function(){return i.leftTableImpuestos()}),e.qZA(),e._UZ(71,"button",34),e.TgZ(72,"button",35),e.NdJ("click",function(){return i.rightTableImpuestos()}),e.qZA()()()()()()()()(),e.TgZ(73,"p-dialog",38),e.NdJ("visibleChange",function(a){return i.displayModalProducts=a}),e.TgZ(74,"div",24)(75,"form",39),e.NdJ("ngSubmit",function(){return i.agregarProductos()}),e.TgZ(76,"div",8)(77,"div",13)(78,"label"),e._uU(79,"Producto"),e.qZA(),e.TgZ(80,"p-dropdown",40),e.YNc(81,ge,3,1,"ng-template",41),e.qZA(),e.YNc(82,he,2,0,"div",42),e.qZA(),e.TgZ(83,"div",13)(84,"label"),e._uU(85,"Cantidad"),e.qZA(),e.TgZ(86,"input",43),e.NdJ("change",function(a){return i.onCantidadChange(a)}),e.qZA(),e.YNc(87,fe,2,0,"div",42),e.YNc(88,_e,2,0,"div",42),e.qZA(),e.TgZ(89,"div",13),e._UZ(90,"button",44),e.qZA()(),e._UZ(91,"br"),e.qZA()()(),e.TgZ(92,"p-dialog",45),e.NdJ("visibleChange",function(a){return i.displayModalTaxes=a}),e.TgZ(93,"div",24)(94,"form",39),e.NdJ("ngSubmit",function(){return i.agregarImpuestos()}),e.TgZ(95,"div",8)(96,"div",13)(97,"label"),e._uU(98,"Impuesto"),e.qZA(),e.TgZ(99,"p-dropdown",46),e.YNc(100,be,3,1,"ng-template",41),e.qZA(),e.YNc(101,Te,2,0,"div",42),e.qZA(),e.TgZ(102,"div",13),e._UZ(103,"button",47),e.qZA()(),e._UZ(104,"br"),e.qZA()()()),2&o&&(e.Q6J("fullScreen",!0),e.xp6(6),e.Q6J("routerLink","/dashboard/admin/recipes"),e.xp6(3),e.Q6J("formGroup",i.form),e.xp6(29),e.Q6J("value",i.productosParaMostrar)("tableStyle",e.DdM(42,U))("loading",i.loadingTable)("rows",8),e.xp6(8),e.Q6J("disabled",!i.disablePageLeftProductos),e.xp6(1),e.Q6J("label",i.pageActualProductos),e.xp6(1),e.Q6J("disabled",!i.disablePageRightProductos),e.xp6(2),e.Q6J("fullScreen",!0),e.xp6(12),e.Q6J("value",i.impuestosParaMostrar)("tableStyle",e.DdM(43,U))("loading",i.loadingTable)("rows",8),e.xp6(8),e.Q6J("disabled",!i.disablePageLeftImpuestos),e.xp6(1),e.Q6J("label",i.pageActualImpuestos),e.xp6(1),e.Q6J("disabled",!i.disablePageRightImpuestos),e.xp6(1),e.Akn(e.DdM(44,ve)),e.Q6J("visible",i.displayModalProducts)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",i.formProducto),e.xp6(5),e.Q6J("options",i.productsData)("autoDisplayFirst",!1),e.xp6(2),e.Q6J("ngIf",i.formProducto.get("producto_id").hasError("required")),e.xp6(5),e.Q6J("ngIf",i.formProducto.get("cantidad").hasError("required")),e.xp6(1),e.Q6J("ngIf",null==i.formProducto.get("cantidad").errors?null:i.formProducto.get("cantidad").errors.min),e.xp6(2),e.Q6J("disabled",i.formProducto.invalid),e.xp6(2),e.Akn(e.DdM(45,Ze)),e.Q6J("visible",i.displayModalTaxes)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",i.formImpuesto),e.xp6(5),e.Q6J("options",i.taxesData)("autoDisplayFirst",!1),e.xp6(2),e.Q6J("ngIf",i.formImpuesto.get("impuesto_id").hasError("required")),e.xp6(2),e.Q6J("disabled",i.formImpuesto.invalid))},dependencies:[h.O5,u.rH,f.iA,I.jx,m.Hq,m.zx,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.qQ,_.H,b.o,T.g,v.Lt,Z.V,p.sg,p.u,g.Ro,R.xf,R.x4],styles:["svg[_ngcontent-%COMP%]{width:45%}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:20px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left;padding:8px}th[_ngcontent-%COMP%]{background-color:#f2f2f2}"]})}return s})();var y=c(2506);let xe=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:re,canActivate:[y.a],data:{permissions:["gestionInventario.recetas"]}},{path:":id/recipes-products",component:Pe,canActivate:[y.a],data:{permissions:["gestionInventario.recetas"]}}]),u.Bz]})}return s})();var Ce=c(1712),Re=c(4055);let Ae=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({providers:[{provide:P.TP,useClass:k.n,multi:!0},C],imports:[h.ez,xe,f.U$,J.O,p.u5,m.hJ,_.T,N.EV,w.V,M.Xt,b.j,T.A,v.kW,S.cc,E.L$,Z.S,F.ii.forRoot(),p.UX,g.ef,Ce.U,Re.q4,R.LU]})}return s})()}}]);