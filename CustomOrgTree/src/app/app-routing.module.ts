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
  {
    path: 'd3',
    loadChildren: () =>
      import('./d3-org/d3-org.module').then((m) => m.D3ORGModule),
  },
  { path: 'orgChartDemo', loadChildren: () => import('./org-chart-demo/org-chart-demo.module').then(m => m.OrgChartDemoModule) },
  { path: 'angularOrgChart', loadChildren: () => import('./angular-org-chart/angular-org-chart.module').then(m => m.AngularOrgChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
