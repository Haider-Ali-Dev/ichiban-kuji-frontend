import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPointsViewComponent } from './buy-points-view.component';

describe('BuyPointsViewComponent', () => {
  let component: BuyPointsViewComponent;
  let fixture: ComponentFixture<BuyPointsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPointsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPointsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
