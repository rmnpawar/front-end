import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../Service/sidebar.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(sideBar: SidebarService) { }

  ngOnInit(): void {
  }

}
