import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ListingService } from 'src/app/listing.service';
import Box from 'src/app/models/box.model';
import Listing from 'src/app/models/listing.model';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {
  listingId: string = '';
  listing: Listing | undefined;
  boxChoosenIndex: number = 1;
  boxChoosen: Box | undefined;
  showMessage: boolean = false;
  message: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private authService: AuthService) {
    this.route.params.subscribe(params => {
      this.listingId = params['id'];
    });

    this.listingService.getListingById(this.listingId).subscribe(listing => {
      this.listing = listing;
    })


  }


  ngOnInit() {
    this.listingService.getListingById(this.listingId).subscribe(listing => {
      this.listing = listing;
    })


  }


  buyBox() {
    // CHeck for insufficient points
    if (this.authService.user?.points < (this.listing as Listing).boxes[this.boxChoosenIndex - 1].price) {
      this.showMessage = true;
      this.message = "Insufficient points";
      return;
    }


  }


  calculateAverageCostOfBox() {
    let total = 0;
    this.listing?.boxes.forEach((box) => {
      total += box.price
    })
    return total / (this.listing as Listing).boxes.length;
  }

  // chooseBox() {
  //   this.listing?.boxes.forEach((box, i) => {
  //     if (i === this.boxChoosenIndex) {
  //       this.boxChoosen = box;
  //     }
  //   })
  // }

  changeBoxIndex() {
    this.boxChoosenIndex++;

    if (this.boxChoosenIndex > (this.listing as Listing).boxes.length) {
      this.boxChoosenIndex = 1;
    }

    this.boxChoosen = this.listing?.boxes[this.boxChoosenIndex - 1]
    console.log(this.boxChoosen)

  }

}


