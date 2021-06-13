import { Component, OnInit } from '@angular/core';
import { User } from '../DataModels/UserModel';
import { FormControl } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userData: User = new User();
  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userAuthService.loginUser(this.userData).subscribe(response=>{
      this.removeTokens();
      if(response.accessToken){
        localStorage.setItem('AuthToken',response.accessToken)
        localStorage.setItem('Role',response.role)
      }
      if(response.userName == "user"){
        this.router.navigate(['user-dashboard']);
        console.log('ssss')
      }
      else{
        this.router.navigate(['finance-dashboard']);
      }
      
    })
  }
  removeTokens(){
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('Role');
  }

}
