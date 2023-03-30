import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ListingService } from 'src/app/listing.service';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent {
  boxId: string = '';
  bought = false;
  product: any;
  constructor(private route: ActivatedRoute, private listingService: ListingService, private auth: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.boxId = params['boxId'];
    });
  }


  buy() {

    this.listingService.buyBox(this.auth.user?.id as string, this.boxId)
      .subscribe(res => {
        this.product = res;
        this.bought = true;
    })
  }

  generateLink() {
    const imageId = this.product?.image.trim()
    return `https://api.fms.software/get/image/${imageId}`
  }

}
