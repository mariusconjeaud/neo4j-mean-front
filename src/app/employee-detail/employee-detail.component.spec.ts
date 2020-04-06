import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AppRoutingModule } from '../app-routing.module';

describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent;
  let fixture: ComponentFixture<EmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailComponent ],
      imports: [
        AppRoutingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
