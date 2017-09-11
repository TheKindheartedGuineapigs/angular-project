import { Advertisement } from './../models/advertisement';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdvertismentService {
    constructor(private http: Http) {}

    createAdvertisements (advert: Advertisement) {
        return this.http.post(`http://localhost:3000/api/advertisements`, advert);
    }
}
