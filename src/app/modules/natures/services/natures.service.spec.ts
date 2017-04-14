import { TestBed, inject } from '@angular/core/testing';

import { NaturesService } from './natures.service';

describe('NaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaturesService]
    });
  });

  it('should ...', inject([NaturesService], (service: NaturesService) => {
    expect(service).toBeTruthy();
  }));
});
