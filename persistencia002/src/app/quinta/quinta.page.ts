import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  //rut:any;
  persona:any =[];
  constructor(private crud: CrudService,
    private toast: ToastController) { }

  ngOnInit() {
  }

  async agregar()
  {
    // Ejercicio 1: Validar todos los datos  antes de guardar
    // usar TOAST rojo error y verde guardado.
    //console.log("hola");
    //console.log(this.persona);
    //this.persona.rut = this.rut;
    if(!this.persona.rut)
      this.mensajeError("Falta rut");
    else if(!this.persona.nombre)
      this.mensajeError("Falta Nombre");
    else if(!this.persona.direccion)
      this.mensajeError("Falta Dirección");
    else if(!this.persona.correo)
      this.mensajeError("Falta Correo");
    else if(!this.persona.telefono)
      this.mensajeError("Falta Teléfono");
      else if(!this.persona.anioNacimiento)
        this.mensajeError("Falta Año de Nacimiento");
    else
    {
      this.crud.guardar(this.persona.rut, this.persona);
      this.persona = [];
      this.mensajeExito('Datos guardados');
    }
  }
  
// Ejercicio 2: Terminar el crud para los datos de persona

  async mensajeError(mensaje: string)
  {
    const t = await this.toast.create({
      message     : mensaje,
      icon        : 'alert-outline',
      duration    : 3000,
      color       : 'danger' 
    });
    t.present();
  }
  async mensajeExito(mensaje: string)
  {
    const t = await this.toast.create({
      message     : mensaje,
      icon        : 'checkmark-circle-outline',
      duration    : 3000,
      color       : 'success',
      position    : 'middle'
    });
    t.present();
  }

  async buscar()
  {
    if(!this.persona.rut)
      this.mensajeError("Falta rut");
    else
    {
      await this.crud.leer(this.persona.rut).
      then(x => {this.persona = x;})
        
      if(!this.persona)
      {
        this.mensajeError('Rut no encontrado');
        this.persona = [];
      }
    }
  }
  async eliminar()
  {
    if(!this.persona.rut)
      this.mensajeError("Falta rut");
    else
    {
      this.crud.eliminar(this.persona.rut);
      this.mensajeExito('Solicitud realizada');
      this.persona = [];
    }
  }
  async limpiar()
  {
    this.persona = [];
  }
}
