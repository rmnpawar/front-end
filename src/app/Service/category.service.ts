import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthorizedHttpService } from '../authorized-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  client: AuthorizedHttpService;

  base_url: string = "http://localhost:8000/api/categories/";
  base_url_sub_category = "http://localhost:8000/api/sub_categories/"

  constructor(private auth: AuthenticationService) {
    // http.setToken(auth.getToken());
   }

  public getAllCategories() {
    return this.auth.http.Get(this.base_url);
  }

  public create(value: Object) {
    return this.auth.http.Post(this.base_url, value);
  }

  public update(category: Object, id: number) {
    console.log(category);
    return this.auth.http.Put(this.base_url + `${id}`, category);
  }

  public delete(id: number) {
    return this.auth.http.Delete(this.base_url + id);
  }

  public getSubCategories() {
    return this.auth.http.Get(this.base_url_sub_category);
  }

  public getSubCategoryProduct(sub_category_id) {
    return this.auth.http.Get(this.base_url_sub_category + sub_category_id + "/products");
  }

  public createSubCategory(value) {
    return this.auth.http.Post(this.base_url_sub_category, value);
  }

  async getSubCategoriesForCategory(category) {
    return await this.auth.http.Get(this.base_url + category + '/sub_categories').toPromise();
  }

  async getAllConsumables() {
    return await this.auth.http.Get<Array<any>>(this.base_url + "allconsumables").toPromise();
  }

}
