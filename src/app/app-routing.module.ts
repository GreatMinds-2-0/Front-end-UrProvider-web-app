import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./supplier/pages/supplier-home/supplier-home.component";
import {InventoryComponent} from "./inventory/pages/inventory.component";

const routes: Routes = [
  { path: 'supplier-home/:id', component: SupplierHomeComponent },
  { path: 'supplier-inventory/:id', component: InventoryComponent },
  { path: '', redirectTo: 'supplier-home/:id', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
