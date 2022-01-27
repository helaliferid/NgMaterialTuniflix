import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  public movieForm;

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
  }
}
