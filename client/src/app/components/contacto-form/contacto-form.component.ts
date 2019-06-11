import { Component, OnInit, HostBinding } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';
import { ContactosService } from '../../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  edit: boolean = false;


  constructor(private contactoService: ContactosService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.contactoService.get(params.id)
        .subscribe(

          res => {
            console.log(res);
            this.contacto = res;

            this.edit = true;

          },
          err => {
            console.error(err);
          }

        );
    }


  }

  save() {

    // Eliminar datos de la clas, porque no son necesarios en la base de datos
    delete this.contacto.id;
    delete this.contacto.fecha_registro;

    this.contactoService.create(this.contacto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/contacto']);
        },
        err => {
          console.error(err);
        }
      );

  }


  update() {
    delete this.contacto.fecha_registro;

    this.contactoService.update(this.contacto.id, this.contacto)
      .subscribe(
        res => {
          this.contacto = res;
          this.router.navigate(['/contacto']);
        },
        err => { 
          console.error(err);
        }


      );
  }

}
