import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/content/service/auth.service';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const permissions = next.data['permissions'];

    if (!permissions) {
      return true; // No permissions required, allow access
    }

    // Check if user has all required permissions
    const hasAllPermissions = permissions.every(permission => AuthService.hasPermission(permission));
    if (!hasAllPermissions) {
      // Redirect to unauthorized page
      return this.router.parseUrl('/unauthorized');
    }

    return true;
  }
}
