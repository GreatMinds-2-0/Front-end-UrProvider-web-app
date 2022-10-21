import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormControl} from '@angular/forms';
import {Supplier} from "../../../supplier/model/supplier";
import {MatTableDataSource} from "@angular/material/table";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../store/model/store";
import {StoresService} from "../../../store/services/stores.service";
import {TemplateService} from "../../../shared/services/template.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true;
  selectedUser: string='';
  path=`/sign-in`;
  idUser!:Number;
  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('', [Validators.required, Validators.min(3) ]);
  dataSupplier = new MatTableDataSource<Supplier>;
  dataStore=new MatTableDataSource<Store>;
  users = [
    { value: 'store'},
    { value: 'supplier'},
  ]
  constructor(private router: Router,
              private suppliersService: SuppliersService,
              private storesService:StoresService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storesService.getUserId$().subscribe((userId:Number)=> this.idUser=userId)

  }
  passwordInput(){return this.password}

  getSupplier() {
    this.suppliersService.getAll().subscribe((response: any) => {
      this.dataSupplier.data = response;
      this.dataSupplier.data = this.dataSupplier.data.filter(x => x.email == this.email.value
        && x.password==this.password.value)
    });
  }
/**/

  getStore() {
    this.storesService.getAll().subscribe((response: any) => {
      this.dataStore.data = response;
      this.dataStore.data = this.dataStore.data.filter(x => x.email == this.email.value
      && x.password==this.password.value)
    });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getProfile(){
    return this.selectedUser;
  }
  isMatchesUser(){
    this.getStore();
    this.getSupplier();
    if (this.dataStore.data.length !==0|| this.dataSupplier.data.length!==0){
      return true;
    }else return false
  }
  /**/
  validatePassword() {

    if (this.isMatchesUser()) {
      if (this.getProfile() === 'store') {
        this.router.navigate([`/store-home/${this.dataStore.data[0].id}`]);
        this.storesService.setUserId(this.dataStore.data[0].id);
      }
      if (this.getProfile() === 'supplier') {
        this.router.navigate([`supplier/${this.dataSupplier.data[0].id}/supplier-home`]);
        //this.router.navigate([{outlets:{supplier:[`supplier/${this.dataSupplier.data[0].id}/supplier-home`]}}]);
        this.storesService.setUserId(this.dataSupplier.data[0].id);
      }

    }
  }
}
