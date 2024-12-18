import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { catetList } from '../../interfaces/categorias.interface';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-update',
  imports: [],
  templateUrl: './categoria-update.component.html',
  styleUrl: './categoria-update.component.css'
})
export class CategoriaUpdateComponent {

  categoria: catetList | undefined;
  private categoriaService = inject(CategoriaService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);


}
