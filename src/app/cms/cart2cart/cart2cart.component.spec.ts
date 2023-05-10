import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart2cartComponent } from './cart2cart.component';

describe('Cart2cartComponent', () => {
  let component: Cart2cartComponent;
  let fixture: ComponentFixture<Cart2cartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cart2cartComponent]
    });
    fixture = TestBed.createComponent(Cart2cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
