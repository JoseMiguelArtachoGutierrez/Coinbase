import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';


import { DetalleMonedasComponent } from './detalle-monedas/detalle-monedas.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,CabeceraComponent,DetalleMonedasComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imagenActive=true
  title = 'pruebaAngular';
  nombreUsuario= 'puto'
  urlImagen="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  items=["jose"]
  contenidoInput=""
  id=""
  ngOnInit(): void {
    console.log("perfe el on init")
  }
}
