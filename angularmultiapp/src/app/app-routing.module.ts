import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'nicetemplate', 
  loadChildren: () => import('../../projects/nicetemplate/src/app/admin/admin.module').then(m=>m.AdminModule)},

  {path: 'dashboard', 
  loadChildren: () => import('../../projects/constra-main/src/app/dashboard/dashboard.module').then(m=>m.DashboardModule)},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
