export class TareaUrl {
  id: number;
  url: string ='';
  tipo: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

}

