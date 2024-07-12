import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../storage/config';
import { Sale } from '../../models/admin/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

    private baseUrl: string;
    private endpointListar: string;
    private endpointProductsGet:string;
    private endpointVentasCrear: string;
    private endpointVentasDelete: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = Config.url;
        this.endpointListar = '/ventasListar';
        this.endpointProductsGet = '/getDatosVentasCrear';
        this.endpointVentasCrear = '/crearVenta';
        this.endpointVentasDelete = '/eliminarVenta';
    }

    getAll(per_page:number, search:string = '', page:number = 1): Observable<Sale> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            })
        };
        const parametros = {};
        return this.httpClient.post<Sale>(`${this.baseUrl+this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, httpOptions);
    }

    deleteSale(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointVentasDelete}`, data);
    }

    // funciones venta detalle

    getDatosVentasCrear(): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointProductsGet}`);
    }

    createVentas(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointVentasCrear}`, data);
    }

}
