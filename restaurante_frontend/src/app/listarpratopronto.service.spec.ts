import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListarpratoprontoService } from './listarpratopronto.service';

describe('ListarpratoprontoService', () => {
  let service: ListarpratoprontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(ListarpratoprontoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
