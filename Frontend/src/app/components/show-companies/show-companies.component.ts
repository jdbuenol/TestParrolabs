import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.css']
})
export class ShowCompaniesComponent implements OnInit{
  companies: any = [];

  ngOnInit(): void {
    this.loadCompanies();
  }

  constructor(
    public companyService: CompanyService
  ) {}

  loadCompanies() {
    return this.companyService.GetCompanies().subscribe((data: {}) => {
      this.companies = data;
    });
  }
}
