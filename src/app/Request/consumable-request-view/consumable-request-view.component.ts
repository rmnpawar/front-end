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
  available_consumables = undefined;

  constructor(private rs: RequestService) { }

  ngOnInit(): void {
    this.rs.getConsumableRequests().subscribe(requests => {
      this.consumable_requests = requests;
    });
  }

  openDialog(sub_category_id: number, request_id: number) {
    this.current_request_id = request_id;

    console.log(request_id);

    this.rs.getAvailableConsumables(sub_category_id).subscribe(consumables => {
      this.available_consumables = consumables;
      this.displayDialog = true;
    });
  }

  closeDialog() {
    this.displayDialog = false;
    this.current_request_id = 0;
  }

  approveRequest(consumable_id: number) {
    console.log(this.current_request_id, consumable_id);
    // this.rs.approveConsumableRequest(this.current_request_id, consumable_id).subscribe(response => {
    //   if (response == 1) {
    //     console.log("request approved");
    //   }
    // });
  }

}
