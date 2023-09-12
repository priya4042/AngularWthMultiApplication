import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { nicetemplateSharedModule } from 'projects/nicetemplate/src/app/admin/admin.module';
import { SharedModule } from 'projects/constra-main/src/app/shared/shared.module';
import { HeaderfooterLayoutComponent } from 'projects/constra-main/src/app/layout/headerfooter-layout/headerfooter-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderfooterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    nicetemplateSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
