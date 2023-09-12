import { Routes } from "@angular/router";

export const Backend_Routes: Routes=[
  
     {
        path:'dashboard',
        loadChildren:()=>import('../dashboard/dashboard.module').then(m=>m.DashboardModule)
    }
    

]