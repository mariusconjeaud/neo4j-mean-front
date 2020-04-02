import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesBaseUrl = `${environment.APIENDPOINT}`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.employeesBaseUrl}/employees`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map((data: any) => {
          return data.map(el => el.properties);
        }),
        catchError(this.handleError<Employee[]>('getAllEmployees', []))
      );
  }

  getEmployee(emp_id: number): Observable<Employee> {
    const url = `${this.employeesBaseUrl}/employee/${emp_id}`;
    return this.http.get<Employee>(url)
      .pipe(
        map((data: any) => {
          return data.properties;
        }),
        catchError(this.handleError<Employee>('getEmployee', []))
      );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeesBaseUrl}/employee`;
    return this.http.post<Employee>(url, employee)
      .pipe(
        map((data: any) => {
          return data.properties;
        }),
        catchError(this.handleError<Employee>('createEmployee', []))
      );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeesBaseUrl}/employee/${employee.emp_id}`;
    return this.http.put<Employee>(url, employee)
      .pipe(
        map((data: any) => {
          return data.properties;
        }),
        catchError(this.handleError<Employee>('updateEmployee', []))
      );
  }

  deleteEmployee(emp_id: number) {
    const url = `${this.employeesBaseUrl}/employee/${emp_id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deleteEmployee', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
