import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// A fake API on the internets.
const config = require('../../../../package.json').config;
const BASE_URL = config.baseURL + 'items';

@Injectable()
export class InfoService {
    constructor(private http: Http) {}

    getInfo() {
        return this.http.get(BASE_URL + '/info')
            .map(resp => resp.json());
    }
}