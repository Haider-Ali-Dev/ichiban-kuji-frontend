import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexaHomeComponent } from './hexa-home.component';

describe('HexaHomeComponent', () => {
  let component: HexaHomeComponent;
  let fixture: ComponentFixture<HexaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
