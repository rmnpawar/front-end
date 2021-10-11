import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Service/reports.service';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.scss']
})
export class ConsumablesComponent implements OnInit {

  consumables;

  constructor(private rs: ReportsService) { }

  ngOnInit(): void {
    this.rs.getConsumables().subscribe(consumables => {
      this.consumables = consumables;
    })
  }

}
