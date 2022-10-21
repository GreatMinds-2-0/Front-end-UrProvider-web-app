import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Store} from "../model/store";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoresService extends TemplateService<Store>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/stores';
  }
}
