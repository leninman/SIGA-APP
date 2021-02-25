import { Component, OnInit } from '@angular/core';
import { Annioescolardto } from '../../annioescolardto';
import { Anniosdto } from '../../anniosdto';
import { Secciondto } from '../../secciondto';
import {RegistroAlumnoService} from 'src/app/alumnos/Registro/registro-alumno/registro-alumno.service';
import { Alumnodto } from '../../alumnodto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {
  
  annios:Anniosdto[];
  annioescolar:Annioescolardto[];
  secciones:Secciondto[];
  public estadodirppalest:string;
  public municipiodirppalest:string;
  public ciudaddirppalest:string;
  public parroquiadirppalest:string;
  public codpostaldirppalest:string;
  public estadodirsecest:string;
  public municipiodirsecest:string;
  public ciudaddirsecest:string;
  public parroquiadirsecest:string;
  public codpostaldirsecest:string;
  public codoperadorappalest:string;
  public codoperadorasecundariaest:string;
  public estadodirppalrep1:string;
  public municipiodirppalrep1:string;
  public ciudaddirppalrep1:string;
  public parroquiadirppalrep1:string;
  public codpostaldirppalrep1:string;
  public estadodirsecrep1:string;
  public municipiodirsecrep1:string;
  public ciudaddirsecrep1:string;
  public parroquiadirsecrep1:string;
  public codpostaldirsecrep1:string;
  public codoperadorappalrep1:string;
  public codoperadorasecundariarep1:string;
  public estadodirppalrep2:string;
  public municipiodirppalrep2:string;
  public ciudaddirppalrep2:string;
  public parroquiadirppalrep2:string;
  public codpostaldirppalrep2:string;
  public estadodirsecrep2:string;
  public municipiodirsecrep2:string;
  public ciudaddirsecrep2:string;
  public parroquiadirsecrep2:string;
  public codpostaldirsecrep2:string;
  public codoperadorappalrep2:string;
  public codoperadorasecundariarep2:string;




  public alumnodto=new Alumnodto();



  visible:boolean=false;

  constructor(private registroAlumnoService:RegistroAlumnoService,private router:Router) { }

  ngOnInit(): void {

    this.registroAlumnoService.getAnnios().subscribe(
      (annios)=>this.annios=annios
    );

    this.registroAlumnoService.getAnnioEscolar().subscribe(
      (annioescolar)=>this.annioescolar=annioescolar
    );

    this.registroAlumnoService.getSecciones().subscribe(
      (secciones)=>this.secciones=secciones
    );
  }

  public crear():void{

   // this.alumnodto.dirPpalAl=


    this.registroAlumnoService.createAlumno(this.alumnodto).subscribe(
      response=>this.router.navigate(['/alumnos'])
    )
    }

  }


