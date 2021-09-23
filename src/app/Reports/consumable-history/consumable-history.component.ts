import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';

@Component({
  selector: 'app-consumable-history',
  templateUrl: './consumable-history.component.html',
  styleUrls: ['./consumable-history.component.scss']
})
export class ConsumableHistoryComponent implements OnInit {

  requests: any[];

  constructor(private rs: RequestService) { }

  ngOnInit(): void {

  }

}
