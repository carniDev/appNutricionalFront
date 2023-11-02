import { Component } from '@angular/core';
import { ComidaService } from '../services/comida.service';
import { InformacionComida } from '../models/comida/informacionComida.model';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  informacion!:InformacionComida;
  email:string = "juan@email.com"
  tipoComida:string="ALMUERZO"
  fechaComida:string="25/10/2023"

  constructor(private comidaService:ComidaService){}
  ngOnInit(): void {
    this.buscar()
  }

  buscar(){
    const credentials = {email:this.email,tipo:this.tipoComida,fecha:this.fechaComida};
    this.comidaService.buscar(credentials).subscribe(
      (response) => {
       this.informacion= response;
      console.log(this.informacion)
      },
      (error) => {
        console.log("no se ha encontrado nada")
      }
    );
  }

}
