import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'sub-category-create',
  templateUrl: './sub-category-create.component.html',
  styleUrls: ['./sub-category-create.component.scss']
})
export class SubCategoryCreateComponent implements OnInit {

  categories = undefined;

  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  create(value) {
    this.catService.createSubCategory(value).subscribe(sub_category => {
      console.log("Sub Category Created");
    });
  }

}
