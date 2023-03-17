import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private auth: AuthService, private router: Router) { }
  showMsg = false;
  hasError = false;
  inSubmission = false;
  message = "Registering you in...";



  email = new FormControl('', {
    validators: [
      Validators.required,
      Validators.email,
    ]
  });
  password = new FormControl('', {
    validators: [
      Validators.required,
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
    ]
  });

  formGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  async login() {
    this.inSubmission = true;
    this.showMsg = true;
    this.auth.login(this.email.value as string,
      this.password.value as string).subscribe(
        (res) => {
          if (res.email) {
            this.auth.user = res;
            this.router.navigate(['']);
          }
        },
        (err) => {
          this.hasError = true;
          this.message = "Error while registering. Please try again later."
        }
      );
  }


}
