import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';
import { ComplaintService } from 'src/app/Service/complaint.service'

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.scss']
})
export class CreateComplaintComponent implements OnInit {
  assets;

  constructor(private service: ComplaintService, private assetService: AssetService, private router: Router) { }

  ngOnInit(): void {
    this.assetService.getUserAssets().then(assets => {
      this.assets = assets;
    })
  }

  createComplaint(value: {}) {
    console.log(value);
    this.service.createComplaint(value).subscribe(res => {
      console.log(res);
      this.router.navigate(["/complaints"]);
    })
  }

}
