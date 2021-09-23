import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableHistoryComponent } from './consumable-history.component';

describe('ConsumableHistoryComponent', () => {
  let component: ConsumableHistoryComponent;
  let fixture: ComponentFixture<ConsumableHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
