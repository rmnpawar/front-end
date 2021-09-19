import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private base_url = "http://localhost:8000/api/assets/"

  constructor(private auth: AuthenticationService) { }

  async getUserAssets() {
    return await this.auth.http.Get(this.base_url).toPromise();
  }

  async getAllAssets() {
    return await this.auth.http.Get(this.base_url).toPromise();
  }

  async getCurrentAssets() {
    return await this.auth.http.Get("http://localhost:8000/api/assets/list").toPromise();
  }

  public assetInCategory(id: number) {
    console.log(id);
    return this.auth.http.Get(this.base_url + `in_category/${id}`);
  }

  public approveIssue(request_id, asset_id) {
    return this.auth.http.Post(this.base_url + 'issue_against_request', {"asset_id": asset_id, "request_id": request_id});
  }
}
