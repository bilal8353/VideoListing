import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTileComponent } from './video-tile.component';
import { OnErrorSrcDirective } from '../common/on-error-src.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoTileComponent,
    OnErrorSrcDirective
  ],
  exports: [VideoTileComponent]
})
export class VideoTileModule { }
