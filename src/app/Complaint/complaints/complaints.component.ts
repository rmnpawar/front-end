import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  complaints;
  showModal = false;

  constructor(private service: ComplaintService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.allComplaints().subscribe(complaints => {
      this.complaints = complaints;
    })
  }

  closeComplaint(id: number) {
    this.service.closeComplaint(id).subscribe(res => {
      console.log("complaint closed");
      // this.ngOnInit();
    })
  }

  openDialog(path: string, id: number) {
    this.showModal = true;
    this.router.navigate([path, id], { relativeTo: this.route });
  }

}
