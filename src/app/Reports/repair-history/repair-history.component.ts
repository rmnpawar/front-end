import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';

@Component({
  selector: 'app-repair-history',
  templateUrl: './repair-history.component.html',
  styleUrls: ['./repair-history.component.scss']
})
export class RepairHistoryComponent implements OnInit {

  id: number | undefined = undefined;
  repairHistory;

  constructor(private assetService: AssetService, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.assetService.repairHistory(this.id).subscribe(history => {
      this.repairHistory = history;
      console.log(this.repairHistory);
    })
  }

}
