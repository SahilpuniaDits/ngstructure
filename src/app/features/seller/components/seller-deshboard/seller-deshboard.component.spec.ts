import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDeshboardComponent } from './seller-deshboard.component';

describe('SellerDeshboardComponent', () => {
  let component: SellerDeshboardComponent;
  let fixture: ComponentFixture<SellerDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDeshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
