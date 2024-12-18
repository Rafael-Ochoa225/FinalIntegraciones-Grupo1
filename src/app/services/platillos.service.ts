import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Platillo } from '../interfaces/platillos.interface';


@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  private platilloApi = 'http://localhost:3000/api/platillos'

  constructor(private http: HttpClient) { }

  obtenerPlatillo(id: string): Observable<Platillo> {
    return this.http.get<Platillo>(`${this.platilloApi}/${id}`);  // GET por ID
  }
}
