import { Component, OnInit } from '@angular/core';
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: any;
  products: Array<Product>;
  supplierData: Supplier;

  constructor(private productsService: ProductsService,
              private suppliersService: SuppliersService,
              private route: ActivatedRoute) {
    this.products = [];
    this.supplierData = {} as Supplier;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAllProducts();
    this.getSupplierById(Number(this.id));
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any) => {
      this.products = response;
      this.products = this.products.filter(x => x.supplierId == this.id)
    });
  }
  getSupplierById(id: number) {
    this.suppliersService.getById(id).subscribe((response:any) => {
      this.supplierData = response;
    })
  }


}
