import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { IMovie } from '../movie-container/movie-container.component';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements AfterViewInit {
  @Input() movies: IMovie[] = [];
  constructor() {
  }

  ngAfterViewInit(): void {

  }

  editMovie(movie:IMovie){
    console.log('Edit Movie');
  }

  deleteMovie(movie:IMovie){
      console.log('Delete Movie');
  }
}
