import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';
import { ReportsService } from 'src/app/Service/reports.service';

@Component({
  selector: 'app-consumable-history',
  templateUrl: './consumable-history.component.html',
  styleUrls: ['./consumable-history.component.scss']
})
export class ConsumableHistoryComponent implements OnInit {

  consumables?: {};

  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getConsumableHistory().subscribe(consumables => {
      this.consumables = consumables;
    })
  }

}
