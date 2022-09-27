import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/supplier";
import {SuppliersService} from "../../../services/suppliers.service";
import {ActivatedRoute} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {

  id: any;
  supplierData: Supplier;

  constructor(private suppliersService: SuppliersService,
              private route: ActivatedRoute) {
    this.supplierData = {} as Supplier;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getSupplierById(Number(this.id));
  }

  getSupplierById(id: number) {
    this.suppliersService.getById(id).subscribe((response:any) => {
      this.supplierData = response;
    })
  }
}
