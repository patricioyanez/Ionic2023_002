import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string='';
  nombre:string='';
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

  async agregar()
  {
    //await this.storage.set("1","hola");
    await this.storage.set(this.id,this.nombre);
  }
}
