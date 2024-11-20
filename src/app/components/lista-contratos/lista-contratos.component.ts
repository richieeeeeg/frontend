import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
})
export class ListaContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.loadContratos();
  }

  loadContratos(): void {
    this.contratoService.getAllContratos().subscribe((data) => {
      this.contratos = data;
    });
  }

  deleteContrato(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este contrato?')) {
      this.contratoService.deleteContrato(id).subscribe(() => {
        alert('Contrato eliminado con éxito');
        this.loadContratos(); // Refrescar la lista
      });
    }
  }
}
