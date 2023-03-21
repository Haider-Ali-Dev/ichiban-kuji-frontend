import { Component, Input } from '@angular/core';
import Listing from 'src/app/models/listing.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  listings: Array<Listing> = [];
  currentSortedBy = '';


  calculateAveragePriceBox(listing: Listing) {

    let total = 0;
    listing.boxes.forEach(box => {
      total += box.price;
    }
    );
    return total / listing.boxes.length;
  }

  sortBy($event: any) {
    const sortBy = $event.target.value;
    this.currentSortedBy = sortBy;
    if (sortBy === 'HTL') {
      this.listings = this.listings.sort((a, b) => {
        return this.calculateAveragePriceBox(b) - this.calculateAveragePriceBox(a);
      });
    } else if (sortBy === 'LTH') {
      this.listings = this.listings.sort((a, b) => {
        return this.calculateAveragePriceBox(a) - this.calculateAveragePriceBox(b);
      });
    } else if (sortBy === 'ALPHA') {
      this.listings = this.listings.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
  }

}
