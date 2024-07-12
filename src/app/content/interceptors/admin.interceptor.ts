import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

function getToken() {
    // Recuperamos el valor de currentUser del localStorage
    var currentUser = localStorage.getItem('currentUser');

    // Convertimos el valor de currentUser a un objeto JSON
    var currentUserObj = JSON.parse(currentUser);

    // Recuperamos el token del objeto JSON currentUserObj
    var token = currentUserObj.token;

    // Devolvemos el token
    return token;
}

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
 constructor() {}
 
 

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = getToken(); // Asegúrate de reemplazar esto con la forma correcta de obtener el token
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.error.message == 'Unauthenticated.'){
          localStorage.removeItem('currentUser');
        }
        /*if (error.status === 401) {
      
        }*/
        return throwError(error);
      })
    );
 }
}