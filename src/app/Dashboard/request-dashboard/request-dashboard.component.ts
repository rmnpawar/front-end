import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../Service/request.service';
import { AssetService } from '../../Service/asset.service';

@Component({
  selector: 'asset-request-dashboard',
  templateUrl: './request-dashboard.component.html',
  styleUrls: ['./request-dashboard.component.scss']
})
export class RequestDashboardComponent implements OnInit {

  all_requests = undefined;
  displayDialog: boolean = false;

  available_assets;

  current_request = null;

  constructor(private rs: RequestService, private assetService: AssetService) { }

  ngOnInit(): void {
    this.rs.getAllRequests().subscribe(requests => {
      this.all_requests = requests;
      console.log(this.all_requests);
    });
  }

  openDialog(id: number, request_id: number) {

    this.current_request = request_id;

    this.assetService.assetInCategory(id).subscribe(assets => {
      this.available_assets = assets;
      this.displayDialog = true;
    });
  }

  closeDialog() {
    this.displayDialog = false;
    this.current_request = 0;
  }

  approveRequest(asset_id: number) {
    this.assetService.approveIssue(this.current_request, asset_id).subscribe(response => {
      if (response == 1)
        console.log("asset Issued");
    })
  }

}
