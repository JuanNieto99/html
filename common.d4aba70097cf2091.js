"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[592],{1455:(p,u,r)=>{r.d(u,{s:()=>_});var d=r(5619),c=r(7398),n=r(6306),o=r(4444),h=r(4946),a=r(9862);let _=(()=>{class s{constructor(t){this.httpClient=t,this.dataSubject=new d.X([]),this.baseUrl=o.D.url,this.endpointCountry="/paisListar",this.endpointState="/departamentoPaisListar",this.endpointCity="/ciudadDepartamentoListar",this.endpointHotelsListar="/hotelListar",this.endpointHotelMostrar="/hotelMostrar/",this.endpointHotelCrear="/hotelCrear/",this.endpointHotelActualizar="/hotelActualizar",this.endpointHotelEliminar="/hotelEliminar/",this.data=this.dataSubject.asObservable()}getAll(t,e="",l=1){return this.httpClient.post(`${this.baseUrl+this.endpointHotelsListar}?per_page=${t}&page=${l}&search=${e}`,{})}getHotel(t){return this.httpClient.get(`${this.baseUrl+this.endpointHotelMostrar+t}`)}refreshHotelsData(){this.getAll(30).subscribe(t=>{this.dataSubject.next(t.data)},t=>{console.log("Error: ",t)})}createHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelCrear}`,t)}deleteHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelEliminar}`,{id:t})}updateHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelActualizar}`,t)}getCountries(){return this.httpClient.post(`${this.baseUrl+this.endpointCountry}`,{id:""}).pipe((0,c.U)(e=>e&&e.data&&Array.isArray(e.data)?e.data:[]),(0,n.K)(e=>(console.log("Error:",e),[])))}getStates(t){return this.httpClient.post(`${this.baseUrl+this.endpointState}`,{id:t})}getCities(t){return this.httpClient.post(`${this.baseUrl+this.endpointCity}`,{id:t})}static#t=this.\u0275fac=function(e){return new(e||s)(h.LFG(a.eN))};static#e=this.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},2656:(p,u,r)=>{r.d(u,{p:()=>h});var d=r(5619),c=r(8645),n=r(86),o=r(4946);let h=(()=>{class a{constructor(s){this.router=s,this.breadcrumbs=new d.X([]),this.currentBreadcrumbs=this.breadcrumbs.asObservable(),this.removeSubject=new c.x,this.removeItem=this.removeSubject.asObservable(),this.router.events.subscribe(i=>{i instanceof n.m2&&this.updateBreadcrumbs(i.urlAfterRedirects)})}updateBreadcrumbs(s){const t=s.split("/").map((e,l)=>0===l?"Home":e);this.breadcrumbs.next(t)}addItem(s){this.breadcrumbs.getValue().push(s),this.breadcrumbs.next(this.breadcrumbs.getValue())}quitItem(s){this.removeSubject.next(s)}static#t=this.\u0275fac=function(i){return new(i||a)(o.LFG(n.F0))};static#e=this.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);