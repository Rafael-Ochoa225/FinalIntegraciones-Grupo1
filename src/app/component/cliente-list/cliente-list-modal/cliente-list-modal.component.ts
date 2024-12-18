import { Component, OnInit, inject, ChangeDetectorRef, Input, Output, EventEmitter  } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../../interfaces/cliente.interface';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../services/cliente.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente-list-modal',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cliente-list-modal.component.html',
  styleUrl: './cliente-list-modal.component.css'
})
export class ClienteListModalComponent {
  @Input() public isOpen: boolean = false;
  @Output() public eventClose = new EventEmitter();
  cliente: Cliente | null = null;
  private clienteService = inject(ClienteService) 
  public formEditar;

  constructor(private fb: FormBuilder) {
    this.formEditar = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  actualizarCliente(): void {
    if (this.formEditar.valid && this.cliente) {
      const clienteId = this.cliente._id ?? ''; // Valor predeterminado si `id` es null o undefined
  
      if (!clienteId) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El cliente no tiene un ID válido.',
        });
        return;
      }
  
      const datosActualizados: Partial<Cliente> = {
        name: this.formEditar.get('name')?.value ?? '',
        email: this.formEditar.get('email')?.value ?? '',
        tel: this.formEditar.get('phone')?.value ?? '',
        dni: this.formEditar.get('dni')?.value ?? '',
      };

      this.clienteService.actualizarCliente(this.cliente._id, datosActualizados).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Cliente actualizado',
            text: `La información del cliente se actualizó correctamente.`,
          });
          // Actualiza el cliente mostrado en pantalla
          this.cliente = { 
            ...this.cliente, 
            ...datosActualizados 
          } as Cliente;
        },
        error: (err) => {
          console.error('Error al actualizar cliente', err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo actualizar la información del cliente.',
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario inválido',
        text: 'Por favor, completa todos los campos.',
      });
    }
  }
}
