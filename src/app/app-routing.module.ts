import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchlistComponent} from "./business/pages/store/searchlist/searchlist.component";

const routes: Routes = [
  {path:"searchlist", component: SearchlistComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
