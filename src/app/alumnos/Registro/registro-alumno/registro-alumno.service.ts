import { Injectable } from '@angular/core';
import {Annioescolardto} from 'src/app/alumnos/annioescolardto';
import {Anniosdto} from 'src/app/alumnos/anniosdto';
import {Secciondto} from 'src/app/alumnos/secciondto';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Alumnodto } from '../../alumnodto';
import  {Responses} from 'src/app/responses';
import {map} from 'rxjs/operators';
import {Cursodto} from 'src/app/cursos/cursodto';
@Injectable({
  providedIn: 'root'
})
export class RegistroAlumnoService {

  private urlBaseEndPoint:string='http://localhost:8080/app/';

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

 
  getCursos():Observable<Cursodto[]>{
    return this.http.get(this.urlBaseEndPoint+'consultarcursosporperiodo').pipe(map(response =>response as Cursodto[]));
  }

  createAlumno(alumnodto:Alumnodto): Observable<Responses> {
    return this.http.post<Responses>(this.urlBaseEndPoint+'registraralumno',alumnodto,{headers:this.httpHeaders});
  }

  
}
