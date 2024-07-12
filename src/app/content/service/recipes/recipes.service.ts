import { Injectable } from '@angular/core';
import { Config } from '../../storage/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipes } from '../../models/admin/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    private baseUrl: string;
    private endpointListar: string;
    private endpointRecipesGet: string;
    private endpointRecipesUpdate: string;
    private endpointRecipesCreate: string;
    private endpointDelete: string;

    private endpointProductsGet: string;
    private endpointProductsCreate: string;
    private endpointAllProductsGet: string;

    private endpointTaxesGet: string;
    private endpointTaxesByIdGet: string;
    private endpointTaxesCreate: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = Config.url;
        this.endpointListar = '/recetaListar';
        this.endpointRecipesGet = '/recetaEditar/';
        this.endpointRecipesUpdate = '/recetaActualizar';
        this.endpointRecipesCreate = '/recetaCrear';
        this.endpointDelete = '/recetaEliminar';
        this.endpointProductsGet = '/getRecetaProductos/';
        this.endpointProductsCreate = '/agregarProductosReceta';
        this.endpointAllProductsGet = '/getAllProductosByRecetas/';
        this.endpointTaxesGet = '/getRecetaCrearImpuesto/'
        this.endpointTaxesByIdGet = '/getImpuestoReceta/';
        this.endpointTaxesCreate = '/agregarImpuestoReceta'
    }

    getAll(per_page:number, search:string = '', page:number = 1): Observable<Recipes[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
        };
        const parametros = {};
        return this.httpClient.post<Recipes[]>(`${this.baseUrl+this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, httpOptions);
    }

    getRecipes(id:number): Observable<any>{
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointRecipesGet+id}`);
    }

    createRecipes(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointRecipesCreate}`, data);
    }

    updateRecipes(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointRecipesUpdate}`, data);
    }

    deleteRecipes(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointDelete}`, data);
    }

    //Recetas-Productos

    //Productos
    getProducts(id:number){
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointProductsGet+id}`)
    }
    //Metodo para obtener los productos que pertenecen a la receta
    getProductsRecetas(id: number, page: number = 1, perPage: number = 10, search: string = '') {
        const searchParam = search ? `&search=${search}` : '';
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointAllProductsGet + id}?page=${page}&per_page=${perPage}${searchParam}`);
    }

    createRecipesProducts(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointProductsCreate}`, data);
    }

    ///Recetas Impuestos ///

    //Impuestos
    getTaxes(id:number){
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointTaxesGet+id}`)
    }

    //Obtiene impuestos que pertenecen a la receta
    getRecipeTaxes(id: number, page: number = 1, perPage: number = 10, search: string = '') {
        const searchParam = search ? `&search=${search}` : '';
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointTaxesByIdGet + id}?page=${page}&per_page=${perPage}${searchParam}`);
    }

    createTaxes(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointTaxesCreate}`, data);
    }
}
