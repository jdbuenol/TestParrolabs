import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit{
  employees: any = [];
  displayedColumns = ['Id', 'EmployeeName', 'BirthDate', 'RecordDate', 'EducationLevel']

  ngOnInit(): void {
    this.loadEmployees();
  }

  constructor(
    public employeeService: EmployeeService
  ) {}

  loadEmployees() {
    return this.employeeService.GetEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }
}
