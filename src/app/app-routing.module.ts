import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./supplier/pages/supplier-home/supplier-home.component";
import {InventoryComponent} from "./inventory/pages/inventory/inventory.component";
import {SupplierProfileComponent} from "./supplier/pages/supplier-profile/supplier-profile.component";
import {SupplierEditProfileComponent} from "./supplier/pages/supplier-edit-profile/supplier-edit-profile.component";
import {StoreHomeComponent} from "./store/pages/store-home/store-home.component";
import {StoreSupplierProfileComponent} from "./store/pages/store-supplier-profile/store-supplier-profile.component";
import {EditProductComponent} from "./inventory/pages/edit-product/edit-product.component";
import {AddProductComponent} from "./inventory/pages/add-product/add-product.component";
import {ProductsSearchComponent} from "./store/pages/products-search/products-search.component";
import {StoreProfileComponent} from "./store/pages/store-profile/store-profile.component";
import {StoreEditProfileComponent} from "./store/pages/store-edit-profile/store-edit-profile.component";

const routes: Routes = [
  { path: 'supplier-home/:id', component: SupplierHomeComponent },
  { path: 'supplier-inventory/:id', component: InventoryComponent },
  { path: 'supplier-profile/:id', component: SupplierProfileComponent},
  { path: 'supplier-profile-edit/:id', component: SupplierEditProfileComponent},
  { path: 'supplier/edit-product/:id/:pid', component: EditProductComponent},
  { path: 'supplier/add-product/:id', component: AddProductComponent},
  {path: 'supplier-profile/:id', component: SupplierProfileComponent},
  {path: 'supplier-profile-edit/:id', component: SupplierEditProfileComponent},
  {path: 'store-profile/:id', component: StoreProfileComponent},
  {path: 'store-edit-profile/:id', component: StoreEditProfileComponent},
  { path: 'store-home/:id', component: StoreHomeComponent},
  { path: 'store-providers-profile/:id/:pid', component: StoreSupplierProfileComponent},
  { path: 'store-products-list/:id', component: ProductsSearchComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
