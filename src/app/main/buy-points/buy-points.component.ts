import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-buy-points',
  templateUrl: './buy-points.component.html',
  styleUrls: ['./buy-points.component.css']
})
export class BuyPointsComponent {
  cardNumber = new FormControl('', [Validators.required]);
  cardExpiryMonth = new FormControl('', [Validators.required]);
  cardExpiryYear = new FormControl('', [Validators.required]);
  cardCvc = new FormControl('', [Validators.required]);
  cardName = new FormControl('', [Validators.required]);
  cardFormGroup = new FormGroup({
    cardNumber: this.cardNumber,
    cardExpiryMonth: this.cardExpiryMonth,
    cardExpiryYear: this.cardExpiryYear,
    cardCvc: this.cardCvc,
    cardName: this.cardName
  });
  routingInterval: any;

  inSubmission = false;

  tty = ''
  showMessage = false;
  message = '';
  paymentStatus = false;



  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router) {



    this.route.params.subscribe(params => {
      this.tty = params['id'];
    });
  }

  addPoints(amount: number) {
    this.http.post('https://api.fms.software/add/points', {
      user_id : this.auth.user.id,
      points: amount
    }).subscribe(data => {
      console.log(data);
    })
    
  }
  pay() {
    this.inSubmission = true;
    this.http.post('http://localhost:8000/pay', {
      id: this.auth.user.id,
      card_number: this.cardNumber.value,
      expiry_date: this.cardExpiryMonth.value + '/' + this.cardExpiryYear.value,
      cvc: this.cardCvc.value,
      name: this.cardName.value,
      tty_of_points: this.tty.toLocaleUpperCase(),
      email: this.auth.user.email
    }).subscribe((data: any) => {
      if (data.status === 'success') {
        if (this.tty === 'gold') {
          this.addPoints(50);
        } else if (this.tty === 'silver') {
          this.addPoints(25);
        } else if (this.tty === 'bronze') {
          this.addPoints(10);
        }
        
        this.showMessage = true;
        this.message = 'Payment Successful';
        this.paymentStatus = true;
        this.inSubmission = false;
        // this.routingInterval =  setInterval(() => {
        //   this.router.navigate(['/']);
        // }, 2000)
      } else {
        this.showMessage = true;
        this.message = 'Payment Failed';
        this.paymentStatus = false;
        this.inSubmission = false;
      }
    })
  }
  ngOnDestroy() {
    clearInterval(this.routingInterval);
  }
}
