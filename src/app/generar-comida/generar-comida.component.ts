import { Component } from '@angular/core';
import { Alimento } from '../models/alimentos/alimentos.model';
import { ComidaService } from '../services/comida.service';
import { Router } from '@angular/router';
import { Informacion } from '../models/informacion/informacion.model';

@Component({
  selector: 'app-generar-comida',
  templateUrl: './generar-comida.component.html',
  styleUrls: ['./generar-comida.component.css']
})
export class GenerarComidaComponent {
alimentos!:Alimento[];
tipoComida:string="Seleccione una comida";
informacionAlimento!:Informacion;

constructor(private comidaService:ComidaService,private router:Router){}


ngOnInit(): void {
  this.alimentos= this.comidaService.getAlimento();
  this.informacionAlimento=this.comidaService.getInfo();
  console.log(this.informacionAlimento);

}


addAlimento(alimento:Alimento){
  this.alimentos.push(alimento);
}
buscarAlimento(){
this.router.navigate(['buscar']);
}

cancelar(){
  this.informacionAlimento==null;
  this.router.navigate(['dashboard'])
}

}
