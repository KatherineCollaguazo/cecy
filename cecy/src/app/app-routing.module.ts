import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './instructor/curso/curso.component';
import { AsistenciaComponent } from './instructor/asistencia/asistencia.component';
import { ListadofechaComponent } from './instructor/asistencia/listadofecha/listadofecha.component';
import { RegistrofotograficoComponent } from './instructor/asistencia/registrofotografico/registrofotografico.component';

const routes: Routes = [
  {path: 'curso', component:CursoComponent},
  {path: 'asistencia', component:AsistenciaComponent},
  {path: 'listadofecha', component:ListadofechaComponent},
  {path: 'registrofotografico', component:RegistrofotograficoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
