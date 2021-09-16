import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../Service/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  suppliers;
  currSupplier = {};
  showDialog = false;
  message = null;

  constructor(private ss: SupplierService) { 
  }

  openDialog(supplier) {
    this.currSupplier = supplier;
    this.showDialog = true;
  }

  doNothing(event) {
    event.stopPropagation();
  }

  async ngOnInit() {
    this.suppliers = await this.ss.getAll();
  }

  close() {
    this.showDialog = false;
    this.currSupplier = null;
    this.message = null;
  }

  updateSection() {
    this.ss.update(this.currSupplier)
    .subscribe(res => {
      this.message = "Updated successfully";
    })
  }

  createSection(name) {
    this.ss.create(name).subscribe(res => true);
  }

  deleteSection(id) {
    this.ss.delete(id).subscribe(res => true);
  }
 
}
