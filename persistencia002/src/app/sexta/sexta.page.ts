import { Component, OnInit } from '@angular/core';
import { ApiRestService } from './api-rest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {

  constructor(private api:ApiRestService) { }

  ngOnInit() {
    this.api.getUsers();
  }
  /*
    Ejercicio: Desplegar los datos en la pagina
  */
}
