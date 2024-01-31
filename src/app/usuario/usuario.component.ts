import { Component, Input, inject } from '@angular/core';
import { PeticionesAjaxService } from '../peticiones-ajax.service';
import { RouterModule, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { Inject } from '@angular/core';
import { BaseDeDatosService } from '../base-de-datos.service';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  @Input() id:string="";
  registro=true;
  email="";
  password="";
  nombre="";
  constructor(public baseDatos: BaseDeDatosService, private router:Router){

  }
  ngOnInit(): void {
    if (this.id=="1") {
      this.registro=true
    }else if (this.id=="0") {
      this.registro=false
    }
  }

  identificarseYregistroGithub(){
    this.baseDatos.loginGitHub()
  }
  identificarseYregistroGoogle(){
    this.baseDatos.iniciaSesison()
  }

  
}
