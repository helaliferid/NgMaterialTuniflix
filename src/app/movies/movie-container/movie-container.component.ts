import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from './movie.model';


@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent  {
  isMovieFormShowed:boolean=false;

  constructor(private movieService:MovieService){
 
  }

  hideForm(e:any){
    this.isMovieFormShowed = !this.isMovieFormShowed
  }

  showMovieForm(){
    this.isMovieFormShowed = !this.isMovieFormShowed
  }

  addMovie(movie:IMovie){
      this.movieService.addMovie(movie);
  }

}
