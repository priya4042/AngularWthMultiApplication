import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';

const routes: Routes = [

  
  {path: 'constramain', 
  loadChildren: () => import('../../../constra-main/src/app/dashboard/dashboard.module').then(m=>m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
