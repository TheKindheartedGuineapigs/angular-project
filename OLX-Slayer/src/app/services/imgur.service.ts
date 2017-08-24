import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';

class Options implements RequestOptionsArgs {
    url;
    method;
    headers;
    body;

    constructor(url, method, headers, body) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }
}


@Injectable()
export class ImgurService {
    private uploadUrl = 'https://api.imgur.com/3/image';
    private clientId = 'cb5cf831126a0dd';
    private clientSecret = 'fe9af1cd0aff2252637f0d0ef15253a946503819';
    constructor(private http: Http) {}

    uploadImg(img): Observable<any> {
        const headers = new Headers({'Authorization': 'Client-ID ' + this.clientId});

        const test = new Options(this.uploadUrl, 'POST', { 'Authorization': 'Client-ID ' + this.clientId}, img);    

        return this.http.post(this.uploadUrl, img, test);
    }
}
