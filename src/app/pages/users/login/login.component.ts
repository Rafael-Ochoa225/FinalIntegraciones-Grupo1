import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../models/users';
import { DataLoginService } from '../../../services/data-login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataLogin: DataLoginService){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser(){

    const USER: Usuario ={
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.dataLogin.loginUser(USER).subscribe(data =>{
      this.router.navigate(['/listar-productos'])
    })

  }
}