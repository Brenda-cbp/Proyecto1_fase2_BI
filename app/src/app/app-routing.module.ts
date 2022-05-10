import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './modules/consulta/consulta.component';
import { HistorialComponent } from './modules/historial/historial.component';

const routes: Routes = [
  { path: "consulta", component: ConsultaComponent},
  { path: "historial", component: HistorialComponent},
  { path: '', redirectTo: 'consulta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
