import { Component } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario:Usuario = new Usuario();

  constructor(private authService:AuthService, private router:Router){}

  registrar(){
    this.authService.register(this.usuario).subscribe((respuesta)=>
    {
      console.log(respuesta);
      this.router.navigate(["/login"]);
    },
    (error)=>{
      console.error(error);
    }
    
    )
    
  
  }

}
