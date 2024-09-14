import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-positions-dashboard',
  templateUrl: './positions-dashboard.component.html',
  styleUrls: ['./positions-dashboard.component.css']
})
export class PositionsDashboardComponent implements OnInit {
  positions: any[] = [];

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.positionService.getPositions().subscribe((data: any[]) => {
      this.positions = data;
    });
  }
}
