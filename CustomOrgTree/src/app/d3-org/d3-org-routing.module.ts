import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3OrgComponent } from './d3-org.component';

const routes: Routes = [{ path: '', component: D3OrgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3ORGRoutingModule { }
