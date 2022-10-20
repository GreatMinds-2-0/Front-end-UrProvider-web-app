import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  id:any;
  pid:any;
  productData: Product;
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.productData = {} as Product;
  }

  ngOnInit(): void {
    this.pid = Number(this.route.snapshot.paramMap.get("pid"));
    this.getProductById(Number(this.pid));
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  getProductById(id: number) {
    this.productsService.getById(id).subscribe((response:any) => {
      this.productData = response;
    })
  }

}
