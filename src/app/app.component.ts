import { Component } from '@angular/core';
import { TareaUrlDataService } from './tarea-url-data.service';
import { TareaUrl } from './tarea-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private urlService: TareaUrlDataService){
    
  }

  nuevaUrl: TareaUrl = new TareaUrl();

  addUrl(newUrl){
    this.urlService.agregarUrl(newUrl);
    /*this.nuevaUrl = new TareaUrl();*/
  }

  EliminarUrl(url){
    this.urlService.borrarUrlById(url.id);
  }

  get obtenerUrl() {
    return this.urlService.getUrl();
  }

}
