import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  sub_categories = undefined;
  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.catService.getSubCategories().subscribe(sub_categories => {
      this.sub_categories = sub_categories;
    })
  }

}
