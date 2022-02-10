import { Component,AfterContentInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from './movie.model';


@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent {
  isMovieFormShowed:boolean=false;
  movies:IMovie[]=[];

  constructor(private movieService:MovieService){
   this.movieService.getAllMovies().subscribe(
     {
       next:(data)=>{
          this.movies = [...data]
       },
       error:(error)=>{
          alert(JSON.stringify(error,undefined,3))
       },
       complete:()=>{
          console.log('completed')
       }
     }
   )
  }

 
  hideForm(e:any){    
    this.isMovieFormShowed = !this.isMovieFormShowed
  }

  showMovieForm(){
    this.isMovieFormShowed = !this.isMovieFormShowed
  }

  addMovie(movie:IMovie){
    //  this.movieService.addMovie(movie);
  }

  deleteMovie(movie:IMovie){
   // this.movieService.removeMovie(movie);
  }

}
