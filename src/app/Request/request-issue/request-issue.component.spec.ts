import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestIssueComponent } from './request-issue.component';

describe('RequestIssueComponent', () => {
  let component: RequestIssueComponent;
  let fixture: ComponentFixture<RequestIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
