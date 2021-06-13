import { Component, OnInit } from '@angular/core';
import { ClaimsServiceService } from '../claims-service.service';
import { Claim } from '../DataModels/ClaimModel';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
claimData : Claim = new Claim();
  constructor(private claimService: ClaimsServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.claimService.requestClaim(this.claimData).subscribe(response=>{
      
    })
  }

}
