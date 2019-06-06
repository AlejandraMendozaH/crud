import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactoFormComponent,
    ContactoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
