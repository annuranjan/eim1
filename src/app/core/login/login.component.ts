import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RemoteRequestBuilderService } from '../remoteRequestBuilder.service';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userType;
  token;
  wrongCredentials;

  constructor(private authServ: AuthService,
    private reqBuilder: RemoteRequestBuilderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onFormSubmit() {
    console.log(this.loginForm);
    this.reqBuilder.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe((res) => {
      const response = JSON.parse(JSON.stringify(res));
      this.token = response.token;
      this.userType = response.usertype;
      this.authServ.setUserType(response.usertype);
      console.log("Login for usertype: \"" + this.userType + "\" is successful");
      switch (this.userType) {
        case ("admin"): {
          console.log("Navigating to /admin");
          this.router.navigate(["/admin"]);
          break;
        }
        case ("manager"): {
          console.log("Navigating to /manager");
          this.router.navigate(["/manager"]);
          break;
        }
        case ("employee"): {
          console.log("Navigating to /employee");
          this.router.navigate(["/employee"]);
          break;
        }
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.error.message === "Wrong username/password!") {
          this.wrongCredentials = err.error.message;
        }
        this.loginForm.reset();
      }
    );
  }
}
