import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../Service/sidebar.service';
import { ProductService } from '../../Service/product.service';
import { LoadingService } from '../../ux/loading.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products;

  constructor(private sidebBar: SidebarService, private productService: ProductService, private loadingService: LoadingService) {
    this.loadingService.setStatus(true);
  }
  
  async ngOnInit() {
    this.sidebBar.sendItems([{"name": "Product", "link": "/products"}]);
    this.products = await this.productService.getProducts();
    console.log(this.products);
    this.loadingService.setStatus(false);
  }
  
  ngOnDestroy(): void {
    this.sidebBar.sendItems([]);
  }
}
