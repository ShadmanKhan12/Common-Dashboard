import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: UserAuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Basic ${localStorage.getItem('AuthToken')}`
            }
        });
        return next.handle(request);
    }
    
}