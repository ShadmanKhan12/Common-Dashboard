import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './DataModels/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<User>{
    const url = "https://localhost:5001/Users/Authenticate";
    return this.httpClient.post<User>(url,user);
  }
  getToken(){
   var item =  localStorage.getItem('AuthToken');
   console.log(item);
  }
  
}
