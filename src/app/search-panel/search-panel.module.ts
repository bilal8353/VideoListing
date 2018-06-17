import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoTileModule } from '../video-tile/video-tile.module';

const routes: Routes = [
  { path: '', component: SearchPanelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VideoTileModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SearchPanelComponent
  ]
})
export class SearchPanelModule { }
