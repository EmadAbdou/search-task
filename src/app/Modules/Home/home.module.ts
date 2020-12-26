import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchResultListComponent } from './Components/search-result-list/search-result-list.component';
import { CoreModule } from './../../Core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './Components/search-input/search-input.component';

// Importing Necessary Angular Material Components
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterCardComponent } from './Components/character-card/character-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    SearchInputComponent,
    SearchResultListComponent,
    HomePageComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule { }
