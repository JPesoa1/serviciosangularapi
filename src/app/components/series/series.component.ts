import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public serie !: any;

  constructor(private _service: PersonajesService, private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activeRoute.params.subscribe((parametro:Params)=>{
      var parametros=parseInt(parametro['id']);
      if(parametros){
        this._service.getSerie(parametros).subscribe(res=>{
          this.serie=res;
        })
      }
    })

  }

}
