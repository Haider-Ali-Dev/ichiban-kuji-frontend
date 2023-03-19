import { Component, Input } from '@angular/core';
import Listing from 'src/app/models/listing.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input()
  listings: Array<Listing> = [];


  calculateAverageCostOfBox(id: String) {
    const lis = this.listings.find((listing) => listing.id === id);
    let total = 0;
    lis?.boxes.forEach((box) => {
      total += box.price
    })
    return total / (lis as Listing).boxes.length;
  }
}
