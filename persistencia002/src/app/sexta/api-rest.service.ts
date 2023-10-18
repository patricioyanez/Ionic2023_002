import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private urlAPI:string = 'https://jsonplaceholder.typicode.com/';
  listado :any= [];   

  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlAPI + 'users';
    return this.http.get(url).subscribe((a=[]) => {
      this.listado = a; 
    });
  }
  getUserPosts(id:string)
  {
    const url = this.urlAPI + 'users/' + id + '/posts';
    return this.http.get(url).subscribe((a=[]) => {
      this.listado = a; 
//      console.table(this.listado);
    });
  }
}
