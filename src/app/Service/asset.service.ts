import { Injectable } from '@angular/core';
import { AuthorizedHttpService } from '../authorized-http.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private base_url = "assets/"

  constructor(private http: AuthorizedHttpService) { }

  async getUserAssets() {
    return await this.http.Get(this.base_url).toPromise();
  }

  async getAllAssets() {
    return await this.http.Get(this.base_url).toPromise();
  }

  async getCurrentAssets() {
    return await this.http.Get(this.base_url + "list").toPromise();
  }

  public assetInCategory(id: number) {
    console.log(id);
    return this.http.Get(this.base_url + `in_category/${id}`);
  }

  public approveIssue(request_id, asset_id) {
    return this.http.Post(this.base_url + 'issue_against_request', {"asset_id": asset_id, "request_id": request_id});
  }

  public assetHistory(id: number) {
    return this.http.Get(this.base_url + id + '/history');
  }

  public repairHistory(id: number) {
    return this.http.Get(this.base_url + id + '/repairs');
  }
}
