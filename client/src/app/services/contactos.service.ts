import { Injectable } from '@angular/core';

// Importa módulo para hacer las peticiones http,
// poder pedir datos
import { HttpClient } from '@angular/common/http';

// Importa el modelo
import { Contacto } from '../models/Contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {


  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  list(): Observable<Contacto> {
    return this.http.get(`${this.API_URI}/contacto`);
  }

  get(id: string): Observable<Contacto> {
    return this.http.get(`${this.API_URI}/contacto/${id}`);

  }

  create(contacto: Contacto): Observable<Contacto> {

    return this.http.post(`${this.API_URI}/contacto`, contacto);

  }

  update(id: string | number, contacto: Contacto): Observable<Contacto> {
    return this.http.put(`${this.API_URI}/contacto/${id}`, contacto);
  }

  delete(id: string): Observable<Contacto> {
    return this.http.delete(`${this.API_URI}/contacto/${id}`);
  }

}
