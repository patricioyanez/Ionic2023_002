import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  valor : number = 0;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async alerta()
  {
    const alert = await this.alertController.create({
      header    : 'Alerta usando AlertController',
      subHeader : 'SubTitulo de AlertController',
      message   : 'Otro ejemplo para mostrar un mensaje',
      buttons   : ['Ok'],
    });
    await alert.present(); // muestra el alerta creada en el punto anterior
  }
  async incrementar()
  {
    this.valor += 1;
  }
}
