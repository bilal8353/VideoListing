import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';

@Injectable()
export class HomeService {

  constructor(private httpService: HttpService) { }

  public getAllVideoDetails(params, cbSuccess, cbError) {
    let url = `data/API/CONTENTLISTINGPAGE-PAGE${params.pageNo}.json`;
    this.httpService.get(url, params)
      .subscribe(result => {
        cbSuccess(result)
      },
        error => cbError(error)
      );
  }

}

