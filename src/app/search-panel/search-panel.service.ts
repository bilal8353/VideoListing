import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../common/http.service';

@Injectable()
export class SearchPanelService {

  constructor(private httpService: HttpService) { }

  public searchVideoList(params, cbSuccess, cbError) {

    let url1 = `data/API/CONTENTLISTINGPAGE-PAGE1.json`;
    let url2 = `data/API/CONTENTLISTINGPAGE-PAGE2.json`;
    let url3 = `data/API/CONTENTLISTINGPAGE-PAGE3.json`;

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
