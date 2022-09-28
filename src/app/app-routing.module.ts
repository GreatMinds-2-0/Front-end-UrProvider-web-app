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

const routes: Routes = [
  { path: 'supplier-home/:id', component: SupplierHomeComponent },
  { path: 'supplier-inventory/:id', component: InventoryComponent },
  { path: 'supplier-profile/:id', component: SupplierProfileComponent},
  { path: 'supplier-profile-edit/:id', component: SupplierEditProfileComponent},
  { path: 'supplier/edit-product/:id/:pid', component: EditProductComponent},
  { path: 'supplier/add-product/:id', component: AddProductComponent},
  { path: 'store-home/:id', component: StoreHomeComponent},
  { path: 'store-providers-profile/:id', component: StoreSupplierProfileComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
