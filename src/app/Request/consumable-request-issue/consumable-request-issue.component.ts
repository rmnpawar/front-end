import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';

@Component({
  selector: 'app-consumable-request-issue',
  templateUrl: './consumable-request-issue.component.html',
  styleUrls: ['./consumable-request-issue.component.scss']
})
export class ConsumableRequestIssueComponent implements OnInit {

  constructor(private rs: RequestService) { }

  ngOnInit(): void {
  }

}
