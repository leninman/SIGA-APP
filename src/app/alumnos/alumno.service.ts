import { Injectable } from '@angular/core';
import {Alumno} from './alumno';
import {AlumnoCursoDTO} from './alumnocursodto';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private urlEndPoint:string='http://localhost:8080/app/consultaralumnos' ;
  
  constructor(private http:HttpClient) { }

  getAlumno(): Observable<AlumnoCursoDTO[]>{
    //return of(ALUMNOS);
    return this.http.get<AlumnoCursoDTO[]>(this.urlEndPoint);
  }
}
