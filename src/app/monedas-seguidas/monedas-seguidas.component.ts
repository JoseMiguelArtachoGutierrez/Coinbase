import { Component,OnInit } from '@angular/core';
import { BaseDeDatosService } from '../base-de-datos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PeticionesAjaxService } from '../peticiones-ajax.service';
@Component({
  selector: 'app-monedas-seguidas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './monedas-seguidas.component.html',
  styleUrl: './monedas-seguidas.component.css'
})
export class MonedasSeguidasComponent implements OnInit{
  todasLasMonedasDetalle:any;
  
  constructor(public baseDatos: BaseDeDatosService, public ajax: PeticionesAjaxService){}

  ngOnInit(){
    this.datos()
  }
  async datos() {
    await this.baseDatos.obtenerDatos()
    this.todasLasMonedasDetalle= this.ajax.arrayTodosLosDetalles(this.baseDatos.monedasUsuario)
    console.log("clao",this.todasLasMonedasDetalle)
  }
  async dejarDeSeguir(id:any){
    await this.baseDatos.eliminarMoneda(id);
    this.datos();
  }
  
}
