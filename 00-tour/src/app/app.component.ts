import { Component } from '@angular/core';
import { Hero } from './core/types/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;

  handleSelectedHero(hero: any) {
    console.log(hero);
  }
}
