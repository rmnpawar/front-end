import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableSummaryComponent } from './consumable-summary.component';

describe('ConsumableSummaryComponent', () => {
  let component: ConsumableSummaryComponent;
  let fixture: ComponentFixture<ConsumableSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
