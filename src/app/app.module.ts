import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
