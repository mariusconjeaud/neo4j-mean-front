import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

const dummyEmployee = {
  properties: {
    emp_id: 1,
    name: 'George'
  }
};

const nestedDummyEmployee = {
  e: {
    properties: {
      emp_id: 1,
      name: 'George'
    }
  }
}

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
        dummyEmployee,
        {
          properties: {
            emp_id: 2,
            name: 'Cindy'
          }
        }
      ];

      service.getAllEmployees().subscribe(employees => {
        expect(employees.length).toBe(2);
        expect(employees).toEqual(dummyEmployees.map(el => el.properties));
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employees`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyEmployees);
    });
  });

  describe('#getEmployee', () => {
    it('should return an Employee', () => {
      service.getEmployee(1).subscribe(employee => {
        expect(employee).toEqual(dummyEmployee.properties);
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employee/1`);
      expect(req.request.method).toBe('GET');

      req.flush(dummyEmployee);
    });
  });

  describe('#createEmployee', () => {
    it('should return an Employee', () => {
      service.createEmployee(nestedDummyEmployee.e.properties).subscribe(employee => {
        expect(employee).toEqual(nestedDummyEmployee.e.properties);
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employee`);
      expect(req.request.method).toBe('POST');

      req.flush(nestedDummyEmployee);
    });
  });

  describe('#updateEmployee', () => {
    it('should return an Employee', () => {
      service.updateEmployee(nestedDummyEmployee.e.properties).subscribe(employee => {
        expect(employee).toEqual(nestedDummyEmployee.e.properties);
      });

      const req = httpMock.expectOne(`${service.employeesBaseUrl}/employee/${nestedDummyEmployee.e.properties.emp_id}`);
      expect(req.request.method).toBe('PUT');

      req.flush(nestedDummyEmployee);
    });
  });
});
