import { Component, OnInit } from '@angular/core';
import { HEROES } from '../core/data/heroes';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedHero: Hero | null;
  heroes: Hero[];
  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit(): void {}

  handleSelectedHero(hero: Hero) {
    console.log(hero);
    if (hero === this.selectedHero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  }
}
