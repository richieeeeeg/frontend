import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de haber creado `app-routing.module.ts`

// Componentes
import { AppComponent } from './app.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContratosComponent,
    CrearContratoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
