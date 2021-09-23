import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private base_url = "http://localhost:8000/api/requests/"

  constructor(private auth: AuthenticationService, private cs: CategoryService) { }

  public getCategories() {
    return this.cs.getAllCategories();
  }

  public getSubCategories(category) {
    return this.cs.getSubCategoriesForCategory(category);
  }

  public createAssetRequest(value) {
    return this.auth.http.Post(this.base_url, value);
  }

  public createConsumableRequest(value) {
    return this.auth.http.Post(this.base_url + 'consumable/create', value);
  }

  public getAllRequests() {
    return this.auth.http.Get(this.base_url);
  }

  public getConsumableRequests() {
    return this.auth.http.Get(this.base_url + 'consumables');
  }

  public getAvailableConsumables(id: number) {
    return this.auth.http.Get('http://localhost:8000/api/consumables/for_id/' + id);
  }

  public approveConsumableRequest($request_id, $consumable_id) {
    return this.auth.http.Post(this.base_url + 'consumable/approve', {'request_id':$request_id,'consumable_id': $consumable_id});
  }



  public getConsumableHistory() {
    return this.auth.http.Get('http://localhost:8000/api/consumables/history');
  }
}
