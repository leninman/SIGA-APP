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

    this.formardirecciones();
    this.formartelefonos();
    this.formaredocivil();
    this.formarsexo();
    
    this.registroAlumnoService.createAlumno(this.alumnodto).subscribe(
      response=>this.router.navigate(['/alumnos'])
    )
    }

    public formartelefonos():void{
      this.alumnodto.tlfPpalAl=this.codoperadorappalest + '-' + this.alumnodto.tlfPpalAl;
      this.alumnodto.tlfSecAl=this.codoperadorasecundariaest + '-' + this.alumnodto.tlfSecAl;

      this.alumnodto.tlfPpalRpr1=this.codoperadorappalrep1 + '-' + this.alumnodto.tlfPpalRpr1;
      this.alumnodto.tlfSecRpr1=this.codoperadorasecundariarep1 + '-' + this.alumnodto.tlfSecRpr1;

      this.alumnodto.tlfPpalRpr2=this.codoperadorappalrep2 + '-' + this.alumnodto.tlfPpalRpr2;
      this.alumnodto.tlfSecRpr2=this.codoperadorasecundariarep2 + '-' + this.alumnodto.tlfSecRpr2;


    }

    public formaredocivil():void{

      if(this.alumnodto.edoCivRpr1=='Casado'){
        this.alumnodto.edoCivRpr1='C';
      }

      if(this.alumnodto.edoCivRpr1=='Soltero'){
        this.alumnodto.edoCivRpr1='S';
      }

      if(this.alumnodto.edoCivRpr1=='Viudo'){
        this.alumnodto.edoCivRpr1='V';
      }

      if(this.alumnodto.edoCivRpr1=='Divorciado'){
        this.alumnodto.edoCivRpr1='D';
      }

      if(this.alumnodto.edoCivRpr2=='Casado'){
        this.alumnodto.edoCivRpr2='C';
      }

      if(this.alumnodto.edoCivRpr2=='Soltero'){
        this.alumnodto.edoCivRpr2='S';
      }

      if(this.alumnodto.edoCivRpr2=='Viudo'){
        this.alumnodto.edoCivRpr2='V';
      }

      if(this.alumnodto.edoCivRpr2=='Divorciado'){
        this.alumnodto.edoCivRpr2='D';
      }

    }

    public formarsexo():void{

      if(this.alumnodto.sexoAl=='Femenino'){
        this.alumnodto.sexoAl='F';
      }

      if(this.alumnodto.sexoAl=='Masculino'){
        this.alumnodto.sexoAl='M';
      }

      if(this.alumnodto.sexoRpr1=='Femenino'){
        this.alumnodto.sexoRpr1='F';
      }

      if(this.alumnodto.sexoRpr1=='Masculino'){
        this.alumnodto.sexoRpr1='M';
      }


      if(this.alumnodto.sexoRpr2=='Femenino'){
        this.alumnodto.sexoRpr2='F';
      }

      if(this.alumnodto.sexoRpr2=='Masculino'){
        this.alumnodto.sexoRpr2='M';
      }






    }

    public formardirecciones():void{
      this.alumnodto.dirPpalAl=this.alumnodto.dirPpalAl + ' Estado: ' + this.estadodirppalest + 
    ' Municipio: '+ this.municipiodirppalest + ' Ciudad: ' + this.ciudaddirppalest + 
    ' Parroquia: ' + this.parroquiadirppalest + ' Código Postal: '+this.codpostaldirppalest;

    this.alumnodto.dirSecAl=this.alumnodto.dirSecAl + ' Estado: ' + this.estadodirsecest + 
    ' Municipio: '+ this.municipiodirsecest + ' Ciudad: ' + this.ciudaddirsecest + 
    ' Parroquia: ' + this.parroquiadirsecest + ' Código Postal: '+this.codpostaldirsecest;

    this.alumnodto.dirPpalRpr1=this.alumnodto.dirPpalRpr1 + ' Estado: ' + this.estadodirppalrep1 + 
    ' Municipio: '+ this.municipiodirppalrep1 + ' Ciudad: ' + this.ciudaddirppalrep1 + 
    ' Parroquia: ' + this.parroquiadirppalrep1 + ' Código Postal: '+this.codpostaldirppalrep1;

    this.alumnodto.dirSecRpr1=this.alumnodto.dirSecRpr1 + ' Estado: ' + this.estadodirsecrep1 + 
    ' Municipio: '+ this.municipiodirsecrep1 + ' Ciudad: ' + this.ciudaddirsecrep2 + 
    ' Parroquia: ' + this.parroquiadirsecrep1 + ' Código Postal: '+this.codpostaldirsecrep1;



    this.alumnodto.dirPpalRpr2=this.alumnodto.dirPpalRpr2 + ' Estado: ' + this.estadodirppalrep2 + 
    ' Municipio: '+ this.municipiodirppalrep2 + ' Ciudad: ' + this.ciudaddirppalrep2 + 
    ' Parroquia: ' + this.parroquiadirppalrep2 + ' Código Postal: '+this.codpostaldirppalrep2;

    this.alumnodto.dirSecRpr2=this.alumnodto.dirSecRpr2 + ' Estado: ' + this.estadodirsecrep2 + 
    ' Municipio: '+ this.municipiodirsecrep2 + ' Ciudad: ' + this.ciudaddirsecrep2 + 
    ' Parroquia: ' + this.parroquiadirsecrep2 + ' Código Postal: '+this.codpostaldirsecrep2;


    }

  }


