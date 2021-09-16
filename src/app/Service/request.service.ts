import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private auth: AuthenticationService, private cs: CategoryService) { }

  getCategories() {
    return this.cs.getAllCategories();
  }

  async getSubCategories(category) {
    return await this.cs.getSubCategoriesForCategory(category);
  }
}
