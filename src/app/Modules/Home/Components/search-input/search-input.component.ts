import { SearchService } from './../../../../Core/Services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  value = '';
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearchChange() {
    this.searchService.searchTextSubject.next(this.value);
  }

}
