import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output('sidebardata') sidebardata = new EventEmitter();
  @Input('product') product;
  @Input('editing') editing;

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.sidebardata.emit("Data");
    console.log(this.product);
  }

}
