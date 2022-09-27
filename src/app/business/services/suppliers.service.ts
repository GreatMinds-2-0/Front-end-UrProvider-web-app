import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Supplier} from "../model/supplier";
import {TemplateService} from "../../shared/template.service";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends TemplateService<Supplier>{

  constructor(http: HttpClient) {
      super(http);
      this.basePath= 'http://localhost:3000/api/v1/suppliers';
    }
}
