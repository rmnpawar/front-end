import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../Service/request.service';

@Component({
  selector: 'consumable-request-view',
  templateUrl: './consumable-request-view.component.html',
  styleUrls: ['./consumable-request-view.component.scss']
})
export class ConsumableRequestViewComponent implements OnInit {

  displayDialog = false;
  current_request_id;
  consumable_requests = undefined;

  constructor(private rs: RequestService) { }

  ngOnInit(): void {
    this.rs.getConsumableRequests().subscribe(requests => {
      this.consumable_requests = requests;
    });
  }

}
