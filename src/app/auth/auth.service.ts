import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';
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
    points: 0
  }
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<User>('http://localhost:3000/auth/login', { email, password }, {
      withCredentials: true,

    });
  }

  register(email: string, password: string, username: string) {
    return this.http.post<User>('http://localhost:3000/auth/register', { email, password, username }, {
      withCredentials: true
    });
  }

  loginThroughCookie() {
    return this.http.get<User>('http://localhost:3000/auth/verify');
  }

}
