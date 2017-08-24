import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class ImgurService {
    private uploadUrl = 'https://api.imgur.com/3/image';
    private clientId = 'cb5cf831126a0dd';
    private clientSecret = 'fe9af1cd0aff2252637f0d0ef15253a946503819';
    constructor(private http: Http) {}

    uploadImg(img): Observable<any> {
        const headers = new Headers({'Authorization': 'Client-ID ' + this.clientId});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.uploadUrl, img, options);
    }
}
