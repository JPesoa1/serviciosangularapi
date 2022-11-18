import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';
import { Series } from 'src/app/models/series';
@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  @ViewChild ("cajanombre") cajaNombre!: ElementRef;
  @ViewChild ("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild ("selectseries") cajaSelect!: ElementRef;
  public personaje!:Personajes;
  public series!:Array<Series>;
  constructor(private _router:Router,private _service:PersonajesService) {

  }

  ngOnInit(): void {
    this._service.getSeries().subscribe(res=>{
      this.series=res;
    })
  }

  insertarPersonaje(){
    var nombre= this.cajaNombre.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var idSerie = parseInt(this.cajaSelect.nativeElement.value);
    this.personaje=new Personajes(0,nombre,imagen,idSerie);

    this._service.postPersonaje(this.personaje).subscribe(res=>{
      console.log(res);
      this._router.navigate(["/series/",this.personaje.idSerie]);
    })
  }

}
