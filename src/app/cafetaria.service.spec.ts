import { TestBed } from '@angular/core/testing';

import { CafetariaService } from './cafetaria.service';

describe('CafetariaService', () => {
  let service: CafetariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafetariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
