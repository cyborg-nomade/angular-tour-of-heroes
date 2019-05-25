import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() { }

  createDb() {
    const heroes = [
      {id: 11, name: 'Till Lindermann'},
      {id: 12, name: 'Pablo Escobar'},
      {id: 13, name: 'Bombastic'},
      {id: 14, name: 'Mr. Fantastic'},
      {id: 15, name: 'Magneto'},
      {id: 16, name: 'Rubber Man'},
      {id: 17, name: 'Daredevil'},
      {id: 18, name: 'Nick Land'},
      {id: 19, name: 'The Thing'},
      {id: 20, name: 'Storm'},
    ];
    return {heroes};
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
