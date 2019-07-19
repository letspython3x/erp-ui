import { Injectable } from '@angular/core';

import { ICategory } from '../../shared/models/category.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { IQuotation } from '@/shared/models/quotation.model';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'crossDomain': 'true'
    })
};
const apiUrl = 'http://127.0.0.1:3001/category/';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    product_list: any;
    constructor(private api: HttpClient) { }


    getCategories(): Observable<ICategory[]> {
        const url = `${apiUrl}`;
        return this.api.get<any>(url);
        // .pipe(
        //   tap(heroes => console.log('fetched products below')),
        //   catchError(this.handleError('getProducts', []))

    }

    getCategory(category_id: number): Observable<ICategory> {
        const url = `${apiUrl}?category_id=${category_id}`;
        return this.api.get<any>(url);
        // .pipe(
        //     tap(_ => console.log(`fetched quotation id=${quotation_id}`)),
        //     catchError(this.handleError<IQuotation>(`getProduct id=${quotation_id}`))

    }

}
