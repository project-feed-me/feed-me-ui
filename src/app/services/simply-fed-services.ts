import { PrimaryIngrdients } from './../placeholderModels/primary-ingredients';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
 
@Injectable()
export class simplyFedServices {
    private recipesUrl = 'https://simplyfedapi.vssdevelopment.com/v1/cookingmethods/:cid/primaryingredients/:pid'
    private primaryIngredientsUrl = 'https://simplyfedapi.vssdevelopment.com/v1/primaryingredients';  // URL to web api
    private otherHalfUrl = 'recipes?page=0&size=99&sort=name'
    constructor(
        private http: HttpClient) { }
 
/** GET all primary ingrdients from the server */
getPrimaryIngredients (): Observable<PrimaryIngrdients[]> {
    return this.http.get<PrimaryIngrdients[]>(this.primaryIngredientsUrl);
  }
  //* GET specific primary ingrdient from the server */
  getPrimaryIngredient(primaryId: string, cookingMethodId: string): Observable<any> {
    let tempUrl = this.recipesUrl.replace(':cid', cookingMethodId).replace(':pid', primaryId);
    const url = `${tempUrl}/${this.otherHalfUrl}`;
    return this.http.get<any>(url)
  }
}