import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Permit } from 'src/app/content/models/admin/permissions.model';
import { Wallet } from '../../models/admin/wallets.model';
import { Config } from '../../storage/config';

@Injectable({
    providedIn: 'root'
  })

  export class WalletService{

    public saldoCaja:string = '';
    public nombreCaja:string = '';

    // Variables de endpoints
    private baseUrl: string;
    private endpointPListar:string;
    private endpointWalletGet:string;
    private endpointPActualizar:string;
    private endpointPEliminar:string;
    private endpointWalletCreate: string;
    private endpointAbrirCaja: string;
    private endpointEdit: string;
    private endpointCerrarCaja: string;
    private endpointGetAbrirCaja: string;
    private endpointGetDetalleCaja: string;
    private endpointAnularCaja: string;
    private endpointValidarCajaByUsuario: string;
    private endpointDetalleCaja : string;
    private endpointSaldoCaja : string;

    // Variables para manejar datos de permisos
    private dataSubject: BehaviorSubject<Wallet[]>;
    public data: Observable<Wallet[]>;

    constructor(private httpClient: HttpClient) {
        this.dataSubject = new BehaviorSubject<Permit[]>([]);
        this.data = this.dataSubject.asObservable();
        this.baseUrl = Config.url;
        this.endpointWalletCreate ='/cajaCrear';
        this.endpointPListar = '/cajaListar';
        this.endpointWalletGet = '/cajaMostrar/';
        this.endpointPActualizar = '/cajaActualizar';
        this.endpointPEliminar='/cajaEliminar';
        this.endpointEdit='/cajaEditar/';
        this.endpointGetAbrirCaja = '/getAbrirCaja/';
        this.endpointAbrirCaja = '/cajaAbir';
        this.endpointGetDetalleCaja = '/cajaDetalleListar';
        this.endpointCerrarCaja = '/cajaCerrar';
        this.endpointAnularCaja = '/cajaControlEliminar';
        this.endpointValidarCajaByUsuario = '/validacionCajaAbiertaUsuario/';
        this.endpointDetalleCaja = '/detalleCaja/';
        this.endpointSaldoCaja = '/detalleCajaSaldo';
    }

    //Cajas
    getAll(per_page:number, search:string = '', page:number = 1): Observable<Wallet[]> {
        const parametros = {};
        return this.httpClient.post<Wallet[]>(`${this.baseUrl+this.endpointPListar}?per_page=${per_page}&page=${page}&search=${search}`, parametros);
    }

    getWallet(id:number): Observable<any>{
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointEdit+id}`);
    }

    createWallet(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointWalletCreate}`, data);
    }

    updateWallet(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointPActualizar}`, data);
    }

    deleteWallet(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointPEliminar}`, data);
    }


    //Detalle de caja
    getAbrirCaja(usuario_id:number): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointGetAbrirCaja+usuario_id}`);
    }

    abrirCaja(data: any) : Observable<any> {
        return this.httpClient.post<any[]>(`${this.baseUrl+this.endpointAbrirCaja}`, data);
    }

    getAllDetalleCaja(per_page:number, search:string = '', page:number = 1): Observable<any[]> {
        const parametros = {};
        return this.httpClient.post<any[]>(`${this.baseUrl+this.endpointGetDetalleCaja}?per_page=${per_page}&page=${page}&search=${search}`, parametros);
    }

    cerrarCaja(data:any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointCerrarCaja}`, data);
    }

    anularCaja(data:any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointAnularCaja}`, data);
    }

    validarCajaAbiertaByUsuario(usuario_id:number): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointValidarCajaByUsuario+usuario_id}`);
    }

    // Servicio en Angular
    getDetelleCaja(detalle_id: number, search: string = '', page: number = 1, perPage: number = 10): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointDetalleCaja + detalle_id}?page=${page}&per_page=${perPage}&search=${search}`);
    }

    getSaldoCaja()  {
        let token = JSON.parse(localStorage.getItem('currentUser')).token ;

        this.httpClient.get<any>(`${this.baseUrl+this.endpointSaldoCaja}?token=${token}`).subscribe(element => {
            this.saldoCaja = element.saldo;
            this.nombreCaja = element.nombre;
        })
    }

    getSaldoCajaInfo(): Observable<any> {
        let token = JSON.parse(localStorage.getItem('currentUser')).token ;

        return this.httpClient.get<any>(`${this.baseUrl+this.endpointSaldoCaja}?token=${token}`);
    }

}
