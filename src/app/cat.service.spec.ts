import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CatService } from './cat.service';

describe('CatService', () => {
  let injector: TestBed;
  let service: CatService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.inject(CatService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllCats', () => {
    it('should return an Observable<Cat[]>', () => {
      const dummyCats = [
        { name: 'Apollo' },
        { name: 'Muffin' },
        { name: 'Mozart' }
      ];

      service.getAllCats().subscribe(cats => {
        expect(cats.length).toBe(3);
        expect(cats).toEqual(dummyCats);
      });

      const req = httpMock.expectOne(`${service.catsBaseUrl}/cats`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyCats);
    });
  });

  describe('#getCat', () => {
    it('should return a Cat', () => {
      const dummyCat = { name: 'Apollo' };

      service.getCat('Apollo').subscribe(cat => {
        expect(cat).toEqual(dummyCat);
      });

      const req = httpMock.expectOne(`${service.catsBaseUrl}/cat/Apollo`);
      expect(req.request.method).toBe("GET");

      req.flush(dummyCat);
    });
  });
});
