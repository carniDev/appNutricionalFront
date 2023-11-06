import { Component } from '@angular/core';
import { ComidaService } from '../services/comida.service';
import { InformacionComida } from '../models/comida/informacionComida.model';
import { CredentialsComida } from '../models/credentials/credentialsComida.model';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  informacion!:InformacionComida;
  email:string = "juan@email.com"
  tipoComida:string=''
  fechaComida:string="05/11/2023"

  constructor(private comidaService:ComidaService){}
  ngOnInit(): void {
    this.buscar()
  }

  buscar(){
    const credentials = {email:this.email,tipo:this.tipoComida,fecha:this.fechaComida};
    this.comidaService.buscarComida().subscribe(
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
