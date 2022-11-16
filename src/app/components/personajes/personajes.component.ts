import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes!:any;
  constructor(private _service:PersonajesService,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
    this._activated.params.subscribe((parametro:Params)=>{
      var parametros=parseInt(parametro['id']);
      if(parametros){
        this._service.getPersonajesSerie(parametros).subscribe(res=>{
          this.personajes=res;
        })
      }
    })
  }

}
