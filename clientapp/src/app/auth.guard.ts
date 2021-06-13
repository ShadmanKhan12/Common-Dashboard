import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = localStorage.getItem('Role');
        console.log(role);
        if (role) {
            if (role != route.data.role) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
    }
}