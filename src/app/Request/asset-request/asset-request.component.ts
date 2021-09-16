import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../Service/request.service';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'asset-request',
  templateUrl: './asset-request.component.html',
  styleUrls: ['./asset-request.component.scss']
})
export class AssetRequestComponent implements OnInit {

  allCategories;
  categories = [];
  sub_categories;
  users;


  constructor(private rs: RequestService, private auth: AuthenticationService) { }

  async ngOnInit() {
    this.rs.getCategories().subscribe(categories => {
      this.allCategories =  categories;
      this.filterConsumables();
    });
  }

  async updateSubCategories(category) {
    this.sub_categories = await this.rs.getSubCategories(category);
    this.updateUsers();
  }

  async updateUsers() {
    this.users = await this.auth.listUsers();
  }

  filterConsumables() {
    this.allCategories.forEach(category => {
      if (!category.consumable) this.categories.push(category);
    });
  }
}
