import { PrimaryIngrdients } from './../placeholderModels/primary-ingredients';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
 
@Injectable()
export class simplyFedServices {
    private primaryIngredientsUrl = 'https://simplyfedapi.vssdevelopment.com/v1/primaryingredients';  // URL to web api
    constructor(
        private http: HttpClient) { }
 
  /** GET heroes from the server */
/** GET heroes from the server */
getPrimaryIngredients (): Observable<PrimaryIngrdients[]> {
    return this.http.get<PrimaryIngrdients[]>(this.primaryIngredientsUrl)
  }
}