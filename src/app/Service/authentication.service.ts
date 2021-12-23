import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators'
import { AuthorizedHttpService } from '../authorized-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  base_url: string = 'user';
  
  user = null;
  isAuthenticated: Boolean = false;
  api_token: string = '';

  user$;


  constructor(public http: AuthorizedHttpService, public router: Router) {
    this.api_token = localStorage.getItem('token');

    if (this.api_token) {
      http.setToken(this.getToken());
      this.getUser();
    }
   }

  authenticated() {
    return this.isAuthenticated;
  }

  getUser() {
    this.http.Get(this.base_url)
    .subscribe(res => {
      this.user = res;
      this.api_token = this.getToken();
      this.isAuthenticated = true;

    });
  }

  login(credentials: {email: string, password: string}) {
    return this.http.http.post(this.base_url + '/login', credentials)
    .pipe(map((res => {
      let response: any = res;

      if (response.data == "Invalid details") return false;
      localStorage.setItem('token', response.api_token);
      this.http.setToken(this.getToken());
      this.getUser();
      this.isAuthenticated = true;
      return true;
    })));
  }

  logout() {
    
    this.http.Get(this.base_url + '/logout')
    .subscribe(res => {
      this.user = this.user$ = null;
      this.isAuthenticated = false;
  
      localStorage.removeItem('token');
      this.http.setToken(null);
      this.router.navigate(['/']);
    });

    
  }

  getToken() {
    return localStorage.getItem('token');
  }

  async listUsers() {
    return await this.http.Get(this.base_url + '/list').toPromise();
  }

}
