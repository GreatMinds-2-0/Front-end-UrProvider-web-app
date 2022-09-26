import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupplierHomeComponent } from './business/pages/supplier/supplier-home/supplier-home.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreHomeComponent } from './business/pages/store/store-home/store-home.component';
import { StoreSupplierProfileComponent } from './business/pages/store/store-supplier-profile/store-supplier-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierHomeComponent,
    StoreHomeComponent,
    StoreSupplierProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
