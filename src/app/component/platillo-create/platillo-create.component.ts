import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatillosService } from '../../services/platillos.service';
import { Platillo } from '../../interfaces/platillos.interface';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-platillo-create',
  imports: [FormsModule],
  templateUrl: './platillo-create.component.html',
  styleUrl: './platillo-create.component.css'
})
export class PlatilloCreateComponent {
  nuevoPlatillo: { 
    name: string; 
    ingredients: string; // Temporalmente como cadena
    price: number; 
    images: string; 
  } = {
    name: '',
    ingredients: '', // Aquí recibes los ingredientes como cadena
    price: 0,
    images: ''
  };

  constructor(private platilloService: PlatillosService, private router: Router) {}

  crearPlatillo(): void {
    const platilloData = {
      ...this.nuevoPlatillo,
      ingredients: this.nuevoPlatillo.ingredients.split(',').map((ing) => ing.trim()), // Convierte la cadena en un array
    };
  
    this.platilloService.crearPlatillo(platilloData).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Platillo creado con éxito', 'success');
        this.router.navigate(['/platillos']); // Redirige al listado
      },
      error: (err) => {
        console.error('Error al crear platillo:', err);
        Swal.fire('Error', 'No se pudo crear el platillo', 'error');
      },
    });
  }
}