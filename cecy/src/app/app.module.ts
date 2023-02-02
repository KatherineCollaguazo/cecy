import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './instructor/curso/card/card.component';
import { CursoComponent } from './instructor/curso/curso.component';
import { AsistenciaComponent } from './instructor/asistencia/asistencia.component';
import { ListadofechaComponent } from './instructor/asistencia/listadofecha/listadofecha.component';
import { RegistrofotograficoComponent } from './instructor/asistencia/registrofotografico/registrofotografico.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CardComponent,
    AsistenciaComponent,
    ListadofechaComponent,
    RegistrofotograficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
