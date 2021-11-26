import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOrgChartComponent } from './angular-org-chart.component';

describe('AngularOrgChartComponent', () => {
  let component: AngularOrgChartComponent;
  let fixture: ComponentFixture<AngularOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularOrgChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
