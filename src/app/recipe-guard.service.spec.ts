import { TestBed, inject } from '@angular/core/testing';

import { RecipeGuardService } from './recipe-guard.service';

describe('RecipeGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeGuardService]
    });
  });

  it('should be created', inject([RecipeGuardService], (service: RecipeGuardService) => {
    expect(service).toBeTruthy();
  }));
});
