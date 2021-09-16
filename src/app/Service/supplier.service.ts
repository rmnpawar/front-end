import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliers;
  base_url: string = "http://localhost:8000/api/suppliers";

  constructor(private auth: AuthenticationService) { }

  async getAll() {
    if (this.suppliers) {
      return this.suppliers;
    }

    this.suppliers = await this.auth.http.Get(this.base_url).toPromise();
    return this.suppliers;
  }

  update(supplier) {
    return this.auth.http.Put(this.base_url + `/${supplier.id}`, supplier);
  }

  create(supplier) {
    return this.auth.http.Post(this.base_url, {"name": supplier});
  }

  delete(id) {
    return this.auth.http.Delete(this.base_url + `/${id}`);
  }
}
