import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Rol } from 'src/app/content/models/admin/roles.model';
import { Config } from '../../storage/config';
import { PermisoRol, Permiso, TopLevel } from '../../api/rolesPermisos';

@Injectable({
    providedIn: 'root'
})

export class RolesService {
    ///// Variables de endpoints  /////
    private baseUrl: string;
    private endpointRolListar: string;
    private endpointRolesMostrar: string;
    private endpointRolActualizar: string;
    private endpointRolEliminar: string;
    private endpointCrear: string;
    private endPointPermisosByRol: string
    private endpointGuardar: string;

    /////// Variables para manejar datos de permisos
    private dataSubject: BehaviorSubject<Rol[]>;
    public data: Observable<Rol[]>;

    constructor(private httpClient: HttpClient) {
        this.dataSubject = new BehaviorSubject<Rol[]>([]);
        this.data = this.dataSubject.asObservable();
        this.baseUrl = Config.url;
        this.endpointCrear = '/rolCrear';
        this.endpointRolListar = '/rolListar';
        this.endpointRolesMostrar = '/rolMostrar';
        this.endpointRolActualizar = '/rolActualizar';
        this.endpointRolEliminar = '/rolEliminar';
        this.endPointPermisosByRol = '/getPermisosByRol';
        this.endpointGuardar = '/cratePermisoByRol'
    }

    //////////////////////  CRUD PERMISOS  /////////////////////////
    // Consultar lista de permisos
    getRoles(per_page: number, search: string = '', page: number = 1): Observable<Rol[]> {
        const parametros = {
            id: '',
            nombre: '',
            descripcion: '',
            estado: ''
        };
        return this.httpClient.post<Rol[]>(`${this.baseUrl + this.endpointRolListar}?per_page=${per_page}&page=${page}&search=${search}`, parametros);
    }
    // Crear un nuevo servicio
    CreateRoles(data: any): Observable<Rol[]> {
        return this.httpClient.post<Rol[]>(`${this.baseUrl + this.endpointCrear}`, data);
    }
    /////// Elegir un nuevo servicio por id
    getRolesById(id: number) {
        return this.httpClient.get<any>(`${this.baseUrl + this.endpointRolesMostrar}/${id}`)
            .pipe(map(hotel => hotel));
    }
    updateRoles(data: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointRolActualizar}`, data);
    }
    deleteRoles(id: number) {
        const parametros = {
            id: id
        };
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointRolEliminar}`, parametros);
    }
    refresRolesData(): void {
        this.getRoles(30).subscribe(
            (response: any) => {
                this.dataSubject.next(response.data);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    //////////////////////  Permisos de cada rol  /////////////////////////
    getPermisosByRol(id) {
        return this.httpClient.get<TopLevel>(`${this.baseUrl + this.endPointPermisosByRol}/${id}`)
            .toPromise()
    }

    savePermisosByRol(rol_id: number, permiso_for: number[]): Observable<PermisoRol> {
        const parametros = {
            rol_id: rol_id,
            permiso_for: permiso_for
        }
        return this.httpClient.post<any>(`${this.baseUrl + this.endpointGuardar}`, parametros)
    }

}
