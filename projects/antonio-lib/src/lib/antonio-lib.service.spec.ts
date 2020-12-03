import { TestBed } from '@angular/core/testing';

import { AntonioLibService } from './antonio-lib.service';

describe('AntonioLibService', () => {
  let service: AntonioLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntonioLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
