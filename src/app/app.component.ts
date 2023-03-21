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
      console.log("HIT VERIFY");
      this.authService.user = data
    })
  }
  ngOnInit() {

  }
}
