import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let injector: TestBed;
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.inject(EmployeeService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllEmployees', () => {
    it('should return an Observable<Employee[]>', () => {
      const dummyEmployees = [
        {
          emp_id: 1,
          name: 'George'
        },
        {
          emp_id: 2,
          name: 'Cindy'
        }
      ];

      service.getAllEmployees().subscribe(employees => {
        expect(employees.length).toBe(2);
        expect(employees).toEqual(dummyEmployees);
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employees`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyEmployees);
    });
  });

  describe('#getEmployee', () => {
    it('should return an Employee', () => {
      const dummyEmployee = { emp_id: 1, name: 'George' };

      service.getEmployee(1).subscribe(employee => {
        expect(employee).toEqual(dummyEmployee);
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employee/1`);
      expect(req.request.method).toBe('GET');

      req.flush(dummyEmployee);
    });
  });
});
