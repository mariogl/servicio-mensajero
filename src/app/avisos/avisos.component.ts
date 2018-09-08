import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../mensajes.service';  // Nuestro proveedor de mensajes

@Component({
  selector: 'msjs-avisos',
  templateUrl: './avisos.component.html'
})
export class AvisosComponent implements OnInit {
  constructor(private mensajesService: MensajesService) { }  // Inyectamos nuestro servicio de mensajes

  private escuchaMensajes(): void {
    this.mensajesService.escucha('tiempo').subscribe(  // Al llamar a escucha() le pasamos el tema que nos interesa
      msj => {
        switch (msj.contenido) {
          case 'inicio':
            console.log('Se ha recibido la marca inicial de tiempo');
            break;
          case 'fin':
            console.log('Se ha recibido la marca final de tiempo');
            break;
        }
      }
    );
  }

  ngOnInit(): void {
    this.escuchaMensajes();
  }
}
