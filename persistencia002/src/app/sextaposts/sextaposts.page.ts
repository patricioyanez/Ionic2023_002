import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../sexta/api-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {
  posts : any = [];
  id:string ='';
  constructor(private api: ApiRestService,
              private activated: ActivatedRoute) { 

    this.activated.paramMap.subscribe(p => {
      this.id = p.get('id')??'';
//      console.log('a' + this.id);
    })
              }

  ngOnInit() {
    this.listar();
//    console.log('c');
  }
  async listar()
  {
    this.api.getUserPosts(this.id);
    this.posts = this.api.listado;

//    console.log('b');
    console.table(this.api.listado);
  }
}
