import { Injectable } from '@angular/core';
import { TareaUrl } from './tarea-url'

@Injectable({
  providedIn: 'root'
})

export class TareaUrlDataService {
  
  ultimo=0;

  tareaurl: TareaUrl [] = [];

  constructor() { }

  agregarUrl(lastUrl: TareaUrl):TareaUrlDataService{
    
    let extens = new String(lastUrl.url)
    let jpeg = extens.indexOf('jpeg')
    let jpg = extens.indexOf('jpg')
    let png = extens.indexOf('png')

    if(jpeg >= 0 || jpg >=0 || png >=0){
      var indice = 1;
    }

    if(!lastUrl.id) {
      lastUrl.id = ++this.ultimo;
    }
    if(indice >= 0){
      lastUrl.tipo = 0;
    }
    else{
      lastUrl.tipo = 1;
    }
    this.tareaurl.push(lastUrl);
    return this;

  }

  borrarUrlById(id: number){
    this.tareaurl = this.tareaurl.filter(it => it.id !== id);
  }

  getUrl(): TareaUrl[] {
    return this.tareaurl;
  }

}
