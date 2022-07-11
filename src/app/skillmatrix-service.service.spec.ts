import { TestBed } from '@angular/core/testing';

import { SkillmatrixServiceService } from './skillmatrix-service.service';

describe('SkillmatrixServiceService', () => {
  let service: SkillmatrixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillmatrixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
