import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartDemoComponent } from './org-chart-demo.component';

describe('OrgChartDemoComponent', () => {
  let component: OrgChartDemoComponent;
  let fixture: ComponentFixture<OrgChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgChartDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
