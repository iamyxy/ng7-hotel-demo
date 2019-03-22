import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    // if you want to use the service in template, use public here
    public authService: AuthService,
    private  router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(res => {
        if (res.success) {
          this.authService.user = null;
          // remove user from user storage
          localStorage.removeItem('user');
          alert('logout success');
          this.router.navigate(['/login']);
        }
      });
  }

}
