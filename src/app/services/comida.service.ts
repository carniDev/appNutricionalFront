import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alimento } from '../models/alimentos/alimentos.model';
import { Informacion } from '../models/informacion/informacion.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  alimento:Alimento[]=[];
  informacionAlimento!:Informacion


  constructor(private http: HttpClient) {}

  buscar(credentials:any):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/comida/buscar?fecha=${credentials.fecha}&email=${credentials.email}&tipoComida=${credentials.tipo}`);
  }
  

  addAlimento(alimento:Alimento){
    this.alimento.push(alimento);
  }
  removeAlimento(alimento:Alimento){
    this.alimento = this.alimento.filter(item => item.idAlimento!==alimento.idAlimento);
  }

  getAlimento():Alimento[]{
    return this.alimento;

  }

  addInformacion(info:Informacion){
    this.informacionAlimento=info;
  }
  

  getInfo():Informacion{
    return this.informacionAlimento;

  }

  

}