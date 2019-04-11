import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TareaUrl } from '../tarea-url';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {

  @Input()
  nuevaUrl: TareaUrl[];

  @Output()
  quitar: EventEmitter<TareaUrl> = new EventEmitter();

  constructor() { }

  onBorrar(tareaUrl: TareaUrl){
    this.quitar.emit(tareaUrl);
  }

}
