import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableRequestComponent } from './consumable-request.component';

describe('ConsumableRequestComponent', () => {
  let component: ConsumableRequestComponent;
  let fixture: ComponentFixture<ConsumableRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
