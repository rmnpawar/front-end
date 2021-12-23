import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintActionsComponent } from './complaint-actions.component';

describe('ComplaintActionsComponent', () => {
  let component: ComplaintActionsComponent;
  let fixture: ComponentFixture<ComplaintActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
