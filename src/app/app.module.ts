import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {InventoryComponent} from './inventory/pages/inventory.component';
import {SignInComponent} from './security/pages/sign-in/sign-in.component';
import {SignUpComponent} from './security/pages/sign-up/sign-up.component';
import {StoreHomeComponent} from './store/pages/store-home/store-home.component';
import {SupplierHomeComponent} from './supplier/pages/supplier-home/supplier-home.component';



@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SignInComponent,
    SignUpComponent,
    StoreHomeComponent,
    SupplierHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
