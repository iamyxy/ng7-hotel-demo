import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  // this way is redundant
  // uFC: FormControl;
  // pFc: FormControl;
  // cpFC: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this way is redundant
    // this.uFC = new FormControl('test'); // default value test
    // this.pFc = new FormControl('test');
    // this.cpFC = new FormControl('test');
    // this.registerFormGroup = new FormGroup({
    //   username: this.uFC,
    //   password: this.pFc,
    //   confirm_password: this.cpFC
    // });
    this.registerFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this.fb.group({
        password: '',
        confirm_password: ''
      }, {validator: [this.passwordMatchValidator]})
    });
  }
  submit(value) {
    const user = {
      username: value.username,
      password: value.passwordGroup.password
      // 也可以在html submit()中不穿入参数，在这里使用this.registerFormGroup.value.username
    };
      this.authService.register(user)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/login']);
          }
        });
  }
  passwordMatchValidator(passwordGroup: FormGroup) {
    const {password, confirm_password} = passwordGroup.value;
    if (password === confirm_password) {
      return null;
    } else {
      return {passwordMatch: 'password are not match'};
    }
  }
}
