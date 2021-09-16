import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../Service/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assets;
  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getCurrentAssets().then((assets) => {
      this.assets = assets;
    });
  }

}
