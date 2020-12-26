import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


describe('#SearchTextSubject', () => {

  let service: SearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SearchService);
  });

  it('should return the value that emitted to it', (done) => {
    const emittedSearchString = 'Test';
    service.searchTextSubject.subscribe(result => {
      expect(result).toEqual(emittedSearchString);
      done();
    });
    service.searchTextSubject.next(emittedSearchString);
  })
})

describe('#getCharacter Function', () => {

  let service: SearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SearchService);
  });

  it('should return an Observable<SearchResult> when sending sh as search text', () => {
    const dumySearchResult = {
      "count": 3,
      "next": null,
      "previous": null,
      "results": [
        {
          "name": "Quarsh Panaka",
          "height": "183",
          "mass": "unknown",
          "hair_color": "black",
          "skin_color": "dark",
          "eye_color": "brown",
          "birth_year": "62BBY",
          "gender": "male",
          "homeworld": "http://swapi.dev/api/planets/8/",
          "films": [
            "http://swapi.dev/api/films/4/"
          ],
          "species": [],
          "vehicles": [],
          "starships": [],
          "created": "2014-12-19T17:55:43.348000Z",
          "edited": "2014-12-20T21:17:50.399000Z",
          "url": "http://swapi.dev/api/people/42/"
        },
        {
          "name": "Shmi Skywalker",
          "height": "163",
          "mass": "unknown",
          "hair_color": "black",
          "skin_color": "fair",
          "eye_color": "brown",
          "birth_year": "72BBY",
          "gender": "female",
          "homeworld": "http://swapi.dev/api/planets/1/",
          "films": [
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/"
          ],
          "species": [],
          "vehicles": [],
          "starships": [],
          "created": "2014-12-19T17:57:41.191000Z",
          "edited": "2014-12-20T21:17:50.401000Z",
          "url": "http://swapi.dev/api/people/43/"
        },
        {
          "name": "Shaak Ti",
          "height": "178",
          "mass": "57",
          "hair_color": "none",
          "skin_color": "red, blue, white",
          "eye_color": "black",
          "birth_year": "unknown",
          "gender": "female",
          "homeworld": "http://swapi.dev/api/planets/58/",
          "films": [
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
          ],
          "species": [
            "http://swapi.dev/api/species/35/"
          ],
          "vehicles": [],
          "starships": [],
          "created": "2014-12-20T18:44:01.103000Z",
          "edited": "2014-12-20T21:17:50.486000Z",
          "url": "http://swapi.dev/api/people/78/"
        }
      ]
    };

    service.getCharacter('sh').subscribe(result => {
      expect(result).toEqual(dumySearchResult);
    });

    const req = httpTestingController.expectOne('https://swapi.dev/api/people/?search=sh');
    req.flush(dumySearchResult);
  })
})

describe('#getHomeworld Function', () => {

  let service: SearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SearchService);
  });

  it('should return an Observable when calling it', () => {
    const dumyHomeworldResult = {
      "name": "Naboo",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "population": "4500000000",
      "residents": [
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/21/",
        "http://swapi.dev/api/people/35/",
        "http://swapi.dev/api/people/36/",
        "http://swapi.dev/api/people/37/",
        "http://swapi.dev/api/people/38/",
        "http://swapi.dev/api/people/39/",
        "http://swapi.dev/api/people/42/",
        "http://swapi.dev/api/people/60/",
        "http://swapi.dev/api/people/61/",
        "http://swapi.dev/api/people/66/"
      ],
      "films": [
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "http://swapi.dev/api/planets/8/"
    };

    service.getCharacterHomeworld('http://swapi.dev/api/planets/8/').subscribe(result => {
      expect(result).toEqual(dumyHomeworldResult);
    });

    const req = httpTestingController.expectOne('http://swapi.dev/api/planets/8/');
    req.flush(dumyHomeworldResult);
  })
})
