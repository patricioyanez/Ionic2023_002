import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage:Storage) {
    this.init();
   }

  async init()
  {
    await this.storage.create();
  }
  // C.R.U.D.
  async guardar(rut:string, valor: any) // json
  { // clave/valor??? id/json 
    await this.storage.set(rut, valor);
  }

  async leer(rut: string)
  {
    return await this.storage.get(rut);
  }

  async eliminar(rut: string)
  {
    await this.storage.remove(rut);
  }

  async listar()
  {
    let listado = [];
    await this.storage.forEach((v,k) => {listado.push(v);});
    return listado;
  }
}
