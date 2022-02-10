import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieContainerComponent,
    MovieListComponent,
    MovieFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  exports:[ 
    MovieContainerComponent,
    MovieListComponent,
    MovieFormComponent
  ]
})
export class MoviesModule { }
