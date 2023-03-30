import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    id: '',
    email: '',
    username: '',
    created_at: '',
    is_superuser: false,
    owned_products: [],
    points: 0,
    orders: [],
    address: ''
  }
  constructor(private http: HttpClient, private router: Router) { }


  logout() {
    this.user = {
      id: '',
      email: '',
      username: '',
      created_at: '',
      is_superuser: false,
      owned_products: [],
      points: 0,
      orders: [],
      address: ''
    }

    this.http.get('https://api.fms.software/auth/logout', {
      withCredentials: true
    }).subscribe((data) => {
      if (data) {
        this.router.navigate(['/'])
      }
    });
  }

  login(email: string, password: string) {
    return this.http.post<User>('https://api.fms.software/auth/signin', { email, password }, {
      withCredentials: true,

    });
  }

  register(email: string, password: string, username: string) {
    return this.http.post<User>('https://api.fms.software/auth/register', { email, password, username }, {
      withCredentials: true
    });
  }

  loginThroughCookie() {
    return this.http.get<User>('https://api.fms.software/auth/verify', {
      withCredentials: true
    });
  }

  isAdmin() {
    this.loginThroughCookie().subscribe((data) => {
      this.user = data
    })
    console.log(this.user, "OTHER")
    if (this.user.is_superuser) {
      console.log('TRUE')
      return true;
    }
    return false;
  }
}
