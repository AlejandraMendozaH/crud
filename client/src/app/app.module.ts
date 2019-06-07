import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';

// Se importa ContactosService para traer los datos del RESTAPI
import { ContactosService } from './services/contactos.service'

// Importar modulo para utilizar operaciones http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactoFormComponent,
    ContactoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
