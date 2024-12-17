import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catetList } from '../../interfaces/categorias.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categoria-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categoria-list.component.html',
  styleUrl: './categoria-list.component.css'
})
export class CategoriaListComponent {

  private categoriaService = inject(CategoriaService) 
  
  public form;  
  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [ '', Validators.required],
      desc: [ '',  Validators.required]
    })
  }

  /*crearCategoria(): void{
    const data = this.form.getRawValue
    console.log(data)
    this.categoriaService.crearCate

    this.form.reset
  }*/

    crearCategoria(): void {
      //const data : catetList = this.form.getRawValue()
       
        //let namecat = this.form.get('name')?.value
        //let desccat = this.form.get('desc')?.value
        if(this.form.invalid){
          Swal.fire({
            text: 'Llena los campos',
              icon: 'error',
              title: 'Formulario inválido'
          })
        }
        const data = this.form.value as catetList
        console.log(data)
        this.categoriaService.crearCate(data).subscribe({
          next: (response) => {
            console.log('Categoría creada:', response);
            Swal.fire({
              text: 'Creación exitosa',
              icon: 'success'
            })
            this.form.reset();
          },
          error: (err) => {
            console.error('Error al crear la categoría:', err);
            Swal.fire({
              text: 'No se ha podido crear la categoría',
              icon: 'warning'
            })
          },
        });

    }
}
