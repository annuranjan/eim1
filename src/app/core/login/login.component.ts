import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit/*, OnDestroy */ {
  // ErrorSub: Subscription;
  loginForm: FormGroup;
  constructor(private authServ: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authServ.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
  }

  // ngOnDestroy() {
  // this.ErrorSub.unsubscribe();
  // }
}
