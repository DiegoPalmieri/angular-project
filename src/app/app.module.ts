import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { MaterialModule } from './Material/material/material.module';
import { RegistroComponent } from './Components/registro/registro.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, RegistroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
