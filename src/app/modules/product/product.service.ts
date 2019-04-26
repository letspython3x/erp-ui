import { Injectable } from '@angular/core';

import { IProduct } from '../../shared/models/product.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';

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

  addProduct(product): Observable<Product> {
    return this.http.put<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  getProducts(): Observable<IProduct[]> {
    const url = `${apiUrl}`;
    return this.http.get<IProduct[]>(apiUrl);
    // .pipe(
    //   tap(heroes => console.log('fetched products below')),
    //   catchError(this.handleError('getProducts', []))

  }

  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}+${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct(id, product): Observable<any> {
    const url = `${apiUrl}+${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id): Observable<Product> {
    const url = `${apiUrl} + ${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

}