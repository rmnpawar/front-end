import { Component } from '@angular/core';
import { AuthenticationService } from './Service/authentication.service';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { LoadingService } from './ux/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  loading = false;
  user;

  constructor(public auth: AuthenticationService, private router: Router, private loadingService: LoadingService) {
    this.loadingService.getSubject().subscribe((status) => {
      this.loading = status;
    })
  }

  getUser() {
    this.user = this.auth.getUser();
  }

  logger(data) {
    console.log(data);
  }

  get authenticated() {
    return this.auth.authenticated();
  }
}
