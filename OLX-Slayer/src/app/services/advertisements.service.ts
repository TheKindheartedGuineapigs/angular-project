import { Advertisement } from './../models/advertisement';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AdvertisementService {
    private apiAdress: string;
    private advertisementDir: string;
    constructor(private http: Http) {
        this.apiAdress = environment.apiConfig.apiAddress;
        this.advertisementDir = environment.apiConfig.advertisementDir;
     }

    createAdvertisements(advertisement: Advertisement) {
        return this.http.post(`${this.apiAdress}/${this.advertisementDir}`, advertisement);
    }

    findById(id: string) {
        return this.http.get(`${this.apiAdress}/${this.advertisementDir}/${id}`);
    }

    // findByTitle(query: string) {
    //     const res = this.http.get(`http://localhost:3000/api/advertisements`);
    //     console.log(res);
    // }
    getAllAdvertisements() {
        return this.http.get(`${this.apiAdress}/${this.advertisementDir}`);
    }
}
