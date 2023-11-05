import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePointComponent } from './table-point.component';

describe('TablePointComponent', () => {
  let component: TablePointComponent;
  let fixture: ComponentFixture<TablePointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePointComponent]
    });
    fixture = TestBed.createComponent(TablePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
