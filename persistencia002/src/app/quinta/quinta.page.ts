import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  //rut:any;
  persona:any =[];
  constructor(private crud: CrudService) { }

  ngOnInit() {
  }

  agregar()
  {
    console.log("hola");
    console.log(this.persona);
    //this.persona.rut = this.rut;
    this.crud.guardar(this.persona.rut, this.persona);
  }
}
