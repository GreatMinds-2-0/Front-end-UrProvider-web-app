import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute} from "@angular/router";
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

  searchTerm = '';
  id: any;
  storeData: Store;
  supplierData: Array<Supplier>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<Product>()

  constructor(private suppliersService: SuppliersService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private storesService: StoresService) {
    this.supplierData = [];
    this.storeData = {} as Store;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getSupplier();
    this.getStoreById(this.id);
    this.getAllProducts();
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

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any)=>{
      this.dataSource = response;
    })
  }

  filterProducts(searchTerm: string) {
    this.dataSource.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
