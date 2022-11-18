import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Personajes } from '../models/personajes';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonajesService {
  constructor(private httpClient: HttpClient) { }

  getSeries():Observable<any>{
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


  putPersonajeSerie(idpersonaje:number,idserie:number){

    

    var json = JSON.stringify(0);

    var header = new HttpHeaders().set("Content-Type", "application/json");

    var request="/api/Personajes/"+idpersonaje+"/"+idserie;

    var url=environment.urlSeries+request;

    return this.httpClient.put(url,0,{headers:header});
  }

  postPersonaje(personaje:Personajes){
    var request="/api/Personajes";
    var json = JSON.stringify(personaje);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var url=environment.urlSeries+request;

    return this.httpClient.post(url,json,{headers: header})
  }



  
}
