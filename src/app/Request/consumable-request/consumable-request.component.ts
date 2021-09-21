import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Service/authentication.service';
import { RequestService } from '../../Service/request.service';
import { AssetService } from '../../Service/asset.service';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'consumable-request',
  templateUrl: './consumable-request.component.html',
  styleUrls: ['./consumable-request.component.scss']
})
export class ConsumableRequestComponent implements OnInit {

  users;
  assets;
  consumables = [];
  allConsumablesCategories;

  current_request: {asset_id?: number, user_id?: number, sub_category?: number}
  current_asset_id;

  constructor(
    private auth: AuthenticationService,
    private rs: RequestService,
    private as: AssetService,
    private cs: CategoryService) { }

  async ngOnInit(){
    this.users = await this.auth.listUsers();
    this.getAssets();
    this.getCategories();
  }

  async getAssets() {
    this.assets = await this.as.getUserAssets();
  }

  async getCategories() {
    this.cs.getSubCategories().subscribe(sub_categories => {
      this.allConsumablesCategories = sub_categories;
    });
    this.filterConsumables();
  }

  assetConsumables(index) {
    console.log(this.assets[index]);
    this.consumables = this.assets[index].products.consumables;
    this.current_asset_id = this.assets[index].id;
  }

  filterConsumables() {
    this.consumables = [];
    this.allConsumablesCategories.forEach(consumable => {
        if (consumable.is_consumable && consumable.category.cat_name != "Cartridges" && consumable.category.cat_name != "Drums") this.consumables.push(consumable);
    });
  }

  createRequest(form_value) {
    form_value.asset_id = this.current_asset_id;
    console.log(form_value);
    this.rs.createConsumableRequest(form_value).subscribe(request => {
      console.log("request created " + request);
    })
  }

}
