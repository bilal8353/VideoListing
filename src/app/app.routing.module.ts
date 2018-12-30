import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpService } from './common/http.service';

import { HomeComponent } from './home/home.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: SortingTableComponent },
  { path: 'search', loadChildren: './search-panel/search-panel.module#SearchPanelModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [HttpService]
})

export class AppRoutingModule { }
