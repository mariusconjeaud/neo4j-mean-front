import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Cat } from './cat'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsUrl = 'http://localhost:3001/api/cats'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl)
      .pipe(
        catchError(this.handleError<Cat[]>('getAllCats', []))
      )
  }

  getCat(name: string): Observable<Cat> {
    const url = `${this.catsUrl}/${name}`;
    return this.http.get<Cat>(url)
  }

  insertCat(cat: Cat): Observable<Cat> {
    const url = `${this.catsUrl}/`;
    return this.http.post<Cat>(url, cat)
  }

  updateCat(cat: Cat): Observable<void> {
    const url = `${this.catsUrl}/${cat.name}`;
    return this.http.put<void>(
      url, cat
    )
  }

  deleteCat(name: string) {
    const url = `${this.catsUrl}/${name}`;
    return this.http.delete(url)
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
