import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { IchibanHomeComponent } from './ichiban-home/ichiban-home.component';
import { HexaHomeComponent } from './hexa-home/hexa-home.component';
import { FilterComponent } from './filter/filter.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { BuyPointsComponent } from './buy-points/buy-points.component';


@NgModule({
  declarations: [
    HomeComponent,
    IchibanHomeComponent,
    HexaHomeComponent,
    FilterComponent,
    ListingComponent,
    ViewListingComponent,
    BuyPointsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
