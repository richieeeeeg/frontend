import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module'; // Rutas definidas en otro archivo

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Proporciona las rutas en lugar de AppModule
});




