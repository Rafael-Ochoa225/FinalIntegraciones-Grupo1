import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service'; 
import { catetList } from '../../interfaces/categorias.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{

  CatetList: catetList[] = [];

  //constructor(private categoriaService: CategoriaService) {}
 
  private categoriaService = inject(CategoriaService)
  private cdRef = inject(ChangeDetectorRef)

  ngOnInit(): void{
    this.oncat();
  }

  oncat(): void {
    this.categoriaService.getCate().subscribe({
      next: (data) => this.CatetList = data,
      
      error: (err) => console.error('Error al obtener categorias', err)
    })
  }
  eliminarCategoria(name: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.categoriaService.eliminarCate(name).subscribe({
        next: () => {
          console.log(`Categoría con nombre ${name} eliminada`);
          alert('Categoría eliminada exitosamente');
          this.oncat(); // Refrescamos la lista de categorías
        },
        error: (err) => {
          console.error('Error al eliminar la categoría:', err);
        },
      });
    }
  }
}
