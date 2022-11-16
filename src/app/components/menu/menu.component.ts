import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Series } from 'src/app/models/series';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series!: any;
  constructor(private _service:PersonajesService) { }

  ngOnInit(): void {
    this._service.getSeries().subscribe(res=>{
      this.series=res;
      console.log(this.series)
    })
  }

}
