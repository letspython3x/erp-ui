import { Injectable } from '@angular/core';
import { IClient } from '../../shared/models/client.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'crossDomain': 'true'
  })
};
const apiUrl = 'http://127.0.0.1:3001/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addClient(client): Observable<IClient> {
    return this.http.post<IClient>(apiUrl, client, httpOptions).pipe(
      tap((client: IClient) => console.log(`added Client w/ id=${client.client_id}`)),
      catchError(this.handleError<IClient>('addClient'))
    );
  }

  getClients(): Observable<IClient[]> {
    const url = `${apiUrl}`;
    return this.http.get<IClient[]>(url);
    // .pipe(
    //   tap(heroes => console.log('fetched products below')),
    //   catchError(this.handleError('getProducts', []))

  }

  getClient(client_id: number, phone: string, email: string): Observable<IClient> {
    const url = `${apiUrl}?client_id=${client_id}&phone=${phone}&email=${email}`;
    // const url = `${apiUrl}${param}`;
    console.log(url);
    return this.http.get<IClient>(url).pipe(
      tap(_ => console.log(`fetched Client id=${client_id}`)),
      catchError(this.handleError<IClient>(`getClient id=${client_id}`)));
  }

  updateClient(id, client): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, client, httpOptions).pipe(
      tap(_ => console.log(`updated Client id=${id}`)),
      catchError(this.handleError<any>('updateClient')));
  }

  updateClientAccounts(account) {
    const url = `${apiUrl}${account.client_id}`;
    return this.http.patch(url, account, httpOptions).pipe(
      tap(_ => console.log(`Updated Client accounts id=${account.client_id}`)),
      catchError(this.handleError('updateClientAccount')));
  }

  deleteClient(id): Observable<IClient> {
    const url = `${apiUrl}${id}`;

    return this.http.delete<IClient>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Client id=${id}`)),
      catchError(this.handleError<IClient>('deleteClient')));
  }

}