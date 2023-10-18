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
  constructor(private api: ApiRestService,
              private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      let idUsuario = p.get('id')??'';
      this.listar(idUsuario);
    })
  }
  async listar(idUsuario:string)
  {
    await this.api.getUserPosts(idUsuario);
    this.posts = this.api.listado;

  }
}
