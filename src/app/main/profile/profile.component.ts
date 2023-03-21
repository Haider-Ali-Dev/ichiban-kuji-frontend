import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectedTab = 'Profile'
    constructor(public auth: AuthService) { }

    changeTab($event: any, tab: string) {
        this.selectedTab = tab;
    }

}
