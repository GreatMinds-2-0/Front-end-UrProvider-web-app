import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {Product} from "../../../inventory/model/product";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../inventory/services/products.service";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: Product;
  supplierData: Supplier;
  id: any;
  constructor(private productsService: ProductsService,
              private suppliersService: SuppliersService,
              private route: ActivatedRoute) {
    this.productData = {} as Product;
    this.supplierData = {} as Supplier;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getProductById(Number(this.id));
    this.getSupplierById(Number(this.id));
  }
  getProductById(id: number) {
    this.productsService.getById(id).subscribe((response:any) => {
      this.productData = response;

    })
  }
  getSupplierById(id: number) {
    this.suppliersService.getById(id).subscribe((response:any) => {
      this.supplierData = response;
    })
  }
}
