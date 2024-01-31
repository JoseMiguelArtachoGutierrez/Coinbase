import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAjaxService } from '../peticiones-ajax.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-homer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homer.component.html',
  styleUrl: './homer.component.css'
})
export class HomerComponent {

}
