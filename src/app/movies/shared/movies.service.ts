import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAll() {
    return of({
      movies: [
        { title: 'A volta dos que nao foram', description: 'Descrição da volta que nao foram' },
        { title: 'A volta dos que nao foram o retorno', description: 'Descrição da volta que nao foram o retorno' },
      ],
      totalCount: 2
    });
  }
}
