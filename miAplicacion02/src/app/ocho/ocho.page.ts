import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1 = '';
  n2 = '';
  n3 = '';
  resultado : any;
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async promediar()
  {
    let nota1 = Number("0" + this.n1);
    let nota2 = Number("0" + this.n2);
    let nota3 = Number("0" + this.n3);

    if(nota1 < 10 || nota1 > 70)
      this.mensajeError('Nota 1 no es válida');
    else if(nota2 < 10 || nota2 > 70)
        this.mensajeError('Nota 2 no es válida');
    else if(nota3 < 10 || nota3 > 70)
          this.mensajeError('Nota 3 no es válida');
    else{
      this.resultado = (nota1 + nota2 + nota3) / 3;
    }

  }

  async mensajeError(mensaje: string)
  {
    const toast = await this.toastController.create({
      message: mensaje ,
      duration: 3000,
      position:"middle" // top, middle
    });
    await toast.present();
  }
}
