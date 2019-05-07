import { Injectable } from '@angular/core';

import { IQuotation } from '../../shared/models/quotation.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'crossDomain': 'true'
    })
};
const apiUrl = 'http://127.0.0.1:3001/quotation/';


@Injectable({
    providedIn: 'root'
})
export class QuotationService {
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

    addQuotation(quotation): Observable<IQuotation> {
        console.log(quotation)
        return this.api.post<IQuotation>(apiUrl, quotation, httpOptions);
        // .pipe(            tap((quotation: IQuotation) => console.log(`Added quotation`)),
        //     catchError(this.handleError<IQuotation>('addProduct')));
    }

    getQuotations(): Observable<IQuotation[]> {
        const url = `${apiUrl}`;
        return this.api.get<IQuotation[]>(apiUrl);
        // .pipe(
        //   tap(heroes => console.log('fetched products below')),
        //   catchError(this.handleError('getProducts', []))

    }

    getQuotation(quotation_id: number): Observable<IQuotation> {
        const url = `${apiUrl}${quotation_id}`;
        return this.api.get<IQuotation>(url);
        // .pipe(
        //     tap(_ => console.log(`fetched quotation id=${quotation_id}`)),
        //     catchError(this.handleError<IQuotation>(`getProduct id=${quotation_id}`))
        
    }
}