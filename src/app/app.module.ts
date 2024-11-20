import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule

import { AppComponent } from './app.component';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';  // Importar el componente CrearContrato
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';  // Importar el componente ListaContratos
import { routes } from './app.routes';  // Importar las rutas

@NgModule({
  declarations: [
    AppComponent,
    CrearContratoComponent,  // Declarar el componente CrearContrato
    ListaContratosComponent,  // Declarar el componente ListaContratos
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configurar RouterModule con las rutas
    ReactiveFormsModule  // Asegúrate de agregar ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}