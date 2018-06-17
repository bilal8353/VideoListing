import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private httpService: HttpService) { }

  baseUrl = environment.baseUrl;

  public getAllVideoDetails(params, cbSuccess, cbError) {
    let url = `${this.baseUrl}CONTENTLISTINGPAGE-PAGE${params.pageNo}.json`;
    this.httpService.get(url, params)
      .subscribe(result => {
        cbSuccess(result)
      },
        error => cbError(error)
      );
  }

}

