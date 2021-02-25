import { Component, OnInit } from '@angular/core';
import {AlumnoService} from './alumno.service';
import { AlumnoCursoDTO } from './alumnocursodto';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:AlumnoCursoDTO[];

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumno().subscribe(
      (alumnos)=>this.alumnos=alumnos
    );
  }

}
