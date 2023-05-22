import { Injectable } from '@angular/core';
import { heroe } from '../interfaces/heroe.interface';
import { of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes : heroe[] = [
    {
      id: 1684747435871,
      name : 'Spiderman'  
    },{
      id: 1684747457309,
      name : 'Superman'
    },{
      id: 1684747474922,
      name : 'Manolito el fuerte'  
    }

  ];

  constructor() { }

  getHeroes(){
    return of([...this.heroes]) 
  }

  getHeroeById(id : number): heroe | undefined{

    const checkHeroExist = this.searchIndex(id);
    return (checkHeroExist !== -1)? this.heroes[checkHeroExist] : undefined;
  }

  getHeroesBySearch(cadena: string){    
    return [...this.heroes].filter( (heroe : heroe) => heroe.name.toLocaleLowerCase().includes(cadena) );
  }

  editHeroe(hero: heroe):void{
    const heroIndex = this.searchIndex(hero.id);
    this.heroes[heroIndex] = hero;
  }

  addHeroe( heroe : heroe){
    this.heroes.push(heroe);
  }

  removeHeroe(id : number){
    const heroIndex = this.searchIndex(id);
    this.heroes.splice(heroIndex,1);
  }

  private searchIndex(id: number) :number{
    return this.heroes.findIndex( hero => hero.id === id)
  }

}
