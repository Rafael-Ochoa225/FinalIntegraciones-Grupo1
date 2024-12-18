import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  nombreUsuario : string = 'Sin Nombre';
  url = 'http://localhost:3000/api/mesero/';

  constructor(private http: HttpClient) { }

  loginUser(usuario: Usuario): Observable<any>{
    return this.http.get(this.url + usuario)
  }
}
