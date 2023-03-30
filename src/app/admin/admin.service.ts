import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';
import Listing from '../models/listing.model';
import BoxData from '../models/box_data.model';
import AddProduct from '../models/add-product.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('https://api.fms.software/get/categories', {
      withCredentials: true
    })
  }
  createBox(box_data: BoxData) {
    console.log(box_data)
    return this.http.post('https://api.fms.software/admin/create/box', box_data, {
      withCredentials: true,
    })
  }
  getAllUsers() {
    return this.http.get<Array<User>>('https://api.fms.software/get/users', {
      withCredentials: true
    })
  }

  getAllListings() {
    return this.http.get<Array<Listing>>('https://api.fms.software/get/listings', {
      withCredentials: true
    })
  }


  uploadFile(listingForm: FormData) {
    console.log('Admin Service')
    return this.http.post<Listing>('https://api.fms.software/admin/create/listing', listingForm, {
      withCredentials: true
    })
  }

  deleteListing(data: { listing_id: string, req_id: { id: string } }) {
    return this.http.post('https://api.fms.software/admin/delete/listing', data, {
      withCredentials: true
    })
  }

  serverStatus() {
    return this.http.get('https://api.fms.software/admin/server_status', {
      withCredentials: true
    })
  }

  deleteProduct(data: { id: string, req_id: { id: string } }) {
    return this.http.post('https://api.fms.software/admin/delete/product', data, {
      withCredentials: true
    })
  }

  deleteBox (data: { id: string, req_id: { id: string } }) {
    return this.http.post('https://api.fms.software/admin/delete/box', data, {
      withCredentials: true
    })
  }
  

  addProduct(data: AddProduct) {
    return this.http.post('https://api.fms.software/admin/add/product', data, {
      withCredentials: true
    })
  }

  generateImageLink(fileForm: FormData) {
    return this.http.post('https://api.fms.software/admin/generate/image_link', fileForm, {
      withCredentials: true
    })
  }

}
