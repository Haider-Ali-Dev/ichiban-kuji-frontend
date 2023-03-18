import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import Box from 'src/app/models/box.model';
import Listing from 'src/app/models/listing.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-box',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.css']
})
export class DeleteBoxComponent {
  constructor(private admin: AdminService, private auth: AuthService) {

  }
  @Input()
  listings: Array<Listing> = [];
  selectedListingIdForDeletion = ""
  selecteBoxIdForDeletion = ""
  selectedBox: Array<Box> = []

  handleChangeListing(event: any) {
    this.selectedListingIdForDeletion = event.target.value;
    this.selectedBox = this.listings.find(listing => listing.id === this.selectedListingIdForDeletion)?.boxes || []
  }

  deleteBox() {
    this.admin.deleteBox({ id: this.selecteBoxIdForDeletion, req_id: { id: this.auth.user.id } })
      .subscribe((res: any) => {
        this.listings = res;
      }
      )



  }

}
