import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModule } from 'src/app/content/components/dashboard/products/products.module';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from 'src/app/content/models/dashboard/products.model';
import { AppComponent } from 'src/app/app.component';
import { Config } from '../../storage/config';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private baseUrl: string;
    private endpointListar: string;
    private endpointProductGet: string;
    private endpointProductCreate: string;
    private endpointEliminar: string;
    private endpointProductUpdate: string;
    private endpointProductImpuestoCrear: string;
    public data: Observable<Products[]>;
    private dataSubject: BehaviorSubject<Products[]>;
    private endpointProductImpuesto: string;
    private endpointGetProductImpuesto: string;

    private endpointProductoDetalleMostrar: string;
    private endpointProductoDetalleCrear: string;
    private endpointEliminarDetalle: string;

    constructor(
        private httpClient: HttpClient,
    ) {
        this.dataSubject = new BehaviorSubject<Products[]>([]);
        this.endpointListar = '/productoListar';
        this.endpointProductGet = '/productoEditar/';
        this.endpointProductCreate = '/productoCrear';
        this.endpointProductUpdate = '/productoActualizar';
        this.endpointEliminar = '/productoEliminar';
        this.endpointProductImpuesto = '/productoImpuestoGet';
        this.endpointProductImpuestoCrear = '/productoImpuestoCrear';
        this.endpointGetProductImpuesto = '/getProductoImpuesto';

        //Tabla detalles producto
        this.endpointProductoDetalleMostrar = '/productoDetalleMostrar';
        this.endpointProductoDetalleCrear = '/productoDetalleCrear';
        this.endpointEliminarDetalle = '/productoDetalleEliminar';

        this.data = this.dataSubject.asObservable();
        this.baseUrl = Config.url;

    }

    getAll(per_page: number, search: string = '', page: number = 1): Observable<Products[]> {
        const parametros = {};
        return this.httpClient.post<Products[]>(`${this.baseUrl + this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, parametros);

    }

    getProducto(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointProductGet + id}`);
    }

    refreshUsersData(): void {
        this.getAll(30).subscribe(
            (response: any) => {
                this.dataSubject.next(response.data);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    createProduct(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointProductCreate}`, data);
    }

    eliminarProduct(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointEliminar}`, data);
    }

    updateProducto(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointProductUpdate}`, data);
    }

    getImpuesto(id: number, perPage: number = 10, page: number = 1, search: string = '') {
        const searchParam = search ? `&search=${search}` : '';
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointProductImpuesto}/${id}?per_page=${perPage}&page=${page}${searchParam}`);
    }

    createImpuesto(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointProductImpuestoCrear}`, data);
    }

    getImpuestoCrear() {
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointGetProductImpuesto}`);
    }

    getDetallesProducto(id: number, perPage: number = 10, page: number = 1, search: string = '') {
        const searchParam = search ? `&search=${search}` : '';
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointProductoDetalleMostrar}/${id}?per_page=${perPage}&page=${page}${searchParam}`);
    }

    createDetalle(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointProductoDetalleCrear}`, data);
    }

    deleteDetalle(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointEliminarDetalle}`, data);
    }

}
