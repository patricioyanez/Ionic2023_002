import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre  : string;
  apellido: string;
  mensaje : string = "Estudiante con buen desempeño";

  constructor() {
    this.nombre= "Ana";
    this.apellido="Perez";
   }

  ngOnInit() {
  }

}
