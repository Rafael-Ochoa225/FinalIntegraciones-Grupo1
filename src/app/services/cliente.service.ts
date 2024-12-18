import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url: string = 'http://localhost:3000/api/clientes'

  constructor(private http: HttpClient) { }

  getClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  actualizarCliente(id: string, cliente: Partial<Cliente>): Observable<void> {
    return this.http.put<void>(`${this.url}/actualizar/${id}`, cliente);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}/registrar`, cliente); // POST para registrar un cliente
  }
}