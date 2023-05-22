import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.css']
})
export class ShowCompaniesComponent implements OnInit{
  companies: any = [];
  displayedColumns = ['Id', 'CompanyName', 'Address', 'ZipCode', 'AvailablePositions']

  ngOnInit(): void {
    this.loadCompanies();
  }

  constructor(
    public companyService: CompanyService
  ) {}

  loadCompanies() {
    return this.companyService.GetCompanies().subscribe((data: any) => {
      data.map(company => {
        company.positions = company.positions.filter(position => position.startDate == null);
      });
      this.companies = data;
    });
  }
}
