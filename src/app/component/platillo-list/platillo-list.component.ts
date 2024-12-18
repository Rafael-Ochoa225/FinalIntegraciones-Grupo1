import { Component, OnInit, inject, ChangeDetectorRef  } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatillosService } from '../../services/platillos.service';
import { CommonModule } from '@angular/common';
import { PlatformState } from '@angular/platform-server';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Platillo } from '../../interfaces/platillos.interface';

@Component({
  selector: 'app-platillo-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './platillo-list.component.html',
  styleUrl: './platillo-list.component.css'
})
export class PlatilloListComponent {
  
  platillo: Platillo | null = null;
  platillos: Platillo[] = [];

  private platilloService = inject(PlatillosService)

  public form;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      id: ['', Validators.required]
    })
  }

  buscarPlatillo(id: string): void{
    this.platilloService.obtenerPlatillo(id).subscribe({
          next: (data)=>{
            this.platillo = data;
            Swal.fire({
              icon: 'success',
              title: 'Platillo encontrado',
              text: `Información del platillo obtenida`
            });
          },
          error: (err)=>{
            console.error('Erro al obtener el platillo', err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo econtrar el platillo'
            });
            this.platillo = null;
          }
        })
  }
}
