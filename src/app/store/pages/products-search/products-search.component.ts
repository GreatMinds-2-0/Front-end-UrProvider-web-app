import { Component, OnInit } from '@angular/core';
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  searchTerm: any;
  id: any;
  products: Array<Product>;
  dataSource = new MatTableDataSource<Product>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.searchTerm = this.route.snapshot.paramMap.get("search");
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any)=>{
      this.dataSource.data= response;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
