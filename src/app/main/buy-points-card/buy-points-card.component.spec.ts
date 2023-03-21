import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPointsCardComponent } from './buy-points-card.component';

describe('BuyPointsCardComponent', () => {
  let component: BuyPointsCardComponent;
  let fixture: ComponentFixture<BuyPointsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPointsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPointsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
