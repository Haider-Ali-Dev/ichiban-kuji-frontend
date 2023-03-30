import { Component, OnInit, ɵconvertToBitFlags } from '@angular/core';
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
  content = 'attention'
  openModel = true
  addressError = false;
  openBoxModal = false;
  randomListings: Listing[] = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private authService: AuthService) {
    this.route.params.subscribe(params => {
      this.listingId = params['id'];
    });

    this.listingService.getListingById(this.listingId).subscribe(listing => {
      this.listing = listing;
      // Set box choosen to  first box
      this.boxChoosen = listing.boxes[0];
    })
    this.getRandomListings()


  }
  ngOnInit() {
    this.listingService.getListingById(this.listingId).subscribe(listing => {
      this.listing = listing;
    })

  }
  calculateRemainderOfBox() {
    let total = 0;
    let availableTotal = 0;
    this.boxChoosen?.products.map(product => {
      total += product.ini_amount;
      availableTotal += product.amount;
    })
    return [total, availableTotal]
  }
  onSelectedIndex(index: number) {
    this.boxChoosenIndex = index;
  }

  onSelectedBox(box: Box) {
    this.boxChoosen = box;
  }

  controlBoxModal() {
    this.openBoxModal = !this.openBoxModal;
  }


  setModel() {
    console.log('HIT')
    this.openModel = !this.openModel;
    this.content = 'how_to_play'
  }


  buyBox() {
    
    if (this.authService.user?.points < (this.listing as Listing).boxes[this.boxChoosenIndex - 1].price) {
      this.showMessage = true;
      this.message = "Insufficient points";
      return;
    }

    // if (!this.authService.user?.address) {
    //   this.addressError = true;
    //   return;
    // }

    this.router.navigate(['', 'buy', 'product', 'open'], {
      queryParams: {
        listingId: this.listingId,
        boxId: (this.listing as Listing).boxes[this.boxChoosenIndex - 1].id
      }
    });


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

  getRandomListings() {
    this.listingService.getRandomListings().subscribe(listings => {
      this.randomListings = listings;
    })
  }


  // 

}


