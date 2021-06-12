import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient) { }

  getAll(user: User):Observable<any>{
    const url = "https://localhost:5001/Users/Authenticate";
    return this.httpClient.post(url,user);
  }
}

export class User{
  userName: string;
  password: string;
}