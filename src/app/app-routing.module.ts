import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StoreHomeComponent} from "./business/pages/store/store-home/store-home.component";
import {
  StoreSupplierProfileComponent
} from "./business/pages/store/store-supplier-profile/store-supplier-profile.component";

const routes: Routes = [
  {path:"home", component: StoreHomeComponent},
  {path:"ssprofile/:id", component: StoreSupplierProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
