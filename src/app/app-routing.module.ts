import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscarAlimentoComponent } from './buscar-alimento/buscar-alimento.component';
import { ComidaComponent } from './comida/comida.component';
import { GenerarComidaComponent } from './generar-comida/generar-comida.component';

const routes: Routes = [

{path:'', component:HomeComponent},

{path:'login', component:LoginComponent},
{path:'registro', component:RegistroComponent},
{path:'dashboard', component:DashboardComponent},
{path:'buscar',component:BuscarAlimentoComponent},
{path:'comida',component:ComidaComponent},
{path:'generar-comida', component:GenerarComidaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
