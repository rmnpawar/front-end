import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  invalidLogin: Boolean = false;
  loading = false;

  returnUrl;

  constructor(
    public auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  login(credentials) {
    this.loading = true;
    this.auth.login(credentials)
    .subscribe(res => {
      if (res) {
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.loading = false;
        this.invalidLogin = true;
      }
    });
    
  }

}
