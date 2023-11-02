import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from '../models/comida/comida.model';
import { DashboardService } from '../services/dashboard.service';
import { InformacionDiaria } from '../models/informacion/informacionDiaria.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nombreUsuario = 'Nombre del usuario'; 
  informacionDiaria!:InformacionDiaria;
  comidas!:Comida[];

 
  
ngOnInit(): void {
  
  this.buscar();
  
}

  

constructor(private router:Router, private dashboardService:DashboardService, private cdr: ChangeDetectorRef){
}

  addComida(){
    this.router.navigate(['generar-comida']);
  }

  
  buscar(){
    const credentials = {fechaBuscar:'01/11/2023',email:'juan@email.com'};
    this.dashboardService.buscar(credentials).subscribe(response=>{
      this.comidas= response;
     }
    );
    this.dashboardService.buscar2(credentials).subscribe(response=>{
      this.informacionDiaria= response;
    })
    
    
  }



}
