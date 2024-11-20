import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent {
  contratoForm: FormGroup;

  constructor(private fb: FormBuilder, private contratoService: ContratoService) {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: [0, Validators.required],
      nombreContratante: ['', Validators.required],
      documentoContratante: ['', Validators.required],
      nombreContratantista: ['', Validators.required],
      documentoContratantista: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contratoForm.valid) {
      const nuevoContrato: Contrato = this.contratoForm.value;
      this.contratoService.createContrato(nuevoContrato).subscribe(() => {
        alert('Contrato creado con éxito');
        this.contratoForm.reset();
      });
    }
  }
}
