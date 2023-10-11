import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiURL:string = 'https://jsonplaceholder.typicode.com/';
  listado = [];  

  constructor(private http: HttpClient) { }

  getUsers()
  {
    this.listado = [];

    let url = this.apiURL + 'users';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data) => {
        //data.forEach(item => {this.listado.push(item);})
        //console.table(this.listado);
        console.table(data);
        return data;
      },
      err => {
        console.log("Ocurrio un error");
      })
    })
  }

}
