import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iquote } from '../interfaces/iquote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuotes() : Observable<Iquote >{
    const url="http://api.quotable.io/random";
    return this.httpClient.get<Iquote >(url);
  }
}
