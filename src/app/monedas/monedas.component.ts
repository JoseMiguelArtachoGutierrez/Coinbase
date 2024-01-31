import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAjaxService } from '../peticiones-ajax.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './monedas.component.html',
  styleUrl: './monedas.component.css'
})
export class MonedasComponent  implements OnInit {
  texto="";
  detallesPrincipales:any;
  @Output() lanzadaPeticionEvent= new EventEmitter<string>();

  constructor(public ajax: PeticionesAjaxService, private router:Router){
  }

  ngOnInit() {
    console.log("buenas")
    this.ajax.cincuenta();
  }
  async quincePrimeros(){
    await this.ajax.cincuenta();
    this.detallesPrincipales= this.ajax.arrayTodosLosDetalles(this.ajax.datosApi)
    console.log("buenas",this.detallesPrincipales)
  }
  buscador(){
    console.log(this.texto)
    this.ajax.peticionAjax(this.texto)
  }
  mostrarDetalle(id:any){
    console.log(id)
    this.router.navigate(["/detalle/"+id])
    //this.lanzadaPeticionEvent.emit(id);
  }
}
