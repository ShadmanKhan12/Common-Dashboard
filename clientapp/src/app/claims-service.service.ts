import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { Claim } from './DataModels/ClaimModel';

@Injectable({
  providedIn: 'root'
})
export class ClaimsServiceService {
  public baseUrl: string = 'https://localhost:5001/api';
  constructor(private http : HttpClient) { }
  
  requestClaim(userClaim : Claim):Observable<any>{
    const url = this.baseUrl+'/claims';
    return this.http.post(url,userClaim);
  }

  getAllReuests():Observable<Claim[]>{
    const url = this.baseUrl +'/claims';
    return this.http.get<Claim[]>(url);
  }

  approveClaim(claimData: Claim):Observable<any>{
    const url = this.baseUrl+'/claims';
    return this.http.put(url,claimData);
  }

  rejectClaim(id:any):Observable<any>{
    const url = this.baseUrl+'/claims/'+id;
    return this.http.delete(url);
  }
}


