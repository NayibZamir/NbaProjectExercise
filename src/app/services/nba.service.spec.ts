import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { NbaService } from './nba.service';

describe('NbaService', () => {
  let service: NbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(NbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
