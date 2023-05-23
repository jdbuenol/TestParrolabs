import { Component, NgZone, OnInit } from '@angular/core';
import { PositionService } from 'src/app/services/position.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/company';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent {
  positionForm: FormGroup;
  companies: Company[];
  roleError: string = "";
  yearsExperienceError: string = "";
  salaryError: string = "";
  companyError: string = "";

  ngOnInit(): void {
    this.loadCompanies();
    this.addPosition();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public positionService: PositionService,
    public companyService: CompanyService
  ) {}

  loadCompanies() {
    this.companyService.GetCompanies().subscribe((data: any) => {
      this.companies = data;
    });
  }

  addPosition() {
    this.positionForm = this.fb.group({
      position_role: [''],
      position_years_experience: [''],
      position_salary: [''],
      position_company_id: ['']
    });
  }

  submitForm() {
    let formValue = this.positionForm.value;
    let positionData = {
      "role": formValue.position_role,
      "yearsExperience": formValue.position_years_experience,
      "salary": formValue.position_salary,
      "company_id": formValue.position_company_id
    }
    this.positionService.CreatePosition(positionData).subscribe((res) => {
      console.log("Position Added!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-positions'));
    }, (error) => {
      this.roleError = error.error.role;
      this.yearsExperienceError = error.error.yearsExperience;
      this.salaryError = error.error.salary;
      this.companyError = error.error.company_id;
    });
  }
}
