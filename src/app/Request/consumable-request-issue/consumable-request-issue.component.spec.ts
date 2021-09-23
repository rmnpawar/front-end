import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableRequestIssueComponent } from './consumable-request-issue.component';

describe('ConsumableRequestIssueComponent', () => {
  let component: ConsumableRequestIssueComponent;
  let fixture: ComponentFixture<ConsumableRequestIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableRequestIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableRequestIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
