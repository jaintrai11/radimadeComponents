import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgChartDemoComponent } from './org-chart-demo.component';

const routes: Routes = [{ path: '', component: OrgChartDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgChartDemoRoutingModule { }
