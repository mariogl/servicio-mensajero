import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../mensajes.service';  // Nuestro proveedor de mensajes

@Component({
  selector: 'msjs-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  public aviso = '';

  constructor(private mensajesService: MensajesService) { }  // Inyectamos nuestro servicio de mensajes

  private escuchaMensajes(): void {
    this.mensajesService.escucha('tiempo').subscribe(  // Al llamar a escucha() le pasamos el tema que nos interesa
      msj => {
        switch (msj.contenido) {
          case 'inicio':
            this.muestraAviso('Marca inicial');
            console.log('Se ha recibido la marca inicial de tiempo');
            break;
          case 'fin':
          this.muestraAviso('Marca final');
            console.log('Se ha recibido la marca final de tiempo');
            break;
        }
      }
    );
  }

  private muestraAviso(aviso: string): void {
    this.aviso = aviso;
    setTimeout(() => {
      this.aviso = '';
    }, 2000);
  }

  ngOnInit(): void {
    this.escuchaMensajes();
  }
}
