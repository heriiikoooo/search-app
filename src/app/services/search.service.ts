import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  })
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  myUrl: string = 'https://raw.githubusercontent.com/jmmanalo0131/heriko/master/sample.json';

  itunesApi: string = "https://itunes.apple.com/search";
  results: any[];

  constructor(
    private http: HttpClient
  ) { }

  // Get initial data from github
  getSample(): Observable<any[]> {
    return this.http.get<any[]>(this.myUrl);
  }


  //search func 
  search(term: string): Observable<any[]> {
    let apiURL = `${this.itunesApi}?term=${term}&media=music&limit=20`;
    return this.http.get<any[]>(apiURL).pipe(
      map((res: any) => {
        return res.results.map(item => {
          return item;
        });
      })
    );
  }
}
