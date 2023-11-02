import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarAlimentoComponent } from './buscar-alimento/buscar-alimento.component';
import { ComidaComponent } from './comida/comida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenerarComidaComponent } from './generar-comida/generar-comida.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ChartsComponent,
    BuscarAlimentoComponent,
    ComidaComponent,
    GenerarComidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
