import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Tenemos que importar el objeto BehaviorSubject de la librería RxJS

// Interfaz para la forma del objeto mensaje
interface Mensaje {
	tema: string;
	contenido: string;
}

@Injectable({
	providedIn: 'root' // Así se establece a partir de Angular 6 el ámbito de la instancia del servicio
})
export class MensajesService {
	private mensajero: BehaviorSubject<Mensaje> = new BehaviorSubject({
		tema: '',
		contenido: ''
  });

	constructor() { }

	// Método público para quien se quiera suscribir a los mensajes
	public escucha(): Observable&lt;Mensaje&gt; {
		return this.mensajero.asObservable();
	}

	// Método público para quien quiera emitir un mensaje
	public emite(msj: Mensaje): void {
		this.mensajero.next(msj);
	}
}
