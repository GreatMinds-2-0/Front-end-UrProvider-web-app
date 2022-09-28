import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../model/store";
import {StoresService} from "../../services/stores.service";

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent implements OnInit {
//
  id: any;
  storeData: Store;
  supplierData: Array<Supplier>;

  constructor(private suppliersService: SuppliersService, private route: ActivatedRoute, private storesService: StoresService) {
    this.supplierData = [];
    this.storeData = {} as Store;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getSupplier();
    this.getStoreById(this.id);
  }

  getSupplier() {
    this.suppliersService.getAll().subscribe((response: any) => {
      this.supplierData = response;
    })
  }

  getStoreById(id:Number){
    this.storesService.getById(id).subscribe((response:any)=>{
      this.storeData=response;
    })
  }


}
