import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  // tipos: number, string, boolean, any
  nombre : string; // inicializarlo
  nombre1: string = "Lius";
  apellido = "Perez";
  existe : boolean = true;
  cualquierValor : any;
  numero : number = 0;

  n1 = '';
  n2 = '';
  resultado : any;
  constructor(private toastController : ToastController) {
    this.nombre="Diego";
  }
  ngOnInit() {
  }
  async sumar()
  {
    this.resultado = this.n1 + this.n2;
    const toast = await this.toastController.create({
      message:'El resultado es : '+this.resultado ,
      duration: 3000,
      position:"bottom" // top, middle
    });
    await toast.present(); // despliega el mensaje
  }
}