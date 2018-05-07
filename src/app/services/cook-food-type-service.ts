import { MessageService } from '../message.service';
import { IRecipeItem } from '../interfaces/irecipe';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CookFoodTypeService {
  private getRecipeItemsUrl = 'api/RecipeItems';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    getCookFoodType(): iCookFoodType[] {
      return [
       {
         id: "1",
         name: "Slow Cooker",
         imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_1.jpg"
       },
       {
         id: "2",
         name: "Juicer",
         imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_2.jpg"
       },
       {
         id: "3",
         name: "Sous Vide",
         imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_3.jpg"
       },
       {
         id: "4",
         name: "Blender",
         imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_4.jpg"
       }
     ]
   }
  /** GET heroes from the server */
  getHeroes (): Observable<any> {
    return this.http.get(this.getRecipeItemsUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
console.log(message)
  }
}