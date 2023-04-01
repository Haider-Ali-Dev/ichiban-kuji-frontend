import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectedTab = 'Profile'
  addAddress = false;
  address = ''
  country = ''
  stateAndCity = ''
  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  changeTab($event: any, tab: string) {
    this.selectedTab = tab;
  }

  openAddAddress() {
    this.addAddress = !this.addAddress;
  }

  updateAddress() {
    this.http.post('https://api.fms.software/update/address', {

      user_id: this.auth.user.id,
      address: `${this.address}, ${this.stateAndCity}, ${this.country}`

    }, {
      withCredentials: true
    }).subscribe((data) => {
      if (data) {
        this.addAddress = false;
      }
    })
  }



}
