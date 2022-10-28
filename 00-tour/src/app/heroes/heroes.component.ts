import { HEROES } from '../core/data/heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero | null;
  heroes = HEROES;
  constructor() {}

  ngOnInit(): void {}
  onSelectHero(hero: Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  }
}
