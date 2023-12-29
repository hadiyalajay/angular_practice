import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSendComponent } from './data-send.component';

describe('DataSendComponent', () => {
  let component: DataSendComponent;
  let fixture: ComponentFixture<DataSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSendComponent]
    });
    fixture = TestBed.createComponent(DataSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
