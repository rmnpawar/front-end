import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-complaint-actions',
  templateUrl: './complaint-actions.component.html',
  styleUrls: ['./complaint-actions.component.scss']
})
export class ComplaintActionsComponent implements OnInit {
  id: string;
  actions;
  constructor(private route: ActivatedRoute, private service: ComplaintService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.complaintActions(this.id).subscribe(actions => {
      this.actions = actions;
    })
  }

}
