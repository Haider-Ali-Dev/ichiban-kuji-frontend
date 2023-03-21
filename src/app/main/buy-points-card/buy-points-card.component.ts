import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-points-card',
  templateUrl: './buy-points-card.component.html',
  styleUrls: ['./buy-points-card.component.css']
})
export class BuyPointsCardComponent {
  @Input()
  points: number | undefined;

  @Input()
  price: number | undefined;

  @Input()
  type: 'gold' | 'silver' | 'bronze' | undefined;
}
