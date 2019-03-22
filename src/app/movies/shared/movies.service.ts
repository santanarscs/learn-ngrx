import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`http://localhost:3000/movies`).pipe(
      map((data: any[]) => {
        const dataResponse = Object.assign({}, {
          movies: [...data],
          totalCount: data.length
        })
        return dataResponse;
      })
    )
  }
  insert(data) {
    return this.http.post(`http://localhost:3000/movies`, data);
  }
  remove(key) {
    return this.http.delete(`http://localhost:3000/movies/${key}`)
  }
}
