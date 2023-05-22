import { Component, OnInit, NgZone } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EducationLevelService } from 'src/app/services/education-level.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/shared/result';
import { Position } from 'src/app/shared/position';
import { EducationLevel } from 'src/app/shared/educationLevel';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit{
  id: number = 0;
  employee: any;
  educationLevels: EducationLevel[];
  displayedColumns = ['Id', 'PositionRole', 'Salary', 'StartDate', 'EndDate'];

  ngOnInit() {
    this.loadEducationLevels();
    this.loadEmployee();
  }

  constructor(
    public employeeService: EmployeeService,
    public educationLevelService: EducationLevelService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
  ) {}

  loadEducationLevels() {
    return this.educationLevelService.GetEducationLevels().subscribe((data: any) => {
      this.educationLevels = data;
    });
  }

  loadEmployee() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.employeeService.GetEmployee(id).subscribe((data: any) => {
      this.id = data.id;
      data.educationLevel = this.educationLevels.find(educationLevel => educationLevel.id == data.education_level_id).concept;
      this.employee = data;
    });
  }

  deleteEmployee() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.employeeService.DeleteEmployee(id).subscribe((data: Result) => {
      console.log("Employee Deleted!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-employees'));
    });
  }
}
