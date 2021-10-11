import { Injectable } from '@angular/core';
import { AuthorizedHttpService } from '../authorized-http.service';
import { AuthenticationService } from './authentication.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  base_url = "http://localhost:8000/api/";

  constructor(private auth: AuthorizedHttpService) { }

  getConsumableHistory(parameters?: {}) {
    let httpParameters = new HttpParams(parameters);
    return this.auth.Get(this.base_url + 'consumables/history', {params: httpParameters});
  }

  getConsumableSummary() {
    return this.auth.Get(this.base_url + 'consumables/summary');
  }

  getConsumables() {
    return this.auth.Get(this.base_url + 'consumables');
  }
}
