import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ichibankuji-frontend';
  constructor(private authService: AuthService) {
    this.authService.loginThroughCookie().subscribe((data) => {
      console.log("AUTH_SUCESS");
      this.authService.user = data
    }, (e) => {
      console.log("AUTH_FAILED")
    })
  }
  ngOnInit() {

  }
}
