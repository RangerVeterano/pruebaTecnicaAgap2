import { Injectable } from '@angular/core';
import { heroe } from '../interfaces/heroe.interface';
import { of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes : heroe[] = [
    {
      id: 1,
      name : 'Spiderman'  
    },{
      id: 2,
      name : 'Superman'
    },{
      id: 3,
      name : 'Manolito el fuerte'  
    }

  ];

  constructor() { }

  getHeroes(){
    return of(this.heroes) 
  }

  getHeroeById(){

  }

  getHeroesBySearch(){

  }

  editHeroe(){

  }

  addHeroe(){

  }

  removeHeroe(){

  }

}
