import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  logOutProcessing: Boolean =  false;

  constructor(private auth: AuthenticationService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('navbar changed');
  }

  ngOnInit(): void {
  }

  get user() {
    return this.auth.user;
  }

  logout() {
    this.logOutProcessing = true;
    this.auth.logout();
  }

}
