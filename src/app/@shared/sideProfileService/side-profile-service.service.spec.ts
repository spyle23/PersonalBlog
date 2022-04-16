import { TestBed } from '@angular/core/testing';

import { SideProfileServiceService } from './side-profile-service.service';

describe('SideProfileServiceService', () => {
  let service: SideProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
