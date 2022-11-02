import { Component, OnInit } from '@angular/core';
import { HEROES } from '../core/data/heroes';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  selectedHero: Hero | null;
  heroes: Hero[];
  constructor() {
    this.heroes = HEROES;
  }

  handleClickedHero(clickedHero: Hero) {
    if (this.selectedHero === clickedHero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = clickedHero;
    }
  }
}
