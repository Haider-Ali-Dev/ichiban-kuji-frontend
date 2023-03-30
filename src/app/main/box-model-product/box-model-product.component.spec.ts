import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModelProductComponent } from './box-model-product.component';

describe('BoxModelProductComponent', () => {
  let component: BoxModelProductComponent;
  let fixture: ComponentFixture<BoxModelProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxModelProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxModelProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
