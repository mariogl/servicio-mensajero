import { Component, OnInit, OnDestroy } from '@angular/core';
import { MensajesService } from '../mensajes.service';  // Nuestro proveedor de mensajes
import { Subscription } from 'rxjs';  // Importamos el objeto Subscription de rxjs

@Component({
  selector: 'msjs-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit, OnDestroy {
  public aviso = '';
  private suscripcionMensajes: Subscription; // Aquí almacenaremos la suscripción

  constructor(private mensajesService: MensajesService) { }  // Inyectamos nuestro servicio de mensajes

  private escuchaMensajes(): void {
    // tslint:disable-next-line:max-line-length
    this.suscripcionMensajes = this.mensajesService.escucha('tiempo').subscribe(  // Al llamar a escucha() le pasamos el tema que nos interesa
      msj => {
        switch (msj.contenido) {
          case 'inicio':
            this.muestraAviso('Marca inicial');
            break;
          case 'fin':
            this.muestraAviso('Marca final');
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

  ngOnDestroy(): void {
    this.suscripcionMensajes.unsubscribe();  // Cancelamos la suscripción cuando se destruya el componente
  }
}
