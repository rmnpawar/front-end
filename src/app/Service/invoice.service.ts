import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  base_url = "http://localhost:8000/api/invoices";

  constructor(private auth: AuthenticationService) { }

  getAll() {
    return this.auth.http.Get(this.base_url);
  }

  createInvoice(invoice) {
    this.auth.http.Post(this.base_url, invoice);
  }

  async getInvoiceDetails(invoice_id: number) {
    return await this.auth.http.Get(this.base_url + `/${invoice_id}`).toPromise();
  }

  async addInvoiceItems(invoice_id: number, items) {
    return this.auth.http.Post(this.base_url + `/${invoice_id}/items`, {"items": items}).toPromise();
  }
}
