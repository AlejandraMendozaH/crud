import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { Contacto } from 'src/app/models/Contacto';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})

export class ContactoListComponent implements OnInit {

  // Definición de arreglo de tipo Contacto
  contactos: Contacto = [];


  constructor(private contactoService: ContactosService) { }

  ngOnInit() {

    this.contactoService.list().subscribe(
      res => {
        // Llenar el arreglo con la respuesta
        this.contactos = res;
      },
      err => console.error(err)
    );
  }

}
