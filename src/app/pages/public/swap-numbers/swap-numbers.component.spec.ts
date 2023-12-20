import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapNumbersComponent } from './swap-numbers.component';

describe('SwapNumbersComponent', () => {
  let component: SwapNumbersComponent;
  let fixture: ComponentFixture<SwapNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapNumbersComponent]
    });
    fixture = TestBed.createComponent(SwapNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
