import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tercera-detalle',
  templateUrl: './tercera-detalle.page.html',
  styleUrls: ['./tercera-detalle.page.scss'],
})
export class TerceraDetallePage implements OnInit {
  personas = [
    {
      id    : 1,
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 30,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ]
  persona: any;
  constructor(private activatedRoute:ActivatedRoute,
              private alert: AlertController,
              private toast: ToastController,
              private router: Router
    ) { 

  }

  ngOnInit() { //se ejecuta antes del render y solo una única vez.
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let id = Number(paramMap.get('id'));
      this.persona = this.personas.find(x => {return x.id==id})
    })
  }
  async si()
  {
    const t = await this.toast.create({
      message   : "Realizó un MATCH",
      icon      : "checkmark-circle-outline",
      duration  : 3000,
      color     : 'success'
    });
    t.present();
  }
  async no()
  {
    const a = await this.alert.create({
      header    : "Atención",
      subHeader : "No Match",
      message   : "Ud no realizó Match",
      buttons   : ['Aceptar']
    });
    a.present();
    this.router.navigateByUrl('/tercera-listado');
  }
}
