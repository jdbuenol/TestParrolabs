import { Component, NgZone, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  listForm: FormGroup;

  ngOnInit(): void {
    this.addCompany();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public companyService: CompanyService
  ) {}

  addCompany() {
    this.listForm = this.fb.group({
      company_name: [''],
      company_address: [''],
      company_zip_code: ['']
    });
  }

  submitForm() {
    this.companyService.CreateCompany(this.listForm.value.company_name, this.listForm.value.company_address, this.listForm.value.company_zip_code).subscribe((res) => {
      console.log("Company Added!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-companies'));
    });
  }
}
