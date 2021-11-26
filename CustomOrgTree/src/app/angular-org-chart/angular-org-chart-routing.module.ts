import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularOrgChartComponent } from './angular-org-chart.component';

const routes: Routes = [{ path: '', component: AngularOrgChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularOrgChartRoutingModule { }
