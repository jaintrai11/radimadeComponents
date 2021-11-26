import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularOrgChartRoutingModule } from './angular-org-chart-routing.module';
import { AngularOrgChartComponent } from './angular-org-chart.component';
import { OrgChartModule } from 'angular-org-chart';


@NgModule({
  declarations: [
    AngularOrgChartComponent
  ],
  imports: [
    CommonModule,
    AngularOrgChartRoutingModule,
    OrgChartModule
  ]
})
export class AngularOrgChartModule { }
