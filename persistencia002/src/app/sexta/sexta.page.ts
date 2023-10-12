import { Component, OnInit } from '@angular/core';
import { ApiRestService } from './api-rest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {
  usuarios :any= [];  
  constructor(private api:ApiRestService) { }

  ngOnInit() {  }
  /*
    Ejercicio: Desplegar los datos en la pagina
  */
 async listar()
 {
   await this.api.getUsers();
   this.usuarios = this.api.listado;

 }
}
