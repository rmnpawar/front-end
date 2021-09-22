import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableRequestViewComponent } from './consumable-request-view.component';

describe('ConsumableRequestViewComponent', () => {
  let component: ConsumableRequestViewComponent;
  let fixture: ComponentFixture<ConsumableRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
