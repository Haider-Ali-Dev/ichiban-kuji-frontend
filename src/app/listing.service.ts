import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Listing from './models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getRandomListings() {
    return this.http.get<Array<Listing>>('https://api.fms.software/get/random/listings', {
      withCredentials: true
    })
  }

  getAllListings() {
    return this.http.get<Array<Listing>>('https://api.fms.software/get/listings', {
      withCredentials: true
    })
  }

  getAllListingsIch() {
    return this.http.get<Array<Listing>>('https://api.fms.software/get/listings/ich', {
      withCredentials: true
    })
  }

  getAllListingsHex() {
    return this.http.get<Array<Listing>>('https://api.fms.software/get/listings/hex', {
      withCredentials: true
    })
  }

  getListingById(id: string) {
    return this.http.post<Listing>(`https://api.fms.software/get/listing`, { id }, {
      withCredentials: true
    })
  }

  buyBox(reqId: string, boxId: string) {

    return this.http.post('https://api.fms.software/buy/box', {
      req_id: {id: reqId},
      id:  boxId
    }, {
      withCredentials: true
    })
  }
}
