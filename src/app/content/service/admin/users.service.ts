import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/admin/users.model';
import { map } from 'rxjs/operators';
import { firstValueFrom, catchError } from 'rxjs';
import { Config } from '../../storage/config';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private usersUrl: any;
    private endpointListar: any;
    private endpointCrear: any;
    private endpointUno: any;
    private endpointEdit: any;
    private endpointDelete: any;
    private dataSubject: BehaviorSubject<User[]>;
    public data: Observable<User[]>;
    public token: string;

    public endpointHotelesUsuario: any;
    public endpointHotelesUsuarioActualizar: any;

    private endpointUpdateTheme: any;

    constructor(private httpClient: HttpClient) {
        this.dataSubject = new BehaviorSubject<User[]>([]);
        this.data = this.dataSubject.asObservable();
        this.usersUrl = Config.url;
        this.endpointListar = '/usuariosListar';
        this.endpointCrear = '/usuariosCrear';
        this.endpointUno = '/usuarioMostrar';
        this.endpointEdit = '/usuariosActualizar';
        this.endpointDelete = '/usuariosEliminar';

        this.endpointHotelesUsuario = '/usuariosHotelMostrar';
        this.endpointHotelesUsuarioActualizar = '/usuariosHotelActualizar';

        this.endpointUpdateTheme = '/update-theme';

    }

    getAll(per_page: number, search: string = '', page: number = 1): Observable<User[]> {
        const parametros = {
            id: '',
            name: '',
            email: '',
            rol_id: '',
            estado: '',
            superadmin: '',
        };
        return this.httpClient.post<User[]>(`${this.usersUrl + this.endpointListar}?per_page=${per_page}&page=${page}&search=${search}`, parametros);

    }
    getById(id: number) {
        return this.httpClient.get<any>(`${this.usersUrl + this.endpointUno}/${id}`)
            .pipe(map(user => user));
    }

    insertData(data: any): Observable<any> {
        return this.httpClient.post<any>(`${this.usersUrl + this.endpointCrear}`, data);
    }

    updateUser(data: any): Observable<any> {
        return this.httpClient.post<any>(`${this.usersUrl + this.endpointEdit}`, data);
    }

    deleteUser(data: any) {
        const url = `${this.usersUrl + this.endpointDelete}`;
        return this.httpClient.request('POST', url, data);
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

    getHotelsByUser(id: number) {
        return this.httpClient.get<any>(`${this.usersUrl + this.endpointHotelesUsuario}/${id}`)
            .pipe(map(hotel => hotel));
    }

    saveHotelsByUser(user_id: number, hotel_for: number[]): Observable<any> {
        const parametros = {
            usuario_id: user_id,
            hoteles: hotel_for
        }
        return this.httpClient.post<any>(`${this.usersUrl + this.endpointHotelesUsuarioActualizar}`, parametros)
    }

    updateTheme(userId: number, themeConfig: any, token: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<any>(`${this.usersUrl + this.endpointUpdateTheme}/${userId}`, themeConfig, { headers });
    }

}
