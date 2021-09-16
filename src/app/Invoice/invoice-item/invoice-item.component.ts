import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

  @Input('item') item: any;
  @Input('index') index: number;

  @Output('itemRemove') remove = new EventEmitter();
  
  sub_category_id = 0;
  products;
  sub_categories;

  constructor(public cs: CategoryService) { }

  async ngOnInit() {
    console.log(this.index);
    this.sub_categories = await this.cs.getSubCategories();
  }

  emit() {
    this.remove.emit(this.index);
  }

  async getProducts() {
    console.log(this.sub_category_id);
    this.products = await this.cs.getSubCategoryProduct(this.sub_category_id);
  }

  test(value) {
    console.log(value);
    console.log('sub id ' + this.sub_category_id);
  }

}
