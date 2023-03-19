import { Component } from '@angular/core';
import { ListingService } from 'src/app/listing.service';
import Listing from 'src/app/models/listing.model';

@Component({
  selector: 'app-ichiban-home',
  templateUrl: './ichiban-home.component.html',
  styleUrls: ['./ichiban-home.component.css']
})
export class IchibanHomeComponent {
  listings: Array<Listing> = [];
  constructor(
    private listingService: ListingService,
  ) { }

  ngOnInit(): void {
    this.listingService.getAllListingsIch().subscribe((listings) => {
      this.listings = listings;
    })
  }
}
