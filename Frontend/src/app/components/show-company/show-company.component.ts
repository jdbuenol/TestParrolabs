import { Component, OnInit, NgZone } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/shared/company';
import { Result } from 'src/app/shared/result';
import { Position } from 'src/app/shared/position';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit{
  id: number = 0;
  company: Company;
  vacants: Position[];
  occupied: Position[];
  displayedColumns = ['Id', 'PositionRole', 'YearsExperience', 'Salary']

  ngOnInit() {
    this.loadCompany();
  }

  constructor(
    public companyService: CompanyService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
  ) {}

  loadCompany() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.companyService.GetCompany(id).subscribe((data: Company) => {
      this.id = data.id;
      this.company = data;
    });
  }

  deleteCompany() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.companyService.DeleteCompany(id).subscribe((data: Result) => {
      console.log("Company Deleted!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-companies'));
    });
  }
}
