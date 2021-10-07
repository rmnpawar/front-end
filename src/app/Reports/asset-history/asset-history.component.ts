import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';

@Component({
  selector: 'app-asset-history',
  templateUrl: './asset-history.component.html',
  styleUrls: ['./asset-history.component.scss']
})
export class AssetHistoryComponent implements OnInit {

  id: number | undefined = undefined;
  assetHistory;

  constructor(private assetService: AssetService, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.assetService.assetHistory(this.id).subscribe(history => {
      this.assetHistory = history;
      console.log(this.assetHistory);
    })
  }

}
