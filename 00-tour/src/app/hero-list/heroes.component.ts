import { HEROES } from '../core/data/heroes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroListComponent implements OnInit {
  @Output()
  selectedHeroEmitter: EventEmitter<Hero | null>;
  selectedHero: Hero | null;
  heroes = HEROES;
  constructor() {
    this.selectedHeroEmitter = new EventEmitter();
  }

  ngOnInit(): void {}
  onSelectHero(hero: Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
    this.selectedHeroEmitter.emit(this.selectedHero);
  }
}
