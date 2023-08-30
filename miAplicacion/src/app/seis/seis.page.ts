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

  mostrarDatos : Boolean = true;
  asignaturas = [
    {nombre:"Base de datos" , nota:39.55},
    {nombre:"Programación"  , nota:45},
    {nombre:"Matématica"    , nota:33}, 
  ];

  constructor() {
    this.nombre= "Ana";
    this.apellido="Perez";
   }

  ngOnInit() {
  }

}
