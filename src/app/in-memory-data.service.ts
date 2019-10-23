import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Database', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 2, name: 'C', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 3, name: 'Python', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 4, name: 'Java', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 5, name: 'SQL', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 6, name: 'Angular', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 7, name: 'C++', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 8, name: 'R', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 9, name: 'DBMS', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' },
      { id: 10, name: 'Node js', author: 'abc', price: 150, publishedYear: 2013, publisher: 'def' }
    
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}