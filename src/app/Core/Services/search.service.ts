import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  // Subject That Contains Search String
  searchTextSubject = new Subject<string>();

  endPointBaseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getCharacter(characterName) {
    return this.http.get(`${this.endPointBaseUrl}people/?search=${characterName}`);
  }

  getCharacterHomeworld(homeworldApiLink) {
    console.log(homeworldApiLink)
    return this.http.get(homeworldApiLink);
  }

}
