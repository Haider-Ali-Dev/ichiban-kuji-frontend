import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { IchibanHomeComponent } from './ichiban-home/ichiban-home.component';
import { HexaHomeComponent } from './hexa-home/hexa-home.component';
import { FilterComponent } from './filter/filter.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { BuyPointsComponent } from './buy-points/buy-points.component';
import { BuyPointsViewComponent } from './buy-points-view/buy-points-view.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BuyPointsCardComponent } from './buy-points-card/buy-points-card.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    IchibanHomeComponent,
    HexaHomeComponent,
    FilterComponent,
    ListingComponent,
    ViewListingComponent,
    BuyPointsComponent,
    BuyPointsViewComponent,
    ProductCardComponent,
    BuyPointsCardComponent,
    BuyProductComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
