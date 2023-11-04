import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketPointTableComponent } from './cricket-point-table.component';

describe('CricketPointTableComponent', () => {
  let component: CricketPointTableComponent;
  let fixture: ComponentFixture<CricketPointTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketPointTableComponent]
    });
    fixture = TestBed.createComponent(CricketPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
