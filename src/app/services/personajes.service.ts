import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PersonajesService {
  constructor(private httpClient: HttpClient) { }

  getSeries(){
    var request="/api/Series"
    return this.httpClient.get(environment.urlSeries+request);
  }

  getSerie(id:number){
    var request="/api/Series/"+id;
    return this.httpClient.get(environment.urlSeries+request);
  }

  getPersonajesSerie(id:number){
    var request="/api/Series/PersonajesSerie/"+id;
    return this.httpClient.get(environment.urlSeries+request);
  }

  getPersonajes(){
    var request="/api/Personajes";
    return this.httpClient.get(environment.urlSeries+request);
  }
  
}
