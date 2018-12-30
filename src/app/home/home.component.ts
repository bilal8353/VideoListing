import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeService } from './home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})

export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private homeService: HomeService, private router: Router) { }
  pageNo = 1;
  totalContentSize = 1;
  videoGenre;
  busyLoadingData: boolean = false;
  showSearchPanel:boolean = false;
  videoList = [];

  ngOnInit() {
        this.getVideoDetails();
  }

  ngAfterViewInit() {
    window.scroll(0,0);
  }

  public getVideoDetails() {
    let params = {
      'pageNo': this.pageNo
    };
    if (!this.busyLoadingData && this.videoList.length < Number(this.totalContentSize)) {
      this.homeService.getAllVideoDetails(params, (respData: any) => {
        this.videoGenre = respData.page.title;
        this.totalContentSize = respData.page['total-content-items'];
        this.videoList = this.videoList.concat(respData.page['content-items'].content);
        this.pageNo++;
        this.busyLoadingData = false;
      },
        (errData: any) => {
          this.busyLoadingData = false;
        });
    }
  }

  public naviagteToTable() {
    this.router.navigate(['table']);
  }

  public naviagteToSearch() {
    this.router.navigate(['search']);
  }
}

