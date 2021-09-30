import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../Service/invoice.service';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingService } from '../../ux/loading.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices?;
  constructor(private service: InvoiceService, private router: Router, private loadingService: LoadingService) {
    // this.router.events.subscribe((routerEvent) => {
    //   if (routerEvent instanceof NavigationEnd) {
    //     this.ngOnInit();
    //   }
    // })
    this.loadingService.setStatus(true);
  }

  async ngOnInit() {
    this.updateInvoices();
  }

  private updateInvoices() {
    this.service.getAll().subscribe((invoices) => {
      this.invoices = invoices;
      this.loadingService.setStatus(false);
    });
  }
l
}
