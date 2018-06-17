import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService {

    headers: Headers;
    options: RequestOptions;
    url: string;

    constructor(private http: Http) {
        this.options = new RequestOptions({ headers: this.initializeHeader() });
    }

    get(url: string, param: any): Observable<any> {
        //this.spinnerService.show(); 
        this.options = new RequestOptions({ headers: this.initializeHeader(), search: param });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getX(url: string, param: any): Observable<any> {
        //this.spinnerService.show(); 
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        this.options = new RequestOptions({ headers: this.initializeHeader(), search: params });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url: string, param: any): Observable<any> {
        //this.spinnerService.show(); 
        let body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private initializeHeader() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return headers;
    };

    private extractData(res: Response) {       
        //this.spinnerService.hide(); 
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        //this.spinnerService.hide(); 
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        //this.toasterService.showToaster('error', 'Oops!! An error occurred', errMsg);
        //this.loaderService.displayLoader(false);
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
