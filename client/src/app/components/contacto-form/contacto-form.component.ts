import { Component, OnInit, HostBinding } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';
import { ContactosService } from '../../services/contactos.service';


@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  // Tow-way-binding
  contacto: Contacto = {
    id: 0,
    nombre: '',
    a_paterno: '',
    a_materno: '',
    direccion: '',
    telefono: '',
    e_mail: '',
    photo: '',
    fecha_registro: new Date()

  };

  constructor(private contactoService: ContactosService) {

  }

  ngOnInit() {
  }

  save() {

    // Eliminar datos de la clas, porque no son necesarios en la base de datos
    delete this.contacto.id;
    delete this.contacto.fecha_registro;

    this.contactoService.create(this.contacto)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );

  }


}
