import { Injectable } from '@angular/core';

import { ITrader } from '../../shared/models/trader.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'crossDomain': 'true'
  })
};
const apiUrl = 'http://127.0.0.1:3001/trader/';


@Injectable({
  providedIn: 'root'
})
export class TraderService {
  traderList: any;
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addTrader(trader): Observable<ITrader> {
    return this.http.post<ITrader>(apiUrl, trader).pipe(
      tap((trader: ITrader) => console.log(`trader added`)), // trader w/ id=${trader.trader_id}`)),
      catchError(this.handleError<ITrader>('addtrader'))
    );
  }

  getTraders(): Observable<ITrader[]> {
    const url = `${apiUrl}`;
    return this.http.get<ITrader[]>(url);
    // .pipe(
    //   tap(heroes => console.log('fetched traders below')),
    //   catchError(this.handleError('gettraders', []))

  }

  getTrader(trader_id:number): Observable<ITrader> {
    const url = `${apiUrl}?trader_id=${trader_id}`;
    return this.http.get<ITrader>(url).pipe(
      tap(_ => console.log(`fetched trader id=${trader_id}`)),
      catchError(this.handleError<ITrader>(`gettrader id=${trader_id}`))
    );
  }

  updateTrader(trader_id, trader): Observable<any> {
    const url = `${apiUrl}?trader_id=${trader_id}`;
    return this.http.put(url, trader, httpOptions).pipe(
      tap(_ => console.log(`updated trader id=${trader_id}`)),
      catchError(this.handleError<any>('updatetrader'))
    );
  }

  deleteTrader(trader_id): Observable<ITrader> {
    const url = `${apiUrl}?trader_id=${trader_id}`;
    return this.http.delete<ITrader>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted trader id=${trader_id}`)),
      catchError(this.handleError<ITrader>('deletetrader'))
    );
  }

}