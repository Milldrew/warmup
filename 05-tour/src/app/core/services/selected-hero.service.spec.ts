import { TestBed } from '@angular/core/testing';

import { SelectedHeroService } from './selected-hero.service';

describe('SelectedHeroService', () => {
  let service: SelectedHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
