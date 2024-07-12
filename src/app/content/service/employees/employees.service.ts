import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../../models/dashboard/employee.model';
import { Config } from '../../storage/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
    private baseUrl: string;
    private endpointListar: string;
    private endpointCreateGet:string;
    private endpointEmployeeCreate: string;
    private endpointEmployeeGet: string;
    private endpointEmployeeEdit: string;
    private endpointDelete: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = Config.url;
        this.endpointListar = '/empleadoListar';
        this.endpointCreateGet = '/getSelectData';
        this.endpointEmployeeCreate = '/createEmployee';
        this.endpointEmployeeGet = '/empleadoEditar/';
        this.endpointEmployeeEdit = '/empleadoActualizar';
        this.endpointDelete = '/empleadoEliminar'
    }

    getAll(per_page:number, search:string = '', page:number = 1): Observable<Employees[]> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            })
        };
        const parametros = {};
        return this.httpClient.post<Employees[]>(`${this.baseUrl+this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, httpOptions);
    }

    // Metodo para traer los datos a usar en los selects de crear y en el editar
    getDataCreate(): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointCreateGet}`);
    }

    // Crear el empleado
    createEmployee(data:any){
        return this.httpClient.post<any>(`${this.baseUrl+this.endpointEmployeeCreate}`, data);
    }

    // Obtener empleado para editar
    getEmployee(id:number): Observable<any>{
        return this.httpClient.get<any>(`${this.baseUrl+this.endpointEmployeeGet+id}`);
    }

    // Editar el empleado
    updateEmployee(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointEmployeeEdit}`, data);
    }

    // Eliminar empleado
    deleteEmployee(data: any) {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointDelete}`, data);
    }
}
