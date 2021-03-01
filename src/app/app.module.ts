import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './principal/header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistroAlumnoComponent } from './alumnos/Registro/registro-alumno/registro-alumno.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    RegistroAlumnoComponent,
    CursosComponent,
  

  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
