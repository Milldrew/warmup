import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = { name: 'Angular King', id: 1 };
  constructor() {}

  ngOnInit(): void {}
}
