import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeChartComponent } from './tree-chart.component';

const routes: Routes = [{ path: '', component: TreeChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeChartRoutingModule { }
