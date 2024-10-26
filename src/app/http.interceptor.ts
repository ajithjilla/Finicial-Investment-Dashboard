import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('HTTP Request:', request);
    
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event) {
            console.log('HTTP Response:', event);
          }
        },
        error: (error) => {
          console.error('HTTP Error:', error);
        },
      })
    );
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true },
];
