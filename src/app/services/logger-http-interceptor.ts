import { Injectable } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class LoggerHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('processing request', request);

        const requestWithNewHeader = request.clone ({
            headers: request.headers.set('sample', 'testReq')
        });

        return next.handle(requestWithNewHeader);
    }
}