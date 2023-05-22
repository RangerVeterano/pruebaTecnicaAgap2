import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../interfaces/heroe.interface';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes: heroe[] = [];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor( 
    private hs : HeroesService,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {

    this.hs.getHeroes().subscribe(data => {
      this.heroes = data;
    });

  }

  borradoHeroe(hero: number){
    this.hs.removeHeroe(hero);
    this.ref.detectChanges();
  } 

  sendHeroes(){
    return this.heroes;
  }

}
