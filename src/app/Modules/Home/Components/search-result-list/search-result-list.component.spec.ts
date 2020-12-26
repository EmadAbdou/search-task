import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from 'src/app/Core/Services/search.service';

import { SearchResultListComponent } from './search-result-list.component';

describe('SearchResultListComponent', () => {
  let component: SearchResultListComponent;
  let fixture: ComponentFixture<SearchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultListComponent ],
      imports: [HttpClientTestingModule],
      providers: [SearchService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
