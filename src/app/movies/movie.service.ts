import { Injectable } from '@angular/core';
import { IMovie } from './movie-container/movie.model';

export const INITIAL_MOVIES: IMovie[] = [
  {
    title: 'The Oval',
    description: 'Action Movie',
    cover:
      'https://fr.web.img4.acsta.net/c_310_420/pictures/19/10/16/16/53/3090773.jpg',
  },
  {
    title: 'Yori Boy',
    description: 'Action Movie MMA',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/b4/Boyka_Undisputed.jpg',
  },
  {
    title: 'Casa de Papel',
    description: 'Action Movie',
    cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg',
  },
  {
    title: 'Free Fight',
    description: 'Action Movie Martial Art',
    cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg',
  },
  {
    title: 'Pearl Harobour',
    description: 'Japan agains USA 2 WW War',
    cover:
      'https://metro.co.uk/wp-content/uploads/2021/12/pearl-harbor-movie-511e.jpg?quality=90&strip=all&zoom=1&resize=644%2C483',
  },
];


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: IMovie[]=[];

  constructor(){
   
  }
  getAllMovies():IMovie[]{
    return this.movies;
  }

  addMovie(movie:IMovie):void{
      this.movies.push(movie);
  }


  removeMovie(movie:IMovie){
    console.log('delete from the service')
    let tmp=[]
    for(let m of this.movies){
      console.log(!(m.title === movie.title ||
        m.description === movie.description ||
        m.cover === movie.cover))

      if(!(m.title === movie.title &&
         m.description === movie.description &&
         m.cover === movie.cover)){
           tmp.push(m)
         }
    }
    this.movies =[...tmp];
  }

  updateMovie(movie:IMovie){
    console.log('Update',movie);
  }
}
