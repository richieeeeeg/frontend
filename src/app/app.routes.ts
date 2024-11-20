import { Routes } from '@angular/router';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';

export const routes: Routes = [
  { path: 'contratos', component: ListaContratosComponent },
  { path: 'crear-contrato', component: CrearContratoComponent },
  { path: '', redirectTo: '/contratos', pathMatch: 'full' }
];