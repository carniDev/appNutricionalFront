import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionDiaria } from '../models/informacion/informacionDiaria.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


constructor(private http: HttpClient) {}

  buscar(credentials:any):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/comida/listar?fecha=${credentials.fechaBuscar}&email=${credentials.email}`);
  }

  buscar2(credentials:any):Observable<InformacionDiaria> {
    return this.http.get<InformacionDiaria>(`http://localhost:8080/app-nutricional/dashboard/informacion-diaria?fechaDia=${credentials.fechaBuscar}&email=${credentials.email}`);
  }


}