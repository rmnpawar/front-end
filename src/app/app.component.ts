import { Component } from '@angular/core';
import { AuthenticationService } from './Service/authentication.service';
import { NavigationStart, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { LoadingService } from './ux/loading.service';
import {fadeIn, fadeInAnimation} from '../app/animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation, fadeIn],

  host: {'[@routeAnimations]': ''},
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

  prepareRoute(outlet: RouterOutlet) {
    let data = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return data;
    // let num = Math.random();
    // return num;
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
