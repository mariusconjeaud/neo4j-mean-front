import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
