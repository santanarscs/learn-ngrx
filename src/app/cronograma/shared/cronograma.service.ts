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
  getAllAula(cronogramaId) {
    return this.http.get(`http://localhost:3000/aulas?cronogramaId=${cronogramaId}`);
  }
  saveAula(data) {
    return this.http.post('http://localhost:3000/aulas', data);
  }
}
