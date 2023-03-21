import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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


  
  constructor() { }

  pay() {
   
  }
}
