import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgChartDemoRoutingModule } from './org-chart-demo-routing.module';
import { OrgChartDemoComponent } from './org-chart-demo.component';


@NgModule({
  declarations: [
    OrgChartDemoComponent
  ],
  imports: [
    CommonModule,
    OrgChartDemoRoutingModule
  ]
})
export class OrgChartDemoModule { }
