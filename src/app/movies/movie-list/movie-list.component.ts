import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[]=[]
  isFormVisible = false

  constructor(private movieService: MovieService) {
    this.movieService.getAllMovies().subscribe(data=>this.movies=data)
  }

  ngOnInit() {

  }

  addMovie(){
    this.isFormVisible = true
  }

  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  onSavedMovie(){
    this.toggleForm()
    this.movieService.getAllMovies().subscribe(data=>this.movies=data)
  }

  editMovie(movie: IMovie) {
    this.movieService.updateMovie(movie)
  }

  deleteMovie(movie: IMovie) {
  }
}
