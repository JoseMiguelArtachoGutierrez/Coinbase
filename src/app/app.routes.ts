import { Routes } from '@angular/router';

import { MonedasComponent } from './monedas/monedas.component';
import { DetalleMonedasComponent } from './detalle-monedas/detalle-monedas.component';
import { HomerComponent } from './homer/homer.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MonedasSeguidasComponent } from './monedas-seguidas/monedas-seguidas.component';

export const routes: Routes = [
    {path: '', redirectTo: '/homer', pathMatch: 'full'},
    {path:'monedas',component:MonedasComponent},
    {path:'detalle/:id',component:DetalleMonedasComponent},
    {path:'homer',component:HomerComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'seguidas',component:MonedasSeguidasComponent}
];
