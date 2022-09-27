import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {Supplier} from "../../../model/supplier";
import {SuppliersService} from "../../../services/suppliers.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-supplier-inventory',
  templateUrl: './supplier-inventory.component.html',
  styleUrls: ['./supplier-inventory.component.css']
})
export class SupplierInventoryComponent implements OnInit {

  id: any;
  products: Array<Product>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any) => {
      this.products = response;
    });
  }

  deleteProduct(id: number) {
    this.productsService.delete(id).subscribe(() => {
      this.products = this.products
        .filter((o: Product) => { return o.id !== id ? o : false; });
    });
    console.log(this.products);
  }
}
