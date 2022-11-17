import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends TemplateService<Product>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = '/api/v1/products';
  }
}
