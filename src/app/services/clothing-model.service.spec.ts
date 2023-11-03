import { TestBed } from '@angular/core/testing';

import { ClothingModelService } from './clothing-model.service';

describe('ClothingModelService', () => {
  let service: ClothingModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
