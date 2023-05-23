import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/shared/result';
import { Position } from 'src/app/shared/position';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-show-position',
  templateUrl: './show-position.component.html',
  styleUrls: ['./show-position.component.css']
})
export class ShowPositionComponent implements OnInit{
  id: number = 0;
  position: Position;
  displayedColumns = ['Id', 'PositionRole', 'YearsExperience', 'Salary']
  endContractError: string = "";

  ngOnInit() {
    this.loadPosition();
  }

  constructor(
    public positionService: PositionService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
  ) {}

  loadPosition() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.positionService.GetPosition(id).subscribe((data: Position) => {
      this.id = data.id;
      this.position = data;
    });
  }

  endContract() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.positionService.EndContract(id).subscribe((data: Result) => {
      console.log("Contract Ended!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-position/' + id));
    }, (error) => {
      this.endContractError = error.error.msg;
    });
  }

  deletePosition() {
    var id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    return this.positionService.DeletePosition(id).subscribe((data: Result) => {
      console.log("Position Deleted!");
      this.ngZone.run(() => this.router.navigateByUrl('/show-positions'));
    });
  }
}
