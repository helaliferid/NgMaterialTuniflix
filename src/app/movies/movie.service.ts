import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from './movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient){}

  getAllMovies():Observable<any>{
     return this.http.get(`${environment.BASE_API_URI}/movies/featured`) as Observable<IMovie[]>
  }

  addMovie(movie:IMovie):Observable<IMovie>{
      return this.http.post(`${environment.BASE_API_URI}/movies`,movie) as Observable<IMovie>
  }


  removeMovie(movie:IMovie): Observable<any>{
     return this.http.delete(`${environment.BASE_API_URI}/movies/${movie.id}`)
  }

  updateMovie(movie:IMovie):Observable<any>{
    return this.http.put(`${environment.BASE_API_URI}/movies/${movie.id}`,movie)
  }
}
