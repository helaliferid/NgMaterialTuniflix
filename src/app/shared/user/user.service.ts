import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user:IUser):Observable<any>{
    return {} as Observable<any>
  }

  authenticateUser(email:string,password:string):any{
    return []
  }
}
