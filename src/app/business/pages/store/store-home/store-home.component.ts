import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/supplier";
import {SuppliersService} from "../../../services/suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent implements OnInit {
//
  id:any;
  supplierData:Array<Supplier>;
  constructor(private suppliersService: SuppliersService, private route: ActivatedRoute) {
 this.supplierData=[];
  }

  ngOnInit():void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getSupplier();
  }
getSupplier(){
    this.suppliersService.getAll().subscribe((response:any)=>{
      this.supplierData=response;
    })
}


}
