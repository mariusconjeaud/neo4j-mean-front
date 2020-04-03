import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  // Employee service calls
  getAllEmployees(): void {
    this.employeeService.getAllEmployees()
        .subscribe(employees => this.employees = employees);
  }

  add(emp_id: number, name: string): void {
    name = name.trim();
    if (!emp_id || !name) { return; }
    emp_id = +emp_id;
    this.employeeService.createEmployee({ emp_id, name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.employeeService.deleteEmployee(employee.emp_id)
        .subscribe();
  }

  // Event handlers
  onDelete(employee: Employee): void {
    this.deleteEmployee(employee);
  }
}
