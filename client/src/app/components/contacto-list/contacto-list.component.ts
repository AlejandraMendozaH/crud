import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';



@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})

export class ContactoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  // Definición de arreglo de tipo Contacto
  contactos: any = [];

  constructor(private contactoService: ContactosService) { }

  ngOnInit() {
    this.get();
  }

  get() {

    this.contactoService.list().subscribe(
      res => {
        // Llenar el arreglo con la respuesta
        this.contactos = res;
      },
      err => console.error(err)
    );
  }


  delete(id: string) {

    this.contactoService.delete(id).subscribe(
      res => {
        console.log(res);
        this.get();
      },
      err => {
        console.error(err);
      }
    );


  }


}
