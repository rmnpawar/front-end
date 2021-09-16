import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Service/authentication.service';
import { SidebarService } from '../../Service/sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  active: string = 'All Items';

  globalItems = [{"name": 'Categories', "link": "/categories"}, {"name": 'Sections', "link": "/sections"}, {"name": "Products", "link": "/products"}];

  items = [];

  constructor(private auth: AuthenticationService, private barService: SidebarService, private changeRef: ChangeDetectorRef) { 
    this.items = this.globalItems;
  }

  change(item) {
    this.active = item;
  }

  

  get isAuthenticated() {
    return this.auth.authenticated();
  }

  ngOnInit(): void {
    this.barService.getItems().subscribe(items => {
      if (items.length == 0) {
        this.items = this.globalItems;
      }
      else {
        this.items = items;
      }
      this.changeRef.detectChanges();
    })
  }

}
