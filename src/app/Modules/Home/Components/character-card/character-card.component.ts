import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() characterData;

  constructor() { }

  ngOnInit(): void {
    console.log('chData')
    console.log(this.characterData);
  }

  visitCharacterProfile(profileLink) {
    window.open(profileLink, '_blank')
  }

}
