import { Component, OnInit, inject } from '@angular/core';
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

  ngOnInit(): void {
    this.categoriaService.getCate().subscribe({
      next: (data) => this.CatetList = data,
      error: (err) => console.error('Error al obtener categorias', err)
    })
  }
}
