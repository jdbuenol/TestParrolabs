import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EducationLevelService } from 'src/app/services/education-level.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit{
  employees: any = [];
  educationLevels: any = [];
  displayedColumns = ['Id', 'EmployeeName', 'BirthDate', 'RecordDate', 'EducationLevel']

  ngOnInit(): void {
    this.loadEducationLevels();
    this.loadEmployees();
  }

  constructor(
    public employeeService: EmployeeService,
    public educationLevelService: EducationLevelService
  ) {}

  loadEducationLevels(){
    return this.educationLevelService.GetEducationLevels().subscribe((data: any) => {
      this.educationLevels = data;
    });
  }

  loadEmployees() {
    return this.employeeService.GetEmployees().subscribe((data: any) => {
      data.map(employee => {
        employee.educationLevel = this.educationLevels.find(educationLevel => educationLevel.id == employee.education_level_id)?.concept;
      })
      this.employees = data;
    });
  }
}
