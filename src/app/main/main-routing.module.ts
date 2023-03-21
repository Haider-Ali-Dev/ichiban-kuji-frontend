import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IchibanHomeComponent } from './ichiban-home/ichiban-home.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { BuyPointsComponent } from './buy-points/buy-points.component';
import { BuyPointsViewComponent } from './buy-points-view/buy-points-view.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ichibankuji',
    component: IchibanHomeComponent
  },
  {
    path: 'product/:id',
    component: ViewListingComponent
  },
  {
    path: 'payment/points',
    component: BuyPointsComponent
  },
  {
    path: 'buy/points',
    component: BuyPointsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
