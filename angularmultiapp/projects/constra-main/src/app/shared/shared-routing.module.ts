import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
export class constramainSharedModule{
  static forRoot(): ModuleWithProviders<SharedRoutingModule>{
    return {
      ngModule: SharedRoutingModule,
      providers: []
    }
  }
}