import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(emailObtenido: string):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/usuario/informacion?email=${emailObtenido}`,{ responseType: 'text' });
  }
  

  register(user: Usuario):Observable<any> {
    return this.http.post('http://localhost:8080/app-nutricional/usuario/registrar', user, { responseType: 'text' });
  }
}
