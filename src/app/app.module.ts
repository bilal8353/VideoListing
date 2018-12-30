import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { VideoTileComponent } from './video-tile/video-tile.component';
import { HomeComponent } from './home/home.component';
import {VideoTileModule} from './video-tile/video-tile.module';
import { WebappTableComponent } from './webapp-table/webapp-table.component';
import { OrderByPipe } from './common/orderBy.pipe';
import { SortingTableComponent } from './sorting-table/sorting-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebappTableComponent,
    OrderByPipe,
    SortingTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    VideoTileModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
