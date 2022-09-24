import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/supplier";

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {

  supplierData: Supplier;

  constructor() {
    this.supplierData = {} as Supplier;
  }

  ngOnInit(): void {
  }

}
