import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss'],
  providers: []
})
export class VideoTileComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() videoList;

  ngOnInit() {

  }

  ngAfterViewInit() {
    window.scroll(0,0);
  }

}
