import { Component, OnInit, inject, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesService } from '../../services/ordenes.service';
import { Orden } from '../../interfaces/ordenes.interface';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
  ordenes: Orden[] = [];
  idMesa: number = 0;

  private ordenesService = inject(OrdenesService);

  constructor() {}

  buscarOrden(): void {
    if (this.idMesa > 0) {
      this.ordenesService.obtenerOrden(this.idMesa).subscribe({
        next: (orden) => {
          this.ordenes = [orden];  // Mostrar solo la orden encontrada
          Swal.fire({
            icon: 'success',
            title: 'Orden encontrada',
            text: 'La información de la orden se obtuvo correctamente.',
          });
        },
        error: (err) => {
          console.error('Error al obtener la orden', err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo encontrar la orden.',
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'ID de mesa inválido',
        text: 'Por favor ingresa un ID de mesa válido.',
      });
    }
  }
  actualizarEstado(estado: string): void {
    if (this.ordenes.length > 0) {
      const idMesa = this.ordenes[0].id_mesa;
      this.ordenesService.actualizarEstadoOrden(idMesa, estado).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Estado actualizado',
            text: `La orden se marcó como ${estado}.`,
          });
          this.buscarOrden();  // Refrescar la orden después de la actualización
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar estado',
            text: 'No se pudo actualizar el estado de la orden.',
          });
        },
      });
    }
  }

  eliminarOrden(): void {
    if (this.ordenes.length > 0) {
      const idMesa = this.ordenes[0].id_mesa;
      this.ordenesService.eliminarOrden(idMesa).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Orden eliminada',
            text: 'La orden fue eliminada correctamente.',
          });
          this.ordenes = [];  // Limpiar la lista de órdenes
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al eliminar la orden',
            text: 'No se pudo eliminar la orden.',
          });
        },
      });
    }
  }
}


