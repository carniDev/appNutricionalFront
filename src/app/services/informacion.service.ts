import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) {}

  buscar(nombre: string):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/informacion-nutricional/listar-nombre?nombre=${nombre}`);
  }
  


}