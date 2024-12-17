import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catetList } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  url: string = 'http://localhost:3000/api/categorias'

  constructor(private http: HttpClient) { }

  getCate(): Observable<catetList[]> {
    //return this.http.get<catetList[]>(this.url)
    return this.http.get<catetList[]>(this.url)
  }

  crearCate(categorias: catetList): Observable<catetList>{
    return this.http.post<catetList>(`${this.url}/registrar`, categorias);
  }

  eliminarCate(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/`)
  }
}
