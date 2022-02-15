import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  public movieForm;
  @Output() onMovieSave:EventEmitter<any>=new EventEmitter<any>()

  constructor(private fb:FormBuilder,private movieService:MovieService) {
    this.movieForm=fb.group({
      title:[''],
      description:[''],
      cover:['']
    })
  }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.addMovie(this.movieForm.value).subscribe(console.log)
    this.onMovieSave.emit('Ok')
  }
}
