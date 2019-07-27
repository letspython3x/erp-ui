import { Injectable } from '@angular/core';

import { IOrder } from '../../shared/models/order.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'crossDomain': 'true'
    })
};
const apiUrl = 'http://127.0.0.1:3001/order/';


@Injectable({
    providedIn: 'root'
})
export class OrderService {
    product_list: any;
    constructor(private api: HttpClient) { }

    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {

    //         // TODO: send the error to remote logging infrastructure
    //         console.error(error); // log to console instead

    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }

    addOrder(order): Observable<IOrder> {
        console.log(order)
        return this.api.post<any>(apiUrl, order, httpOptions);
        // .pipe(            tap((order: IOrder) => console.log(`Added order`)),
        //     catchError(this.handleError<IOrder>('addProduct')));
    }

    getOrders(params_url: string): Observable<any> {
        const url = `${apiUrl}${params_url}`;
        return this.api.get<any>(url);
        // .pipe(
        //   tap(heroes => console.log('fetched products below')),
        //   catchError(this.handleError('getProducts', []))

    }

    getOrder(order_id: number): Observable<any> {
        const url = `${apiUrl}?order_id=${order_id}`;
        return this.api.get<any>(url);
        // .pipe(
        //     tap(_ => console.log(`fetched order id=${order_id}`)),
        //     catchError(this.handleError<IOrder>(`getProduct id=${order_id}`))

    }
}