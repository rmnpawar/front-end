import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AssetService } from '../../Service/asset.service';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  faCoffee = faCoffee
  
  assets;
  showModal = false;

  columns = [
    {
      colName: "Category",
      fieldName: "category"
    },
    {
      colName: "Sub Category",
      fieldName: "sub_category"
    },
    {
      colName: "Asset ID",
      fieldName: "asset_id"
    },
    {
      colName: "Serial No.",
      fieldName: "serial_no"
    },
    {
      colName: "Invoice",
      fieldName: "invoice_details"
    },
    {
      colName: "Price",
      fieldName: "price"
    },
    {
      colName: "Product",
      fieldName: "product_name"
    },
    {
      colName: "Current Position",
      fieldName: "current_position"
    },
    {
      colName: "Last Updated",
      fieldName: "last_updated"
    }
  ]

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
