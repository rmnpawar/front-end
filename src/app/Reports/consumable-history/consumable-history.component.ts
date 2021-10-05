import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';
import { ReportsService } from 'src/app/Service/reports.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { LoadingService } from '../../ux/loading.service';

@Component({
  selector: 'app-consumable-history',
  templateUrl: './consumable-history.component.html',
  styleUrls: ['./consumable-history.component.scss'],
  animations: [fadeInAnimation],
})
export class ConsumableHistoryComponent implements OnInit {

  @Input('asset_id') asset_id : number | undefined;
  @Input('user_id') user_id : number | undefined;
  @Input('section_id') section_id : number | undefined;
  @Input('consumable_id') consumable_id : number | undefined;

  consumables?: {};

  constructor(private reportService: ReportsService, private loadingService :LoadingService) {
    this.loadingService.setStatus(true);
   }

  ngOnInit(): void {
    this.reportService.getConsumableHistory(this.createParameters()).subscribe(consumables => {
      this.consumables = consumables;
      this.loadingService.setStatus(false);
    })
  }

  createParameters() {
    return {
      asset_id: this.asset_id,
      user_id: this.user_id,
      section_id: this.section_id,
      consumable_id: this.consumable_id,
    };
  }

}
