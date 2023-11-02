import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


constructor(private http: HttpClient) {}

  buscar(credentials:any):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/comida/listar?fecha=${credentials.fechaBuscar}&email=${credentials.email}`);
  }

  buscar2(credentials:any):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/dashboard/informacion-diaria?fechaDia=01/11/2023&email=juan@email.com`);
  }


}