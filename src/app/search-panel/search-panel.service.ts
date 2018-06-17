import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../common/http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchPanelService {

  constructor(private httpService: HttpService) { }

  baseUrl = environment.baseUrl;

  public searchVideoList(params, cbSuccess, cbError) {

    let url1 = `${this.baseUrl}CONTENTLISTINGPAGE-PAGE1.json`;
    let url2 = `${this.baseUrl}CONTENTLISTINGPAGE-PAGE2.json`;
    let url3 = `${this.baseUrl}CONTENTLISTINGPAGE-PAGE3.json`;

    Observable.forkJoin(
      this.httpService.get(url1, params),
      this.httpService.get(url2, params),
      this.httpService.get(url3, params),
    ).subscribe(result => {
      let dataList = [...result[0].page['content-items'].content,
      ...result[1].page['content-items'].content,
      ...result[2].page['content-items'].content];

      dataList = dataList.filter((element) => {
        return element.name.toLowerCase().indexOf(params.query.toLowerCase()) >= 0;
      });
      cbSuccess(dataList)
    },
      error => cbError(error)
    );
  }

}
