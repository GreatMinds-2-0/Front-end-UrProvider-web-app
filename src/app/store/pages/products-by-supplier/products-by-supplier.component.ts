import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
import {ActivatedRoute} from "@angular/router";
import {SuppliersService} from "../../../supplier/services/suppliers.service";

@Component({
  selector: 'app-products-by-supplier',
  templateUrl: './products-by-supplier.component.html',
  styleUrls: ['./products-by-supplier.component.css']
})
export class ProductsBySupplierComponent implements OnInit {

  searchTerm: any="";
  id: any;


  dataSource = new MatTableDataSource<Product>;

  constructor(private productsService: ProductsService,private supplierService: SuppliersService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("pid"));
    this.searchTerm = this.route.snapshot.paramMap.get("search");
    this.getProductsBySupplierId();

  }
  getTotalProducts(){
    return this.dataSource.data.length;
  }

  getProductsBySupplierId(){
    this.supplierService.getProductsBySupplier(this.id).subscribe((response:any) => {
      this.dataSource.data = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterInit(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
