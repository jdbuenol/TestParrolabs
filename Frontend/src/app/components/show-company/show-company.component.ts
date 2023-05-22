import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/shared/company';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit{
  id: number = 0;
  name: string = "";
  address: string = "";
  zipCode: string = "";

  ngOnInit() {
    this.loadCompany();
  }

  constructor(
    public companyService: CompanyService,
    private actRoute: ActivatedRoute
  ) {}

  loadCompany() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.companyService.GetCompany(id).subscribe((data: Company) => {
      this.id = data.id;
      this.name = data.name;
      this.address = data.address;
      this.zipCode = data.zipCode;
    });
  }
}
