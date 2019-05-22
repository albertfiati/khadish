import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {environment} from "environments/environment";
import {HttpClient} from "@angular/common/http";

export abstract class Requester {
    public baseUrl: string
    protected resource: string

    public constructor(private http: HttpClient) {
        this.baseUrl = environment.baseurl;
    }

    public fetch(): Observable<any> {
        return this.http.get(this.baseUrl + this.resource,).map((response) => response);
    }

    public create(data: Object): Observable<any> {
        return this.http.post(this.baseUrl + this.resource, data).map((response) => response);
    }
}
