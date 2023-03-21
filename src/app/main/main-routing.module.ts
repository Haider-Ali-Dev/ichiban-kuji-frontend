import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IchibanHomeComponent } from './ichiban-home/ichiban-home.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { BuyPointsComponent } from './buy-points/buy-points.component';
import { BuyPointsViewComponent } from './buy-points-view/buy-points-view.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProfileComponent } from './profile/profile.component';
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
    path: 'payment/points/:id',
    component: BuyPointsComponent
  },
  {
    path: 'buy/points',
    component: BuyPointsViewComponent
  },
  {
    path: 'buy/product/open',
    component: BuyProductComponent
  },
  {
    path: 'user/profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
