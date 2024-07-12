import { Injectable } from '@angular/core';
import { Config } from '../../storage/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../../models/dashboard/invoice.model';

@Injectable({
    providedIn: 'root',
})
export class InvoiceService {
    private baseUrl: string;
    private endPointAnular: string;
    private endPointListar: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = Config.url;
        this.endPointAnular = '/facturaAnular';
        this.endPointListar = '/facturaListar';
    }

    getAll(
        per_page: number,
        page: number = 1,
        search: string = ''
    ): Observable<Factura[]> {
        const parametros = {};
        return this.httpClient.post<Factura[]>(
            `${this.baseUrl + this.endPointListar
            }?page=${page}&per_page=${per_page}&search=${search}`,
            parametros
        );
    }

    anular(data) {
        return this.httpClient.post<any>(
            `${this.baseUrl + this.endPointAnular}?=${data.id}`,
            //TODO Arreglar id en el endpoint
            data
        );
    }
}
