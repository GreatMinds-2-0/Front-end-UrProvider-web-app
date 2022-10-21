import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Supplier} from "../model/supplier";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends TemplateService<Supplier>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';
  }
}
