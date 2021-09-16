import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories;

  constructor(private cs: CategoryService) { 
    this.initializeCategories();
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
