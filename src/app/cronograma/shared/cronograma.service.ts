import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  constructor(private http: HttpClient) { }


  getAllCronograma() {
    return this.http.get('http://localhost:3000/cronogramas');
  }
  getAllAula() {
    return this.http.get('http://localhost:3000/aulas');
  }
}
