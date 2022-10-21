import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
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
import {SupplierViewClientComponent} from "./supplier/pages/supplier-view-client/supplier-view-client.component";
import {ProductViewComponent} from "./inventory/pages/product-view/product-view.component";
import {PaymentMethodDialog, SupplierPlanComponent} from "./supplier/pages/supplier-plan/supplier-plan.component";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SupplierComponent} from "./view/pages/supplier/supplier.component";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'supplier/:id', component: SupplierComponent,
    children:[
      { path: 'supplier-home', component: SupplierHomeComponent},
      { path: 'supplier-plan',component:SupplierPlanComponent},
      { path: 'supplier-inventory', component: InventoryComponent},
      { path: 'supplier/edit-product/:pid', component: EditProductComponent,outlet:'supplier'},
      { path: 'supplier/add-product/:pid', component: AddProductComponent,outlet:'supplier'},
      { path: 'supplier-profile', component: SupplierProfileComponent},
      { path: 'supplier-profile-edit', component: SupplierEditProfileComponent},
      { path: 'supplier/view-client/:cid', component: SupplierViewClientComponent},
    ]
  },

  { path: 'store-profile/:id', component: StoreProfileComponent,
    children:[
      { path: 'store-edit-profile/:id', component: StoreEditProfileComponent},
      { path: 'store-home/:id', component: StoreHomeComponent},
      { path: 'store-providers-profile/:id/:pid', component: StoreSupplierProfileComponent},
      { path: 'product-view/:id/:pid/:sid', component: ProductViewComponent},
      { path: 'store-products-list/:id/:search', component: ProductsSearchComponent},/*/:id/:search*/
      { path: 'store-products-list/:id/:search', component: ProductsSearchComponent},

      ]
  },


];
export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
}
@NgModule({
  imports: [RouterModule.forRoot(routes,routingConfiguration)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppRoutingModule { }
