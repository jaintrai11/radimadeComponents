import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'formTest',
    loadChildren: () =>
      import('./form-test/form-test.module').then((m) => m.FormTestModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./tree-chart/tree-chart.module').then((m) => m.TreeChartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
