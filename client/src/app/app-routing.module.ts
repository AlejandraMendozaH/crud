import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component'
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/contacto', pathMatch: 'full' },
  { path: 'contacto', component: ContactoListComponent },
  { path: 'contacto/add', component: ContactoFormComponent },
  { path: 'contacto/edit/:id', component:ContactoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
