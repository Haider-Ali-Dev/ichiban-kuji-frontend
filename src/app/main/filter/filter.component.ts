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
}
