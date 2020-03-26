import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsBaseUrl = `${environment.APIENDPOINT}`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    const url = `${this.catsBaseUrl}/cats`;
    return this.http.get<Cat[]>(url)
      .pipe(
        catchError(this.handleError<Cat[]>('getAllCats', []))
      );
  }

  getCat(name: string): Observable<Cat> {
    const url = `${this.catsBaseUrl}/cat/${name}`;
    return this.http.get<Cat>(url);
  }

  createCat(cat: Cat): Observable<Cat> {
    const url = `${this.catsBaseUrl}/cats`;
    return this.http.post<Cat>(url, cat);
  }

  updateCat(cat: Cat): Observable<void> {
    const url = `${this.catsBaseUrl}/cat/${cat.name}`;
    return this.http.put<void>(
      url, cat
    );
  }

  deleteCat(name: string) {
    const url = `${this.catsBaseUrl}/cats/${name}`;
    return this.http.delete(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
