import { Component, OnInit, NgZone } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})

export class EditCompanyComponent implements OnInit{
  id: number;
  updateCompanyForm: FormGroup;
  nameError: string = "";
  addressError: string = "";
  zipCodeError: string = "";

  ngOnInit(): void {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public companyService: CompanyService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    this.companyService.GetCompany(this.id).subscribe((data) => {
      this.updateCompanyForm = this.fb.group({
        company_name: [data.name],
        company_address: [data.address],
        company_zip_code: [data.zipCode]
      });
    });
  }

  updateForm() {
    this.updateCompanyForm = this.fb.group({
      company_name: [''],
      company_address: [''],
      company_zip_code: ['']
    });
  }

  submitForm() {
    let formValue = this.updateCompanyForm.value;
    let companyData = {
      "name": formValue.company_name,
      "address": formValue.company_address,
      "zipCode": formValue.company_zip_code
    }
    this.companyService.UpdateCompany(this.id, companyData).subscribe(res => {
      console.log("Company Updated!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-company/' + this.id));
    }, (error) => {
      this.nameError = error.error.name;
      this.addressError = error.error.address;
      this.zipCodeError = error.error.zipCode;
    });
  }
}
