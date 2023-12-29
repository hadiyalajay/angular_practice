import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReceiveComponent } from './data-receive.component';

describe('DataReceiveComponent', () => {
  let component: DataReceiveComponent;
  let fixture: ComponentFixture<DataReceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataReceiveComponent]
    });
    fixture = TestBed.createComponent(DataReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
