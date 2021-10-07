import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairHistoryComponent } from './repair-history.component';

describe('RepairHistoryComponent', () => {
  let component: RepairHistoryComponent;
  let fixture: ComponentFixture<RepairHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
