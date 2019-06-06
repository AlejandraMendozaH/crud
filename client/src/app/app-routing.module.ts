import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component'

const routes: Routes = [
  { path: 'contacto', component: ContactoListComponent },
  { path: '**', component: ContactoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
