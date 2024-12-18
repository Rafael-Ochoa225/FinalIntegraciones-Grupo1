import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Orden } from '../interfaces/ordenes.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private OrdenUrl = 'http://localhost:3000/api/ordenes';
  constructor(private http: HttpClient) { }

  obtenerOrden(idMesa: number): Observable<Orden> {
    return this.http.get<Orden>(`${this.OrdenUrl}/${idMesa}`);
  }

  // Actualizar el estado de una orden
  actualizarEstadoOrden(idMesa: number, estado: string): Observable<Orden> {
    return this.http.put<Orden>(`${this.OrdenUrl}/${idMesa}`, { estado });
  }

  // Eliminar una orden
  eliminarOrden(idMesa: number): Observable<void> {
    return this.http.delete<void>(`${this.OrdenUrl}/${idMesa}`);
  }

}
