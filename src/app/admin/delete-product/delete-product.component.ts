import { Component, Input } from '@angular/core';
import Box from 'src/app/models/box.model';
import Listing from 'src/app/models/listing.model';
import Product from 'src/app/models/product.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  constructor(private admin: AdminService) {

  }
  @Input()
  listings: Array<Listing> = [];
  selectedBoxId = ''
  selectedListingId = ''
  selectedProductId = ''
  // Selected Data
  selectedListingBox: Array<Box> = []
  selectedBoxProducts: Array<Product> = []
  // Checks
  listingSelected = false;
  boxSelected = false;


  deleteProduct() {
    console.log(this.selectedProductId)
    this.admin.deleteProduct({ id: this.selectedProductId, req_id: { id: '299b126e-a1c1-437f-b51e-a18fb633204a' } })
      .subscribe((res: any) => {
        this.listings = res;
      })
  }

  handleListingChange(e: any) {
    this.selectedListingId = e.target.value;
    this.listings.map((l) => {
      if (l.id === this.selectedListingId) {
        this.selectedListingBox = l.boxes
        this.listingSelected = true;
      }
    })
    console.log(this.selectedListingBox)
  }
  handleBoxChange(e: any) {
    this.selectedBoxId = e.target.value;
    this.selectedListingBox.map((b) => {
      if (b.id === this.selectedBoxId) {
        this.selectedBoxProducts = b.products
        this.boxSelected = true;
      }
    })
  }
  

}
