import { Component,Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PeticionesAjaxService } from '../peticiones-ajax.service';
import { RouterModule, Router } from '@angular/router';
import { BaseDeDatosService } from '../base-de-datos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-monedas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalle-monedas.component.html',
  styleUrl: './detalle-monedas.component.css'
})
export class DetalleMonedasComponent implements OnInit{

  @Input() id:string="";
  constructor(public ajax: PeticionesAjaxService,public baseDatos: BaseDeDatosService, private router:Router){
  }
  ngOnInit(): void {
    this.ajax.detalleAjax(this.id)
  }
  seguir(){
    this.baseDatos.monedasGuardaar(this.id)
  }
  
}
