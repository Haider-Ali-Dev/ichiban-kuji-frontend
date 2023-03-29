import { Component, } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import AddProduct from 'src/app/models/add-product.model';
import Box from 'src/app/models/box.model';
import Listing from 'src/app/models/listing.model';
import User from 'src/app/models/user.model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  setImageLink($event: Event) {
    throw new Error('Method not implemented.');
  }
  constructor(private adminService: AdminService, private auth: AuthService) { }
  numberOfUsers = 0;
  users: User[] = [];
  listingForm = new FormData()
  listingtitle = ''
  listingDescription = ''
  listingType = ''
  fileIsUploaded = false;
  listings: Listing[] = []
  userDataAvailable = false;
  message: { for: string, message: string } = { for: '', message: '' }
  showMessage = false;
  productList: Array<{ title: string, description: string, level: number, amount: number, image: string }> = [];
  boxPrice = 0;
  boxOriginalPrice = 0;
  noOfBoxes = 0;
  listingId = ""
  type = ""
  selectedListingIdForDeletion = ""
  usersOnMonths = new Array(12).fill(0);
  status: boolean = true

  error: { type: string, message: string } = { type: '', message: '' };
  addProductList: Array<{ title: string, description: string, level: number, amount: number, image: string }> = [];
  // For product creation
  selectedBoxIdForProductCreation = ""
  selectedListingIdForProductCreation = ""
  selectedBox: Array<Box> = []
  // Categories
  categories = []
  selectedCategory = ""


  ngOnInit(): void {
    this.getAllListings();
    this.getAllUsers();
    this.getServerStatus();
    this.getAllCategories();

    // Test
    this.usersOnMonths = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));

    console.log(this.usersOnMonths)

  }

  getAllCategories() {
    this.adminService.getAllCategories().subscribe((res: any) => {
      this.categories = res
      console.log('e')
    }, (err) => {
      console.log(err)
    }
    )
  }


  getServerStatus() {
    this.adminService.serverStatus().subscribe((res: any) => {
      this.status = res.status
    }, (err) => {
      this.status = false
    })
  }




  getAllListings() {
    this.adminService.getAllListings().subscribe((listings: Listing[]) => {
      this.listings = listings;
    }, (err) => {
      console.log(err)
      this.error.type = "GET_LISTINGS_ERROR";
      this.error.message = "There was an error getting the listings. Please try again later."
    })
  }
  getAllUsers() {
    this.adminService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
      this.numberOfUsers = users.length;
      this.userDataAvailable = true;
    }, (err) => {
      this.error.type = "GET_USERS_ERROR";
      this.error.message = "There was an error getting the users. Please try again later."
    })
  }

  setTitle($event: any) {
    this.listingtitle = $event.target.value;
  }


  setDescription($event: any) {
    this.listingDescription = $event.target.value;
  }
  setFile($event: any) {
    this.listingForm.append('file', $event.target.files[0]);
    this.fileIsUploaded = true;

  }

  uploadFile() {

    if (!this.listingtitle) {
      this.showMessage = true;
      this.message.for = "LISTING_CREATION"
      this.message.message = "Please enter a title for the listing"
      return;
    }
    if (!this.fileIsUploaded) {
      this.showMessage = true;
      this.message.for = "LISTING_CREATION"
      this.message.message = "Please upload a file for the listing"
      return;
    }
    this.listingForm.append('tty', this.listingType);
    this.listingForm.append('title', this.listingtitle);
    this.listingForm.append('req_id', this.auth.user.id);
    this.listingForm.append('description', this.listingDescription);


    this.adminService.uploadFile(this.listingForm).subscribe((res: any) => {
      this.listings = res;
      this.listingtitle = ''
      this.listingForm = new FormData()
      this.listingType = ''
      this.message.for = "LISTING_CREATION"
      this.message.message = "Listing created successfully"
    }, (err) => {
      this.error.type = "LISTING_CREATION_ERROR";
      this.error.message = "There was an error uploading the file. Please try again later."
    });
  }

  createBox() {

    // Create a range starting from 1 to the number of boxes
    const range = Array.from({ length: this.noOfBoxes }, (_, i) => i + 1);

    // iterate through the range and create a box for each
    range.forEach((boxNumber) => {

      this.adminService.createBox({
        box_data: {
          price: this.boxPrice,
          products: this.productList,
          listing_id: this.listingId,
          original_price: Number(this.boxOriginalPrice),
        },
        req_id: {
          id: this.auth.user.id
        }
      }).subscribe((res: any) => {
        console.log(res);
        this.listings = res;
        // this.boxPrice = 0
        // this.boxOriginalPrice = 0
        // this.noOfBoxes = 0

        // this.listingId = ""
        // this.productList = []
        // this.message.for = "BOX_CREATION"
        // this.message.message = `Box ${boxNumber} created successfully`
      }, (err) => {
        this.error.type = "BOX_CREATION_ERROR";
        this.error.message = "There was an error creating the box. Please try again later."
      })
    })
  }


  // TODO: Add HTML to reset the form
  resetBoxCreation() {
    this.boxPrice = 0
    this.boxOriginalPrice = 0
    this.noOfBoxes = 0

    this.listingId = ""
    this.productList = []
  }

  requestDataChange($event: any) {
    this.type = $event.target.value;
    console.log(this.type)
    if (this.type === "users") {
      this.getAllUsers();
    } else if (this.type === "listings") {
      this.getAllListings();
    }
  }

  deleteListing() {
    this.adminService.deleteListing({
      req_id: {
        id: this.auth.user.id
      },
      listing_id: this.selectedListingIdForDeletion
    }).subscribe((res: any) => {
      this.listings = res;
      this.selectedListingIdForDeletion = ""
      this.message.for = "DELETE_LISTING"
      this.message.message = "Listing deleted successfully"
    }, (err) => {
      this.error.type = "DELETE_LISTING_ERROR";
      this.error.message = "There was an error deleting the listing. Please try again later."
    })
  }

  createProducts() {
    this.adminService.addProduct({
      req_id: {
        id: this.auth.user.id
      },
      product_data: this.addProductList,
      box_id: this.selectedBoxIdForProductCreation
    }).subscribe((res: any) => {
      this.listings = res;
      this.addProductList = []
      this.message.for = "CREATE_PRODUCTS"
      this.message.message = "Products created successfully"
    })

  }

  setBoxId(e: any) {
    this.selectedBoxIdForProductCreation = e.target.value
  }

  setListingId(e: any) {
    this.selectedListingIdForProductCreation = e.target.value
    this.listings.map((l) => {
      if (l.id === this.selectedListingIdForProductCreation) {
        this.selectedBox = l.boxes
      }
    })
  }


}



