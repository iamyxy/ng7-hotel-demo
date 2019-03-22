import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(value) {
    this.authService.login(value)
      .subscribe(res => {
        if (res.success) {
          this.authService.user = res.user;
          // save the user in the local storage
          // **** JSON.stringify important method *****
          const userString = JSON.stringify(res.user);
          localStorage.setItem('user', userString);
          alert('login success!');
          this.router.navigate(['/dashboard']);
        }
      });
  }

}
