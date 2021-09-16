import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../Service/invoice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  invoice;
  currentItem = {};
  showModal = false;
  iterations = [];


  constructor(private service: InvoiceService, private route: ActivatedRoute) { }

  async ngOnInit() {
    let invoice_id = this.route.snapshot.params['id'];
    this.invoice = await this.service.getInvoiceDetails(invoice_id);
  }

  doNothing(event) {
    event.stopPropagation();
  }

  close() {
    this.showModal = false;
  }

  showDialog(item) {
    this.showModal = true;
    this.currentItem = item;
  }

  range(number) {
    return [...Array(number).keys()];
  }

  receiveItems() {

  }


}
