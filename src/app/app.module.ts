import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
/*Add component*/
import {AppRoutingModule} from './app-routing.module';
import {InventoryComponent} from './inventory/pages/inventory.component';
import {SignInComponent} from './security/pages/sign-in/sign-in.component';
import {SignUpComponent} from './security/pages/sign-up/sign-up.component';
import {StoreHomeComponent} from './store/pages/store-home/store-home.component';
import {SupplierHomeComponent} from './supplier/pages/supplier-home/supplier-home.component';
import { SupplierProfileComponent } from './supplier/pages/supplier-profile/supplier-profile.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {SuppliersService} from "./supplier/services/suppliers.service";
import { SupplierEditProfileComponent } from './supplier/pages/supplier-edit-profile/supplier-edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SignInComponent,
    SignUpComponent,
    StoreHomeComponent,
    SupplierHomeComponent,
    SupplierProfileComponent,
    SupplierEditProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [SuppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
