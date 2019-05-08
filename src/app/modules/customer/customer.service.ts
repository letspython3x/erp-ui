import { Injectable } from '@angular/core';
import { ICustomer } from '../../shared/models/customer.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'crossDomain': 'true'
  })
};
const apiUrl = 'http://127.0.0.1:3001/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(apiUrl, customer, httpOptions).pipe(
      tap((customer: ICustomer) => console.log(`added Customer w/ id=${customer.customer_id}`)),
      catchError(this.handleError<ICustomer>('addCustomer'))
    );
  }

  getCustomers(): Observable<ICustomer[]> {
    const url = `${apiUrl}`;    
    return this.http.get<ICustomer[]>(url);
    // .pipe(
    //   tap(heroes => console.log('fetched products below')),
    //   catchError(this.handleError('getProducts', []))

  }

  // getCustomer(param: any): Observable<ICustomer> {
  //   // const url = `${apiUrl}?customer_id=${customer_id}&phone=${phone}&email=${email}`;
  //   const url = `${apiUrl}${param}`;
  //   return this.http.get<ICustomer>(url).pipe(
  //     tap(_ => console.log(`fetched Customer id=${param}`)),
  //     catchError(this.handleError<ICustomer>(`getCustomer id=${param}`))
  //   );
  // }

  getCustomer(customer_id: number, phone:string, email:string): Observable<ICustomer> {
    const url = `${apiUrl}?customer_id=${customer_id}&phone=${phone}&email=${email}`;
    // const url = `${apiUrl}${param}`;
    console.log(url);
    return this.http.get<ICustomer>(url).pipe(
      tap(_ => console.log(`fetched Customer id=${customer_id}`)),
      catchError(this.handleError<ICustomer>(`getCustomer id=${customer_id}`))
    );
  }

  updateCustomer(id, customer): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, customer, httpOptions).pipe(
      tap(_ => console.log(`updated Customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  deleteCustomer(id): Observable<ICustomer> {
    const url = `${apiUrl}${id}`;

    return this.http.delete<ICustomer>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Customer id=${id}`)),
      catchError(this.handleError<ICustomer>('deleteCustomer'))
    );
  }

}