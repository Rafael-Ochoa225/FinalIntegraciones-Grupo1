import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../models/users';
import { CreateUserService } from '../../../services/create-user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent  {

  createuserForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private createUserService: CreateUserService){

    this.createuserForm = this.fb.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  crearUsuario(){

    const USER: Usuario = {
      username: this.createuserForm.get('username')?.value,
      lastname: this.createuserForm.get('lastname')?.value,
      email: this.createuserForm.get('email')?.value,
      password: this.createuserForm.get('password')?.value
    }

    Swal.fire({

      title: 'Creación de Mesero',
      text: '¿Desea crear el mesero?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((result)=>{
      if(result.isConfirmed){
        this.createUserService.guardarUsuario(USER).subscribe(data=>{
          this.router.navigate(['/'])
        })
      }
    })

  }

}