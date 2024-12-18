import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesero } from '../interfaces/meseros.interface';

@Injectable({
  providedIn: 'root'
})
export class MeserosService {

  private MeseroUrl = 'http://localhost:3000/api/mesero';

  constructor(private http: HttpClient) {}

  listarMeseros(): Observable<Mesero[]> {
    return this.http.get<Mesero[]>(`${this.MeseroUrl}/`);
  }

  eliminarMesero(id: string): Observable<any> {
    return this.http.put(`${this.MeseroUrl}/desactivar/${id}`, {});
  }
}
