import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonajesService } from './services/personajes.service';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ModificarComponent } from './components/modificar/modificar.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InsertarComponent } from './components/insertar/insertar.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SeriesComponent,
    PersonajesComponent,
    ModificarComponent,
    InsertarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
