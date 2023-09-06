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
  async restar()
  {
    this.resultado = Number(this.n1) - Number(this.n2);
  }
  async multiplicar()
  {
    this.resultado = Number(this.n1) * Number(this.n2);
  }
  async dividir()
  {
    if(Number(this.n2) != 0)
      this.resultado = Number(this.n1) / Number(this.n2);
    else
    {
      this.n1 = this.n2 = this.resultado = "";
      const toast = await this.toastController.create({
        message:'No se puede dividir por cero' ,
        duration: 3000,
        position:"middle" // top, middle
      });
      await toast.present();
    }
  }
   // Ejercicios:
  // crear una nueva pagina que permita calculador el promedio de 3 notas,
  // mostrar si aprobó o no, según resultado obtenido.
  // usar alert si reprueba y toast si aprueba.
}