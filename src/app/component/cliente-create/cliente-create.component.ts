import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-create',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent {
    nuevoCliente: Cliente = {
      _id: '', // Será generado por el backend
      name: '',
      email: '',
      tel: '',
      dni: '',
    };

    constructor(private clienteService: ClienteService) {}

    registrarCliente(): void {
      this.clienteService.crearCliente(this.nuevoCliente).subscribe({
        next: (clienteCreado) => {
          alert('Cliente registrado con éxito');
          console.log('Cliente creado:', clienteCreado);
          this.limpiarFormulario();
        },
        error: (error) => {
          console.error('Error al registrar el cliente:', error);
          alert('Ocurrió un error al registrar el cliente.');
        },
      });
    }

    private limpiarFormulario(): void {
      this.nuevoCliente = {
        _id: '',
        name: '',
        email: '',
        tel: '',
        dni: '',
      };
    }


}
