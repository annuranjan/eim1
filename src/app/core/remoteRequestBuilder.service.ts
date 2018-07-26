import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RemoteRequestService } from "./remoteRequest.service";

export interface Employee {
    firstname: string,
    middlename: string,
    lastname: string,
    email: string,
    domainname: string,
}

@Injectable()
export class RemoteRequestBuilderService {

    base = "http://localhost:1122/";
    empBase = this.base + "employees/";

    constructor(private remoteReq: RemoteRequestService) { }

    getAllEmp(): Observable<any> {
        return this.remoteReq.get(this.empBase);
    }

    addAnEmp(body: Employee): Observable<any> {
        const url = this.empBase + "addemployee/";
        return this.remoteReq.post(url, body);
    }

    fetchAnEmp(empCode: number): Observable<any> {
        const url = this.empBase + empCode;
        return this.remoteReq.get(url);
    }

    updateAnEmp(empCode: number, body: Employee) {
        const url = this.empBase + empCode;
        return this.remoteReq.put(url, body);
    }

    removeAnEmp(empCode: number) {
        const url = this.empBase + empCode + "/delete";
        return this.remoteReq.put(url, {});
    }

    login(username: string, password: string) {
        const url = this.base + "login/";
        return this.remoteReq.post(url, { username: username, password: password });
    }
}
                        // get(url: string, options?: any): Observable<any> {
                        //     return this.http.get(url, options);
                        // }

                        // put(url: string, body: any, options?: any): Observable<any> {
                        //     return this.http.put(url, body, options);
                        // }

                        // post(url: string, body: any, options?: any): Observable<any> {
                        //     return this.http.post(url, body, options);
                        // }
                        // delete(url: string, options: any): Observable<any> {
                        //     return this.http.delete(url, options);
                        // }
                        // //Controllers for Employees CRUD Operations
                        // router.get("/employees", empController.getAllEmployees);
                        // router.post("/employees/addemployee", empController.addEmployee);
                        // router.get("/employees/:id", empController.getEmployeeById);

                        // router.put("/employees/:id", empController.updateEmployee);
                        // //Remove Employee
                        // router.put("/employees/:id/delete", empController.removeEmployee);