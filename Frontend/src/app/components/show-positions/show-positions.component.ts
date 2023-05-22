import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-show-positions',
  templateUrl: './show-positions.component.html',
  styleUrls: ['./show-positions.component.css']
})
export class ShowPositionsComponent implements OnInit{
  positions: any = [];
  educationLevels: any = [];
  displayedColumns = ['Id', 'Role', 'YearsExperience', 'Salary', 'CompanyName']

  ngOnInit(): void {
    this.loadPositions();
  }

  constructor(
    public positionService: PositionService
  ) {}

  loadPositions() {
    return this.positionService.GetPositions().subscribe((data: any) => {
      this.positions = data.filter(position => position.employee_id == null);
    });
  }
}
