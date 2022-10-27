import { HEROES } from '../core/data/heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;
  constructor() {}

  ngOnInit(): void {}
  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.heroes = [...this.heroes];
  }
}
