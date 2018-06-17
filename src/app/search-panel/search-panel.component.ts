import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchPanelService } from './search-panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  providers: [SearchPanelService]
})
export class SearchPanelComponent implements OnInit {

  constructor(private searchPanelService: SearchPanelService, private router: Router) { }

  queryField: FormControl = new FormControl();
  videoList = [];

  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(query => {
        let params = { 'query': (query != '') ? query : '*' };
        this.searchPanelService.searchVideoList(params, (respData: any) => {
          this.videoList = respData;
        },
          (errData: any) => {

          })
      })
  }

  public navigateToHome() {
    this.router.navigate(['home']);
  }

}
