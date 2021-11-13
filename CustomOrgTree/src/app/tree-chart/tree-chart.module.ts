import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeChartRoutingModule } from './tree-chart-routing.module';
import { TreeChartComponent } from './tree-chart.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TreeChartComponent
  ],
  imports: [
    CommonModule,
    TreeChartRoutingModule,
    DragDropModule
  ]
})
export class TreeChartModule { }
