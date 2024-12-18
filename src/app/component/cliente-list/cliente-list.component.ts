import { Component, OnInit, inject, ChangeDetectorRef  } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../interfaces/cliente.interface';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClienteListModalComponent } from './cliente-list-modal/cliente-list-modal.component';


@Component({
  selector: 'app-cliente-list',
  imports: [CommonModule, ReactiveFormsModule, ClienteListModalComponent],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent {
  public isOpen = false; 
  cliente: Cliente | null = null;
  errorMessage: string | null = null;
  private clienteService = inject(ClienteService) 
    
    public form;  
    constructor (private fb: FormBuilder) {
      this.form = this.fb.group({
        id: [ '', Validators.required]
      })
    }

  buscarCliente(id: string): void{

    this.clienteService.getClienteById(id).subscribe({
      next: (data)=>{
        this.cliente = data;
        Swal.fire({
          icon: 'success',
          title: 'Cliente encontrado',
          text: `Información del cliente obtenida correctamente`
        });
      },
      error: (err)=>{
        console.error('Erro al obtener cliente', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo econtrar al cliente'
        });
        this.cliente = null;
      }
    })
  }

  open(){
    this.isOpen=true;
    console.log(this.isOpen, 'Funciona!')
  }

  close(){
    this.isOpen=false;
  }


}
