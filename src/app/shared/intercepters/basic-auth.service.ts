import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class BasicAuthService {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // intercept http request and add auth header
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                "accept": "*/*",
                'Authorization': 'Basic ' + btoa(environment.email + ':' + environment.password)
            }
        });

        return next.handle(request);
    }

}