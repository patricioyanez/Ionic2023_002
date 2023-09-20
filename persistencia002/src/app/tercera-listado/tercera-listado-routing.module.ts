import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceraListadoPage } from './tercera-listado.page';

const routes: Routes = [
  {
    path: '',
    component: TerceraListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceraListadoPageRoutingModule {}
