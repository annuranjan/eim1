import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RemoteRequestService {

    constructor(private http: HttpClient) { }

    get(url: string, options?: any): Observable<any> {
        return this.http.get(url, options);
    }

    put(url: string, body: any, options?: any): Observable<any> {
        return this.http.put(url, body, options);
    }

    post(url: string, body: any, options?: any): Observable<any> {
        return this.http.post(url, body, options);
    }
    delete(url: string, options: any): Observable<any> {
        return this.http.delete(url, options);
    }

}
