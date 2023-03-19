import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchibanHomeComponent } from './ichiban-home.component';

describe('IchibanHomeComponent', () => {
  let component: IchibanHomeComponent;
  let fixture: ComponentFixture<IchibanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IchibanHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IchibanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
