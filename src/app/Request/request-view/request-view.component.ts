import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.scss']
})
export class RequestViewComponent implements OnInit {

  @Input('request') request;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.request);
  }

}
