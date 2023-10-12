import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//1.- instalar: npm install @ionic/storage-angular
// 2.- importar
import { IonicStorageModule } from '@ionic/storage-angular'; 
// 3.-agregar al import abajo: ,IonicStorageModule.forRoot()


// 1.- permite realizar solicitudes a una api
import { HttpClientModule, HttpClient } from '@angular/common/http';
// 2.- agregar a imports HttpClientModule,
@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot() ],
  providers: [HttpClient,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
