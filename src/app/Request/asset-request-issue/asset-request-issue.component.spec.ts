import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRequestIssueComponent } from './asset-request-issue.component';

describe('AssetRequestIssueComponent', () => {
  let component: AssetRequestIssueComponent;
  let fixture: ComponentFixture<AssetRequestIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRequestIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRequestIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
