import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedRequest;
        const before = new Date();
        if (req.method === 'POST' || (req.method === 'GET')) {
            clonedRequest = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'user-token'
                })
            });
        } else {
            clonedRequest = req;
        }
        return next.handle(clonedRequest).pipe(
            tap((() => {
                console.log(`response time - ${new Date().getTime() - before.getTime()} milliseconds`)
            }))
        )
    }
}
