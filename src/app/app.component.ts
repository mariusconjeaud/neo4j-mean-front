import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A superb app';
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getAllEmployees()
        .subscribe(employees => this.employees = employees);
  }
 }
