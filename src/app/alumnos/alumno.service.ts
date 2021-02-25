import { Injectable } from '@angular/core';
import {AlumnoCursoDTO} from './alumnocursodto';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private urlEndPoint:string='http://localhost:8080/app/consultaralumnos' ;
  
  constructor(private http:HttpClient) { }

  getAlumno(): Observable<AlumnoCursoDTO[]>{
    //return of(ALUMNOS);
    //return this.http.get<AlumnoCursoDTO[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(map(response =>response as AlumnoCursoDTO[]));
  }
}
