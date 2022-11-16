import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"series/:id",component:SeriesComponent},
  {path:"personajes/:id",component:PersonajesComponent},
  {path:"modificar",component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
