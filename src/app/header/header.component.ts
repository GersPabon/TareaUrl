import { Component, EventEmitter, Output } from '@angular/core';
import { TareaUrl } from '../tarea-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nuevaTareaUrl: TareaUrl = new TareaUrl();

  @Output()
  add: EventEmitter<TareaUrl> = new EventEmitter();

  constructor() { }

  onAddUrl(){
    this.add.emit(this.nuevaTareaUrl);
    this.nuevaTareaUrl = new TareaUrl();
  }


}
