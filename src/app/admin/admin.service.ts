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
    return this.http.get('http://localhost:3000/get/categories', {
      withCredentials: true
    })
  }
  createBox(box_data: BoxData) {
    console.log(box_data)
    return this.http.post('http://localhost:3000/admin/create/box', box_data, {
      withCredentials: true,
    })
  }
  getAllUsers() {
    return this.http.get<Array<User>>('http://localhost:3000/get/users', {
      withCredentials: true
    })
  }

  getAllListings() {
    return this.http.get<Array<Listing>>('http://localhost:3000/get/listings', {
      withCredentials: true
    })
  }


  uploadFile(listingForm: FormData) {
    console.log('Admin Service')
    return this.http.post<Listing>('http://localhost:3000/admin/create/listing', listingForm, {
      withCredentials: true
    })
  }

  deleteListing(data: { listing_id: string, req_id: { id: string } }) {
    return this.http.post('http://localhost:3000/admin/delete/listing', data, {
      withCredentials: true
    })
  }

  serverStatus() {
    return this.http.get('http://localhost:3000/admin/server_status', {
      withCredentials: true
    })
  }

  deleteProduct(data: { id: string, req_id: { id: string } }) {
    return this.http.post('http://localhost:3000/admin/delete/product', data, {
      withCredentials: true
    })
  }

  deleteBox (data: { id: string, req_id: { id: string } }) {
    return this.http.post('http://localhost:3000/admin/delete/box', data, {
      withCredentials: true
    })
  }
  

  addProduct(data: AddProduct) {
    return this.http.post('http://localhost:3000/admin/add/product', data, {
      withCredentials: true
    })
  }

  generateImageLink(fileForm: FormData) {
    return this.http.post('http://localhost:3000/admin/generate/image_link', fileForm, {
      withCredentials: true
    })
  }

}
