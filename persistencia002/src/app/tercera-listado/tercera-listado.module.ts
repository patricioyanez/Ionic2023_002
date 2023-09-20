import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceraListadoPageRoutingModule } from './tercera-listado-routing.module';

import { TerceraListadoPage } from './tercera-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceraListadoPageRoutingModule
  ],
  declarations: [TerceraListadoPage]
})
export class TerceraListadoPageModule {}
