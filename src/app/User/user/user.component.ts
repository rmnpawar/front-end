import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user;
  test = "Name";


  constructor(public auth: AuthenticationService) {
    // auth.getUser()
    // .subscribe(us => {
    //   this.user = us;
    // });
   }

  ngOnInit(): void {
  }

}
