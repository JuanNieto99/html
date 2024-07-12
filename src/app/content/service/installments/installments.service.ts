import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../storage/config';
import { Observable } from 'rxjs';
import { Abonos } from '../../models/admin/installments.model';

@Injectable({
  providedIn: 'root'
})
export class InstallmentsService {

    private baseUrl: string;
    private endpointListar: string;
    private endpointDelete: string;

    constructor(private httpClient: HttpClient){
        this.baseUrl = Config.url;
        this.endpointListar = '/abonoListar';
        this.endpointDelete = '/abonoEliminar';
    }

    getAll(per_page:number, search:string = '', page:number = 1): Observable<Abonos[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
        };
        const parametros = {};
        return this.httpClient.post<Abonos[]>(`${this.baseUrl+this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, httpOptions);
    }

    deleteInstallments(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointDelete}`, data);
    }
}
