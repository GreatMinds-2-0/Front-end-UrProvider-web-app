import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../model/store";
import {StoresService} from "../../services/stores.service";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent implements OnInit {

  searchTerm: any;
  id: any;
  storeData: Store;
  supplierData: Array<Supplier>;

  constructor(private router: Router,
              private suppliersService: SuppliersService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private storesService: StoresService) {
    this.supplierData = [];
    this.storeData = {} as Store;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getSupplier();
    this.getStoreById(this.id);
  }

  getSupplier() {
    this.suppliersService.getAll().subscribe((response: any) => {
      this.supplierData = response;
    })
  }

  getStoreById(id: number){
    this.storesService.getById(id).subscribe((response:any)=>{
      this.storeData=response;
    })
  }

}
