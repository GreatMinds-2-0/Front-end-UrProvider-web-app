import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
/*Add component*/
import {AppRoutingModule} from './app-routing.module';
import {InventoryComponent} from './inventory/pages/inventory/inventory.component';
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
import { StoreProfileComponent } from './store/pages/store-profile/store-profile.component';
import {StoresService} from "./store/services/stores.service";
import { StoreEditProfileComponent } from './store/pages/store-edit-profile/store-edit-profile.component';
import { StoreSupplierProfileComponent } from './store/pages/store-supplier-profile/store-supplier-profile.component';
import { EditProductComponent } from './inventory/pages/edit-product/edit-product.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AddProductComponent } from './inventory/pages/add-product/add-product.component';
import {ProductsService} from "./inventory/services/products.service";
import { ProductsSearchComponent } from './store/pages/products-search/products-search.component';
import { SupplierViewClientComponent } from './supplier/pages/supplier-view-client/supplier-view-client.component';
import { SuppliersSearchComponent } from './store/pages/suppliers-search/suppliers-search.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ProductViewComponent } from './inventory/pages/product-view/product-view.component';
import { ProductsBySupplierComponent } from './store/pages/products-by-supplier/products-by-supplier.component';
import {
  PaymentMethodDialog,
  SupplierPlanComponent
} from './supplier/pages/supplier-plan/supplier-plan.component';
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
    StoreSupplierProfileComponent,
    EditProductComponent,
    AddProductComponent,
    ProductsSearchComponent,
    StoreProfileComponent,
    StoreEditProfileComponent,
    SupplierViewClientComponent,
    SuppliersSearchComponent,
    ProductViewComponent,
    ProductsBySupplierComponent,


    SupplierPlanComponent,
    SupplierViewClientComponent,

    PaymentMethodDialog
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
    MatDividerModule,
    MatSlideToggleModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule

  ],
  providers: [SuppliersService, StoresService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
