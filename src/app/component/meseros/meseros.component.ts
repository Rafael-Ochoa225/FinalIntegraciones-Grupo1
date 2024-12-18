import { Component, OnInit, inject } from '@angular/core';
import { Mesero } from '../../interfaces/meseros.interface';
import { MeserosService } from '../../services/meseros.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meseros',
  imports: [CommonModule],
  templateUrl: './meseros.component.html',
  styleUrl: './meseros.component.css'
})
export class MeserosComponent implements OnInit {
  meseros: Mesero[] = [];
  private meseroService = inject(MeserosService);

  ngOnInit(): void {
    this.obtenerMeseros();
  }

  obtenerMeseros(): void {
    this.meseroService.listarMeseros().subscribe({
      next: (data) => {
        this.meseros = data;
      },
      error: (err) => {
        console.error('Error al obtener meseros:', err);
        Swal.fire('Error', 'No se pudo cargar la lista de meseros', 'error');
      },
    });
  }

  eliminarMesero(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción desactivará al mesero',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, desactivar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.meseroService.eliminarMesero(id).subscribe({
          next: () => {
            Swal.fire('Desactivado', 'El mesero ha sido desactivado', 'success');
            this.obtenerMeseros();
          },
          error: (err) => {
            console.error('Error al desactivar mesero:', err);
            Swal.fire('Error', 'No se pudo desactivar el mesero', 'error');
          },
        });
      }
    });
  }
}