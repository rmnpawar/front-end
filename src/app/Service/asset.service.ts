import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private auth: AuthenticationService) { }

  async getUserAssets() {
    return await this.auth.http.Get("http://localhost:8000/api/assets").toPromise();
  }

  async getAllAssets() {
    return await this.auth.http.Get("http://localhost:8000/api/assets").toPromise();
  }

  async getCurrentAssets() {
    return await this.auth.http.Get("http://localhost:8000/api/assets/list").toPromise();
  }
}
