import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`http://localhost:3000/disciplinas`).pipe(
      // delay(5000),
      map((data: any[]) => {
        const dataResponse = Object.assign({}, {
          disciplinas: [...data],
          totalCount: data.length
        })
        return dataResponse;
      })
    )
  }
  insert(data) {
    return this.http.post(`http://localhost:3000/disciplinas`, data);
  }
  remove(key) {
    return this.http.delete(`http://localhost:3000/disciplinas/${key}`)
  }
}
