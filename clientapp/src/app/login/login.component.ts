import { Component, OnInit } from '@angular/core';
import { User } from '../DataModels/UserModel';
import { FormControl } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userData: User = new User();
  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userAuthService.loginUser(this.userData).subscribe(response=>{
      console.log(response);
    })
  }

}
