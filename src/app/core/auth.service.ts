import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandlerService } from './errorHandler.service';
import { throwError } from '../../../node_modules/rxjs';

@Injectable()
export class AuthService {
    token;
    private userType;

    constructor(
        private http: HttpClient,
        private router: Router,
        private errorHandler: ErrorHandlerService
    ) { }

    getUserType() {
        return this.userType;
    }

    login(username: string, password: string) {
        this.http.post('http://localhost:1122/login', { username: username, password: password }).subscribe((res) => {
            const response = JSON.parse(JSON.stringify(res));
            this.token = response.token;
            this.userType = response.usertype;
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
        });
    }

    logout() {
        this.token = "";
        this.userType = "";
        this.router.navigate(['/login']);
    }

    addEmployee(employee: any) {
        this.http.post("http://localhost:1122/addemployee", employee).subscribe(result => { console.log(result); })
    }
}
