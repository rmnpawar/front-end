import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../Service/brand.service';
import { CategoryService } from '../../Service/category.service';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  product;
  brands = [];
  sub_categories = {};
  all_consumables = [];
  selected;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cs: CategoryService,
    private bs: BrandService) {

    
   }

  async ngOnInit() {
    this.brands = this.bs.getAll();
    this.cs.getSubCategories().then(sub_categories => {
      this.sub_categories = sub_categories;
    });

    this.all_consumables = await this.cs.getAllConsumables();
    
    let id = this.route.snapshot.params['id'];

    if (id) {
      this.product = this.productService.getProductById(id);
    }
    console.log(this.product);
    this.filterAvailable();
  }

  filterAvailable() {
    //let availableId = this.product.consumables.map(item => { return item.id });
    let allId = this.all_consumables.map(item => { return item.id});
    let currentId = this.product.consumables.map(item => { return item.id});

    currentId.forEach(element => {
      this.all_consumables.splice(allId.indexOf(element),1);
    });

    console.log(this.all_consumables);
  }

  onClickAvailableConsumable(consumable) {
    this.transferConsumable(this.all_consumables, this.product.consumables, consumable);
  }

  onClickCurrentConsumable(consumable) {
    this.transferConsumable(this.product.consumables, this.all_consumables, consumable);
  }

  transferConsumable(sourceArray: any[], destinationArray: any[], consumable) {
    destinationArray.push(consumable);
    sourceArray.splice(sourceArray.indexOf(consumable), 1);
  }

}