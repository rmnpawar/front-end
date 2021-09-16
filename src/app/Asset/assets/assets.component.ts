import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../Service/asset.service';
import { SidebarService } from '../../Service/sidebar.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  assets;

  constructor(private assetService: AssetService, private sideBar: SidebarService) { 
    this.assetService.getAllAssets().then((assets) => {
      this.assets = assets;
    });

    this.sideBar.sendItems([{"name": "Asset List", "link": "/assets-list"}]);
  }

  ngOnInit(): void {
  }

}
