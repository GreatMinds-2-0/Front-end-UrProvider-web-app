import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Supplier} from "../model/supplier";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor() { }

}
