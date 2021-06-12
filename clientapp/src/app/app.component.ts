import { Component, OnInit } from '@angular/core';
import { User, UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private autService : UserAuthService){}
 user : User = {
   userName : "user",
   password : "1234"
 }
  ngOnInit(){
    
    this.autService.getAll(this.user).subscribe(data=>{
      console.log('data')
      localStorage.setItem('token',data.userName+data.password+data.role);
      var test = localStorage.getItem('token');
      console.log(data);
      
    })
  }
}
