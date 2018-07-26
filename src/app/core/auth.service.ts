import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token;
    private userType;

    constructor(
        private router: Router,
    ) { }

    getUserType() {
        return this.userType;
    }
    setUserType(userType: string) {
        this.userType = userType;
        console.log("usertype set to : " + this.userType);
    }

    logout() {
        this.token = "";
        this.userType = "";
        this.router.navigate(['/login']);
    }

}
