import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../Service/reports.service';

@Component({
  selector: 'app-consumable-summary',
  templateUrl: './consumable-summary.component.html',
  styleUrls: ['./consumable-summary.component.scss']
})
export class ConsumableSummaryComponent implements OnInit {
  consumables;

  constructor(private rs: ReportsService) { }

  ngOnInit(): void {
    this.rs.getConsumableSummary().subscribe(consumables => {
      this.consumables = consumables;
    })
  }

}
