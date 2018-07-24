import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandlerService {

    loginUnauthorized;

    loginError(error: HttpErrorResponse) {
        if (error.status === 401) {
            this.loginUnauthorized = true;
        }

    }

}