import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alimento } from '../models/alimentos/alimentos.model';
import { Informacion } from '../models/informacion/informacion.model';
import { InformacionComida } from '../models/comida/informacionComida.model';
import { InformacionComidaSeleccionada } from '../models/informacion/informacionComidaSeleccionada.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  alimento:Alimento[]=[];
  informacionAlimento!:Informacion
  fecha:string= '05/11/2023';
  email:string='juan@email.com';
  tipoComida:string='';

  constructor(private http: HttpClient) {}

  buscarComida():Observable<InformacionComida> {
    return this.http.get<InformacionComida>(`http://localhost:8080/app-nutricional/comida/buscar?fecha=${this.fecha}&email=${this.email}&tipoComida=${this.tipoComida}`);
  }

  buscarComidaSeleccionada():Observable<InformacionComidaSeleccionada> {
    return this.http.get<InformacionComidaSeleccionada>(`http://localhost:8080/app-nutricional/comida/buscar?fecha=${this.fecha}&email=${this.email}&tipoComida=${this.tipoComida}`);
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