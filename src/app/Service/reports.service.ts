import { Injectable } from '@angular/core';
import { AuthorizedHttpService } from '../authorized-http.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  base_url = "http://localhost:8000/api/";

  constructor(private auth: AuthorizedHttpService) { }

  getConsumableHistory(parameters?: {}) {
    return this.auth.Get(this.base_url + 'consumables/history', {}, parameters);
  }
}
