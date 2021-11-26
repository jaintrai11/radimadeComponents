import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { D3OrgComponent } from './d3-org.component';
import { D3ORGRoutingModule } from './d3-org-routing.module';
import { NgxOrgChartModule } from 'ngx-org-chart';

@NgModule({
  declarations: [
    D3OrgComponent
  ],
  imports: [
    CommonModule,
    D3ORGRoutingModule,
    ReactiveFormsModule,
    NgxOrgChartModule
  ]
})
export class D3ORGModule { }
