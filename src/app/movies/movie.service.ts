import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient){}

  getAllMovies():Observable<any>{
     return this.http.get('http://localhost:3000/movies/featured') as Observable<IMovie[]>
  }

  addMovie(movie:IMovie):Observable<IMovie>{
      return this.http.post('http://localhost:3000/movies',movie) as Observable<IMovie>
  }


  removeMovie(movie:IMovie): Observable<any>{
     return this.http.delete(`http://localhost:3000/movies/${movie.id}`)
  }

  updateMovie(movie:IMovie):Observable<any>{
    return this.http.put(`http://localhost:3000/movies/${movie.id}`,movie)
  }
}
