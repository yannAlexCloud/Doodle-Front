import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Utilisateur} from './utilisateur';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Sondage} from './sondage';
import {Dates} from './dates';
@Injectable()
export class DoodleServiceService {

    const; httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'my-auth-token'
        })
    };
  constructor(private http: HttpClient) { }
    /** POST: add a new user to the database */
    addUser(user: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>('http://localhost:8080/users/', user, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }
    addSondage(sondage: Sondage, idUser: number): Observable<Sondage> {
        return this.http.post<Sondage>('http://localhost:8080/users/' + idUser + '/sondages', sondage, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }
    connect(user: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>('http://localhost:8080/users/connect', user, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    ajoutDate(date: Dates, idUser: number, idSondage: number): Observable<Dates> {
        return this.http.post<Dates>('http://localhost:8080/users/' + idUser + '/sondages/' + idSondage + 'dates', date, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
