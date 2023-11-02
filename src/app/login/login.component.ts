import { Component } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 usuario:Usuario = new Usuario();


  constructor(private authService:AuthService){}

  login(){

    const credentials = { email: this.usuario.email, password: this.usuario.password };
    this.authService.login(credentials.email).subscribe(
      (response) => {
       console.log(response)
      },
      (error) => {
        console.log("no se ha encontrado nada")
      }
    );
  }

  }
