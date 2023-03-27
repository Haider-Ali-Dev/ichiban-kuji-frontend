import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  openNavbar = false;
  constructor(public auth: AuthService) {}
  
  navBarControl() {
    this.openNavbar = !this.openNavbar;
  }
}
