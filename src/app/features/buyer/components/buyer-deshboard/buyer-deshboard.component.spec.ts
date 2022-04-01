import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDeshboardComponent } from './buyer-deshboard.component';

describe('BuyerDeshboardComponent', () => {
  let component: BuyerDeshboardComponent;
  let fixture: ComponentFixture<BuyerDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerDeshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
