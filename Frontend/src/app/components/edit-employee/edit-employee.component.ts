import { Component, OnInit, NgZone } from '@angular/core';
import { EducationLevelService } from 'src/app/services/education-level.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EducationLevel } from 'src/app/shared/educationLevel';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit{
  id: number;
  updateEmployeeForm: FormGroup;
  educationLevels: EducationLevel[];
  selectedEducationLevel = 0;
  nameError: string = "";
  birthDateError: string = "";
  educationLevelError: string = "";

  ngOnInit(): void {
    this.loadEducationLevels();
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public employeeService: EmployeeService,
    public educationLevelService: EducationLevelService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    this.employeeService.GetEmployee(this.id).subscribe((data) => {
      this.updateEmployeeForm = this.fb.group({
        employee_name: [data.name],
        employee_birth_date: [data.birthDate],
        education_level_id: [data.education_level_id]
      });
    });
  }

  loadEducationLevels() {
    this.educationLevelService.GetEducationLevels().subscribe((data: any) => {
      this.educationLevels = data;
    });
  }

  updateForm() {
    this.updateEmployeeForm = this.fb.group({
      employee_name: [''],
      employee_birth_date: [''],
      education_level_id: ['']
    });
  }

  submitForm() {
    let formValue = this.updateEmployeeForm.value;
    let employeeData = {
      "name": formValue.employee_name,
      "birthDate": formValue.employee_birth_date,
      "education_level_id": formValue.education_level_id
    }
    this.employeeService.UpdateEmployee(this.id, employeeData).subscribe(res => {
      console.log("Employee Updated!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-employee/' + this.id));
    }, (error) => {
      this.nameError = error.error.name;
      this.birthDateError = error.error.birthDate;
      this.educationLevelError = error.error.education_level_id;
    });
  }
}
