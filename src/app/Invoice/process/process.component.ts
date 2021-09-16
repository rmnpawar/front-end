import { Component, OnInit } from '@angular/core';
import { InvoiceItem } from '../../Models/invoiceitem';
import { InvoiceService } from '../../Service/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  currentInvoice;

  items = [{}];

  constructor(private service: InvoiceService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.currentInvoice = await this.service.getInvoiceDetails(id);
  }


  addItem() {
    this.items.push({});
  }

  removeItem(index) {
    console.log(this.currentInvoice.items[index]);
    this.items.splice(index, 1);
    console.log(index);
  }

  pushItems() {
    this.service.addInvoiceItems(this.currentInvoice.id, this.items).then(() => {
      this.router.navigateByUrl("invoices");
    });
  }
}
