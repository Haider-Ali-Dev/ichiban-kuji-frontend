import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Listing from './models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getAllListings() {
    return this.http.get<Array<Listing>>('http://localhost:3000/get/listings', {
      withCredentials: true
    })
  }

  getAllListingsIch() {
    return this.http.get<Array<Listing>>('http://localhost:3000/get/listings/ich', {
      withCredentials: true
    })
  }

  getAllListingsHex() {
    return this.http.get<Array<Listing>>('http://localhost:3000/get/listings/hex', {
      withCredentials: true
    })
  }
}
