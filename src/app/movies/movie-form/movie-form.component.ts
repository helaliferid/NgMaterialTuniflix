import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../movie.service';
import { IMovie } from '../movie.model';



@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit,OnChanges {
  public movieForm;
  @Output() onMovieSave:EventEmitter<any>=new EventEmitter<any>()
  @Input() movie?:IMovie
  @Input() context:any;

  constructor(private fb:FormBuilder,private movieService:MovieService) {
    this.movieForm=fb.group({
      id:[''],
      title:[''],
      description:[''],
      cover:['']
    })
  }

  ngOnInit(): void {
  }

  
  ngOnChanges(){
      this.movieForm.patchValue({id:this.movie?.id})
      this.movieForm.patchValue({title:this.movie?.title})
      this.movieForm.patchValue({description:this.movie?.description})
      this.movieForm.patchValue({cover:this.movie?.cover})
  }

  saveMovie(){
    if(this.context==='ADD'){
      this.movieService.addMovie(this.movieForm.value).subscribe(data=>{
        this.onMovieSave.emit('Ok')
      })
    }else if(this.context==='UPDATE'){
      this.movieService.updateMovie(this.movieForm.value).subscribe(data=>{
        this.onMovieSave.emit('Ok')
      }
    )
    }
    
  }
}
