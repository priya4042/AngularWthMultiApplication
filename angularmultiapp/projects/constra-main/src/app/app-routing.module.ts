import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterLayoutComponent } from './layout/headerfooter-layout/headerfooter-layout.component';
import { Backend_Routes } from './routes/backend-layout..routes';

const routes: Routes = [
{
  path:'', component:HeaderfooterLayoutComponent, children: Backend_Routes
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
