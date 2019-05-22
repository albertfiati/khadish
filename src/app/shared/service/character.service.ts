import {Injectable} from '@angular/core';
import {Requester} from '../apirequester/requester';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CharacterService extends Requester {

    constructor(http: HttpClient) {
        super(http)
        this.resource = '/characters'
    }

}
