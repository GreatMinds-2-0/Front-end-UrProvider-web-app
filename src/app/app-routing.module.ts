import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./supplier/pages/supplier-home/supplier-home.component";
import {InventoryComponent} from "./inventory/pages/inventory.component";
import {SupplierProfileComponent} from "./supplier/pages/supplier-profile/supplier-profile.component";
import {SupplierEditProfileComponent} from "./supplier/pages/supplier-edit-profile/supplier-edit-profile.component";
import {StoreProfileComponent} from "./store/pages/store-profile/store-profile.component";
import {StoreEditProfileComponent} from "./store/pages/store-edit-profile/store-edit-profile.component";

const routes: Routes = [
  { path: 'supplier-home/:id', component: SupplierHomeComponent },
  { path: 'supplier-inventory/:id', component: InventoryComponent },
  {path: 'supplier-profile/:id', component: SupplierProfileComponent},
  {path: 'supplier-profile-edit/:id', component: SupplierEditProfileComponent},
  {path: 'store-profile/:id', component: StoreProfileComponent},
  {path: 'store-edit-profile/:id', component: StoreEditProfileComponent},
  { path: '', redirectTo: 'supplier-home/:id', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
