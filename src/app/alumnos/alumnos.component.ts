import { Component, OnInit } from '@angular/core';
import {Alumno} from './alumno';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumno[];

  constructor() { }

  ngOnInit(): void {
  }

}
