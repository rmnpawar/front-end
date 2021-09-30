import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fade-in.animation';
import { CategoryService } from '../../Service/category.service';
import { SidebarService } from '../../Service/sidebar.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [fadeInAnimation],

  host: {'[@fadeInAnimation]': ''}
})
export class CategoriesComponent {

  categories;

  constructor(private cs: CategoryService, private sideBar: SidebarService) {
    this.initializeCategories();
    this.sideBar.sendItems([{"name": "Sub Categories", "link": "/sub_categories"}]);
  }


  initializeCategories() {
    this.cs.getAllCategories()
    .subscribe(cats => {
      this.categories = cats;
    });
  }

  removeCategory(id) {
    Object.keys(this.categories);
    this.categories.forEach((cat, index) => {
      if (id == cat.id ) {
        this.categories.splice(index, 1);
      }
    });
  }
}
