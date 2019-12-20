import { TestBed } from '@angular/core/testing';

import { ExmpleService } from './exmple.service';

describe('ExmpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExmpleService = TestBed.get(ExmpleService);
    expect(service).toBeTruthy();
  });
});
