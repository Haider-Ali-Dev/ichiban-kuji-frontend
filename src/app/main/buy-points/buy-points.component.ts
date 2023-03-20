import { Component } from '@angular/core';
import * as Stripe from 'stripe';

@Component({
  selector: 'app-buy-points',
  templateUrl: './buy-points.component.html',
  styleUrls: ['./buy-points.component.css']
})
export class BuyPointsComponent {
  stripe = new Stripe.Stripe('pk_test_51MnMMQHAQt6zxcWxfUuTHuGB7ucuoxUeF1RQmgONgu6zDZ1EYtuBXqLFTijczKany8KKLn5w3FmuoarblkhM13J4003v5pX7iC',
    {
      apiVersion: '2022-11-15'
    });

  
  constructor() { }

  pay() {
    this.stripe.o
  }
}
