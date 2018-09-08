import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../mensajes.service';  // Nuestro proveedor de mensajes

@Component({
  selector: 'msjs-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {
  public temporizadorIniciado = false;

  constructor(private mensajesService: MensajesService) { }  // Inyectamos nuestro servicio de mensajes

  public iniciarTemporizador(): void {
    this.temporizadorIniciado = true;
    this.mensajesService.emite({
      tema: 'tiempo',
      contenido: 'inicio'
    });
  }

  public finalizarTemporizador(): void {
    this.temporizadorIniciado = false;
    this.mensajesService.emite({
      tema: 'tiempo',
      contenido: 'fin'
    });
  }

  ngOnInit() {
  }
}
