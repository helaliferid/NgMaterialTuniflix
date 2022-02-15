import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IMovie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies?: IMovie[]
  isFormVisible = false
  movieToUpdate?:IMovie
  context : 'ADD' | 'UPDATE' = 'ADD'

  constructor(private movieService: MovieService) {
  }
  
  ngOnInit() {
    this.movieService.getAllMovies().subscribe(data=>this.movies=data)
  }

  showMovieFormForAdd(){
    this.isFormVisible = true,
    this.context='ADD'
  }

  onSavedMovie(){
    this.isFormVisible=false
    this.movieService.getAllMovies().subscribe(data=>this.movies=data)
  }

  showMovieFormForUpdate(movie: IMovie) {
    this.isFormVisible=true
    this.movieToUpdate={... movie}
    this.context='UPDATE'
  }

  deleteMovie(movie: IMovie) {
    this.movieService.removeMovie(movie).subscribe(console.log)
    this.movieService.getAllMovies().subscribe(data=>this.movies=data)
  }
}
