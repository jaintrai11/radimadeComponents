import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3OrgComponent } from './d3-org.component';

describe('D3OrgComponent', () => {
  let component: D3OrgComponent;
  let fixture: ComponentFixture<D3OrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3OrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3OrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
