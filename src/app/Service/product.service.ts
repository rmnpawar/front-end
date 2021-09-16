import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products;
  base_url = "http://localhost:8000/api/products";

  constructor(private auth: AuthenticationService) { 
    
  }

  async getProducts() {
    if (this.products) return this.products;

    this.products = await this.auth.http.Get(this.base_url).toPromise();
    return this.products;
  }

  getProductById(id: number) {
    for (const product of this.products) {
      if (product.id == id) {
        return product;
      }
    }
  }

}
