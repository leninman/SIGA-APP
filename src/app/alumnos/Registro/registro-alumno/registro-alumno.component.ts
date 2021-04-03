import { Component, OnInit } from '@angular/core';
import { Annioescolardto } from '../../annioescolardto';
import { Anniosdto } from '../../anniosdto';
import { Secciondto } from '../../secciondto';
import { RegistroAlumnoService } from 'src/app/alumnos/Registro/registro-alumno/registro-alumno.service';
import { Alumnodto } from '../../alumnodto';
import { Router, Params } from '@angular/router';
import { Cursodto } from 'src/app/cursos/cursodto';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})


export class RegistroAlumnoComponent implements OnInit {

  annios: Anniosdto[];
  annioescolar: Annioescolardto[];
  secciones: Secciondto[];
  cursos: Cursodto[];
  listacursos: Cursodto[];
  public alumnodto = new Alumnodto();
  public cursodto = new Cursodto();
  visible: boolean = false;
  filtrocurso: boolean = false;
  cursoelegido: boolean = false;



  public estadodirppalest: string;
  public municipiodirppalest: string;
  public ciudaddirppalest: string;
  public parroquiadirppalest: string;
  public codpostaldirppalest: string;
  public estadodirsecest: string;
  public municipiodirsecest: string;
  public ciudaddirsecest: string;
  public parroquiadirsecest: string;
  public codpostaldirsecest: string;
  public codoperadorappalest: string;
  public codoperadorasecest: string;
  public estadodirppalrep1: string;
  public municipiodirppalrep1: string;
  public ciudaddirppalrep1: string;
  public parroquiadirppalrep1: string;
  public codpostaldirppalrep1: string;
  public estadodirsecrep1: string;
  public municipiodirsecrep1: string;
  public ciudaddirsecrep1: string;
  public parroquiadirsecrep1: string;
  public codpostaldirsecrep1: string;
  public codoperadorappalrep1: string;
  public codoperadorasecrep1: string;
  public estadodirppalrep2: string;
  public municipiodirppalrep2: string;
  public ciudaddirppalrep2: string;
  public parroquiadirppalrep2: string;
  public codpostaldirppalrep2: string;
  public estadodirsecrep2: string;
  public municipiodirsecrep2: string;
  public ciudaddirsecrep2: string;
  public parroquiadirsecrep2: string;
  public codpostaldirsecrep2: string;
  public codoperadorappalrep2: string;
  public codoperadorasecrep2: string;
  public annio: string;
  public seccion: string;
  public annioesc: string;
  public periodo: string;
  public textoDirPpalAl:string;
  public textoDirSecAl:string;
  public textoTlfPpalAl:string;
  public textoTlfSecAl:string;
  public textoDirPpalRpr1:string;
  public textoDirSecRpr1:string;
  public textoTlfPpalRpr1:string;
  public textoTlfSecRpr1:string;
  public textoDirPpalRpr2:string;
  public textoDirSecRpr2:string;
  public textoTlfPpalRpr2:string;
  public textoTlfSecRpr2:string;




  constructor(private registroAlumnoService: RegistroAlumnoService, private router: Router) { }

  secelegida: string;
  anescelegido: string;
  annioelegido: string;
  turnoelegido: string;
  nivel:string;
  especialidad:string;

  ngOnInit(): void {

    

    this.registroAlumnoService.getCursos().subscribe(

      (cursos) => this.cursos = cursos

    );
  }


  public asignarCurso(cursosel: Cursodto): void {

    //VALORES PARA MOSTRAR EN PANTALLA EL CURSO ELEGIDO 
    this.cursoelegido = true;
    this.anescelegido = cursosel.intAnnioEsc;
    this.secelegida = cursosel.seccion;
    this.turnoelegido = cursosel.turno;
    this.annioelegido = cursosel.annio;
    this.nivel=cursosel.nivel;
    this.especialidad=cursosel.especialidad;

    //VALORES DEL CURSO PARA EL OBJETO ALUMNO
    //QUE SE PASARA PARA GUARDAR EL ALUMNO
    this.alumnodto.idCurso = cursosel.idCurso;
    this.alumnodto.annio = cursosel.annio;
    this.alumnodto.annioescolar = cursosel.intAnnioEsc;
    this.alumnodto.seccion = cursosel.seccion;
  }

  public crear(): void {
    this.formardirecciones();
    this.formartelefonos();
    this.formaredocivil();
    this.formarsexo();

    this.registroAlumnoService.createAlumno(this.alumnodto).subscribe(
      response => this.router.navigate(['/alumnos'])
    )
  }

  public formartelefonos(): void {
    this.alumnodto.tlfPpalAl = this.codoperadorappalest + '-' + this.textoTlfPpalAl;
                          
    this.alumnodto.tlfSecAl = this.codoperadorasecest + '-' + this.textoTlfSecAl;

    this.alumnodto.tlfPpalRpr1 = this.codoperadorappalrep1 + '-' + this.textoTlfPpalRpr1;
    this.alumnodto.tlfSecRpr1 = this.codoperadorasecrep1 + '-' + this.textoTlfSecRpr1;

    this.alumnodto.tlfPpalRpr2 = this.codoperadorappalrep2 + '-' + this.textoTlfPpalRpr2;
    this.alumnodto.tlfSecRpr2 = this.codoperadorasecrep2 + '-' + this.textoTlfSecRpr2;


  }

  public formaredocivil(): void {

    if (this.alumnodto.edoCivRpr1 == 'casado') {
      this.alumnodto.edoCivRpr1 = 'C';
    }

    if (this.alumnodto.edoCivRpr1 == 'soltero') {
      this.alumnodto.edoCivRpr1 = 'S';
    }

    if (this.alumnodto.edoCivRpr1 == 'viudo') {
      this.alumnodto.edoCivRpr1 = 'V';
    }

    if (this.alumnodto.edoCivRpr1 == 'divorciado') {
      this.alumnodto.edoCivRpr1 = 'D';
    }

    if (this.alumnodto.edoCivRpr2 == 'casado') {
      this.alumnodto.edoCivRpr2 = 'C';
    }

    if (this.alumnodto.edoCivRpr2 == 'soltero') {
      this.alumnodto.edoCivRpr2 = 'S';
    }

    if (this.alumnodto.edoCivRpr2 == 'viudo') {
      this.alumnodto.edoCivRpr2 = 'V';
    }

    if (this.alumnodto.edoCivRpr2 == 'divorciado') {
      this.alumnodto.edoCivRpr2 = 'D';
    }

  }

  public formarsexo(): void {

    if (this.alumnodto.sexoAl == 'femenino') {
      this.alumnodto.sexoAl = 'F';
    }

    if (this.alumnodto.sexoAl == 'masculino') {
      this.alumnodto.sexoAl = 'M';
    }

    if (this.alumnodto.sexoRpr1 == 'femenino') {
      this.alumnodto.sexoRpr1 = 'F';
    }

    if (this.alumnodto.sexoRpr1 == 'masculino') {
      this.alumnodto.sexoRpr1 = 'M';
    }


    if (this.alumnodto.sexoRpr2 == 'femenino') {
      this.alumnodto.sexoRpr2 = 'F';
    }

    if (this.alumnodto.sexoRpr2 == 'masculino') {
      this.alumnodto.sexoRpr2 = 'M';
    }

  }


  public formardirecciones(): void {
    this.alumnodto.dirPpalAl = this.textoDirPpalAl + ' Estado: ' + this.estadodirppalest +
      ' Municipio: ' + this.municipiodirppalest + ' Ciudad: ' + this.ciudaddirppalest +
      ' Parroquia: ' + this.parroquiadirppalest + ' Código Postal: ' + this.codpostaldirppalest;

    if (this.alumnodto.dirSecAl != null) {
      this.alumnodto.dirSecAl = this.textoDirSecAl + ' Estado: ' + this.estadodirsecest +
        ' Municipio: ' + this.municipiodirsecest + ' Ciudad: ' + this.ciudaddirsecest +
        ' Parroquia: ' + this.parroquiadirsecest + ' Código Postal: ' + this.codpostaldirsecest;
    }

    this.alumnodto.dirPpalRpr1 = this.textoDirPpalRpr1 + ' Estado: ' + this.estadodirppalrep1 +
      ' Municipio: ' + this.municipiodirppalrep1 + ' Ciudad: ' + this.ciudaddirppalrep1 +
      ' Parroquia: ' + this.parroquiadirppalrep1 + ' Código Postal: ' + this.codpostaldirppalrep1;

    if (this.alumnodto.dirSecRpr1 != null) {
      this.alumnodto.dirSecRpr1 = this.textoDirSecRpr1 + ' Estado: ' + this.estadodirsecrep1 +
        ' Municipio: ' + this.municipiodirsecrep1 + ' Ciudad: ' + this.ciudaddirsecrep2 +
        ' Parroquia: ' + this.parroquiadirsecrep1 + ' Código Postal: ' + this.codpostaldirsecrep1;
    }

    this.alumnodto.dirPpalRpr2 = this.textoDirPpalRpr2 + ' Estado: ' + this.estadodirppalrep2 +
      ' Municipio: ' + this.municipiodirppalrep2 + ' Ciudad: ' + this.ciudaddirppalrep2 +
      ' Parroquia: ' + this.parroquiadirppalrep2 + ' Código Postal: ' + this.codpostaldirppalrep2;

    if( this.alumnodto.dirSecRpr2!=null){
      this.alumnodto.dirSecRpr2 = this.textoDirSecRpr2 + ' Estado: ' + this.estadodirsecrep2 +
      ' Municipio: ' + this.municipiodirsecrep2 + ' Ciudad: ' + this.ciudaddirsecrep2 +
      ' Parroquia: ' + this.parroquiadirsecrep2 + ' Código Postal: ' + this.codpostaldirsecrep2;
    }
  }

}


