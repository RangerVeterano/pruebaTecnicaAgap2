import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private h: HeroesService
    ) { }

    hero : heroe | undefined;

  ngOnInit(): void {

    this.router.params.subscribe(data => {
      
      this.hero = this.h.getHeroeById(Number(data['id']));
    })

  }

}
