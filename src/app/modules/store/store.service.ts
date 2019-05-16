import { Injectable } from '@angular/core';

import { IStore } from '../../shared/models/store.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'crossDomain': 'true'
  })
};
const apiUrl = 'http://127.0.0.1:3001/store/';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  StoreList: any;
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addStore(store): Observable<IStore> {
    return this.http.post<IStore>(apiUrl, store).pipe(
      tap((store: IStore) => console.log(`Store added`)), // Store w/ id=${store.store_id}`)),
      catchError(this.handleError<IStore>('addStore'))
    );
  }

  getStores(): Observable<IStore[]> {
    const url = `${apiUrl}`;
    return this.http.get<IStore[]>(url);
    // .pipe(
    //   tap(heroes => console.log('fetched Stores below')),
    //   catchError(this.handleError('getStores', []))

  }

  getStore(store_id:number): Observable<IStore> {
    const url = `${apiUrl}?store_id=${store_id}`;
    return this.http.get<IStore>(url).pipe(
      tap(_ => console.log(`fetched Store id=${store_id}`)),
      catchError(this.handleError<IStore>(`getStore id=${store_id}`))
    );
  }

  updateStore(store_id, store): Observable<any> {
    const url = `${apiUrl}?store_id=${store_id}`;
    return this.http.put(url, store, httpOptions).pipe(
      tap(_ => console.log(`updated Store id=${store_id}`)),
      catchError(this.handleError<any>('updateStore'))
    );
  }

  deleteStore(store_id): Observable<IStore> {
    const url = `${apiUrl}?store_id=${store_id}`;
    return this.http.delete<IStore>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Store id=${store_id}`)),
      catchError(this.handleError<IStore>('deleteStore'))
    );
  }

}