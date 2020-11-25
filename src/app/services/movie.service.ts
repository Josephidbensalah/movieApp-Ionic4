import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all='',
  movie='movie',
  serie='serie',
  episode='episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url ='http://www.omdbapi.com/';
  apikey='e765a17a';//place your apikey here 


  constructor(private http:HttpClient) { }

  searchData(title:string,type:SearchType):Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apikey}`)
            .pipe(map(results => results['Search'])
            );
  }

  getDeatils(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apikey}`);
  }
}
