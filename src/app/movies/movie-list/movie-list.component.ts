import { Component, OnInit, AfterContentInit } from '@angular/core';
import { IMovie } from '../movie-container/movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit,AfterContentInit{
  movies:IMovie[]=[];

  constructor(private movieService:MovieService) {
   
  }

  
  ngOnInit(){
    this.movies=this.movieService.getAllMovies()
  }
  
  ngAfterContentInit(): void {
    this.movies=this.movieService.getAllMovies()
  }
  editMovie(movie:IMovie){
    this.movieService.updateMovie(movie)
  }

  deleteMovie(movie:IMovie){
    console.log('delete from the list')
     this.movieService.removeMovie(movie)
  }
}
