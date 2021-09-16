import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthorizedHttpService } from '../authorized-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  client: AuthorizedHttpService;

  base_url: string = "http://localhost:8000/api/categories/";

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
    return this.auth.http.Delete(this.base_url + `/${id}`);
  }

  async getSubCategories() {
    return await this.auth.http.Get("http://localhost:8000/api/sub_categories").toPromise();
  }

  async getSubCategoryProduct(sub_category_id) {
    return await this.auth.http.Get("http://localhost:8000/api/sub_categories/" + sub_category_id + "/products").toPromise();
  }

  async getSubCategoriesForCategory(category) {
    return await this.auth.http.Get(this.base_url + category + '/sub_categories').toPromise();
  }

  async getAllConsumables() {
    return await this.auth.http.Get<Array<any>>(this.base_url + "allconsumables").toPromise();
  }

}
