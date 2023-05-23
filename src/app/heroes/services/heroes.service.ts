import { Injectable } from '@angular/core';
import { heroe } from '../interfaces/heroe.interface';
import { of } from 'rxjs';
import { heroesMock } from '../mocks/heroes.mock';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: heroe[] = heroesMock;

  constructor() { }

  getHeroes() {
    return of([...this.heroes]);
  }

  getHeroeById(id: number): heroe | undefined {

    const checkHeroExist = this.searchIndex(id);
    return (checkHeroExist !== -1) ? this.heroes[checkHeroExist] : undefined;
  }

  getHeroesBySearch(cadena: string) {
    return [...this.heroes].filter((heroe: heroe) => heroe.name.toLocaleLowerCase().includes(cadena.toLocaleLowerCase()));
  }

  editHeroe(hero: heroe): void {
    const heroIndex = this.searchIndex(hero.id);
    this.heroes[heroIndex] = hero;
  }

  addHeroe(heroe: heroe) {
    this.heroes.push(heroe);
  }

  removeHeroe(id: number) {
    const heroIndex = this.searchIndex(id); 
    this.heroes.splice(heroIndex, 1);
  }

  private searchIndex(id: number): number {
    return this.heroes.findIndex(hero => hero.id === id);
  }

  resetHeroes(){
    this.heroes = [...heroesMock]; 
  }

}
