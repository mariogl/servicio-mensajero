import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { AvisosComponent } from './avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporizadorComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
