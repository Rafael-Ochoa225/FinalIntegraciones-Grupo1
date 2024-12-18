import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Platillo } from '../interfaces/platillos.interface';
import { PlatilloEliminar } from '../interfaces/eliPlatillo.interface';


@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  private platilloApi = 'http://localhost:3000/api/platillos'

  constructor(private http: HttpClient) { }

  obtenerPlatillo(id: string): Observable<Platillo> {
    return this.http.get<Platillo>(`${this.platilloApi}/${id}`);  // GET por ID
  }

  // Crear nuevo platillo
  crearPlatillo(platillo: Platillo): Observable<Platillo> {
    return this.http.post<Platillo>(`${this.platilloApi}/registrar`, platillo);
  }

  // Eliminar platillo por ID
  eliminarPlatillo(platillo: PlatilloEliminar): Observable<void> {
    return this.http.delete<void>(`${this.platilloApi}/eliminar/${platillo.id}`);
  }
}
