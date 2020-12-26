import { SearchService } from './../../../../Core/Services/search.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { debounceTime, distinctUntilChanged, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Character } from './../../../../Core/Interfaces/character-interface';
import { SearchResult } from './../../../../Core/Interfaces/searchResult-interface';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {

  searchTxt;
  charactersArray: Character[] = [];
  charctersloader = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchTextSubject.subscribe(searchValue => {
      this.searchTxt = searchValue;
      if (searchValue !== '') {
        this.getCharacters(searchValue);
      } else {
        this.charactersArray = [];
      }
    })
  }

  // Get Search Characters
  getCharacters(searchTxt) {
    this.charctersloader = true;
    this.searchService.getCharacter(searchTxt)
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        map(res => {
          const characters: Character[] = res['results'];
          return characters;
        }),
        mergeMap(characters => forkJoin(characters.map((character) => this.searchService.getCharacterHomeworld(character['homeworld'])
          .pipe(map(homeworldRes => {
            character['homeworld'] = homeworldRes['name'];
            return character;
          })
          ))))
      )
      .subscribe(res => {
        this.charactersArray = res;
        this.charctersloader = false;
      })

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.charactersArray, event.previousIndex, event.currentIndex);
  }

}
