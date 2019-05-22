import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Requester} from '../apirequester/requester';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MovieService extends Requester {

    constructor(http: HttpClient) {
        super(http);
        this.resource = '/movies';
    }

}
