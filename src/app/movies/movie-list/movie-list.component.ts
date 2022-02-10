import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../movie-container/movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  @Input() movies:IMovie[]=[];
  @Output() onDeleteMovie : EventEmitter<any>=new EventEmitter<IMovie>()

  constructor(private movieService:MovieService) {
  }

  ngOnInit(){
   
  }
  

  editMovie(movie:IMovie){
    this.movieService.updateMovie(movie)
  }

  deleteMovie(movie:IMovie){
     this.onDeleteMovie.next(movie)
  }
}
