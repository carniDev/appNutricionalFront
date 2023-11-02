import { Component } from '@angular/core';
import { Informacion } from '../models/informacion/informacion.model';
import { InformacionService } from '../services/informacion.service';
import { Alimento } from '../models/alimentos/alimentos.model';
import { ComidaService } from '../services/comida.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-alimento',
  templateUrl: './buscar-alimento.component.html',
  styleUrls: ['./buscar-alimento.component.css']
})
export class BuscarAlimentoComponent {
  nombre!:string;
  informacion!:Informacion[];
  informacionSeleccionado:any = null;
  


  constructor(private informacionService:InformacionService,private comidaService:ComidaService, private router:Router){}


  buscar(){
      const credentials = {nombreBuscar:this.nombre};
      this.informacionService.buscar(credentials.nombreBuscar).subscribe(
        (response) => {
         this.informacion= response;
        },
        (error) => {
          console.log("no se ha encontrado nada")
        }
      );
    }

    seleccionarInfo(info:any){
      this.informacionSeleccionado= info;
    }

    addInfo(){
      if(this.informacion!=null){
        this.comidaService.addInformacion(this.informacionSeleccionado);
        this.router.navigate(['generar-comida']);

      }else{
        console.log("Debes seleccionar un alimento primero");
      }
    }

    reset(){
      this.informacion = null!;
    }
  


}
