import { Character } from "./character-interface";

export interface SearchResult {
  count: number;
  next?: any;
  previous?: any;
  results: Character[];
}

