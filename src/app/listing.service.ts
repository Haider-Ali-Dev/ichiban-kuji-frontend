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

  getListingById(id: string) {
    return this.http.post<Listing>(`http://localhost:3000/get/listing`, { id }, {
      withCredentials: true
    })
  }

  buyBox(reqId: string, boxId: string) {

    return this.http.post('http://localhost:3000/buy/box', {
      req_id: {id: reqId},
      id:  boxId
    }, {
      withCredentials: true
    })
  }
}
