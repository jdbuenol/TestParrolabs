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
  companyForm: FormGroup;
  nameError: string = "";
  addressError: string = "";
  zipCodeError: string = "";

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
    this.companyForm = this.fb.group({
      company_name: [''],
      company_address: [''],
      company_zip_code: ['']
    });
  }

  submitForm() {
    let formValue = this.companyForm.value;
    let company_data = {
      "name": formValue.company_name,
      "address": formValue.company_address,
      "zipCode": formValue.company_zip_code
    }
    this.companyService.CreateCompany(company_data).subscribe((res) => {
      console.log("Company Added!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-companies'));
    }, (error) => {
      this.nameError = error.error.name;
      this.addressError = error.error.address;
      this.zipCodeError = error.error.zipCode;
    });
  }
}
