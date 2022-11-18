import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Series } from 'src/app/models/series';
import { Personajes } from 'src/app/models/personajes';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @ViewChild ("cajaseries") cajaSeries!:ElementRef;
  @ViewChild ("cajapersonajes") cajaPersonajes!:ElementRef;
  public series:any;
  public personajes:any;
  public filter!:any;
  public filter2!:any;
 
  public select! : number;
  constructor(private _service:PersonajesService) {

    this._service.getSeries().subscribe(res=>{
      
      this.series=res
    })

    this._service.getPersonajes().subscribe(res=>{
      this.personajes=res;
    })
  }

  ngOnInit(): void {
    
    
  }

  imagenSerie(){
    var serie=this.cajaSeries.nativeElement.value;
    var aux=new Array<Series>();
    aux=this.series;
    
    this.filter=aux.filter(ser => ser.idSerie == serie);
    
    

  }

  imagenPersonaje(){
    var personajes=this.cajaPersonajes.nativeElement.value;
    var aux=new Array<Personajes>();
    aux=this.personajes;
    
    this.filter2=aux.filter(per => per.idPersonaje == personajes);
   

  }
  modificar(){
    var idpersonajes=this.cajaPersonajes.nativeElement.value;
    var idserie=this.cajaSeries.nativeElement.value;
    console.log(idpersonajes);
    console.log(idserie);
    this._service.putPersonajeSerie(idpersonajes,idserie).subscribe(res=>{
      console.log(res);
    })
  }

}
