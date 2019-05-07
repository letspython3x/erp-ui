import { Injectable } from '@angular/core';

import { IProduct } from '../../shared/models/product.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'crossDomain': 'true'
  })
};
const apiUrl = 'http://127.0.0.1:3001/product/';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: any;
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addProduct(product): Observable<IProduct> {
    return this.http.post<IProduct>(apiUrl, product, httpOptions).pipe(
      tap((product: IProduct) => console.log(`added product w/ id=${product.product_id}`)),
      catchError(this.handleError<IProduct>('addProduct'))
    );
  }

  getProducts(): Observable<IProduct[]> {
    const url = `${apiUrl}`;    
    return this.http.get<IProduct[]>(url);
    // .pipe(
    //   tap(heroes => console.log('fetched products below')),
    //   catchError(this.handleError('getProducts', []))

  }

  getProduct(param: any): Observable<IProduct> {
    const url = `${apiUrl}${param}`;
    return this.http.get<IProduct>(url).pipe(
      tap(_ => console.log(`fetched product id=${param}`)),
      catchError(this.handleError<IProduct>(`getProduct id=${param}`))
    );
  }

  updateProduct(id, product): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id): Observable<IProduct> {
    const url = `${apiUrl}${id}`;

    return this.http.delete<IProduct>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<IProduct>('deleteProduct'))
    );
  }

}