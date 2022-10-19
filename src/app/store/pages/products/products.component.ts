import { Component, OnInit } from '@angular/core';
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: any;
  products: Array<Product>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any) => {
      this.products = response;
      this.products = this.products.filter(x => x.supplierId == this.id)
    });
  }

}
