import { Component, OnInit, NgZone } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CompanyService } from 'src/app/services/company.service';
import { PositionService } from 'src/app/services/position.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/shared/company';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent {
  id: number;
  updatePositionForm: FormGroup;
  selectedCompany: number;
  companies: Company[];
  employees: Employee[];
  selectedEducationLevel = 0;
  roleError: string = "";
  yearsExperienceError: string = "";
  salaryError: string = "";
  companyError: string = "";
  employeeError: string = "";
  positionError: string = "";

  ngOnInit(): void {
    this.loadCompanies();
    this.loadEmployees();
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public employeeService: EmployeeService,
    public companyService: CompanyService,
    public positionService: PositionService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    this.positionService.GetPosition(this.id).subscribe((data) => {
      this.updatePositionForm = this.fb.group({
        position_role: [data.role],
        position_years_experience: [data.yearsExperience],
        position_salary: [data.salary],
        position_company_id: [data.company_id],
        position_employee_id: [data.employee_id]
      });
    });
  }

  loadCompanies() {
    this.companyService.GetCompanies().subscribe((data: any) => {
      this.companies = data;
    });
  }

  loadEmployees() {
    this.employeeService.GetEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  updateForm() {
    this.updatePositionForm = this.fb.group({
      position_role: [''],
      position_years_experience: [''],
      position_salary: [''],
      position_company_id: [''],
      position_employee_id: ['']
    });
  }

  submitForm() {
    let formValue = this.updatePositionForm.value;
    let positionData = {
      "role": formValue.position_role,
      "yearsExperience": formValue.position_yearsExperience,
      "salary": formValue.position_salary,
      "company_id": formValue.position_company_id,
      "employee_id": formValue.position_employee_id
    }
    this.positionService.UpdatePosition(this.id, positionData).subscribe(res => {
      console.log("Position Updated!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-position/' + this.id));
    }, (error) => {
      this.roleError = error.error.role;
      this.yearsExperienceError = error.error.yearsExperience;
      this.salaryError = error.error.salary;
      this.companyError = error.error.company_id;
      this.employeeError = error.error.employee_error;
      this.positionError = error.error.msg;
    });
  }
}
