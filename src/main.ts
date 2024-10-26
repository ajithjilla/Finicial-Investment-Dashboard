import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { httpInterceptorProviders } from './app/http.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    httpInterceptorProviders
  ]
});
