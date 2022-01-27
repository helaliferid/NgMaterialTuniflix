import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMovie } from '../movie-container/movie-container.component';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  public movieForm;
  @Output() onMovieSave:EventEmitter<any>=new EventEmitter<any>()

  constructor(private fb:FormBuilder) {
    this.movieForm=fb.group({
      title:[''],
      description:[''],
      cover:['']
    })
  }

  ngOnInit(): void {
  }

  saveMovie(){
    console.log(this.movieForm.value);
    this.onMovieSave.next(this.movieForm.value);
  }
}
