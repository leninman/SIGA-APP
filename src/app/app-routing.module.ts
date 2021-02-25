import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import {PrincipalComponent} from './principal/principal.component';
import {RegistroAlumnoComponent} from './alumnos/Registro/registro-alumno/registro-alumno.component';
const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full'},
  { path: 'principal', component: PrincipalComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'registroalumno', component: RegistroAlumnoComponent}
];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }