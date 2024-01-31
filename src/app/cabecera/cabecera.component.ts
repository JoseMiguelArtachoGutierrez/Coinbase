import { Component, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { BaseDeDatosService } from '../base-de-datos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit{
  usuarioActivo:any=false;
  nombreUsuario:any;
  fotoPerfil:any;
  constructor(public baseDatos: BaseDeDatosService, private router:Router){}
  
  ngOnInit(){
    console.log("Se inicia el componente cabecera");
    setInterval(() => {this.verificarEstadoDeLaSesion();}, 500);
  }
  cerrarSesion(){
    this.baseDatos.cerrarSesion();
    this.usuarioActivo=false;
  }
  async verificarEstadoDeLaSesion(){
    let existe= await this.baseDatos.estaUsuarioIniciadoSesion() ;
    if (existe) {
      this.nombreUsuario = this.baseDatos.usuario?.displayName || '';
      this.fotoPerfil = this.baseDatos.usuario?.photoURL || '';
      this.usuarioActivo=true;
    }else{
      this.usuarioActivo=false;
    }
    

    
  }

}
