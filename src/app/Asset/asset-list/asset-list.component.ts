import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../../Service/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assets;
  showModal = false;
  constructor(private assetService: AssetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.assetService.getCurrentAssets().then((assets) => {
      this.assets = assets;
    });
  }

  open(path: string, id: string) {
    this.showModal = true;
    this.router.navigate([path, id], { relativeTo: this.route})
  }

}
