import { Component, NgZone, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EducationLevelService } from 'src/app/services/education-level.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationLevel } from 'src/app/shared/educationLevel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employeeForm: FormGroup;
  educationLevels: EducationLevel[];
  nameError: string = "";
  birthDateError: string = "";
  educationLevelError: string = "";

  ngOnInit(): void {
    this.loadEducationLevels();
    this.addEmployee();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public employeeService: EmployeeService,
    public educationLevelService: EducationLevelService
  ) {}

  loadEducationLevels() {
    this.educationLevelService.GetEducationLevels().subscribe((data: any) => {
      this.educationLevels = data;
    });
  }

  addEmployee() {
    this.employeeForm = this.fb.group({
      employee_name: [''],
      employee_birth_date: [''],
      education_level_id: ['']
    });
  }

  submitForm() {
    let formValue = this.employeeForm.value;
    let employee_data = {
      "name": formValue.employee_name,
      "birthDate": formValue.employee_birth_date,
      "education_level_id": formValue.education_level_id
    }
    this.employeeService.CreateEmployee(employee_data).subscribe((res) => {
      console.log("Employee Added!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-employees'));
    }, (error) => {
      this.nameError = error.error.name;
      this.birthDateError = error.error.birthDate;
      this.educationLevelError = error.error.education_level_id;
    });
  }
}
