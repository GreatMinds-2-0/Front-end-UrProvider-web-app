import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./business/pages/supplier/supplier-home/supplier-home.component";
import {SupplierInventoryComponent} from "./business/pages/supplier/supplier-inventory/supplier-inventory.component";

const routes: Routes = [
  { path: 'supplier-home/:id', component: SupplierHomeComponent },
  { path: 'supplier-inventory/:id', component: SupplierInventoryComponent },
  { path: '', redirectTo: 'supplier-home/:id', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
