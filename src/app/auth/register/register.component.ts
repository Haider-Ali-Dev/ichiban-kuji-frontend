import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
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
  name = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  });

  formGroup = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  });

  async register() {
    this.inSubmission = true;
    this.showMsg = true;
    this.auth.register(this.email.value as string,
      this.password.value as string,
      this.name.value as string).subscribe(
        (res) => {
          if (res.email) {
            this.auth.user = res;
            this.router.navigate(['']);
          }
        },
        (err) => {
          this.hasError = true;
          this.message = "Error while registering. Please try again later."
          this.inSubmission = false;
        }
      )

  }


}
