import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from '../models/comida/comida.model';
import { DashboardService } from '../services/dashboard.service';
import { InformacionDiaria } from '../models/informacion/informacionDiaria.model';
import { Observable } from 'rxjs';
import { ComidaService } from '../services/comida.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nombreUsuario = 'Nombre del usuario';
  informacionDiaria$!: Observable<InformacionDiaria>;
  comidas!: Comida[];
  credentials = { fechaBuscar: '05/11/2023', email: 'juan@email.com' };




  constructor(private comidaService:ComidaService,private router: Router, private dashboardService: DashboardService, private cdr: ChangeDetectorRef) {
    this.buscar();
  }

  addComida() {
    this.router.navigate(['generar-comida']);
  }


  buscar() {
    
    this.dashboardService.buscar(this.credentials).subscribe(response => {
      this.comidas = response;
      this.cdr.detectChanges();
    }
    );
      
      this.informacionDiaria$= this.dashboardService.buscar2(this.credentials);
    
  }

  verDetalleComida(comida:Comida){

    this.router.navigate(['editar-comida']);
  }




}
