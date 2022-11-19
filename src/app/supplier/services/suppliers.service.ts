import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Supplier} from "../model/supplier";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Product} from "../../inventory/model/product";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends TemplateService<Supplier>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8080/api/v1/suppliers';
  }
  updateProductBySupplier(id: any,pid:any, item: any): Observable<Product> {
    return this.http.put<Product>(`${this.basePath}/${id}/products/${pid}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  deleteProductBySupplier(id: any,pid:any){
    return this.http.delete(`${this.basePath}/${id}/products/${pid}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createProductBySupplier(id:any,item: any): Observable<Product> {
    return this.http.post<Product>(
      `${this.basePath}/${id}/products`,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
